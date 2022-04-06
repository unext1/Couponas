import nodemailer from "nodemailer";
import QRcode from "qrcode";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SEND_EMAIL_USER,
    pass: process.env.SEND_EMAIL_PASSWORD,
  },
  secure: true,
});

interface SendMailProps {
  email: string;
  amount: number;
  subject?: string;
  body?: string;
  url?: string;
  couponCode?: string;
}

export const sendMail = async ({
  email,
  amount,
  subject,
  body,
  url,
  couponCode,
}: SendMailProps) => {
  const attachments = [];
  if (couponCode) {
    const qrCode = await QRcode.toDataURL(
      `https://qpon.vercel.app/app/coupon/${couponCode}`
    );
    attachments.push({ path: qrCode });
  }

  return transporter.sendMail({
    from: process.env.SEND_EMAIL_USER,
    to: email,
    subject: `${subject}`,
    html: `<h1><strong>You have recieved a Q-Pong</strong></h1> <br/> <br/> 
    Coupons value: ${amount} <br/> <br/>
    Invoice url: ${url ? url : "Invoice has been paid."} <br/> <br/>
    Coupons url: ${
      couponCode
        ? couponCode
        : "Coupon will be recieved after paying the invoice."
    } <br/> <br/> `,
    attachments,
  });
};
