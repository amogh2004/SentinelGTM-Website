import { useState, useEffect } from "react";
import logoSvg from "../assets/logo.svg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/85 backdrop-blur-xl border-b border-[#c1c1ff]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          <img src={logoSvg} alt="Sentinel logo" className="w-8 h-8 rounded-lg" />
          <span className="font-display font-black text-xl text-white tracking-tighter leading-none group-hover:text-[#c1c1ff] transition-colors duration-200">
            SENTINEL
          </span>
          <span className="text-[10px] font-body uppercase tracking-[0.32em] text-[#c1c1ff]/40 hidden sm:block group-hover:text-[#c1c1ff]/60 transition-colors duration-200">
            GTM Intelligence
          </span>
        </a>

        {/* CTA */}
        <a
          href="#access"
          className="px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 border"
          style={{
            color: "#c1c1ff",
            borderColor: "rgba(193,193,255,0.25)",
            background: "rgba(193,193,255,0.04)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(193,193,255,0.1)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(193,193,255,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(193,193,255,0.04)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(193,193,255,0.25)";
          }}
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}
