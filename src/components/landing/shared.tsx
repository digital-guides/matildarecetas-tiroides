import { useEffect, useState } from "react";
import { CHECKOUT_URL, PRICE_OFFER, PRICE_REGULAR, RATING_TEXT } from "@/lib/landing-config";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function buildCheckoutUrl(): string {
  if (typeof window === "undefined") return CHECKOUT_URL;
  try {
    const current = new URLSearchParams(window.location.search);
    const target = new URL(CHECKOUT_URL);
    UTM_KEYS.forEach((k) => {
      const v = current.get(k);
      if (v) target.searchParams.set(k, v);
    });
    return target.toString();
  } catch {
    return CHECKOUT_URL;
  }
}

export function CTAButton({ children = "🦋 QUIERO CUIDAR MI TIROIDES", className = "", href: hrefOverride }: { children?: React.ReactNode; className?: string; href?: string }) {
  const [href, setHref] = useState(hrefOverride ?? CHECKOUT_URL);
  useEffect(() => {
    if (hrefOverride) return;
    setHref(buildCheckoutUrl());
  }, []);
  const handleClick = () => {
    if (hrefOverride) return;
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: "Cocina Deliciosa para Tiroides",
        content_category: "Recetario digital",
        value: 17,
        currency: "USD",
      });
    }
  };
  return (
    <a href={href} onClick={handleClick} className={`btn-cta ${className}`}>
      {children}
    </a>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return <span className={`text-[var(--brand-gold)] tracking-wider ${className}`}>★★★★★</span>;
}

export function RatingLine({ light = false }: { light?: boolean }) {
  return (
    <p className={`text-sm font-medium ${light ? "text-white/90" : "text-[var(--brand-text)]"}`}>
      <span className="text-[var(--brand-gold)] tracking-wider">★★★★★</span> 4.9/5 — opiniones verificadas
    </p>
  );
}

export function GuaranteePill({ light = false }: { light?: boolean }) {
  return (
    <span className={`pill ${light ? "bg-white/10 text-white border border-white/20" : "bg-[var(--brand-green-light)] text-[var(--brand-green-accent)]"}`}>
      🛡️ Garantía de 15 días
    </span>
  );
}

export function Countdown() {
  const [t, setT] = useState({ h: 1, m: 32, s: 2 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const box = "flex flex-col items-center justify-center bg-[var(--brand-green-dark)] text-white rounded-xl px-4 py-3 min-w-[78px] border border-white/10";
  const num = "font-display text-3xl md:text-4xl font-bold leading-none";
  const lbl = "text-[10px] mt-1 tracking-widest text-white/70";
  return (
    <div className="flex gap-3 justify-center">
      <div className={box}><span className={num}>{String(t.h).padStart(2,"0")}</span><span className={lbl}>HORAS</span></div>
      <div className={box}><span className={num}>{String(t.m).padStart(2,"0")}</span><span className={lbl}>MINUTOS</span></div>
      <div className={box}><span className={num}>{String(t.s).padStart(2,"0")}</span><span className={lbl}>SEGUNDOS</span></div>
    </div>
  );
}

export { CHECKOUT_URL, PRICE_OFFER, PRICE_REGULAR, RATING_TEXT };
