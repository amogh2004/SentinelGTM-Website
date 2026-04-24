import { Search, Mail, Code2 } from "lucide-react";
import { useInView } from "../hooks/useInView";

const FEATURES = [
  {
    Icon: Search,
    accent: "#c1c1ff",
    accentRgb: "193,193,255",
    tag: "Stage 1–3",
    title: "Autonomous Discovery",
    desc: "Sentinel runs Exa web search, official directory scraping, and cross-pollination across multiple sources simultaneously. Every partner is confidence-scored before you see them.",
    detail: "4 parallel strategies · auto-deduplicated · ranked by fit",
  },
  {
    Icon: Mail,
    accent: "#cebdff",
    accentRgb: "206,189,255",
    tag: "Stage 4–5",
    title: "Personalized Outreach",
    desc: "Claude drafts hyper-personalized cold emails for each contact based on their firm's context and your product. Sends via Microsoft Outlook with rate limiting and bounce detection built in.",
    detail: "Outlook Graph API · 30/min · bounce detection",
  },
  {
    Icon: Code2,
    accent: "#ffb95f",
    accentRgb: "255,185,95",
    tag: "Stage 6–8",
    title: "Custom POC Generation",
    desc: "For every interested reply, Claude writes a fully working FastAPI + React application customized to that partner's client context. Ready to send in about 4 minutes.",
    detail: "FastAPI + React · Playwright demo video · auto-delivery",
  },
];

type Feature = (typeof FEATURES)[0];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const { ref, inView } = useInView();
  const { Icon, accent, accentRgb, tag, title, desc, detail } = feature;

  return (
    <div
      ref={ref}
      className={`reveal card-glow rounded-2xl p-7 flex flex-col gap-5 ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon + tag row */}
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: `rgba(${accentRgb}, 0.10)`,
            border: `1px solid rgba(${accentRgb}, 0.18)`,
          }}
        >
          <Icon size={20} style={{ color: accent }} strokeWidth={1.6} />
        </div>
        <span
          className="text-[10px] font-body uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
          style={{
            color: accent,
            background: `rgba(${accentRgb}, 0.07)`,
            border: `1px solid rgba(${accentRgb}, 0.14)`,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="font-display font-bold text-lg text-white leading-snug"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "rgba(240,238,238,0.5)" }}
        >
          {desc}
        </p>
      </div>

      {/* Detail */}
      <p
        className="font-body text-[11px] font-medium"
        style={{ color: "rgba(240,238,238,0.2)" }}
      >
        {detail}
      </p>
    </div>
  );
}

export function Features() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal text-center mb-16 ${inView ? "in-view" : ""}`}
        >
          <p
            className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ color: "rgba(193,193,255,0.55)" }}
          >
            What Sentinel does
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Three capabilities.
            <br />
            One end-to-end pipeline.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
