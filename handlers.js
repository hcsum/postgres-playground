import prisma from "./prisma/index.js";

export const purchaseTicket = async ({
  userId,
  ticketClassId,
  slow = true,
}) => {
  const ticketClass = await prisma.ticketClass.findUniqueOrThrow({
    where: {
      id: ticketClassId,
    },
  });

  const soldTickets = await prisma.ticket.count({
    where: {
      ticketClassId,
    },
  });

  // Introduce an artificial delay
  await new Promise((resolve) => setTimeout(resolve, slow ? 100 : 0));

  if (soldTickets >= ticketClass.limit) {
    throw new Error(
      `${ticketClass.title} is sold out, user ${userId} cannot purchase ticket`,
    );
  }

  const ticket = await prisma.ticket.create({
    data: {
      userId,
      ticketClassId,
    },
  });

  return ticket;
};

export const purchaseTicketTransaction = async ({
  userId,
  ticketClassId,
  slow = true,
}) => {
  try {
    const ticket = await prisma.$transaction(
      async (tx) => {
        const ticketClass = await tx.ticketClass.findUniqueOrThrow({
          where: {
            id: ticketClassId,
          },
        });

        const soldTickets = await tx.ticket.count({
          where: {
            ticketClassId,
          },
        });

        // Introduce an artificial delay
        await new Promise((resolve) => setTimeout(resolve, slow ? 100 : 0));

        if (soldTickets >= ticketClass.limit) {
          throw new Error(
            `${ticketClass.title} is sold out, user ${userId} cannot purchase ticket`,
          );
        }

        const ticket = await tx.ticket.create({
          data: {
            userId,
            ticketClassId,
          },
        });

        return ticket;
      },
      { isolationLevel: "Serializable" },
    );
    return ticket;
  } catch (error) {
    throw new Error(
      `user ${userId} cannot purchase ticket, reason: ${error.message}`,
    );
  }
};
