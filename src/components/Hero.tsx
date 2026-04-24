import { useRef, useState, useEffect } from "react";

function DotGrid() {
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setMouse(null);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(193,193,255,0.09) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {mouse && (
        <div
          className="absolute inset-0 transition-opacity duration-100"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(193,193,255,0.65) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            WebkitMaskImage: `radial-gradient(ellipse 280px 280px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 280px 280px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
}

const STATS = [
  "Partner discovery in minutes",
  "Claude-drafted outreach",
  "Custom POC per reply",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      <DotGrid />

      {/* Ambient glow — top center */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] animate-glow-orb"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(93,95,239,0.18) 0%, transparent 70%)",
        }}
      />
      {/* Ambient glow — bottom right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(193,193,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div
          className="animate-fade-in inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border text-[11px] font-body font-medium uppercase tracking-[0.28em]"
          style={{
            borderColor: "rgba(193,193,255,0.18)",
            background: "rgba(93,95,239,0.08)",
            color: "#c1c1ff",
            animationDelay: "0ms",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#c1c1ff] animate-flow-pulse"
            style={{ animationDelay: "0ms" }}
          />
          Private Beta
        </div>

        {/* Wordmark */}
        <div
          className="animate-fade-in mb-2"
          style={{ animationDelay: "60ms" }}
        >
          <h1
            className="font-display font-black text-white leading-none select-none"
            style={{
              fontSize: "clamp(72px, 13vw, 120px)",
              letterSpacing: "-0.05em",
            }}
          >
            SENTINEL
          </h1>
        </div>

        <p
          className="animate-fade-in text-[11px] font-body uppercase tracking-[0.38em] mb-10"
          style={{
            animationDelay: "100ms",
            color: "#c1c1ff",
            textShadow: "0 0 40px rgba(193,193,255,0.55)",
          }}
        >
          GTM Intelligence
        </p>

        {/* Headline */}
        <h2
          className="animate-fade-in font-display font-bold text-white leading-[1.08] mb-5"
          style={{
            fontSize: "clamp(28px, 4.5vw, 50px)",
            animationDelay: "160ms",
            letterSpacing: "-0.02em",
          }}
        >
          1 click to your best{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c1c1ff 0%, #cebdff 60%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SaaS partners.
          </span>
        </h2>

        {/* Subhead */}
        <p
          className="animate-fade-in font-body text-lg leading-relaxed mx-auto mb-10 max-w-2xl"
          style={{
            animationDelay: "220ms",
            color: "rgba(240,238,238,0.52)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
          }}
        >
          Enter a SaaS platform. Sentinel finds the agencies and consultancies
          in that ecosystem, drafts personalized outreach to each one, and
          builds a custom demo for anyone who replies.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in flex items-center justify-center gap-4 mb-14"
          style={{ animationDelay: "280ms" }}
        >
          <a
            href="#access"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-body font-semibold text-[#080808] text-sm"
          >
            Request Early Access
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="animate-fade-in flex items-center justify-center flex-wrap gap-x-6 gap-y-2"
          style={{ animationDelay: "340ms" }}
        >
          {STATS.map((stat, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-body text-xs"
              style={{ color: "rgba(240,238,238,0.28)" }}
            >
              {i > 0 && (
                <span style={{ color: "rgba(70,69,85,0.5)" }}>·</span>
              )}
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #080808)",
        }}
      />
    </section>
  );
}
