import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Business Introductions — Verba Connect",
};

export default function IntroductionsPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-coppersoft">
            Introductions
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
            The right conversation, started by someone who's done the
            groundwork.
          </h1>
          <p className="mt-5 max-w-lg text-paper/75">
            I connect small and medium businesses with potential clients and
            partners, and help the first conversation go somewhere — through
            direct networking, referrals, and targeted outreach.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">
              What this actually involves
            </h2>
            <ul className="mt-6 space-y-5 text-ink/80">
              <li className="border-l-2 border-teal pl-4">
                Understanding what kind of partner, client, or contact you're
                trying to reach, and why.
              </li>
              <li className="border-l-2 border-teal pl-4">
                Identifying and approaching relevant companies through
                networking, referrals, and direct contact.
              </li>
              <li className="border-l-2 border-teal pl-4">
                Facilitating the first conversation and helping the
                relationship get off the ground.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">
              Good fit if you are
            </h2>
            <ul className="mt-6 space-y-5 text-ink/80">
              <li className="border-l-2 border-copper pl-4">
                A small or medium business looking to establish new
                commercial contacts.
              </li>
              <li className="border-l-2 border-copper pl-4">
                Clear on the type of partner or client you want to reach,
                even if you don't have names yet.
              </li>
              <li className="border-l-2 border-copper pl-4">
                Open to a short scoping conversation before anything is
                agreed or charged.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paperdim">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
            Get started
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy">
            Request an introduction
          </h2>
          <p className="mt-4 text-ink/70">
            Describe who you're trying to reach and what for. I'll follow up
            to scope it — pricing depends on the work involved, so nothing is
            charged until we agree on that together.
          </p>
          <div className="mt-10">
            <LeadForm
              formType="introduction"
              detailsLabel="Who are you trying to reach, and why?"
              detailsPlaceholder="e.g. Looking to connect with distributors in the hospitality sector across Northern Italy."
            />
          </div>
        </div>
      </section>
    </>
  );
}
