import { purchaseTicket, purchaseTicketTransaction } from "./handlers.js";

async function main() {
  await Promise.all([
    purchaseTicket({ userId: 1, ticketClassId: 1 }).catch(console.error),
    purchaseTicket({ userId: 2, ticketClassId: 1 }).catch(console.error),
    purchaseTicket({ userId: 3, ticketClassId: 1 }).catch(console.error),
    purchaseTicket({ userId: 4, ticketClassId: 1 }).catch(console.error),
  ]);
}

main();
