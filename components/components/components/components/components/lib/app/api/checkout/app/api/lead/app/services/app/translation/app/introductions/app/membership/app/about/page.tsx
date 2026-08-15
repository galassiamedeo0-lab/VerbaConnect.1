export const metadata = {
  title: "About — Verba Connect",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-navy md:text-5xl">
        A newly established, sole-trader practice — built one engagement at a
        time.
      </h1>
      <div className="mt-8 space-y-5 text-ink/80">
        <p>
          Verba Connect is a sole trader business offering two related
          services: business introductions and commercial networking, and
          translation for business correspondence, documents, and everyday
          commercial communication.
        </p>
        <p>
          The two are more connected than they look — a good introduction
          often depends on clear communication, and clear communication is
          exactly what gets lost when two sides don't share a language.
        </p>
        <p>
          The business is at an early stage: new clients, new relationships,
          and every engagement handled personally rather than handed off.
          That means direct communication, realistic quotes, and nothing
          agreed without a conversation first.
        </p>
      </div>
    </section>
  );
}
