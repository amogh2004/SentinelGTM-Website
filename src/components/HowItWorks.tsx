import { useInView } from "../hooks/useInView";

const BUILT_FOR = [
  {
    headline: "Early-stage startups",
    sub: "GTM motion from zero",
    desc: "No SDR team? No problem. Sentinel gives you a full partner channel from day one — discovery, outreach, and demos included.",
    accent: "#c1c1ff",
    accentRgb: "193,193,255",
  },
  {
    headline: "Founders going to market",
    sub: "Replace a whole team",
    desc: "Run a high-touch partner motion at startup speed. What used to take an SDR, a sales engineer, and a demo team now takes one URL.",
    accent: "#4ade80",
    accentRgb: "74,222,128",
  },
];

const COMPARISON_FEATURES = [
  "Partner ecosystem discovery",
  "Personalized cold outreach",
  "Reply detection + classification",
  "Auto-built custom demo per reply",
  "Full end-to-end automation",
];

const TOOLS = [
  {
    name: "Apollo",
    checks: [false, true, false, false, false],
  },
  {
    name: "Outreach",
    checks: [false, true, true, false, false],
  },
  {
    name: "Clay",
    checks: [false, true, false, false, false],
  },
  {
    name: "Sentinel",
    checks: [true, true, true, true, true],
    highlight: true,
  },
];

function BuiltForCard({ item, delay }: { item: (typeof BUILT_FOR)[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`reveal card-glow rounded-2xl p-8 flex flex-col gap-4 ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <p
          className="font-body text-xs uppercase tracking-[0.22em] mb-1"
          style={{ color: item.accent, opacity: 0.7 }}
        >
          {item.sub}
        </p>
        <h3
          className="font-display font-bold text-xl text-white leading-snug"
          style={{ letterSpacing: "-0.02em" }}
        >
          {item.headline}
        </h3>
      </div>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "rgba(240,238,238,0.48)" }}
      >
        {item.desc}
      </p>
    </div>
  );
}

function Check({ ok, highlight }: { ok: boolean; highlight?: boolean }) {
  if (ok) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
        style={{
          background: highlight ? "rgba(74,222,128,0.12)" : "rgba(240,238,238,0.06)",
          color: highlight ? "#4ade80" : "rgba(240,238,238,0.45)",
          border: highlight ? "1px solid rgba(74,222,128,0.2)" : "1px solid rgba(240,238,238,0.08)",
        }}
      >
        ✓
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs"
      style={{ color: "rgba(240,238,238,0.18)" }}
    >
      —
    </span>
  );
}

export function HowItWorks() {
  const { ref: builtRef, inView: builtIn } = useInView();
  const { ref: cmpRef, inView: cmpIn } = useInView();

  return (
    <>
      {/* Built For */}
      <section className="py-24 px-6 relative">
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 0% 50%, rgba(93,95,239,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div
            ref={builtRef}
            className={`reveal text-center mb-12 ${builtIn ? "in-view" : ""}`}
          >
            <p
              className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(193,193,255,0.55)" }}
            >
              Built for
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Startups moving fast.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUILT_FOR.map((item, i) => (
              <BuiltForCard key={item.headline} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Sentinel vs. Existing Tools */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(193,193,255,0.06) 30%, rgba(193,193,255,0.06) 70%, transparent)",
          }}
        />

        <div className="max-w-4xl mx-auto">
          <div
            ref={cmpRef}
            className={`reveal text-center mb-12 ${cmpIn ? "in-view" : ""}`}
          >
            <p
              className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(193,193,255,0.55)" }}
            >
              Sentinel vs. existing tools
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Nothing else does all of this.
            </h2>
          </div>

          {/* Table */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(193,193,255,0.08)" }}
          >
            {/* Header row */}
            <div
              className="grid gap-0"
              style={{
                gridTemplateColumns: `2fr repeat(${TOOLS.length}, 1fr)`,
                background: "rgba(193,193,255,0.04)",
                borderBottom: "1px solid rgba(193,193,255,0.08)",
              }}
            >
              <div className="py-4 px-5" />
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="py-4 px-3 text-center"
                  style={{
                    borderLeft: "1px solid rgba(193,193,255,0.06)",
                    background: tool.highlight
                      ? "rgba(193,193,255,0.04)"
                      : undefined,
                  }}
                >
                  <span
                    className="font-display font-bold text-sm"
                    style={{
                      color: tool.highlight ? "#c1c1ff" : "rgba(240,238,238,0.55)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {COMPARISON_FEATURES.map((feature, fi) => (
              <div
                key={feature}
                className="grid"
                style={{
                  gridTemplateColumns: `2fr repeat(${TOOLS.length}, 1fr)`,
                  borderBottom:
                    fi < COMPARISON_FEATURES.length - 1
                      ? "1px solid rgba(193,193,255,0.05)"
                      : undefined,
                }}
              >
                <div className="py-4 px-5">
                  <span
                    className="font-body text-sm"
                    style={{ color: "rgba(240,238,238,0.55)" }}
                  >
                    {feature}
                  </span>
                </div>
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="py-4 px-3 flex items-center justify-center"
                    style={{
                      borderLeft: "1px solid rgba(193,193,255,0.06)",
                      background: tool.highlight
                        ? "rgba(193,193,255,0.02)"
                        : undefined,
                    }}
                  >
                    <Check ok={tool.checks[fi]} highlight={tool.highlight} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
