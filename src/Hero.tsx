export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background gradient wash — desktop only, fades into the right visualization */}
      <div
        className="absolute inset-y-0 left-0 hidden md:block pointer-events-none z-10"
        style={{
          width: "52%",
          background: `linear-gradient(
            to right,
            color-mix(in srgb, var(--bg) 94%, transparent) 0%,
            color-mix(in srgb, var(--bg) 78%, transparent) 45%,
            transparent 100%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1180px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="relative max-w-xl">
            <div
              className="pointer-events-none absolute -inset-x-12 -inset-y-10 rounded-[48px] blur-3xl"
              style={{
                background: `radial-gradient(
                  circle at 30% 40%,
                  color-mix(in srgb, var(--text-h) 10%, transparent),
                  transparent 65%
                )`,
              }}
            />

            <div className="relative">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                FULL STACK DEVELOPER · 10 YEARS EXPERIENCE
              </p>

              <h1
                className="heading-gradient mb-6 text-4xl md:text-[56px] font-semibold leading-[1.1]"
              >
                Engineering systems that move the real world.
              </h1>

              <p
                className="mb-6 max-w-[560px] text-lg leading-8 md:text-xl"
                style={{ color: "var(--text)" }}
              >
                I build full-stack systems for logistics and operations — from
                mobile tools used in the field to dispatch platforms and backend
                services that enable real-time tracking, offline workflows, and
                reliable execution.
              </p>

              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href="#systems"
                  className="btn-primary rounded-xl px-6 py-3 font-medium"
                  style={{
                    background: "var(--text-h)",
                    color: "var(--bg)",
                    boxShadow:
                      "0 8px 30px color-mix(in srgb, var(--text-h) 12%, transparent)",
                  }}
                >
                  View Systems
                </a>

                <a
                  href="#contact"
                  className="btn-secondary rounded-xl px-6 py-3 font-medium"
                  style={{
                    border:
                      "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                    color: "var(--text-h)",
                    background:
                      "color-mix(in srgb, var(--bg) 92%, transparent)",
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div />
        </div>
      </div>

      {/* Interaction hint — desktop/mouse only */}
      <div
        className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 pointer-events-none"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text)" }}>
          <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <span className="text-xs tracking-wide" style={{ color: "var(--text)", opacity: 0.6 }}>
          move to attract · click to repel
        </span>
      </div>
    </section>
  );
}
