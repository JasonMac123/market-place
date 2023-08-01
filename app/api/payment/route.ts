import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(proccess.env.STRIPE_SECRET_KEY);
}
