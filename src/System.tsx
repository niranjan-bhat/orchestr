export default function Systems() {
  return (
    <section
      id="systems"
      className="relative py-20 scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        {/* Section intro */}
        <div className="mb-20 max-w-3xl">
          <p
            className="mb-6 text-sm tracking-[0.14em]"
            style={{ color: "var(--text)" }}
          >
            SELECTED PROJECTS
          </p>

          <h2
            className="mb-6 text-3xl font-semibold leading-[1.1] md:text-5xl"
            style={{ color: "var(--text-h)" }}
          >
            Projects built for field workflows, operations, and reliable
            execution.
          </h2>

          <p
            className="text-lg leading-8 md:text-xl"
            style={{ color: "var(--text)" }}
          >
            A selection of projects I’ve built across mobile, web, and backend
            layers — focused on real-world logistics workflows, operational
            visibility, and dependable execution.
          </p>
        </div>

        <div className="space-y-10">
          {/* Project 01 */}
          <div
            className="rounded-[32px] border p-8 md:p-10"
            style={{
              borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
              background: "color-mix(in srgb, var(--bg) 96%, transparent)",
            }}
          >
            <p
              className="mb-4 text-sm tracking-[0.14em]"
              style={{ color: "var(--text)" }}
            >
              PROJECT 01
            </p>

            <h3
              className="mb-5 text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--text-h)" }}
            >
              Driver Job Execution App
            </h3>

            <p
              className="mb-8 max-w-3xl text-base leading-7 md:text-lg md:leading-8"
              style={{ color: "var(--text)" }}
            >
              A Flutter mobile application used by truck drivers to perform
              different types of jobs in the field. The app supports real-time
              location tracking, image capture, and offline-first workflows so
              drivers can continue execution even in low-connectivity
              environments.
            </p>

            <div className="mb-10 mt-4">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                CAPABILITIES
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-4">
                {[
                  "Job execution workflows for multiple job types",
                  "GPS-based tracking and movement visibility",
                  "Image capture and upload",
                  "Offline support with sync on reconnect",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-4 py-3"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                    }}
                  >
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-h)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-4 mt-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                STACK
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "Flutter",
                  "GPS / Location Tracking",
                  "Offline Storage",
                  "Image Upload",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                      color: "var(--text-h)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 02 */}
          <div
            className="rounded-[32px] border p-8 md:p-10"
            style={{
              borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
              background: "color-mix(in srgb, var(--bg) 96%, transparent)",
            }}
          >
            <p
              className="mb-4 text-sm tracking-[0.14em]"
              style={{ color: "var(--text)" }}
            >
              PROJECT 02
            </p>

            <h3
              className="mb-5 text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--text-h)" }}
            >
              Dispatch & Operations Platform
            </h3>

            <p
              className="mb-8 max-w-3xl text-base leading-7 md:text-lg md:leading-8"
              style={{ color: "var(--text)" }}
            >
              A Flutter-based dispatch solution used to create and assign
              different jobs to drivers based on yard requirements. The platform
              provides real-time visibility into job progress, driver movement,
              and operational status, while also supporting reporting and
              day-to-day dispatch coordination.
            </p>

            <div className="mb-10 mt-4">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                CAPABILITIES
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-4">
                {[
                  "Job creation and driver assignment",
                  "Yard-based workflow management",
                  "Real-time visibility into active and completed jobs",
                  "Driver movement tracking",
                  "Operational reporting",
                  "Live view of jobs across the system",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-4 py-3"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                    }}
                  >
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-h)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-4 mt-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                STACK
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "Flutter",
                  "Real-Time Tracking",
                  "Reporting",
                  "Operations Workflows",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                      color: "var(--text-h)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 03 */}
          <div
            className="rounded-[32px] border p-8 md:p-10"
            style={{
              borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
              background: "color-mix(in srgb, var(--bg) 96%, transparent)",
            }}
          >
            <p
              className="mb-4 text-sm tracking-[0.14em]"
              style={{ color: "var(--text)" }}
            >
              PROJECT 03
            </p>

            <h3
              className="mb-5 text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--text-h)" }}
            >
              Backend Coordination Layer
            </h3>

            <p
              className="mb-8 max-w-3xl text-base leading-7 md:text-lg md:leading-8"
              style={{ color: "var(--text)" }}
            >
              A .NET-based backend system powering both the driver-facing mobile
              app and the dispatch platform. The backend manages job state,
              assignments, workflow coordination, and persistence, with RavenDB
              used as the primary database layer.
            </p>

            <div className="mb-10 mt-4">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                CAPABILITIES
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "API layer for mobile and web applications",
                  "Job lifecycle and workflow orchestration",
                  "State coordination across system components",
                  "Persistence with RavenDB",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-4 py-3"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                    }}
                  >
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-h)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-4 mt-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                STACK
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[".NET", "C#", "RavenDB", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                      color: "var(--text-h)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 04 */}
          <div
            className="rounded-[32px] border p-8 md:p-10"
            style={{
              borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
              background: "color-mix(in srgb, var(--bg) 96%, transparent)",
            }}
          >
            <p
              className="mb-4 text-sm tracking-[0.14em]"
              style={{ color: "var(--text)" }}
            >
              PROJECT 04
            </p>

            <h3
              className="mb-5 text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--text-h)" }}
            >
              AI-Powered Construction Inspection App
            </h3>

            <p
              className="mb-8 max-w-3xl text-base leading-7 md:text-lg md:leading-8"
              style={{ color: "var(--text)" }}
            >
              A Flutter mobile application built for house owners and
              contractors to inspect construction quality using AI. Users can
              capture images of construction work, and the system analyzes them
              to detect potential defects while providing rectification steps
              and best practice recommendations.
            </p>

            <div className="mb-10 mt-4">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                CAPABILITIES
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "AI-based defect detection from images",
                  "Guided rectification suggestions",
                  "Best practice recommendations",
                  "Image capture and upload workflows",
                  "User authentication and secure access",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-4 py-3"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                    }}
                  >
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-h)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p
                className="mb-4 text-sm tracking-[0.12em]"
                style={{ color: "var(--text)" }}
              >
                STACK
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "Flutter",
                  "Firebase Auth",
                  "Firebase Storage",
                  "Gemini Flash",
                  "AI Image Processing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--border) 80%, transparent)",
                      color: "var(--text-h)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
