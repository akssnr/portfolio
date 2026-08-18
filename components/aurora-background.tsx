export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="animate-aurora-a absolute left-[-10%] top-[-15%] size-[38rem] rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="animate-aurora-b absolute right-[-15%] top-[-5%] size-[34rem] rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />
      <div
        className="animate-aurora-c absolute bottom-[-25%] left-[20%] size-[32rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
}
