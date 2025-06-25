
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendBookingEmail = async (to: string, name: string, date: string) => {
  await transporter.sendMail({
    from: `"Booking System" <${process.env.EMAIL_USER}>`,
    to,
    subject: "ยืนยันการจองนัด",
    html: `<p>สวัสดีคุณ ${name},</p><p>คุณได้จองนัดในวันที่ ${date}</p>`,
  });
};
