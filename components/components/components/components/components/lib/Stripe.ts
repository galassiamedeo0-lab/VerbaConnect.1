import Stripe from "stripe";

// Reads STRIPE_SECRET_KEY from your environment (.env.local in dev,
// project settings in Vercel). Never hardcode the key here.
const secretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = secretKey
  ? new Stripe(secretKey, { apiVersion: "2024-06-20" })
  : null;

export type PlanId = "monthly" | "annual";

export const MEMBERSHIP_PLANS: Record<
  PlanId,
  {
    name: string;
    description: string;
    priceCents: number;
    interval: "month" | "year";
    priceLabel: string;
    features: string[];
  }
> = {
  monthly: {
    name: "Verba Connect Membership — Monthly",
    description:
      "Ongoing priority access to business introductions and translation, billed monthly.",
    priceCents: 50000, // $500.00
    interval: "month",
    priceLabel: "$500",
    features: [
      "Priority scoping on every introduction request",
      "Unlimited standard business-correspondence translation",
      "Direct line — no queue, no account manager layer",
      "Cancel or pause any month",
    ],
  },
  annual: {
    name: "Verba Connect Membership — Annual",
    description:
      "The full-year engagement: dedicated introduction sourcing, unlimited translation, and priority turnaround, billed annually.",
    priceCents: 1000000, // $10,000.00
    interval: "year",
    priceLabel: "$10,000",
    features: [
      "Everything in the monthly membership",
      "Dedicated introduction sourcing — proactive, not just on request",
      "Guaranteed 24-hour turnaround on all translation work",
      "First call on new market or partner opportunities as they surface",
      "Annual relationship review",
    ],
  },
};
