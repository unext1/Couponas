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
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });
  let couponsValue = formatter.format(amount);

  if (couponCode) {
    const qrCode = await QRcode.toDataURL(
      `https://qpon.vercel.app/check/${couponCode}`
    );
    attachments.push({ path: qrCode });

    couponsValue = `${formatter.format(amount / 100)}`;
  }

  return transporter.sendMail({
    from: process.env.SEND_EMAIL_USER,
    to: email,
    subject: `${subject}`,
    html: `<h1><strong>You have recieved a Q-Pong</strong></h1>
    Coupons value: <strong>${couponCode}</strong> <br/> <br/>
    Invoice url: ${url ? url : "Invoice has been paid."} <br/> <br/>
    Coupons url: ${
      couponCode
        ? `https://qpon.vercel.app/check/${couponCode}`
        : "Coupon will be recieved after paying the invoice."
    } <br/> <br/> `,
    attachments,
  });
};
