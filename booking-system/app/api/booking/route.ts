
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendBookingEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, date, service } = body;

  const booking = await prisma.booking.create({
    data: { name, email, date: new Date(date), service },
  });

  await sendBookingEmail(email, name, date);

  return NextResponse.json({ message: "Booking created", booking });
}
