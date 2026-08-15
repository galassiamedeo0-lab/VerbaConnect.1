import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Translation Services — Verba Connect",
};

export default function TranslationPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-coppersoft">
            Translation
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
            Business correspondence and documents, translated to be read the
            way you meant them.
          </h1>
          <p className="mt-5 max-w-lg text-paper/75">
            For individuals and businesses. Ongoing volume is handled through{" "}
            <Link href="/membership" className="text-coppersoft underline underline-offset-4 hover:text-paper">
              membership
            </Link>{" "}
            — for a single document or a one-off job, request a quote below.
          </p>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
          One-off request
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-navy">
          Request a quote
        </h2>
        <p className="mt-4 text-ink/70">
          Tell me what needs translating and I'll come back with a fixed
          price and a realistic turnaround — no obligation.
        </p>
        <div className="mt-10">
          <LeadForm
            formType="translation-quote"
            detailsLabel="What needs translating?"
            detailsPlaceholder="Document type, approximate length, deadline, and any formatting or certification requirements."
            showLanguages
          />
        </div>
      </section>
    </>
  );
}
