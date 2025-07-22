import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/games", label: "Games" },
];

export function Navbar() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  // For SSR/Next.js, usePathname hook is preferred
  // Uncomment below if using client components
  // const pathname = usePathname();
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-20 flex gap-6 px-8 py-3 rounded-2xl shadow-lg backdrop-blur-lg bg-white/30 border border-white/40">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`font-semibold transition px-2 py-1 rounded-lg ${pathname === item.href ? "bg-blue-100 text-blue-700 shadow" : "text-gray-700 hover:text-blue-700"}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
