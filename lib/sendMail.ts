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
    const qrCode = await QRcode.toDataURL(couponCode);
    attachments.push({ path: qrCode });
  }
  return transporter.sendMail({
    from: process.env.SEND_EMAIL_USER,
    to: email,
    subject: `${subject}`,
    text: `Gauta iš: ${email}, ${body}`,
    html: `Gauta iš: ${email}, <br/> <br/> ${url}, ${
      couponCode ? couponCode : null
    } `,
    attachments,
  });
};
