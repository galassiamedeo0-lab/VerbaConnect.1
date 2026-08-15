import PricingCard from "@/components/PricingCard";
import { MEMBERSHIP_PLANS } from "@/lib/stripe";

export const metadata = {
  title: "Membership — Verba Connect",
  description:
    "A dedicated retainer for businesses that need ongoing introductions and translation handled by one point of contact, not a queue.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-coppersoft">
            Membership
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
            A dedicated retainer, not a ticket queue.
          </h1>
          <p className="mt-5 max-w-lg text-paper/75">
            For businesses that need introductions and translation handled
            continuously — one person, personally accountable for both, on
            call rather than booked per job.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div
          className="grid gap-8 md:grid-cols-2"
          role="list"
          aria-label="Membership plans"
        >
          <div role="listitem">
            <PricingCard
              planId="monthly"
              name={MEMBERSHIP_PLANS.monthly.name.replace("Verba Connect Membership — ", "")}
              priceLabel={MEMBERSHIP_PLANS.monthly.priceLabel}
              interval={MEMBERSHIP_PLANS.monthly.interval}
              features={MEMBERSHIP_PLANS.monthly.features}
            />
          </div>
          <div role="listitem">
            <PricingCard
              planId="annual"
              name={MEMBERSHIP_PLANS.annual.name.replace("Verba Connect Membership — ", "")}
              priceLabel={MEMBERSHIP_PLANS.annual.priceLabel}
              interval={MEMBERSHIP_PLANS.annual.interval}
              features={MEMBERSHIP_PLANS.annual.features}
              featured
            />
          </div>
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-widest2 text-ink/40">
          Prices are a starting point for the build — adjust them in{" "}
          <code>lib/stripe.ts</code> to whatever you actually want to charge
          before launch.
        </p>
      </section>

      <section className="bg-paperdim">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-2xl font-medium text-navy">
            Not ready for a retainer?
          </h2>
          <p className="mt-4 text-ink/70">
            One-off translation and introduction requests are still handled
            case by case — head to{" "}
            <a href="/translation" className="text-copper underline underline-offset-4 hover:text-navy">
              Translation
            </a>{" "}
            or{" "}
            <a href="/introductions" className="text-copper underline underline-offset-4 hover:text-navy">
              Introductions
            </a>{" "}
            to request a quote without committing to a membership.
          </p>
        </div>
      </section>
    </>
  );
}
