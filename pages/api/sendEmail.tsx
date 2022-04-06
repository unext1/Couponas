import { sendMail } from "../../lib/sendMail";

export default async (req, res) => {
  const { email, amount, subject, body, url } = req.body;

  return sendMail({ email, amount, subject, body, url }).then(() =>
    res.status(200).json({ sent: true })
  );
};
