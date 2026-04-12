export default function DriverSystemVisual() {
  return (
    <div
      className="flex h-full min-h-[320px] items-center justify-center"
    >
      <div
        className="relative w-[290px] rounded-[28px] border p-4"
        style={{
          borderColor: "color-mix(in srgb, var(--border) 85%, transparent)",
          background: "color-mix(in srgb, var(--bg) 94%, transparent)",
        }}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div
            className="h-2 w-20 rounded-full"
            style={{
              background:
                "color-mix(in srgb, var(--border) 60%, transparent)",
            }}
          />
          <div
            className="rounded-full px-3 py-1 text-[11px]"
            style={{
              background:
                "color-mix(in srgb, var(--text-h) 10%, transparent)",
              color: "var(--text-h)",
              border:
                "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
            }}
          >
            Active Route
          </div>
        </div>

        {/* Route block */}
        <div
          className="mb-4 rounded-2xl border p-4"
          style={{
            borderColor:
              "color-mix(in srgb, var(--border) 75%, transparent)",
          }}
        >
          <div
            className="mb-3 h-2 w-[65%] rounded-full"
            style={{
              background:
                "color-mix(in srgb, var(--text-h) 28%, transparent)",
            }}
          />
          <div
            className="mb-2 h-2 w-[90%] rounded-full"
            style={{
              background:
                "color-mix(in srgb, var(--border) 48%, transparent)",
            }}
          />
          <div
            className="h-2 w-[70%] rounded-full"
            style={{
              background:
                "color-mix(in srgb, var(--border) 38%, transparent)",
            }}
          />

          {/* Route line */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--text-h)" }}
            />
            <div
              className="h-[1px] flex-1"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 80%, transparent)",
              }}
            />
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--text-h)" }}
            />
            <div
              className="h-[1px] flex-1"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 80%, transparent)",
              }}
            />
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 70%, transparent)",
              }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor:
                "color-mix(in srgb, var(--text-h) 20%, transparent)",
              background:
                "color-mix(in srgb, var(--text-h) 6%, transparent)",
            }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div
                className="h-2 w-[42%] rounded-full"
                style={{
                  background:
                    "color-mix(in srgb, var(--text-h) 34%, transparent)",
                }}
              />
              <div
                className="rounded-full px-2 py-1 text-[10px]"
                style={{
                  background:
                    "color-mix(in srgb, var(--text-h) 12%, transparent)",
                  color: "var(--text-h)",
                }}
              >
                In Progress
              </div>
            </div>
            <div
              className="h-2 w-[72%] rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 42%, transparent)",
              }}
            />
          </div>

          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor:
                "color-mix(in srgb, var(--border) 75%, transparent)",
            }}
          >
            <div
              className="mb-2 h-2 w-[48%] rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--text-h) 24%, transparent)",
              }}
            />
            <div
              className="h-2 w-[68%] rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 42%, transparent)",
              }}
            />
          </div>
        </div>

        {/* Capture + sync */}
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor:
                "color-mix(in srgb, var(--border) 75%, transparent)",
            }}
          >
            <div
              className="mb-2 h-2 w-[46%] rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--text-h) 24%, transparent)",
              }}
            />
            <div
              className="h-14 rounded-xl border"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--border) 70%, transparent)",
                background:
                  "color-mix(in srgb, var(--border) 10%, transparent)",
              }}
            />
          </div>

          <div
            className="flex w-[74px] flex-col items-center justify-center rounded-2xl border p-3"
            style={{
              borderColor:
                "color-mix(in srgb, var(--border) 75%, transparent)",
            }}
          >
            <div
              className="mb-2 h-8 w-8 rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--text-h) 12%, transparent)",
              }}
            />
            <div
              className="h-2 w-10 rounded-full"
              style={{
                background:
                  "color-mix(in srgb, var(--border) 45%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}