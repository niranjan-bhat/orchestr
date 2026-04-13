import { useEffect } from "react";
import DriverSystemVisual from "./DriverSystemVisual";


interface Project {
  num: string;
  title: string;
  role: string;
  description: string;
  capabilities: string[];
  stack: string[];
}

const logisticsProjects: Project[] = [
  {
    num: "01",
    title: "Driver Job Execution App",
    role: "Android · Built end-to-end",
    description:
      "An Android application built from scratch for truck drivers to perform job types in the field. Supports real-time location tracking, image capture, and offline-first workflows so drivers can continue execution in low-connectivity environments.",
    capabilities: [
      "Job execution workflows for multiple job types",
      "GPS-based tracking and movement visibility",
      "Image capture and upload",
      "Offline support with sync on reconnect",
    ],
    stack: ["Flutter", "Dart", "Android", "SQLite", "REST APIs", "GPS"],
  },
  {
    num: "02",
    title: "Dispatch & Operations Platform",
    role: "Web · Contributor",
    description:
      "A Flutter web application used to create and assign jobs to drivers based on yard requirements. Real-time visibility into job progress, driver movement, and operational status across the yard.",
    capabilities: [
      "Job creation and driver assignment",
      "Yard-based workflow management",
      "Real-time visibility into active and completed jobs",
      "Driver movement tracking",
      "Operational reporting",
      "Live view of jobs across the system",
    ],
    stack: ["Flutter Web", "Dart", "SignalR", "REST APIs"],
  },
  {
    num: "03",
    title: "Backend Coordination Layer",
    role: "Backend · Contributor",
    description:
      "Coordinates driver and dispatch systems using REST APIs and real-time messaging via SignalR, ensuring consistent job state across distributed clients. Handles concurrent updates, workflow transitions, and persistence using RavenDB — the shared backbone keeping both systems in sync.",
    capabilities: [
      "REST API layer for Android and web clients",
      "Real-time messaging and sync via SignalR",
      "Job lifecycle and workflow state transitions",
      "Concurrent update and consistency handling",
      "Persistence with RavenDB",
      "CI/CD pipeline setup and maintenance",
    ],
    stack: [".NET", "C#", "RavenDB", "SignalR", "REST APIs", "Azure DevOps"],
  },
];

const otherProjects: Project[] = [
  {
    num: "04",
    title: "AI Construction Inspection App",
    role: "Android · Personal project",
    description:
      "A personal Android app on the Play Store that uses Gemini Flash to analyze construction images and detect defects — providing actionable recommendations to improve build quality and reduce rework. Built for house owners and contractors who need a fast, practical way to inspect work without relying on an expert on-site.",
    capabilities: [
      "Gemini Flash image analysis for defect detection",
      "Actionable rectification steps per defect",
      "Best practice recommendations by build type",
      "Image capture and upload workflows",
      "User authentication and secure access",
    ],
    stack: ["Flutter", "Dart", "Android", "Firebase Auth", "Firebase Storage", "Gemini Flash"],
  },
];

function CardHeader({ num, role }: { num: string; role: string }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <p className="text-sm tracking-[0.14em]" style={{ color: "var(--text)" }}>
        PROJECT {num}
      </p>
      <span
        className="rounded-full border px-3 py-1 text-xs tracking-wide"
        style={{
          color: "var(--text)",
          borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
        }}
      >
        {role}
      </span>
    </div>
  );
}

function StackTags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border px-4 py-1.5 text-sm"
          style={{
            borderColor: "color-mix(in srgb, var(--border) 80%, transparent)",
            color: "var(--text-h)",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function CapabilityList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-xl border px-4 py-3"
          style={{
            borderColor: "color-mix(in srgb, var(--border) 80%, transparent)",
          }}
        >
          <p className="text-sm leading-6" style={{ color: "var(--text-h)" }}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
  background: "color-mix(in srgb, var(--bg) 96%, transparent)",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-sm tracking-[0.12em]"
      style={{ color: "var(--text)", marginTop: "2rem", marginBottom: "0.75rem" }}
    >
      {children}
    </p>
  );
}

export default function Systems() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("#systems .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [p01, p02, p03] = logisticsProjects;
  const [p04] = otherProjects;

  return (
    <section
      id="systems"
      className="relative py-20 scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Intro */}
        <div className="mb-16 max-w-2xl reveal">
          <p className="mb-6 text-sm tracking-[0.14em]" style={{ color: "var(--text)" }}>
            SELECTED PROJECTS
          </p>
          <h2
            className="heading-gradient mb-6 text-3xl font-semibold leading-[1.1] md:text-5xl"
          >
            Systems built for the field, not the demo.
          </h2>
          <p className="text-lg leading-8 md:text-xl" style={{ color: "var(--text)" }}>
            End-to-end work across mobile, backend, and operations — designed
            to hold up under real conditions and real use.
          </p>
        </div>

        {/* ── Logistics system ── */}
        <div className="space-y-6">

          {/* Featured: Project 01 */}
          <div
            className="rounded-[32px] border p-8 md:p-10 reveal card-hover"
            style={cardStyle}
          >
            <CardHeader num={p01.num} role={p01.role} />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr]">
              {/* Left — content */}
              <div className="flex flex-col">
                <h3
                  className="mb-4 text-2xl font-semibold md:text-4xl"
                  style={{ color: "var(--text-h)" }}
                >
                  {p01.title}
                </h3>
                <p
                  className="mb-8 text-base leading-7 md:text-lg md:leading-8"
                  style={{ color: "var(--text)" }}
                >
                  {p01.description}
                </p>
                <div>
                  <SectionLabel>CAPABILITIES</SectionLabel>
                  <CapabilityList items={p01.capabilities} />
                </div>
                <div className="mt-auto">
                  <SectionLabel>STACK</SectionLabel>
                  <StackTags items={p01.stack} />
                </div>
              </div>

              {/* Right — visual */}
              <div className="hidden md:block">
                <DriverSystemVisual />
              </div>
            </div>
          </div>

          {/* Grid: Projects 02 + 03 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Project 02 */}
            <div
              className="flex flex-col rounded-[32px] border p-8 reveal card-hover"
              style={cardStyle}
            >
              <CardHeader num={p02.num} role={p02.role} />
              <h3
                className="mb-4 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text-h)" }}
              >
                {p02.title}
              </h3>
              <p
                className="mb-8 text-base leading-7"
                style={{ color: "var(--text)" }}
              >
                {p02.description}
              </p>
              <div className="mt-auto">
                <SectionLabel>STACK</SectionLabel>
                <StackTags items={p02.stack} />
              </div>
            </div>

            {/* Project 03 */}
            <div
              className="flex flex-col rounded-[32px] border p-8 reveal card-hover"
              style={cardStyle}
            >
              <CardHeader num={p03.num} role={p03.role} />
              <h3
                className="mb-4 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text-h)" }}
              >
                {p03.title}
              </h3>
              <p
                className="mb-8 text-base leading-7"
                style={{ color: "var(--text)" }}
              >
                {p03.description}
              </p>
              <div className="mt-auto">
                <SectionLabel>STACK</SectionLabel>
                <StackTags items={p03.stack} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Other work ── */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-5 reveal">
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
            <p className="text-sm tracking-[0.14em]" style={{ color: "var(--text)" }}>
              OTHER WORK
            </p>
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          </div>

          <div
            className="rounded-[32px] border p-8 md:p-10 reveal card-hover"
            style={cardStyle}
          >
            <CardHeader num={p04.num} role={p04.role} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3
                  className="mb-4 text-xl font-semibold md:text-2xl"
                  style={{ color: "var(--text-h)" }}
                >
                  {p04.title}
                </h3>
                <p className="text-base leading-7" style={{ color: "var(--text)" }}>
                  {p04.description}
                </p>
              </div>
              <div>
                <div className="mb-6">
                  <SectionLabel>CAPABILITIES</SectionLabel>
                  <div className="space-y-2">
                    {p04.capabilities.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border px-4 py-3"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--border) 80%, transparent)",
                        }}
                      >
                        <p className="text-sm leading-6" style={{ color: "var(--text-h)" }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <SectionLabel>STACK</SectionLabel>
                <StackTags items={p04.stack} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
