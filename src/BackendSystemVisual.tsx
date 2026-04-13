export default function BackendSystemVisual() {
  return (
    <div
      className="flex h-full min-h-[320px] items-center justify-center"
    >
      <div className="w-full max-w-[420px] space-y-6">

        {/* top layer */}
        <div className="flex justify-between">
          <div className="rounded-xl border px-4 py-3 text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            Driver App
          </div>
          <div className="rounded-xl border px-4 py-3 text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            Dispatch Web
          </div>
        </div>

        {/* connector */}
        <div className="flex justify-center">
          <div className="h-6 w-[1px] bg-[color-mix(in_srgb,var(--border)_80%,transparent)]" />
        </div>

        {/* API layer */}
        <div className="flex justify-center">
          <div className="rounded-xl border px-6 py-3 text-sm font-medium"
            style={{ borderColor: "var(--border)" }}
          >
            API / Workflow Layer
          </div>
        </div>

        {/* connector */}
        <div className="flex justify-center">
          <div className="h-6 w-[1px] bg-[color-mix(in_srgb,var(--border)_80%,transparent)]" />
        </div>

        {/* DB layer */}
        <div className="flex justify-center gap-4">
          <div className="rounded-xl border px-4 py-3 text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            RavenDB
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-center">
          <div className="rounded-xl border px-4 py-3 text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            Azure DevOps · CI/CD
          </div>
        </div>
      </div>
    </div>
  );
}