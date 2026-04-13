import { useEffect } from "react";

const principles = [
  {
    num: "01",
    title: "Built for real use",
    description:
      "Software that holds up under actual conditions — offline, high-frequency, and operated by people in the field, not just in demos.",
  },
  {
    num: "02",
    title: "Designed for reliability",
    description:
      "Correctness and predictability over cleverness. Systems that degrade gracefully and recover cleanly when things go wrong.",
  },
  {
    num: "03",
    title: "Delivered end to end",
    description:
      "From interface to infrastructure. I work across the full stack so nothing falls through the cracks between layers.",
  },
];

const timelineItems = [
  {
    period: "2023 — Present",
    title: "Logistics & Dispatch Systems",
    description:
      "Building driver apps, dispatch platforms, and backend systems for real-time tracking, workflow coordination, and operational visibility. Also responsible for CI/CD pipeline setup and maintenance using Azure DevOps.",
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

function TimelineCard({
  period,
  title,
  description,
}: {
  period: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="w-full max-w-md rounded-2xl border px-6 py-5 card-hover"
      style={{
        borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
        background: "color-mix(in srgb, var(--bg) 97%, var(--border))",
      }}
    >
      <p
        className="mb-2 text-sm tracking-[0.12em]"
        style={{ color: "var(--text)" }}
      >
        {period}
      </p>
      <h3
        className="mb-3 text-xl font-semibold"
        style={{ color: "var(--text-h)" }}
      >
        {title}
      </h3>
      <p className="text-base leading-7" style={{ color: "var(--text)" }}>
        {description}
      </p>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("#about .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative scroll-mt-14 py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="relative">
          {/* shared vertical line — desktop only */}
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
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 reveal">
            {/* LEFT */}
            <div className="md:pr-12">
              <p
                className="mb-10 text-sm tracking-[0.14em]"
                style={{ color: "var(--text)" }}
              >
                ABOUT
              </p>
              <h2
                className="heading-gradient max-w-md text-3xl font-semibold leading-[1.1] md:text-5xl"
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
                    3
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text)" }}>
                    Domains — logistics, enterprise & manufacturing
                  </p>
                </div>
              </div>

              <p
                className="mb-8 text-lg leading-8 md:text-xl"
                style={{ color: "var(--text)" }}
              >
                I design and ship systems used in day-to-day operations — field
                workflows, dispatch platforms, manufacturing tools, and the
                backend services that keep them running.
              </p>
              <p
                className="text-lg leading-8 md:text-xl"
                style={{ color: "var(--text)" }}
              >
                I'm drawn to software where timing, movement, reliability, and
                clarity matter. My focus is on building systems that are
                maintainable, dependable, and thoughtful from interface to
                infrastructure.
              </p>
            </div>
          </div>

          {/* timeline */}
          <div className="mt-14">
            <p
              className="mb-12 text-sm tracking-[0.14em] reveal"
              style={{ color: "var(--text)" }}
            >
              JOURNEY
            </p>

            <div className="space-y-10 md:space-y-14">
              {timelineItems.map((item, index) => (
                <div key={index} className="reveal">
                  {/* mobile: single column, no alternating */}
                  <div className="md:hidden">
                    <TimelineCard
                      period={item.period}
                      title={item.title}
                      description={item.description}
                    />
                  </div>

                  {/* desktop: alternating columns with center dot */}
                  <div className="relative hidden md:block">
                    <div
                      className="absolute h-4 w-4 rounded-full border"
                      style={{
                        top: "1.75rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--bg)",
                        borderColor:
                          "color-mix(in srgb, var(--border) 90%, transparent)",
                        zIndex: 1,
                      }}
                    />
                    <div className="grid grid-cols-2">
                      <div className="flex justify-end pr-10">
                        {item.side === "left" && (
                          <TimelineCard
                            period={item.period}
                            title={item.title}
                            description={item.description}
                          />
                        )}
                      </div>
                      <div className="flex justify-start pl-10">
                        {item.side === "right" && (
                          <TimelineCard
                            period={item.period}
                            title={item.title}
                            description={item.description}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* principles */}
        <div className="mt-14">
          <p
            className="mb-10 text-sm tracking-[0.14em] reveal"
            style={{ color: "var(--text)" }}
          >
            PRINCIPLES
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border p-6 reveal card-hover"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-sm tracking-[0.12em]"
                  style={{ color: "var(--text)" }}
                >
                  {p.num}
                </p>
                <p
                  className="mt-3 text-base font-medium"
                  style={{ color: "var(--text-h)" }}
                >
                  {p.title}
                </p>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "var(--text)" }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
