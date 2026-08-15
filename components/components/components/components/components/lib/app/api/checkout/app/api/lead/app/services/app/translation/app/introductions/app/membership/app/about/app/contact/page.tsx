import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact — Verba Connect",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-navy md:text-5xl">
        Not sure which service you need? Start here.
      </h1>
      <p className="mt-5 text-ink/70">
        Send a short note and I'll point you to the right next step —
        introduction, translation, or both.
      </p>
      <div className="mt-10">
        <LeadForm
          formType="introduction"
          detailsLabel="What's on your mind?"
          detailsPlaceholder="A quick description of what you're looking for."
        />
      </div>
    </section>
  );
}
