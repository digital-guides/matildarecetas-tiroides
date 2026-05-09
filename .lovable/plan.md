## Landing Page: Cocina Deliciosa para Tiroides

Crearé una landing page de venta de una sola URL (`/`), mobile-first, responsive, con todas las 15 secciones especificadas, en español neutro latinoamericano, lista para Colombia, México y Perú.

### Estructura de archivos

- `src/routes/index.tsx` — landing completa con SEO (title, meta description, og tags) en `head()`.
- `src/components/landing/` — componentes por sección para mantener el archivo legible:
  - `Hero.tsx`, `PainPoints.tsx`, `PainBox.tsx`, `ProductIntro.tsx`, `BenefitCards.tsx`, `Outcomes.tsx`, `WhatsInside.tsx`, `MidCTA.tsx`, `Testimonials.tsx`, `SpecialOffer.tsx` (con countdown), `WhatsIncluded.tsx`, `Guarantee.tsx`, `FAQ.tsx` (acordeón nativo con `<details>`), `FinalCTA.tsx`, `Footer.tsx`.
- `src/styles.css` — agregar tokens de la paleta solicitada (verde oscuro, verde claro, naranja, dorado, etc.) como variables semánticas en `oklch` y registrar en `@theme inline`.
- `src/lib/landing-config.ts` — constantes editables: `PRICE_REGULAR = "$29.99"`, `PRICE_OFFER = "$9.99"`, `CHECKOUT_URL = "#checkout"` con comentario `// TODO: reemplazar por enlace de Hotmart`.
- `src/assets/` — imágenes placeholder generadas (mockup recetario, collage de platos, hero). WebP donde aplique, `loading="lazy"` en todas excepto la del hero, `decoding="async"`, `width`/`height` explícitos.

### Diseño y paleta

Tokens nuevos en `src/styles.css`:
- `--brand-green-dark` #063F25, `--brand-green-deep` #0B552F, `--brand-green-light` #EAF7EF, `--brand-green-accent` #14783D
- `--brand-orange` #FF7A00, `--brand-orange-light` #FFB13B, `--brand-gold` #F6C344
- `--brand-text` #263442, `--brand-soft-bg` #F8FAF7
- `--gradient-orange: linear-gradient(135deg, var(--brand-orange), var(--brand-orange-light))`
- `--shadow-card: 0 10px 30px -12px rgba(6,63,37,0.18)`
- `--shadow-cta: 0 12px 28px -8px rgba(255,122,0,0.5)`

Tipografía editorial: importar Playfair Display (titulares) e Inter (cuerpo) vía Google Fonts con `display=swap`.

Botón CTA reutilizable: grande, redondeado (rounded-full), gradiente naranja, sombra, `hover:scale-[1.02]`, `transition`.

### Secciones (resumen)

1. **Hero** — fondo verde oscuro, etiqueta "COCINA ACTIVA", titular grande con palabras destacadas en naranja/dorado, subtítulo, collage de platos, CTA naranja, rating 4.9/5, píldora garantía 60 días.
2. **¿Te pasa esto?** — fondo blanco, 5 bloques rosado claro con borde izquierdo rojo y emoji.
3. **Caja dolor extra** — rosa suave con borde rojo.
4. **Presentación del producto** — fondo verde claro, mockup grande (placeholder).
5. **4 cards de beneficio** — grid 2x2 desktop / 1 col mobile.
6. **Lo que vas a lograr** — 5 ítems con íconos verdes en cajas redondeadas.
7. **¿Qué encontrarás adentro?** — verde claro, mockup + 7 módulos en cards horizontales.
8. **CTA intermedio** — verde oscuro, repite botón + rating + garantía.
9. **Testimonios** — 3 cards blancas con sombra, estrellas doradas.
10. **Oferta especial** — verde oscuro, caja precio con badge 75% OFF, $29.99 tachado, $9.99 grande, escasez "23 copias", contador `useEffect` (HH/MM/SS).
11. **¿Qué incluye?** — 3 cards verde claro.
12. **Garantía** — caja verde claro con escudo grande.
13. **FAQ** — acordeón nativo `<details>/<summary>` (sin JS extra), 6 preguntas.
14. **CTA final** — verde oscuro, precios + CTA + rating + garantía.
15. **Footer** — verde casi negro, disclaimer médico, enlaces.

### Aspectos técnicos

- Mobile-first, breakpoints `md:` y `lg:`.
- Todos los CTAs apuntan a `#checkout` (variable centralizada).
- Acordeón FAQ con `<details>` nativo (cero JS, accesible).
- Countdown con `useState` + `setInterval` en cliente, sin librerías.
- Imágenes generadas como placeholders elegantes con `imagegen` (hero collage, mockup ebook, platos), formato WebP/JPG, `loading="lazy"` excepto hero, dimensiones explícitas para evitar CLS.
- SEO: title "Cocina Deliciosa para Tiroides — 60 Recetas", meta description <160, og:title/description/image, H1 único en hero, alt text en todas las imágenes, JSON-LD `Product` con precio y rating.
- Sin librerías pesadas: solo Tailwind y componentes nativos.
- Español neutro: "tú", "tienes", "compra", "recibirás" — revisar todos los textos.

### Edición posterior

Bloque comentado al inicio de `landing-config.ts`:
```ts
// EDITABLE: precios y link de checkout
// Reemplazar CHECKOUT_URL por el enlace real de Hotmart cuando esté disponible.
```
