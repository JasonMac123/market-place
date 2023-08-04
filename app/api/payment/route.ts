import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { cart } = body;

    if (!cart) {
      return NextResponse.error();
    }

    const newCart = cart.map((item) => {
      return { price: item.stripeID, quantity: item.orderQuantity };
    });

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "donate",
      payment_method_types: ["card"],
      line_items: newCart,
      success_url: "localhost:3000",
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
  } catch (e: any) {
    throw new Error(e);
  }
}
