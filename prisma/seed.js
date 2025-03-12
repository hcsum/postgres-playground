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

  await Promise.all(
    ["John", "Sam", "Bob", "Jane"].map((name) =>
      prisma.user.create({
        data: {
          name,
        },
      }),
    ),
  );
};

seed();
