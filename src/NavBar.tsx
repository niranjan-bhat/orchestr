import { useEffect, useState } from "react";

interface NavBarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar({ dark, onToggleTheme }: NavBarProps) {
  const [active, setActive] = useState(() => window.location.hash || "");

  // Scroll to hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Sync active section → URL hash as user scrolls
  useEffect(() => {
    const OFFSET = 112; // must exceed scroll-mt-24 (6rem @ 18px = 108px)

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = NAV_LINKS.map(
        ({ href }) => document.querySelector(href) as HTMLElement | null,
      ).filter(Boolean) as HTMLElement[];

      // Near bottom of page — activate last section
      const nearBottom =
        scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 40;
      if (nearBottom && sections.length) {
        const last = sections[sections.length - 1];
        const hash = `#${last.id}`;
        setActive(hash);
        history.replaceState(null, "", hash);
        return;
      }

      let current = "";
      for (const section of sections) {
        if (scrollY >= section.offsetTop - OFFSET) {
          current = `#${section.id}`;
        }
      }

      setActive(current);
      history.replaceState(null, "", current || window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      data-no-interact
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "color-mix(in srgb, var(--bg) 78%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom:
          "1px solid color-mix(in srgb, var(--border) 55%, transparent)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-6 flex items-center justify-between">
        {/* LEFT — Brand + Name */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            Orchestr
          </span>
          <span className="text-xs" style={{ color: "var(--border)" }}>
            |
          </span>
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "var(--text-h)" }}
          >
            Niranjan Bhat
          </span>
        </a>

        {/* RIGHT — Nav + theme toggle */}
        <div className="flex items-center gap-8 text-sm">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                className="transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text)",
                  opacity: isActive ? 1 : 0.7,
                  fontWeight: isActive ? 500 : 400,
                  borderBottom: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {label}
              </a>
            );
          })}

          <button
            onClick={onToggleTheme}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg)",
              color: "var(--text-h)",
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
}
