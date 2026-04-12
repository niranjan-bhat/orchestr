export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient wash */}
      <div
        className="absolute inset-y-0 left-0 w-[52%] pointer-events-none z-10"
        style={{
          background: `linear-gradient(
            to right,
            color-mix(in srgb, var(--bg) 94%, transparent) 0%,
            color-mix(in srgb, var(--bg) 78%, transparent) 45%,
            transparent 100%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1180px] px-6 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="relative max-w-xl">
            <div
              className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[40px] blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--bg) 88%, transparent) 0%, color-mix(in srgb, var(--bg) 72%, transparent) 42%, transparent 78%)",
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
                className="mb-6 text-4xl md:text-[56px] font-semibold leading-[1.1]"
                style={{ color: "var(--text-h)" }}
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
                  className="pointer-events-auto rounded-xl px-6 py-3 font-medium transition-opacity hover:opacity-80"
                  style={{ background: "var(--text-h)", color: "var(--bg)", textDecoration: "none" }}
                >
                  View Systems
                </a>

                <a
                  href="#contact"
                  className="pointer-events-auto rounded-xl px-6 py-3 font-medium transition-opacity hover:opacity-80"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-h)",
                    textDecoration: "none",
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
    </section>
  );
}
