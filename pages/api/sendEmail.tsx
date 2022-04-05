import { sendMail } from "../../lib/sendMail";

export default async (req, res) => {
  const { email, amount, subject, body, url } = req.body;
  sendMail({ email, amount, subject, body, url });

  res.status(200).json({ sent: true });
};
