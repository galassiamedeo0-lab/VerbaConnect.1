"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  formType: "translation-quote" | "introduction";
  detailsLabel: string;
  detailsPlaceholder: string;
  showLanguages?: boolean;
};

export default function LeadForm({
  formType,
  detailsLabel,
  detailsPlaceholder,
  showLanguages = false,
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      formType,
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      details: String(form.get("details") || ""),
      sourceLanguage: String(form.get("sourceLanguage") || ""),
      targetLanguage: String(form.get("targetLanguage") || ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      router.push(`/thank-you?type=${formType}`);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full rounded-sm border hairline bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-copper focus:outline-none";
  const labelClass = "font-mono text-xs uppercase tracking-widest2 text-teal";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor="company">Company (optional)</label>
        <input id="company" name="company" className={inputClass} placeholder="Company or organization" />
      </div>

      {showLanguages && (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelClass} htmlFor="sourceLanguage">Translating from</label>
            <input id="sourceLanguage" name="sourceLanguage" className={inputClass} placeholder="e.g. Italian" />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="targetLanguage">Translating to</label>
            <input id="targetLanguage" name="targetLanguage" className={inputClass} placeholder="e.g. English" />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className={labelClass} htmlFor="details">{detailsLabel}</label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          className={inputClass}
          placeholder={detailsPlaceholder}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-copper">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="rounded-sm bg-navy px-6 py-3 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-copper disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
      <p className="sr-only" role="status" aria-live="polite">
        {status === "submitting" ? "Sending your request." : ""}
      </p>
    </form>
  );
}
