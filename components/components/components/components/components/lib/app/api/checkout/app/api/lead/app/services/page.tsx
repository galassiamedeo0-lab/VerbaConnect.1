import Link from "next/link";

export const metadata = {
  title: "Services — Verba Connect",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
        Services
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium text-navy md:text-5xl">
        Two disciplines, run by one person, for small and medium businesses.
      </h1>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm border hairline md:grid-cols-2">
        <div className="bg-paper p-10">
          <p className="font-mono text-xs uppercase tracking-widest2 text-teal">01 — Introductions</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy">
            Business Introduction Services
          </h2>
          <p className="mt-4 text-ink/70">
            Connecting companies with potential clients or business partners,
            developing commercial relationships, and facilitating
            communication between parties — sourced through direct
            networking, referrals, and online outreach.
          </p>
          <Link
            href="/introductions"
            className="mt-6 inline-block font-mono text-sm text-copper underline underline-offset-4 hover:text-navy"
          >
            Request an introduction →
          </Link>
        </div>
        <div className="bg-paperdim p-10">
          <p className="font-mono text-xs uppercase tracking-widest2 text-teal">02 — Translation</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy">
            Translation Services
          </h2>
          <p className="mt-4 text-ink/70">
            Business correspondence, documents, and general commercial
            communication, translated for individuals and businesses — fixed
            packages for standard jobs, custom quotes for everything else.
          </p>
          <Link
            href="/translation"
            className="mt-6 inline-block font-mono text-sm text-copper underline underline-offset-4 hover:text-navy"
          >
            See packages & get a quote →
          </Link>
        </div>
      </div>

      <div className="mt-6 rounded-sm border hairline bg-paperdim p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Ongoing need?</p>
        <h2 className="mt-3 font-display text-2xl font-medium text-navy">
          Membership covers both, continuously.
        </h2>
        <Link
          href="/membership"
          className="mt-5 inline-block font-mono text-sm text-copper underline underline-offset-4 hover:text-navy"
        >
          View membership →
        </Link>
      </div>
    </section>
  );
}
