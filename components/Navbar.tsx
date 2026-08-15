import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/translation", label: "Translation" },
  { href: "/introductions", label: "Introductions" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b hairline bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-navy">
          Verba <span className="text-copper italic">Connect</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-widest2 text-ink/70 transition-colors hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/membership"
          className="hidden rounded-sm bg-navy px-4 py-2 font-mono text-[13px] uppercase tracking-widest2 text-paper transition-colors hover:bg-copper md:inline-block"
        >
          Membership
        </Link>
      </div>
      {/* Mobile nav — visible below md, since the desktop nav is hidden there */}
      <nav aria-label="Primary, mobile" className="flex flex-wrap gap-x-5 gap-y-2 px-6 pb-4 md:hidden">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-mono text-[12px] uppercase tracking-widest2 text-ink/70 hover:text-copper"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
