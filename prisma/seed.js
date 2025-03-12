import prisma from "./index.js";

const seed = async () => {
  const event = await prisma.event.create({
    data: {
      title: "My Event",
    },
  });

  const ticketClass = await prisma.ticketClass.create({
    data: {
      eventId: event.id,
      title: "One-day Pass",
      limit: 2,
    },
  });
  
  const user = await prisma.user.create({
    data: {
      name: "John",
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      name: "Sam",
    },
  });
  
  await prisma.ticket.create({
    data: {
      userId: user.id,
      ticketClassId: ticketClass.id,
    },
  });
  
};

seed();
