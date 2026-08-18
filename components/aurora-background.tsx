export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* ambient wash */}
      <div
        className="animate-aurora-a mix-blend-screen absolute left-[-15%] top-[-20%] size-[46rem] rounded-full opacity-50 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
      />
      <div
        className="animate-aurora-c mix-blend-screen absolute bottom-[-30%] right-[-10%] size-[42rem] rounded-full opacity-45 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-3), transparent 65%)" }}
      />

      {/* flowing ribbons */}
      <div
        className="animate-ribbon-1 mix-blend-screen absolute left-[-30%] top-[8%] h-24 w-[160%] rounded-full opacity-80 blur-[45px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 35%, var(--accent-2) 55%, transparent 90%)",
        }}
      />
      <div
        className="animate-ribbon-2 mix-blend-screen absolute left-[-40%] top-[42%] h-20 w-[180%] rounded-full opacity-70 blur-[45px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent-2) 30%, var(--accent-3) 60%, transparent 90%)",
        }}
      />
      <div
        className="animate-ribbon-3 mix-blend-screen absolute left-[-20%] top-[70%] h-28 w-[150%] rounded-full opacity-65 blur-[45px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 40%, var(--accent-3) 65%, transparent 90%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
