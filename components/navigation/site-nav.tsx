import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/admin", label: "Admin" },
];

export function SiteNav() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        SVIET Platform
      </Link>
      <ul className="flex items-center gap-5 text-sm font-medium text-[var(--ink-700)]">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link className="transition hover:text-[var(--ink-900)]" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
