import { NextRequest, NextResponse } from "next/server";
import { stripe, MEMBERSHIP_PLANS, PlanId } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Payments are not configured yet. Add STRIPE_SECRET_KEY to your environment." },
      { status: 500 }
    );
  }

  const { planId } = (await req.json()) as { planId: PlanId };
  const plan = MEMBERSHIP_PLANS[planId];

  if (!plan) {
    return NextResponse.json({ error: "Unknown plan." }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "https://verbaconnect.com";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: plan.priceCents,
          recurring: { interval: plan.interval },
          product_data: {
            name: plan.name,
            description: plan.description,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/thank-you?type=payment`,
    cancel_url: `${origin}/membership`,
  });

  return NextResponse.json({ url: session.url });
}
