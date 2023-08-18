import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function GET(context: any) {
  try {
    const customerID = context.params.customerID;
    if (!customerID) {
      throw new Error("No session ID specificed");
    }

    const checkoutSession = await stripe.checkout.sessions.list({
      customer: customerID,
    });

    return NextResponse.json(checkoutSession);
  } catch (e: any) {
    throw new Error(e);
  }
}
