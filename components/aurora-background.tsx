export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="animate-aurora-a absolute left-[-15%] top-[-20%] size-[46rem] rounded-full opacity-70 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="animate-aurora-b absolute right-[-20%] top-[-10%] size-[42rem] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />
      <div
        className="animate-aurora-c absolute bottom-[-30%] left-[15%] size-[40rem] rounded-full opacity-55 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--accent-3), transparent 70%)" }}
      />
      <div
        className="animate-aurora-d absolute bottom-[-20%] right-[5%] size-[36rem] rounded-full opacity-45 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
