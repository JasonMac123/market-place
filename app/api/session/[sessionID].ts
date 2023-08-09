import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionID = searchParams.get("sessionID");

    if (!sessionID) {
      throw new Error("No session ID specificed");
    }

    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionID, {
      expand: ["paymend_intent", "line_items.data.price.product"],
    });

    return NextResponse.json(checkoutSession);
  } catch (e: any) {
    throw new Error(e);
  }
}
