import logoSvg from "../assets/logo.svg";

export function Footer() {
  return (
    <footer className="py-16 px-6 relative">
      {/* Top divider */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(193,193,255,0.06) 30%, rgba(193,193,255,0.06) 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Wordmark */}
        <div className="flex flex-col items-center gap-3">
          <img src={logoSvg} alt="Sentinel logo" className="w-12 h-12 rounded-xl opacity-80" />
          <div>
            <p
              className="font-display font-black text-2xl text-white tracking-tighter leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              SENTINEL
            </p>
            <p
              className="font-body text-[10px] uppercase tracking-[0.35em] mt-1"
              style={{ color: "rgba(193,193,255,0.35)" }}
            >
              GTM Intelligence
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-sm max-w-xs"
          style={{ color: "rgba(240,238,238,0.25)" }}
        >
          From SaaS target to partner meeting. Automatically.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { label: "sentinelgtm.ai", href: "#" },
            { label: "Request Access", href: "#access" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs transition-colors duration-200"
              style={{ color: "rgba(240,238,238,0.25)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(193,193,255,0.7)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,238,238,0.25)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="font-body text-[11px]"
          style={{ color: "rgba(240,238,238,0.15)" }}
        >
          © 2026 Sentinel GTM · Built with Claude
        </p>
      </div>
    </footer>
  );
}
