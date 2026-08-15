"use client";

import { useState } from "react";
import type { PlanId } from "@/lib/stripe";

type Props = {
  planId: PlanId;
  name: string;
  priceLabel: string;
  interval: "month" | "year";
  features: string[];
  featured?: boolean;
};

export default function PricingCard({
  planId,
  name,
  priceLabel,
  interval,
  features,
  featured = false,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout isn't available yet.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div
      className={`flex flex-col rounded-sm border p-10 ${
        featured ? "border-copper bg-navy text-paper" : "hairline bg-paper text-ink"
      }`}
    >
      {featured && (
        <span className="mb-4 self-start rounded-sm bg-copper px-2 py-1 font-mono text-[11px] uppercase tracking-widest2 text-paper">
          Full engagement
        </span>
      )}
      <h3 className="font-display text-2xl font-medium">{name}</h3>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl">{priceLabel}</span>
        <span className={`font-mono text-xs ${featured ? "text-paper/60" : "text-ink/50"}`}>
          / {interval}
        </span>
      </div>

      <ul className="mt-8 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <span
              aria-hidden="true"
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                featured ? "bg-coppersoft" : "bg-copper"
              }`}
            />
            <span className={featured ? "text-paper/85" : "text-ink/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        aria-busy={loading}
        className={`mt-10 rounded-sm px-5 py-3 font-mono text-[13px] uppercase tracking-widest2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 ${
          featured
            ? "bg-copper text-paper hover:bg-coppersoft"
            : "bg-navy text-paper hover:bg-copper"
        }`}
      >
        {loading ? "Redirecting…" : `Start ${interval}ly membership`}
      </button>
      {error && (
        <p role="alert" className="mt-3 text-xs text-copper">
          {error}
        </p>
      )}
    </div>
  );
}
