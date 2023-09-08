import { NextRequest, NextResponse } from "next/server";

import getOrdersByUserID from "@/app/firebase/order/getOrdersByUserID";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function GET(req: NextRequest, context: any) {
  try {
    const userID = context.params.userID;
    if (!userID) {
      throw new Error("No session ID specificed");
    }

    const userStripeSessions = await getOrdersByUserID({ userID: userID });

    const orders: any = [];

    for (const session of userStripeSessions) {
      let sessionData = await stripe.checkout.sessions.listLineItems(
        session.order
      );

      let order = {
        data: sessionData.data,
        orderTimestamp: session.createdAt.toDate().toDateString(),
        orderID: session.order,
      };
      orders.push(order);
    }

    return NextResponse.json(orders);
  } catch (e: any) {
    throw new Error(e);
  }
}
