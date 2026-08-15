import Link from "next/link";
import PhraseTicker from "@/components/PhraseTicker";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-paper">
        {/* connection graph, decorative */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 opacity-40"
          viewBox="0 0 400 500"
          fill="none"
        >
          <g stroke="#5C8880" strokeWidth="1">
            <line x1="40" y1="80" x2="180" y2="140" />
            <line x1="180" y1="140" x2="320" y2="60" />
            <line x1="180" y1="140" x2="150" y2="300" />
            <line x1="150" y1="300" x2="300" y2="360" />
            <line x1="150" y1="300" x2="60" y2="420" />
            <line x1="300" y1="360" x2="360" y2="470" />
          </g>
          <g fill="#B5652D">
            <circle cx="40" cy="80" r="4" />
            <circle cx="320" cy="60" r="3" />
            <circle cx="60" cy="420" r="3" />
            <circle cx="360" cy="470" r="4" />
          </g>
          <g fill="#F6F5F1">
            <circle cx="180" cy="140" r="5" />
            <circle cx="150" cy="300" r="5" />
            <circle cx="300" cy="360" r="4" />
          </g>
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-widest2 text-coppersoft">
            Business Introductions &amp; Translation
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.1] md:text-6xl">
            Two businesses can't work together{" "}
            <span className="italic text-coppersoft">until they understand each other.</span>
          </h1>
          <p className="mt-6 max-w-lg text-paper/75">
            I connect small and medium businesses with the right commercial
            contacts, and make sure nothing gets lost in translation once
            they're talking — correspondence, documents, and everyday
            communication, handled clearly.
          </p>

          <div className="mt-10">
            <PhraseTicker />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/introductions"
              className="rounded-sm bg-copper px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:bg-coppersoft"
            >
              Request an introduction
            </Link>
            <Link
              href="/translation#quote"
              className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:border-coppersoft hover:text-coppersoft"
            >
              Get a translation quote
            </Link>
          </div>
        </div>
      </section>

      {/* TWO SERVICES, LEDGER STYLE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
          What I do
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-navy md:text-4xl">
          One point of contact, two disciplines.
        </h2>

        <div className="mt-12 divide-y hairline border-y hairline">
          <div className="ledger-row grid gap-4 py-8 md:grid-cols-[160px_1fr_auto] md:items-center">
            <span className="font-mono text-sm uppercase tracking-widest2 text-teal">
              Introductions
            </span>
            <p className="max-w-xl text-ink/80">
              I connect companies with potential clients or partners, help
              develop commercial relationships, and facilitate the first
              conversations that turn into working relationships.
            </p>
            <Link
              href="/introductions"
              className="font-mono text-sm text-copper underline underline-offset-4 hover:text-navy"
            >
              Details →
            </Link>
          </div>
          <div className="ledger-row grid gap-4 py-8 md:grid-cols-[160px_1fr_auto] md:items-center">
            <span className="font-mono text-sm uppercase tracking-widest2 text-teal">
              Translation
            </span>
            <p className="max-w-xl text-ink/80">
              Business correspondence, documents, and general commercial
              communication, translated clearly for individuals and
              businesses — with fixed-price packages or a custom quote.
            </p>
            <Link
              href="/translation"
              className="font-mono text-sm text-copper underline underline-offset-4 hover:text-navy"
            >
              Details →
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TEASER */}
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-coppersoft">
            Membership
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-medium md:text-4xl">
            For businesses that need this handled continuously, not once.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-paper/70">
            A dedicated retainer covering ongoing introductions and
            unlimited translation — one accountable point of contact, on
            call.
          </p>
          <Link
            href="/membership"
            className="mt-8 inline-block rounded-sm bg-copper px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:bg-coppersoft"
          >
            View membership
          </Link>
        </div>
      </section>

      {/* WHY / HOW */}
      <section className="bg-paperdim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
            How it starts
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-navy md:text-4xl">
            A short conversation before any commitment.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="border-l-2 border-copper pl-5">
              <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Step one</p>
              <p className="mt-2 font-display text-lg text-navy">Tell me what you need</p>
              <p className="mt-2 text-sm text-ink/70">
                A translation job, or an introduction to the kind of company
                or partner you're trying to reach.
              </p>
            </div>
            <div className="border-l-2 border-copper pl-5">
              <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Step two</p>
              <p className="mt-2 font-display text-lg text-navy">I scope it honestly</p>
              <p className="mt-2 text-sm text-ink/70">
                A fixed quote for translation, or a clear read on whether I
                can realistically make the introduction you're after.
              </p>
            </div>
            <div className="border-l-2 border-copper pl-5">
              <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Step three</p>
              <p className="mt-2 font-display text-lg text-navy">We confirm, then work begins</p>
              <p className="mt-2 text-sm text-ink/70">
                Nothing starts until scope and price are agreed in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mx-auto max-w-lg font-display text-3xl font-medium text-navy md:text-4xl">
          Newly established, working on referral and reputation from day one.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink/70">
          I'm building this business one clear, well-handled engagement at a
          time — that starts with your enquiry.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/introductions"
            className="rounded-sm bg-navy px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:bg-copper"
          >
            Start an introduction request
          </Link>
          <Link
            href="/translation#quote"
            className="rounded-sm border border-navy/30 px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-navy transition-colors hover:border-copper hover:text-copper"
          >
            Request a translation quote
          </Link>
        </div>
      </section>
    </>
  );
}
