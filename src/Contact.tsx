const links = [
  {
    label: "GitHub",
    value: "github.com/niranjan-bhat",
    href: "https://github.com/niranjan-bhat",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "niranjan.sirsi99@gmail.com",
    href: "mailto:niranjan.sirsi99@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-xl">
          <p
            className="mb-6 text-sm tracking-[0.14em]"
            style={{ color: "var(--text)" }}
          >
            CONTACT
          </p>

          <h2
            className="mb-5 text-3xl font-semibold leading-[1.1] md:text-5xl"
            style={{ color: "var(--text-h)" }}
          >
            Let's connect.
          </h2>

          <p
            className="mb-12 text-lg leading-8"
            style={{ color: "var(--text)" }}
          >
            Open to new opportunities and interesting problems.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {links.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={label === "GitHub" ? "_blank" : undefined}
                rel={label === "GitHub" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border px-6 py-4 transition-opacity hover:opacity-70"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--border) 85%, transparent)",
                  background:
                    "color-mix(in srgb, var(--bg) 97%, transparent)",
                  textDecoration: "none",
                  color: "var(--text-h)",
                }}
              >
                <span style={{ color: "var(--text)" }}>{icon}</span>
                <div className="min-w-0">
                  <p className="text-xs mb-0.5" style={{ color: "var(--text)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium truncate" style={{ color: "var(--text-h)" }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
