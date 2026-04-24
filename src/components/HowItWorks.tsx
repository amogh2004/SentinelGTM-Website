import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    n: "01",
    title: "Add a SaaS target",
    desc: "Pick the ecosystem you want to tap — e.g. Pipedrive, HubSpot, Salesforce. Sentinel will discover all the agencies and consultancies in that partner network.",
  },
  {
    n: "02",
    title: "Autonomous discovery runs",
    desc: "Sentinel scans Exa web search, official partner directories, and existing partner sites simultaneously. Four parallel strategies, cross-referenced and deduplicated.",
  },
  {
    n: "03",
    title: "Review and approve partners",
    desc: "Every discovered partner is confidence-scored. You review the list and approve the ones worth reaching out to — this is your quality gate before any email is sent.",
  },
  {
    n: "04",
    title: "Contacts extracted, emails drafted",
    desc: "Sentinel finds the right person at each approved partner — typically the partnerships lead, agency founder, or director of services — and Claude drafts a personalized outreach email for each one.",
  },
  {
    n: "05",
    title: "Launch the outreach campaign",
    desc: "Send in bulk via Microsoft Outlook. Sentinel handles rate limiting (30/min), bounce detection, and circuit breaking automatically. Your progress is saved if anything interrupts.",
  },
  {
    n: "06",
    title: "Replies detected and classified",
    desc: "Sentinel scans your inbox and classifies every reply as interested, not now, or archived — using Claude. Interested leads surface immediately for your action.",
  },
  {
    n: "07",
    title: "Custom demo built per reply",
    desc: "For every interested reply, Sentinel generates a fully working FastAPI + React app customized to that partner's client context. Takes about 4 minutes. Ready to send.",
  },
  {
    n: "08",
    title: "Track deals to close",
    desc: "Move contacts through your pipeline — Demo Sent, Meeting Booked, Deal in Progress, Closed Won. Full funnel analytics show cost per reply and reply rate by ecosystem.",
  },
];

function Step({ step, delay }: { step: (typeof STEPS)[0]; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal flex gap-6 ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Number + line */}
      <div className="flex flex-col items-center gap-0 flex-shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-display font-black text-[11px] flex-shrink-0"
          style={{
            background: "rgba(193,193,255,0.07)",
            border: "1px solid rgba(193,193,255,0.14)",
            color: "#c1c1ff",
          }}
        >
          {step.n}
        </div>
        {/* Connecting line to next step */}
        <div
          className="w-px flex-1 mt-2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(193,193,255,0.10), rgba(193,193,255,0.02))",
            minHeight: 32,
          }}
        />
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3
          className="font-display font-bold text-white text-lg mb-2 leading-snug"
          style={{ letterSpacing: "-0.01em" }}
        >
          {step.title}
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "rgba(240,238,238,0.48)" }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 px-6 relative">
      {/* Left glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(93,95,239,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal text-center mb-16 ${inView ? "in-view" : ""}`}
        >
          <p
            className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ color: "rgba(193,193,255,0.55)" }}
          >
            How it works
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            From first input
            <br />
            to booked meeting.
          </h2>
        </div>

        {/* Steps */}
        <div className="pl-0">
          {STEPS.map((step, i) => (
            <Step key={step.n} step={step} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
