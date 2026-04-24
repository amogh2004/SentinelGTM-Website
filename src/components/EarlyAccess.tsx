import { useState, FormEvent } from "react";
import { useInView } from "../hooks/useInView";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID ?? "YOUR_FORM_ID";

export function EarlyAccess() {
  const { ref, inView } = useInView();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    ecosystem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full font-body text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder:text-[rgba(240,238,238,0.22)]";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(193,193,255,0.10)",
    color: "#f0eeee",
  };
  const inputFocusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      e.currentTarget.style.borderColor = "rgba(193,193,255,0.35)";
      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      e.currentTarget.style.borderColor = "rgba(193,193,255,0.10)";
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
    },
  };

  return (
    <section id="access" className="py-32 px-6 relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(93,95,239,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal text-center mb-10 ${inView ? "in-view" : ""}`}
        >
          <p
            className="font-body text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ color: "rgba(193,193,255,0.55)" }}
          >
            Private Beta
          </p>
          <h2
            className="font-display font-bold text-white mb-3"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
            }}
          >
            Be first in line.
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "rgba(240,238,238,0.48)" }}
          >
            Sentinel is in private beta. Request access and we&apos;ll reach out
            to schedule a walkthrough.
          </p>
        </div>

        {/* Card */}
        <div
          className={`reveal card-glow rounded-2xl p-8 ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: "80ms" }}
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.2)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                You&apos;re on the list.
              </h3>
              <p
                className="font-body text-sm"
                style={{ color: "rgba(240,238,238,0.45)" }}
              >
                We&apos;ll be in touch shortly with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-[11px] uppercase tracking-[0.15em]"
                    style={{ color: "rgba(240,238,238,0.35)" }}
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Arun K."
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    {...inputFocusHandlers}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-[11px] uppercase tracking-[0.15em]"
                    style={{ color: "rgba(240,238,238,0.35)" }}
                  >
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    {...inputFocusHandlers}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-body text-[11px] uppercase tracking-[0.15em]"
                  style={{ color: "rgba(240,238,238,0.35)" }}
                >
                  Work Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  {...inputFocusHandlers}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-body text-[11px] uppercase tracking-[0.15em]"
                  style={{ color: "rgba(240,238,238,0.35)" }}
                >
                  Target Ecosystem{" "}
                  <span style={{ color: "rgba(240,238,238,0.2)" }}>
                    — optional
                  </span>
                </label>
                <input
                  name="ecosystem"
                  type="text"
                  placeholder="e.g. Pipedrive, HubSpot, Salesforce…"
                  value={form.ecosystem}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  {...inputFocusHandlers}
                />
              </div>

              {status === "error" && (
                <p
                  className="font-body text-xs rounded-lg px-3 py-2"
                  style={{
                    color: "#f87171",
                    background: "rgba(248,113,113,0.06)",
                    border: "1px solid rgba(248,113,113,0.15)",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full py-3.5 rounded-xl font-body font-semibold text-sm text-[#080808] mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Request Early Access →"}
              </button>

              <p
                className="text-center font-body text-[11px]"
                style={{ color: "rgba(240,238,238,0.2)" }}
              >
                No spam. We&apos;ll only reach out about Sentinel.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
