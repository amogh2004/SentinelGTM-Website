import { useInView } from "../hooks/useInView";

const REPLACEMENTS = [
  {
    role: "SDR / BDR",
    tasks: [
      "Prospect research",
      "Writing personalized outreach",
      "Email scheduling & follow-ups",
    ],
  },
  {
    role: "Sales Engineer",
    tasks: [
      "Building custom demos",
      "Personalizing decks",
      "Tailoring walkthroughs per prospect",
    ],
  },
  {
    role: "Video / Demo Manager",
    tasks: [
      "Recording demo videos",
      "Editing & uploading",
      "Managing demo asset delivery",
    ],
  },
];

function Row({ item, delay }: { item: (typeof REPLACEMENTS)[0]; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-[1fr_2fr_auto] items-center gap-6 py-5 px-6 rounded-xl ${inView ? "in-view" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        background: "rgba(193,193,255,0.03)",
        border: "1px solid rgba(193,193,255,0.07)",
      }}
    >
      {/* Role */}
      <span
        className="font-display font-bold text-base text-white"
        style={{ letterSpacing: "-0.01em" }}
      >
        {item.role}
      </span>

      {/* Tasks */}
      <div className="flex flex-wrap gap-2">
        {item.tasks.map((t) => (
          <span
            key={t}
            className="font-body text-xs px-2.5 py-1 rounded-full"
            style={{
              color: "rgba(240,238,238,0.48)",
              background: "rgba(240,238,238,0.04)",
              border: "1px solid rgba(240,238,238,0.06)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Status */}
      <span
        className="font-body text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
        style={{
          color: "#4ade80",
          background: "rgba(74,222,128,0.08)",
          border: "1px solid rgba(74,222,128,0.18)",
        }}
      >
        Replaced
      </span>
    </div>
  );
}

export function Features() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 px-6 relative">
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(93,95,239,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`reveal text-center mb-12 ${inView ? "in-view" : ""}`}
        >
          <p
            className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ color: "rgba(193,193,255,0.55)" }}
          >
            What Sentinel replaces
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Not a tool that helps you do the work.
            <br />
            <span style={{ color: "rgba(240,238,238,0.4)" }}>
              A system that does it for you.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {REPLACEMENTS.map((item, i) => (
            <Row key={item.role} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
