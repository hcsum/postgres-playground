import { purchaseTicket, purchaseTicketTransaction } from "./handlers.js";

async function main() {
  await Promise.all([
    purchaseTicketTransaction({ userId: 1, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 1, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 1, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 1, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 2, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 2, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 2, ticketClassId: 1 }),
    purchaseTicketTransaction({ userId: 2, ticketClassId: 1 }),
  ]);
}

main();
