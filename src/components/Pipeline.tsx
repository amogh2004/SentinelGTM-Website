import { FileText, Search, UserCheck, Send, MessageSquare, Code2, LucideIcon } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface Stage {
  Icon: LucideIcon;
  label: string;
  desc: string;
  n: string;
  accent: string;
  rgb: string;
}

const STAGES: Stage[] = [
  { Icon: FileText,       label: "Read Website",      desc: "Reads the company site, builds a one-page brief",           n: "01", accent: "#c1c1ff", rgb: "193,193,255" },
  { Icon: Search,         label: "Discover Partners", desc: "Finds agencies and consultancies in the ecosystem",          n: "02", accent: "#c1c1ff", rgb: "193,193,255" },
  { Icon: UserCheck,      label: "Find Contacts",     desc: "Identifies the right person, validates email deliverability", n: "03", accent: "#cebdff", rgb: "206,189,255" },
  { Icon: Send,           label: "Send Outreach",     desc: "Claude drafts a personalized cold email, sends via Outlook",  n: "04", accent: "#cebdff", rgb: "206,189,255" },
  { Icon: MessageSquare,  label: "Detect Replies",    desc: "Monitors inbox, classifies: Interested / Not Now / Archive",  n: "05", accent: "#ffb95f", rgb: "255,185,95"  },
  { Icon: Code2,          label: "Build Demo",        desc: "Spins up a custom working app per interested reply, in minutes", n: "06", accent: "#4ade80", rgb: "74,222,128"  },
];

function StageItem({ stage, delay, isLast }: { stage: Stage; delay: number; isLast: boolean }) {
  const { ref, inView } = useInView(0.01);
  const { Icon, label, desc, n, accent, rgb } = stage;

  return (
    <div className="flex items-start">
      <div
        ref={ref}
        className={`reveal flex flex-col items-center gap-3 px-3 ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: `${delay}ms`, width: 110 }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `rgba(${rgb}, 0.08)`,
            border: `1px solid rgba(${rgb}, 0.16)`,
            boxShadow: `0 0 20px rgba(${rgb}, 0.05)`,
          }}
        >
          <Icon size={20} style={{ color: accent }} strokeWidth={1.5} />
        </div>

        <span
          className="font-body font-semibold text-[12px] text-center leading-tight"
          style={{ color: "rgba(240,238,238,0.75)" }}
        >
          {label}
        </span>

        <span
          className="font-body text-[11px] text-center leading-snug"
          style={{ color: "rgba(240,238,238,0.58)" }}
        >
          {desc}
        </span>

        <span
          className="font-display font-black text-[10px]"
          style={{ color: `rgba(${rgb}, 0.35)` }}
        >
          {n}
        </span>
      </div>

      {!isLast && (
        <div
          className="flex items-center flex-shrink-0"
          style={{ width: 32, marginTop: "22px" }}
        >
          <div className="connector-line" />
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" style={{ marginLeft: -1 }}>
            <path
              d="M1 1l5 2.5L1 6"
              stroke="rgba(193,193,255,0.2)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export function Pipeline() {
  const { ref: headerRef, inView: headerIn } = useInView();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(193,193,255,0.06) 30%, rgba(193,193,255,0.06) 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`reveal text-center mb-14 ${headerIn ? "in-view" : ""}`}
        >
          <p
            className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ color: "rgba(193,193,255,0.55)" }}
          >
            The 6-stage automated pipeline
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            From URL to pipeline.
            <br />
            <span style={{ color: "rgba(240,238,238,0.4)" }}>
              Fully automated.
            </span>
          </h2>
        </div>

        <div className="overflow-x-auto scroll-hide pb-4">
          <div
            className="flex items-start justify-center"
            style={{ minWidth: "max-content", padding: "0 16px", gap: 0, margin: "0 auto" }}
          >
            {STAGES.map((stage, i) => (
              <StageItem
                key={stage.n}
                stage={stage}
                delay={i * 70}
                isLast={i === STAGES.length - 1}
              />
            ))}
          </div>
        </div>

        <p
          className="text-center font-body text-xs mt-8"
          style={{ color: "rgba(240,238,238,0.18)" }}
        >
          Every stage runs automatically. You control the pace.
        </p>
      </div>
    </section>
  );
}
