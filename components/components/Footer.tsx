import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">
              Verba <span className="italic text-coppersoft">Connect</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              Business introduction services and professional translation,
              from one point of contact.
            </p>
          </div>
          <div className="font-mono text-[13px] uppercase tracking-widest2 text-paper/60">
            <p className="mb-3 text-paper/40">Site</p>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-coppersoft">Services</Link></li>
              <li><Link href="/translation" className="hover:text-coppersoft">Translation</Link></li>
              <li><Link href="/introductions" className="hover:text-coppersoft">Introductions</Link></li>
              <li><Link href="/about" className="hover:text-coppersoft">About</Link></li>
            </ul>
          </div>
          <div className="font-mono text-[13px] uppercase tracking-widest2 text-paper/60">
            <p className="mb-3 text-paper/40">Contact</p>
            <ul className="space-y-2">
              <li><a href="mailto:hello@verbaconnect.com" className="hover:text-coppersoft">hello@verbaconnect.com</a></li>
              <li><Link href="/contact" className="hover:text-coppersoft">Contact form</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Verba Connect. Sole trader — all engagements confirmed in writing before work begins.</p>
          <p className="font-mono tracking-widest2">EN · IT · FR · DE · ES</p>
        </div>
      </div>
    </footer>
  );
}
