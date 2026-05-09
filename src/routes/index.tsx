import { createFileRoute } from "@tanstack/react-router";
import heroCollage from "@/assets/hero-collage.jpg";
import ebookMockup from "@/assets/ebook-mockup.jpg";
import dishesCollage from "@/assets/dishes-collage.jpg";
import {
  CTAButton,
  Countdown,
  GuaranteePill,
  RatingLine,
  Stars,
  PRICE_OFFER,
  PRICE_REGULAR,
} from "@/components/landing/shared";

const SITE_TITLE = "Cocina Deliciosa para Tiroides — 60 Recetas";
const SITE_DESC =
  "60 recetas riquísimas para hipotiroidismo, hipertiroidismo y Hashimoto. Desayunos, almuerzos, cenas y postres fáciles que cuidan tu tiroides.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const fontsLink = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
    />
  </>
);

function Hero() {
  return (
    <section className="bg-[var(--brand-green-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-24 text-center">
        <span className="pill bg-white/10 border border-white/15 text-white/90 tracking-[0.25em] text-xs">
          COCINA ACTIVA
        </span>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
          ¿Y si el cansancio, la <span className="text-[var(--brand-orange-light)]">caída del pelo</span> y los{" "}
          <span className="text-[var(--brand-gold)]">kilos de más</span> tuvieran una sola causa que nadie está tratando?
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
          Desayunos, almuerzos, cenas y postres pensados especialmente para hipotiroidismo, hipertiroidismo y Hashimoto.
          Recetas fáciles, ricas y seguras para tu tiroides — sin complicarte.
        </p>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-4xl mx-auto">
          <img
            src={heroCollage}
            alt="Collage de platos saludables para tiroides"
            width={1600}
            height={896}
            decoding="async"
            className="w-full h-auto block"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton />
          <RatingLine light />
          <GuaranteePill light />
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  "😩 Te diagnosticaron hipotiroidismo, hipertiroidismo o Hashimoto y nadie te explicó bien qué puedes comer y qué no. Estás perdida.",
  "⚖️ El peso sube sin freno, el metabolismo no responde y ninguna dieta te funciona — porque ninguna está pensada para tu condición tiroidea.",
  "🤷‍♀️ Buscas recetas en internet pero te vuelves loca: ¿el brócoli hace mal? ¿puedo comer gluten? ¿la soya me afecta? Cada página te dice algo distinto.",
  "😔 Sientes que comer ‘para la tiroides’ es aburrido, sin gusto y siempre lo mismo. Terminas comiendo lo de siempre porque no sabes qué más preparar.",
  "🥱 La hinchazón, la caída del pelo, la piel seca, el estreñimiento y el cansancio que no se va… hace meses o años que estás así y nadie te da una solución concreta.",
];

function PainSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          ¿Te pasa esto?
        </h2>
        <div className="mt-12 space-y-4">
          {painPoints.map((p, i) => {
            const [emoji, ...rest] = p.split(" ");
            return (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#FFF1F1] border-l-4 border-[#E27575] rounded-xl p-5 md:p-6 shadow-sm"
              >
                <span className="text-3xl shrink-0 leading-none">{emoji}</span>
                <p className="text-[var(--brand-text)] leading-relaxed">{rest.join(" ")}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-[#FFF1F1] border-l-4 border-[#E27575] rounded-xl p-6 md:p-7 flex items-start gap-4">
          <span className="text-3xl">💸</span>
          <p className="text-[var(--brand-text)] font-medium leading-relaxed">
            Gastaste en endocrinólogos, nutricionistas y suplementos, pero nadie te dio un plan de comidas concreto, rico y fácil de seguir para tu tiroides o tu Hashimoto.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductIntro() {
  return (
    <section className="bg-[var(--brand-green-light)] py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <span className="pill bg-white text-[var(--brand-green-accent)] border border-[var(--brand-green-accent)]/20 text-xs tracking-widest">
          TU NUEVO RECETARIO
        </span>
        <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)] leading-tight">
          Te presentamos: <br className="hidden md:block" />
          <span className="text-[var(--brand-green-accent)]">Cocina Deliciosa para Tiroides</span>
        </h2>
        <p className="mt-6 text-lg text-[var(--brand-text)]/80 max-w-3xl mx-auto leading-relaxed">
          El recetario con 60 recetas completas diseñadas especialmente para personas con hipotiroidismo e hipertiroidismo.
          Cada receta está pensada para nutrir tu tiroides, levantarte la energía y — sobre todo — ser bien rica.
        </p>
        <div className="mt-12 rounded-3xl overflow-hidden shadow-[var(--shadow-card)] bg-white">
          <img
            src={ebookMockup}
            alt="Mockup del recetario digital Cocina Deliciosa para Tiroides"
            width={1280}
            height={1024}
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "🍽️", title: "60 Recetas Completas", text: "Desayunos, almuerzos, cenas y postres para todo el día." },
  { icon: "🦋", title: "Hipo e Hipertiroidismo", text: "Recetas adaptadas a condiciones tiroideas, incluido Hashimoto." },
  { icon: "🧁", title: "Postres Especiales", text: "Postres pensados para disfrutar sin resignar sabor." },
  { icon: "⚡", title: "Fáciles y Rápidas", text: "Ingredientes que consigues en cualquier lado y preparaciones simples." },
];

function BenefitCards() {
  return (
    <section className="bg-[var(--brand-soft)] py-16 md:py-20 px-5">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5 md:gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="card-soft p-7 md:p-8">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-green-light)] flex items-center justify-center text-3xl">
              {b.icon}
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-[var(--brand-green-dark)]">{b.title}</h3>
            <p className="mt-2 text-[var(--brand-text)]/75 leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const outcomes = [
  { icon: "🔥", title: "Reactiva tu metabolismo", text: "Recetas con alimentos que estimulan naturalmente la función tiroidea y aceleran tu metabolismo." },
  { icon: "💧", title: "Baja la inflamación", text: "Ingredientes antiinflamatorios que reducen la hinchazón y te hacen sentir mejor en general." },
  { icon: "⚡", title: "Recupera tu energía", text: "Deja de andar agotada. Cada comida está pensada para darte vitalidad desde el primer bocado." },
  { icon: "🧠", title: "Despeja la mente", text: "Nutrientes clave como selenio, zinc y yodo que te ayudan a pensar con más claridad y concentrarte mejor." },
  { icon: "❤️", title: "Come rico sin culpa", text: "Se terminaron las comidas aburridas. Platos que toda tu familia va a querer repetir." },
];

function Outcomes() {
  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          Lo que vas a lograr
        </h2>
        <div className="mt-12 space-y-5">
          {outcomes.map((o) => (
            <div key={o.title} className="flex items-start gap-5 card-soft p-6 md:p-7">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--brand-green-light)] flex items-center justify-center text-2xl">
                {o.icon}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--brand-green-dark)]">{o.title}</h3>
                <p className="mt-1 text-[var(--brand-text)]/75 leading-relaxed">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const modules = [
  "🌅 15 Recetas de Desayunos para Tiroides",
  "🥗 15 Recetas de Almuerzos Nutritivos",
  "🍝 15 Recetas de Cenas Livianas y Reparadoras",
  "🧁 15 Postres Especiales para Hipertiroidismo",
  "📋 Guía de Alimentos Permitidos y Prohibidos",
  "🛒 Lista de Compras Semanal Descargable",
  "💡 Tips de Cocina Rápida y Reemplazos Inteligentes",
];

function WhatsInside() {
  return (
    <section className="bg-[var(--brand-green-light)] py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          ¿Qué vas a encontrar adentro?
        </h2>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-[var(--shadow-card)] relative">
          <img
            src={dishesCollage}
            alt="60 Recetas Deliciosas Para Tiroides"
            width={1600}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-green-dark)]/85 via-[var(--brand-green-dark)]/30 to-transparent flex items-end">
            <div className="p-6 md:p-10 text-white">
              <p className="font-display text-2xl md:text-4xl font-bold leading-tight">
                60 Recetas Deliciosas <br /> Para Tiroides
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {modules.map((m) => {
            const [emoji, ...rest] = m.split(" ");
            return (
              <div key={m} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-white">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-green-light)] flex items-center justify-center text-2xl shrink-0">
                  {emoji}
                </div>
                <p className="font-semibold text-[var(--brand-green-dark)]">{rest.join(" ")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="bg-[var(--brand-green-dark)] text-white py-16 md:py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-10">
          <img
            src={heroCollage}
            alt="Recetas saludables para tiroides"
            width={1600}
            height={896}
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <CTAButton />
          <RatingLine light />
          <GuaranteePill light />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "María Elena Gutiérrez",
    text: "Hace 3 semanas que cocino con este recetario y la diferencia es impresionante. Mis desayunos con avena y semillas de calabaza se transformaron en mi ritual de cada mañana. Por fin algo que funciona y encima es rico.",
  },
  {
    name: "Claudia Fernández Rivas",
    text: "Tengo hipertiroidismo y encontrar postres que pudiera comer sin sentirme mal era misión imposible. Probé la torta de banana con harina de almendras del recetario y no lo podía creer: riquísima y sin un solo ingrediente que me haga mal.",
  },
  {
    name: "Patricia Morales Vega",
    text: "Lo que más me gustó es que las recetas usan ingredientes que consigo en cualquier supermercado. No tuve que comprar nada raro ni gastar de más. La sopa de lentejas con cúrcuma es mi favorita. 100% recomendado.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[var(--brand-soft)] py-16 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          Lo que dicen nuestras alumnas
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-soft p-7 flex flex-col">
              <Stars />
              <p className="mt-4 text-[var(--brand-text)]/85 leading-relaxed flex-1">“{t.text}”</p>
              <p className="mt-5 font-semibold text-[var(--brand-green-dark)]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialOffer() {
  return (
    <section className="bg-[var(--brand-green-dark)] text-white py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Oferta Especial por <span className="text-[var(--brand-orange-light)]">Tiempo Limitado</span>
        </h2>
        <p className="mt-4 text-white/80 text-lg">Llévate hoy las 60 recetas con un descuento insuperable</p>

        <div className="mt-10 bg-[var(--brand-green-deep)] rounded-3xl p-8 md:p-10 border-2 border-[var(--brand-green-accent)] shadow-2xl">
          <span className="pill bg-[var(--brand-orange)] text-white text-sm font-bold">75% OFF</span>
          <p className="mt-5 text-white/60 line-through text-lg">Precio regular: {PRICE_REGULAR}</p>
          <p className="font-display text-6xl md:text-7xl font-bold mt-2 text-white">{PRICE_OFFER}</p>
          <p className="mt-4 text-[var(--brand-orange-light)] font-semibold">
            Quedan solo 23 copias con descuento 🔥
          </p>

          <div className="mt-8">
            <Countdown />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton>🍽️ SÍ, QUIERO MIS RECETAS</CTAButton>
            <RatingLine light />
          </div>
        </div>
      </div>
    </section>
  );
}

const includes = [
  { icon: "📱", title: "Acceso desde el celular y la computadora" },
  { icon: "✉️", title: "Entrega inmediata por mail" },
  { icon: "♾️", title: "Acceso de por vida + actualizaciones" },
];

function WhatsIncluded() {
  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          ¿Qué incluye?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {includes.map((it) => (
            <div key={it.title} className="bg-[var(--brand-green-light)] rounded-2xl p-7 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm">
                {it.icon}
              </div>
              <p className="mt-5 font-semibold text-[var(--brand-green-dark)] text-lg leading-snug">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-white pb-16 md:pb-24 px-5">
      <div className="max-w-3xl mx-auto bg-[var(--brand-green-light)] border-2 border-[var(--brand-green-accent)]/30 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm">
          🛡️
        </div>
        <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold text-[var(--brand-green-dark)]">
          Garantía Total de 60 Días
        </h2>
        <p className="mt-4 text-[var(--brand-text)]/80 leading-relaxed">
          Tienes 60 días enteros para revisar el material, aplicar lo que aprendiste y ver los resultados.
          Si no quedas del todo conforme, pides el reembolso y te devolvemos todo. Es riesgo CERO para ti
          y compromiso total de nuestra parte.
        </p>
      </div>
    </section>
  );
}

const faqs = [
  { q: "¿Por cuánto tiempo tengo acceso al contenido?", a: "Tendrás acceso de por vida al material digital y podrás consultarlo cuando quieras." },
  { q: "¿Cómo accedo al material?", a: "Después de completar tu compra, recibirás el acceso en tu correo electrónico. Puedes abrirlo desde tu celular, computadora o tablet." },
  { q: "¿Cuánto tardan en mandarme el material?", a: "El acceso es inmediato. Apenas se confirma el pago, recibirás el material en tu correo." },
  { q: "¿Es un producto físico?", a: "No. Es un producto 100% digital. No se envía nada por correo físico." },
  { q: "¿Necesito saber cocinar?", a: "No. Las recetas están pensadas para ser simples, prácticas y fáciles de seguir." },
  { q: "¿Los ingredientes se consiguen fácil?", a: "Sí. La mayoría de ingredientes son comunes y puedes conseguirlos en supermercados o mercados locales." },
];

function FAQ() {
  return (
    <section className="bg-[var(--brand-soft)] py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-[var(--brand-green-dark)]">
          Preguntas Frecuentes
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white rounded-2xl shadow-sm border border-[var(--brand-green-light)] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-semibold text-[var(--brand-green-dark)] text-lg">
                <span>{f.q}</span>
                <span className="w-8 h-8 shrink-0 rounded-full bg-[var(--brand-green-light)] text-[var(--brand-green-accent)] flex items-center justify-center font-bold text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[var(--brand-text)]/80 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[var(--brand-green-dark)] text-white py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Empieza a cocinar para tu salud <span className="text-[var(--brand-orange-light)]">hoy</span>
        </h2>
        <p className="mt-4 text-white/80 text-lg">
          60 recetas riquísimas que cuidan tu tiroides. Sin complicarte.
        </p>
        <div className="mt-8 inline-flex flex-col items-center bg-[var(--brand-green-deep)] rounded-3xl px-8 py-6 border border-white/10">
          <p className="text-white/60 line-through">Antes: {PRICE_REGULAR}</p>
          <p className="font-display text-5xl md:text-6xl font-bold mt-1">Hoy: {PRICE_OFFER}</p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton>🍽️ SÍ, QUIERO MIS RECETAS YA</CTAButton>
          <RatingLine light />
          <GuaranteePill light />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#031A0F] text-white/70 py-12 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs md:text-sm leading-relaxed text-white/55">
          <strong className="text-white/75">Aviso importante:</strong> Este producto es un material digital informativo y educativo
          sobre cocina y alimentación. No sustituye la consulta, diagnóstico ni tratamiento de un médico, endocrinólogo,
          nutricionista u otro profesional de salud. Los resultados pueden variar según cada persona. Si tienes una condición médica,
          estás embarazada, tomas medicación o sigues un tratamiento, consulta con tu profesional de salud antes de hacer cambios en tu alimentación.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#" className="hover:text-white">Política de privacidad</a>
          <a href="#" className="hover:text-white">Términos y condiciones</a>
          <a href="#" className="hover:text-white">Contacto</a>
          <a href="#" className="hover:text-white">Reembolsos</a>
        </div>
        <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} Cocina Deliciosa para Tiroides</p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {fontsLink}
      <Hero />
      <PainSection />
      <ProductIntro />
      <BenefitCards />
      <Outcomes />
      <WhatsInside />
      <MidCTA />
      <Testimonials />
      <SpecialOffer />
      <WhatsIncluded />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
