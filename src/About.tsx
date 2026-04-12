export default function About() {
  const timelineItems = [
    {
      period: "2023 — Present",
      title: "Logistics & Dispatch Systems",
      description:
        "Building driver apps, dispatch platforms, and backend systems for real-time tracking, workflow coordination, and operational visibility.",
      side: "left",
    },
    {
      period: "2021 — 2023",
      title: "Enterprise Workflow Platforms",
      description:
        "Worked on APIs, automation flows, and internal platforms designed to improve operational efficiency and support data-driven processes.",
      side: "right",
    },
    {
      period: "2016 — 2021",
      title: "Manufacturing & Asset Systems",
      description:
        "Built systems for asset tracking, RFID and barcode workflows, desktop tooling, and cross-platform operational software.",
      side: "left",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-14 py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="relative">
          {/* shared vertical line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              background: "color-mix(in srgb, var(--border) 80%, transparent)",
            }}
          />

          {/* intro */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div className="md:pr-12">
              <p
                className="mb-10 text-sm tracking-[0.14em]"
                style={{ color: "var(--text)" }}
              >
                ABOUT
              </p>

              <h2
                className="max-w-md text-3xl font-semibold leading-[1.1] md:text-5xl"
                style={{ color: "var(--text-h)" }}
              >
                I build software for systems that operate in the real world.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-2xl md:pl-12">
              <div className="mb-10 flex flex-wrap gap-10">
                <div>
                  <p
                    className="text-2xl font-semibold md:text-3xl"
                    style={{ color: "var(--text-h)" }}
                  >
                    10+
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text)" }}>
                    Years of experience
                  </p>
                </div>

                <div>
                  <p
                    className="text-2xl font-semibold md:text-3xl"
                    style={{ color: "var(--text-h)" }}
                  >
                    End-to-end
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text)" }}>
                    Mobile, web, backend, and delivery
                  </p>
                </div>
              </div>

              <p
                className="mb-8 text-lg leading-8 md:text-xl"
                style={{ color: "var(--text)" }}
              >
                Over the last 10 years, I’ve worked across mobile, web, backend,
                and platform layers to build systems used in day-to-day
                operations — from field workflows and dispatch platforms to
                manufacturing tools and internal software.
              </p>

              <p
                className="text-lg leading-8 md:text-xl"
                style={{ color: "var(--text)" }}
              >
                I’m drawn to software where timing, movement, reliability, and
                clarity matter. My focus is on building systems that are
                maintainable, dependable, and thoughtful from interface to
                infrastructure.
              </p>
            </div>
          </div>

          {/* timeline */}
          <div className="mt-14">
            <p
              className="mb-12 text-sm tracking-[0.14em]"
              style={{ color: "var(--text)" }}
            >
              JOURNEY
            </p>

            <div className="space-y-10 md:space-y-14">
              {timelineItems.map((item, index) => {
                const isLeft = item.side === "left";

                return (
                  <div
                    key={index}
                    className="relative grid grid-cols-1 md:grid-cols-2"
                  >
                    {/* center dot */}
                    <div
                      className="absolute top-8 hidden h-4 w-4 rounded-full border md:block"
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--bg)",
                        borderColor:
                          "color-mix(in srgb, var(--border) 90%, transparent)",
                      }}
                    />

                    {/* left column */}
                    <div className="md:pr-10 flex md:justify-end">
                      {isLeft && (
                        <div
                          className="w-full max-w-md rounded-2xl border px-6 py-5"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--border) 85%, transparent)",
                            background:
                              "color-mix(in srgb, var(--bg) 94%, transparent)",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                          }}
                        >
                          <p
                            className="mb-2 text-sm tracking-[0.12em]"
                            style={{ color: "var(--text)" }}
                          >
                            {item.period}
                          </p>

                          <h3
                            className="mb-3 text-xl font-semibold"
                            style={{ color: "var(--text-h)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-base leading-7"
                            style={{ color: "var(--text)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* right column */}
                    <div className="md:pl-10 flex md:justify-start">
                      {!isLeft && (
                        <div
                          className="w-full max-w-md rounded-2xl border px-6 py-5"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--border) 85%, transparent)",
                            background:
                              "color-mix(in srgb, var(--bg) 94%, transparent)",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                          }}
                        >
                          <p
                            className="mb-2 text-sm tracking-[0.12em]"
                            style={{ color: "var(--text)" }}
                          >
                            {item.period}
                          </p>

                          <h3
                            className="mb-3 text-xl font-semibold"
                            style={{ color: "var(--text-h)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-base leading-7"
                            style={{ color: "var(--text)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* principles */}
        <div className="mt-14">
          <p
            className="mb-10 text-sm tracking-[0.14em]"
            style={{ color: "var(--text)" }}
          >
            PRINCIPLES
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                01
              </p>
              <p
                className="mt-3 text-base font-medium"
                style={{ color: "var(--text-h)" }}
              >
                Built for real use
              </p>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                02
              </p>
              <p
                className="mt-3 text-base font-medium"
                style={{ color: "var(--text-h)" }}
              >
                Designed for reliability
              </p>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                03
              </p>
              <p
                className="mt-3 text-base font-medium"
                style={{ color: "var(--text-h)" }}
              >
                Delivered end to end
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}