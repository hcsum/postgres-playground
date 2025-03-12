/*
  Warnings:

  - You are about to drop the column `totalTickets` on the `Event` table. All the data in the column will be lost.
  - Added the required column `limit` to the `TicketClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "totalTickets";

-- AlterTable
ALTER TABLE "TicketClass" ADD COLUMN     "limit" INTEGER NOT NULL;
