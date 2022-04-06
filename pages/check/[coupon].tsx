import { useRouter } from "next/router";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const YourCoupon = ({ paymentIntent }) => {
  console.log(paymentIntent);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });

  if (!paymentIntent) {
    return (
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-8">
        <div className="max-w-xl p-10 py-16 mx-auto mt-5 rounded-md shadow-xl bg-gray-50">
          <h1>This Coupon was not found...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-8">
      <div className="max-w-xl p-10 py-16 mx-auto mt-5 rounded-md shadow-xl bg-gray-50">
        <h1 className="text-2xl font-bold text-center">Your Q-Pong</h1>
        <p className="mt-2 text-sm text-center text-gray-500">
          Coupon ID # {paymentIntent?.id}
        </p>
        <p className="mt-2 text-xs uppercase">
          Coupons status: {paymentIntent?.status}
        </p>
        <p className="mt-3"></p>

        <div className="mt-5 mb-10">
          <div className="flex justify-between w-full text-xl font-bold uppercase">
            <h1>Coupons value is</h1>
            <p> {formatter.format(paymentIntent?.amount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourCoupon;

export async function getServerSideProps(context) {
  const { coupon } = context.query;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(coupon);
    return {
      props: { paymentIntent }, // will be passed to the page component as props
    };
  } catch (error) {
    return { props: { paymentIntent: null } };
  }
}
