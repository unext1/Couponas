import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const price = await stripe.prices.create({
        unit_amount: req.body.amount,
        currency: "sek",
        product: "prod_LSCO9adM5O8vAw",
      });

      const session = await stripe.paymentLinks.create({
        line_items: [{ price: price.id, quantity: 1 }],
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
