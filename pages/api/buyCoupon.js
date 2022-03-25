import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.paymentLinks.create({
        line_items: [{ price: "price_1H2hbBDkXI5NIi4iEQArL4YU", quantity: 2 }],
      });

      res.status(200).json(session);
      console.log("done this");
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
