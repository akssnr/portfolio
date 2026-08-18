export function PageGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] overflow-hidden"
    >
      <div
        className="animate-aurora-a mix-blend-screen absolute left-[-10%] top-[-25%] size-[32rem] rounded-full opacity-35 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
      />
      <div
        className="animate-aurora-b mix-blend-screen absolute right-[-15%] top-[-20%] size-[28rem] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 65%)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
