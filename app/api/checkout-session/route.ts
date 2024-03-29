import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { Item } from "@/app/types/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cart, userID } = body;

    if (!cart) {
      return NextResponse.error();
    }

    const newCart = cart.map((item: Item) => {
      return { price: item.stripeID, quantity: item.orderQuantity };
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2022-11-15",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: newCart,
      mode: "payment",
      success_url: `${process.env.URL_HOST}/order/success/{CHECKOUT_SESSION_ID}?userID=${userID.userID}`,
      cancel_url: `${process.env.URL_HOST}/cart/${userID.userID}`,
    });

    return NextResponse.json(session.url);
  } catch (e: any) {
    throw new Error(e);
  }
}
