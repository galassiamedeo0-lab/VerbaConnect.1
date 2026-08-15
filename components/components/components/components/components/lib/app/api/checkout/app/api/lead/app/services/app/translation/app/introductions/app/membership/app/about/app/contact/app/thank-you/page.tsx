import Link from "next/link";

const MESSAGES: Record<string, { title: string; body: string }> = {
  "translation-quote": {
    title: "Quote request received.",
    body: "I'll review the details and reply by email with a fixed price and turnaround — usually within one business day.",
  },
  introduction: {
    title: "Introduction request received.",
    body: "I'll follow up by email to understand the fit before anything is scoped or charged.",
  },
  payment: {
    title: "Payment confirmed.",
    body: "Thanks — you'll get a confirmation email, and I'll be in touch to collect the source material and get started.",
  },
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const info = MESSAGES[searchParams.type ?? ""] ?? {
    title: "Thank you.",
    body: "I've received your message and will be in touch shortly.",
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-28 text-center">
      <p className="font-mono text-[13px] uppercase tracking-widest2 text-copper">
        Received
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium text-navy">
        {info.title}
      </h1>
      <p className="mt-5 text-ink/70">{info.body}</p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-sm bg-navy px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:bg-copper"
      >
        Back to home
      </Link>
    </section>
  );
}
