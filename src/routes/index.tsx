import { createFileRoute } from "@tanstack/react-router";
import heroCollage from "@/assets/hero-nueva.webp";
import dishesCollage from "@/assets/que-vas-encontrar.webp";
import matildaCocina from "@/assets/matilda-cocina.webp";
import matildaPerfil from "@/assets/matilda-perfil.png";
import testimonioElena from "@/assets/testimonio-elena.jpeg";
import testimonioClaudia from "@/assets/testimonio-claudia.jpeg";
import testimonioPatricia from "@/assets/testimonio-patricia.jpeg";
import garantiaHotmart from "@/assets/garantia-hotmart.png";
import {
  CTAButton,
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
        <span className="pill bg-white/10 border border-white/15 tracking-[0.18em] text-xs" style={{ color: "#E11D8A" }}>
          Las Recetas de Matilda
        </span>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
          ¿Ya no sabes qué comer con la tiroides y cada día te sientes peor aunque sigas las indicaciones del médico?
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
          Una guía práctica con 60 recetas organizadas, lista de compras y plan semanal — para que dejes de adivinar qué puedes comer y empieces a sentirte mejor desde tu cocina.
        </p>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-4xl mx-auto">
          <img
            src={heroCollage}
            alt="Recetario Cocina Para Tu Tiroides con plan semanal y lista de compras"
            width={1456}
            height={1092}
            decoding="async"
            className="w-full h-auto block"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <CTAButton href="#cta-compra" />
          <p className="text-white/60 line-through text-base mt-2">Regular {PRICE_REGULAR}</p>
          <p className="text-white/80 text-xs tracking-widest uppercase">Precio de lanzamiento</p>
          <p className="font-display text-4xl font-bold text-white leading-none">{PRICE_OFFER}</p>
          <figure className="mt-4 max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
            <div className="flex items-center gap-3">
              <img
                src={testimonioElena}
                alt="María Elena G."
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="font-semibold text-white leading-tight">María Elena G.</p>
                <p className="text-xs text-white/60">Ciudad de México</p>
              </div>
              <span className="ml-auto text-[var(--brand-gold)] tracking-wider text-sm">★★★★★</span>
            </div>
            <blockquote className="mt-3 text-sm md:text-[15px] text-white/85 leading-relaxed">
              “Llevaba meses sin saber qué desayunar. Todo lo que encontraba en internet se contradecía y terminaba comiendo lo mismo de siempre. Con este recetario por fin tengo recetas claras, con ingredientes que consigo aquí, y que no me caen mal. Ya no me despierto tan hinchada por las mañanas.”
            </blockquote>
          </figure>
          <RatingLine light />
          <GuaranteePill light />
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  "😩 Te diagnosticaron hipotiroidismo, hipertiroidismo o Hashimoto y nadie te explicó qué puedes comer y qué no. Cada vez que buscas en internet encuentras información diferente y terminas más confundida que antes.",
  "🫠 Te despiertas hinchada aunque casi no hayas comido. Sientes la cara pesada, el cuerpo inflado — y no sabes qué alimento te lo está causando.",
  "💇‍♀️ Se te cae mucho cabello y no sabes si es por la tiroides, por los medicamentos o por lo que estás comiendo. Nadie te da una respuesta clara.",
  "⚖️ El peso no baja aunque comas poco. Tu metabolismo no responde y ninguna dieta te funciona — porque ninguna está pensada para tu condición tiroidea.",
  "😔 Sientes que comer para la tiroides es aburrido y siempre lo mismo. Terminas comiendo lo de siempre porque no sabes qué más preparar — o haces dos comidas distintas porque tu familia no quiere comer 'comida de enfermo'.",
  "🥱 La fatiga, la piel seca, el estreñimiento, la irritabilidad — llevas meses o años así y nadie te da un plan concreto de qué comer para sentirte mejor.",
];

function MatildaStory() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24 px-5">
      <div className="max-w-[680px] mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={matildaPerfil}
            alt="Matilda García"
            width={72}
            height={72}
            loading="lazy"
            decoding="async"
            className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover shadow-md ring-2 ring-white"
          />
          <span className="font-bold text-lg md:text-xl text-[var(--brand-green-dark)]">
            Matilda García
          </span>
        </div>
        <div className="mt-6 space-y-5 text-base md:text-[17px] leading-relaxed text-[#374151]">
          <p>Cuando me diagnosticaron un problema de tiroides pensé que lo más difícil sería tomar la medicación.</p>
          <p>Pero con el tiempo descubrí que lo que más me agotaba era no saber qué comer.</p>
          <p>Buscaba información en internet y terminaba más confundida que antes. Un día leía que evitara el brócoli, al siguiente que no había problema. Lo mismo con la avena, la soja y muchos otros alimentos. Sentía que cada página decía algo diferente.</p>
          <p>Llegó un momento en que abría la cocina y pensaba: “¿Qué puedo preparar hoy sin estar equivocándome otra vez?”</p>
          <p>Lo que necesitaba no era una dieta extrema. Necesitaba una guía clara, recetas sencillas y dejar de pasar horas investigando cada ingrediente.</p>
        </div>
      </div>
    </section>
  );
}

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
  { icon: "💧", title: "Deshinchate desde la primera semana", text: "Recetas con alimentos antiinflamatorios que reducen la retención de líquidos y ese peso que sientes en el cuerpo y la cara cada mañana." },
  { icon: "🧠", title: "Deja de adivinar qué puedes comer", text: "Una guía clara de alimentos permitidos y a evitar, adaptada a tu condición — sin contradicciones, sin confusión." },
  { icon: "⚡", title: "Levántate sin ese cansancio que no se va", text: "Cada receta está pensada con nutrientes clave como selenio, zinc y yodo que apoyan naturalmente la función de tu tiroides." },
  { icon: "❤️", title: "Come rico sin hacer dos comidas", text: "Platos que le gustan a toda la familia. No tienes que cocinar por separado ni comer aburrido para cuidarte." },
  { icon: "🗓️", title: "Organiza tu semana sin complicarte", text: "Plan semanal + lista de compras lista para usar. Sabes exactamente qué cocinar cada día sin tener que pensar." },
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

        <div className="mt-10 rounded-3xl overflow-hidden shadow-[var(--shadow-card)] bg-white">
          <img
            src={dishesCollage}
            alt="Todo lo que incluye tu recetario: 60 recetas, plan semanal, lista de compras y más"
            width={1456}
            height={1100}
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
          />
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
    <section id="cta-compra" className="bg-[var(--brand-green-dark)] text-white py-16 md:py-20 px-5 scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-10">
          <img
            src={matildaCocina}
            alt="Matilda en su cocina con recetas saludables para tiroides"
            width={873}
            height={1064}
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
    name: "María Elena G.",
    location: "Ciudad de México",
    photo: testimonioElena,
    text: "Llevaba meses sin saber qué desayunar. Todo lo que encontraba en internet se contradecía y terminaba comiendo lo mismo de siempre. Con este recetario por fin tengo recetas claras, con ingredientes que consigo aquí, y que no me caen mal. Ya no me despierto tan hinchada por las mañanas.",
  },
  {
    name: "Claudia F.",
    location: "Bogotá, Colombia",
    photo: testimonioClaudia,
    text: "Tengo Hashimoto y lo más difícil era no saber qué podía comer sin sentirme peor. Probé varias recetas del recetario la primera semana y no podía creer que comer rico y cuidarme fueran la misma cosa. Las recetas usan ingredientes normales, nada raro ni caro.",
  },
  {
    name: "Patricia M.",
    location: "Lima, Perú",
    photo: testimonioPatricia,
    text: "Lo que más me gustó es que no tengo que hacer una comida aparte para el resto de mi familia. Todos comemos lo mismo y nadie se queja. La sopa de lentejas con cúrcuma ya es fija en mi casa.",
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
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div>
                  <p className="font-semibold text-[var(--brand-green-dark)] leading-tight">{t.name}</p>
                  <p className="text-sm text-[var(--brand-text)]/60">{t.location}</p>
                </div>
              </div>
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
        <img
          src={garantiaHotmart}
          alt="Garantía de 15 días con Hotmart"
          loading="lazy"
          className="mx-auto h-28 md:h-36 w-auto object-contain"
        />
        <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold text-[var(--brand-green-dark)]">
          Garantía de 15 días
        </h2>
        <p className="mt-4 text-[var(--brand-text)]/80 leading-relaxed">
          Tienes 15 días para revisar el material, preparar las recetas y ver cómo te sientes. Si no estás conforme por cualquier motivo, pides el reembolso y te devolvemos todo. Sin preguntas, sin complicaciones.
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
          <p className="text-white/60 line-through text-lg">Regular {PRICE_REGULAR}</p>
          <p className="mt-2 text-white/80 text-sm tracking-widest uppercase">Precio de lanzamiento</p>
          <p className="font-display text-5xl md:text-6xl font-bold mt-1">{PRICE_OFFER}</p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton>Si!, Quiero mi Plan</CTAButton>
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
      <MatildaStory />
      <Outcomes />
      <WhatsInside />
      <MidCTA />
      <Testimonials />
      <SpecialOffer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
