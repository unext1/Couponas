import { sendMail } from "./../../lib/sendMail";
import Stripe from "stripe";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      return handleEvent(event).then(() => res.json({ received: true }));
    } catch (err) {
      console.log(err);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;

const handleEvent = async (event: Stripe.Event) => {
  if (event.type == "checkout.session.completed") {
    const paymentIntent = event.data.object as Stripe.Checkout.Session;

    const {
      customer_details: { email },
      amount_total,
      payment_intent,
      status,
    } = paymentIntent;

    if (status === "complete") {
      return sendMail({
        amount: amount_total,
        email: email,
        subject: "Payment Successful",
        couponCode: payment_intent as string,
      });
    }
  }
  return true;
};
