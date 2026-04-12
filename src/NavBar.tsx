import { useEffect, useState } from "react"

interface NavBarProps {
  dark: boolean
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Systems",    href: "#systems"    },
  { label: "Contact",    href: "#contact"    },
]

export default function NavBar({ dark, onToggleTheme }: NavBarProps) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href) as HTMLElement | null
    ).filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      { threshold: 0.5 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      data-no-interact
      className="absolute top-0 left-0 w-full z-30 backdrop-blur-sm border-b"
      style={{
        background: "color-mix(in srgb, var(--bg) 75%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-6 flex items-center justify-between">

        {/* LEFT — Brand + Name */}
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold tracking-tight" style={{ color: "var(--accent)" }}>
            Orchestr
          </span>
          <span className="text-xs" style={{ color: "var(--border)" }}>|</span>
          <span className="text-sm font-medium tracking-wide" style={{ color: "var(--text-h)" }}>
            Niranjan Bhat
          </span>
        </div>

        {/* RIGHT — Nav + theme toggle */}
        <div className="flex items-center gap-8 text-sm">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href
            return (
              <a
                key={href}
                href={href}
                className="transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text)",
                  opacity: isActive ? 1 : 0.7,
                  fontWeight: isActive ? 500 : 400,
                  borderBottom: isActive ? "1px solid var(--accent)" : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {label}
              </a>
            )
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
  )
}
