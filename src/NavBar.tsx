import { useEffect, useRef, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

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
    const OFFSET = 112;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = NAV_LINKS.map(
        ({ href }) => document.querySelector(href) as HTMLElement | null,
      ).filter(Boolean) as HTMLElement[];

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

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <div
      ref={menuRef}
      data-no-interact
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "color-mix(in srgb, var(--bg) 78%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom:
          "1px solid color-mix(in srgb, var(--border) 55%, transparent)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-wide"
          style={{ textDecoration: "none", color: "var(--text-h)" }}
          onClick={() => setMenuOpen(false)}
        >
          Niranjan Bhat
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
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

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleTheme}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg)",
              color: "var(--text-h)",
              cursor: "pointer",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg)",
              color: "var(--text-h)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-1"
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--border) 55%, transparent)",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
                className="py-3 text-sm font-medium transition-colors duration-150"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-h)",
                  borderBottom:
                    "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
