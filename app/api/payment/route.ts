import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "donate",
      payment_method_types: ["card"],
      line_items: [
        {
          name: "Chopsticks",
          amount: 10,
          quantity: 1,
          currency: "CAD",
        },
      ],
      success_url: "localhost:3000",
      cancel_url: "localhost:3000",
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
  } catch (e: any) {
    throw new Error(e);
  }
}
