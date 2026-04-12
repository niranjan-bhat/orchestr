export default function DispatchFlowVisual() {
  return (
    <div
      className="flex h-full min-h-[320px] items-center justify-center rounded-[24px] border"
      style={{
        borderColor: "color-mix(in srgb, var(--border) 80%, transparent)",
        background:
          "linear-gradient(to bottom right, color-mix(in srgb, var(--bg) 98%, transparent), color-mix(in srgb, var(--border) 18%, transparent))",
      }}
    >
      <div className="w-full max-w-[420px] space-y-8">

        {/* FLOW ROW */}
        <div className="flex items-center justify-between">

          {["Created", "Assigned", "In Progress", "Done"].map((step, i) => (
            <div key={step} className="flex flex-col items-center">

              <div
                className="mb-2 h-10 w-10 rounded-full"
                style={{
                  background:
                    i === 2
                      ? "color-mix(in srgb, var(--text-h) 25%, transparent)"
                      : "color-mix(in srgb, var(--border) 30%, transparent)",
                }}
              />

              <div
                className="text-[11px]"
                style={{
                  color:
                    i === 2
                      ? "var(--text-h)"
                      : "color-mix(in srgb, var(--text) 60%, transparent)",
                }}
              >
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* CONNECTOR LINE */}
        <div
          className="h-[1px] w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--border), transparent)",
          }}
        />

        {/* DRIVER + BACKEND */}
        <div className="flex items-center justify-between">

          <div className="flex flex-col items-center">
            <div
              className="mb-2 h-12 w-12 rounded-xl"
              style={{
                background: "color-mix(in srgb, var(--text-h) 15%, transparent)",
              }}
            />
            <span className="text-xs" style={{ color: "var(--text)" }}>
              Driver App
            </span>
          </div>

          <div
            className="h-[1px] flex-1 mx-4"
            style={{
              background:
                "color-mix(in srgb, var(--border) 70%, transparent)",
            }}
          />

          <div className="flex flex-col items-center">
            <div
              className="mb-2 h-12 w-12 rounded-xl"
              style={{
                background: "color-mix(in srgb, var(--border) 25%, transparent)",
              }}
            />
            <span className="text-xs" style={{ color: "var(--text)" }}>
              Backend
            </span>
          </div>
        </div>

        {/* SIGNAL FLOW */}
        <div className="flex justify-center">
          <div
            className="h-2 w-40 rounded-full"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--text-h), transparent)",
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
}