import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, CarFront, Check, ChevronDown, Clock3, Gauge, MapPin, MessageCircle, ShieldCheck, Sparkles, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const facts = [
  { value: "100%", label: "Autos inspeccionados", icon: ShieldCheck },
  { value: "24 h", label: "Gestión de consignación", icon: Clock3 },
  { value: "Viña", label: "Atención local", icon: MapPin },
]

const services = [
  {
    number: "01",
    icon: CarFront,
    title: "Compra y venta",
    description: "Autos usados y seminuevos seleccionados, con una experiencia clara desde el primer contacto.",
    detail: "Un catálogo elegido con cuidado, pensado para encontrar el auto que va contigo.",
    link: "#catalogo",
    action: "Explorar catálogo",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Consignación premium",
    description: "Nos encargamos de exhibir tu vehículo y acompañarte durante todo el proceso de venta.",
    detail: "Recepción, exhibición y apoyo con la gestión documental.",
    link: "https://wa.me/56931466279",
    action: "Conocer el proceso",
  },
]

function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.26em] text-[#facc15]">
        <span className="h-px w-7 bg-[#facc15]" aria-hidden="true" /> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{copy}</p>}
    </div>
  )
}

function HeroSearch() {
  const filters = ["Marca", "Modelo", "Rango de precio", "Carrocería"]
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-[#171a20]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-4">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr_auto]">
        {filters.map((filter, index) => (
          <div key={filter} className="flex min-h-[58px] items-center justify-between rounded-xl border border-white/[.07] bg-white/[.035] px-4">
            <span>
              <span className="block text-[9px] font-semibold uppercase tracking-[.16em] text-white/35">{filter}</span>
              <span className="mt-1 block text-xs font-medium text-white/75">{["Todas las marcas", "Elige tu modelo", "Cualquier precio", "Todos los tipos"][index]}</span>
            </span>
            <ChevronDown className="size-4 text-white/35" aria-hidden="true" />
          </div>
        ))}
        <a href="#catalogo" className={buttonVariants({ className: "min-h-[58px] rounded-xl bg-[#facc15] px-5 font-bold text-[#111] hover:bg-[#f7dc64]" })}>
          Ver autos <ArrowRight data-icon="inline-end" />
        </a>
      </div>
    </div>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <Card className="group h-full rounded-2xl border border-white/10 bg-[#171a20] text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#facc15]/45 hover:shadow-[0_16px_50px_rgba(250,204,21,.08)]">
      <CardHeader className="p-6 pb-2 sm:p-7 sm:pb-2">
        <div className="flex items-center justify-between">
          <span className="flex size-12 items-center justify-center rounded-xl bg-[#facc15]/10 text-[#facc15]"><Icon className="size-5" aria-hidden="true" /></span>
          <span className="font-display text-xs font-bold tracking-[.16em] text-white/25">{service.number}</span>
        </div>
        <CardTitle className="font-display pt-5 text-xl font-bold text-white">{service.title}</CardTitle>
        <CardDescription className="text-sm leading-6 text-white/50">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
        <p className="border-t border-white/10 pt-4 text-xs leading-5 text-white/40">{service.detail}</p>
        <a href={service.link} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#facc15] transition-all group-hover:gap-3">
          {service.action} <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </CardContent>
    </Card>
  )
}

export default function Inicio() {
  return (
    <div className="page-shell min-h-screen bg-[#0f1115] text-white">
      <Navbar />
      <main>
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#0f1115] sm:min-h-[760px]">
          <img src="/images/altiva-hero.png" alt="Sedán deportivo en un estudio oscuro con iluminación cálida" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-65" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/90 to-[#0f1115]/15" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/35" aria-hidden="true" />
          <div className="surface-grid absolute inset-0 -z-10 opacity-[.16]" aria-hidden="true" />
          <div className="section-wrap flex min-h-[720px] flex-col justify-center pb-16 pt-20 sm:min-h-[760px] sm:pb-20">
            <div className="max-w-[720px]">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.27em] text-[#facc15] sm:text-xs">
                <span className="inline-block h-px w-8 bg-[#facc15]" aria-hidden="true" /> Conduce algo extraordinario
              </p>
              <h1 className="font-display max-w-[720px] text-5xl font-extrabold leading-[.99] tracking-[-.055em] text-white sm:text-7xl lg:text-[86px]">
                Tu próximo auto <span className="text-[#facc15]">a máxima velocidad.</span>
              </h1>
              <p className="mt-6 max-w-[550px] text-sm leading-7 text-white/65 sm:text-base">
                Compra, venta y consignación garantizada en Viña del Mar. La agilidad que buscas para cambiar de auto.
              </p>
            </div>

            <div className="max-w-[940px]"><HeroSearch /></div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              {facts.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 border-r border-white/10 pr-7 last:border-0">
                  <Icon className="size-4 text-[#facc15]" aria-hidden="true" />
                  <div><p className="font-display text-sm font-bold text-white">{value}</p><p className="mt-0.5 text-[10px] text-white/45">{label}</p></div>
                </div>
              ))}
            </div>
            <a href="#servicios" className="mt-10 hidden w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 transition hover:text-white sm:flex">
              Descubre Altiva <ArrowDown className="size-3" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="overflow-hidden border-y border-black/15 bg-[#facc15] py-3.5 text-[#111]">
          <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap font-display text-[11px] font-extrabold uppercase tracking-[.18em]">
            {Array.from({ length: 4 }, (_, index) => <span key={index} className="flex items-center gap-7">COMPRA Y VENTA <span aria-hidden="true">✳</span> CONSIGNACIÓN PREMIUM <span aria-hidden="true">✳</span> VIÑA DEL MAR <span aria-hidden="true">✳</span> Lunes a sábado · 10:00–19:00 <span aria-hidden="true">✳</span></span>)}
          </div>
        </div>

        <section id="servicios" className="section-wrap py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Pits & performance" title="Tu camino al próximo auto, sin vueltas." copy="Un equipo local que pone claridad, confianza y atención personal en cada etapa." />
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/45">
                <BadgeCheck className="size-5 text-[#facc15]" aria-hidden="true" /> Asesoría cercana. Proceso transparente.
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => <ServiceCard key={service.number} service={service} />)}
            </div>
          </div>
        </section>

        <section id="catalogo" className="border-y border-white/[.06] bg-[#15181e] py-20 sm:py-28">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Selección Altiva" title="Encuentra tu siguiente destino." copy="Vehículos elegidos con criterio, preparados para salir a la carretera contigo." />
              <span className="mb-10 hidden items-center gap-2 text-xs text-white/40 sm:flex">Colección seleccionada <ArrowRight className="size-4 text-[#facc15]" aria-hidden="true" /></span>
            </div>
            <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#101216] lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px]">
                <img src="/images/altiva-hero.png" alt="Detalle de un auto premium destacado de la colección Altiva" className="absolute inset-0 size-full object-cover object-[65%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.17em] text-white/80 backdrop-blur">Destacado Altiva</span>
                <div className="absolute bottom-6 left-6"><p className="text-[10px] uppercase tracking-[.18em] text-[#facc15]">Colección seleccionada</p><p className="font-display mt-2 text-2xl font-bold sm:text-3xl">El próximo capítulo empieza aquí.</p></div>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#facc15]">Altiva Autos · Viña del Mar</p>
                <h3 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">Cada detalle, pensado para que elijas bien.</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">Conoce una selección de autos usados y seminuevos en un espacio donde puedes mirar con calma y resolver tus dudas de frente.</p>
                <div className="mt-7 flex flex-col gap-3">
                  {["Acompañamiento personal", "Información clara de cada vehículo", "Visítanos en Camino Internacional 3500"].map((item) => <p key={item} className="flex items-center gap-3 text-xs text-white/65"><Check className="size-4 text-[#facc15]" aria-hidden="true" />{item}</p>)}
                </div>
                <a href="https://wa.me/56931466279" className={buttonVariants({ size: "lg", className: "mt-8 w-fit rounded-lg bg-[#facc15] px-5 font-bold text-[#111] hover:bg-[#f7dc64]" })}>Consultar disponibilidad <ArrowUpRight data-icon="inline-end" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap grid gap-8 py-20 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[480px]">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/altiva%20mujer-i8ykV1QrYUKC1HDHyLwhCeYlp33t4D.jpg" alt="Asesora de Autos Altiva junto a un vehículo en la sucursal" className="absolute inset-0 size-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur"><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#facc15]">Siempre cerca</p><p className="mt-1 text-xs text-white">Atención personal en terreno</p></div>
          </div>
          <div className="lg:pl-8">
            <SectionHeading eyebrow="El sello Altiva" title="Tu tranquilidad también viaja contigo." copy="Nos mueve hacer que comprar o vender un auto se sienta sencillo. Te acompañamos de principio a fin, con atención directa y una mirada local." />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><ShieldCheck className="size-5 text-[#facc15]" aria-hidden="true" /><h3 className="mt-4 text-sm font-bold">Confianza en cada paso</h3><p className="mt-2 text-xs leading-5 text-white/45">Conversaciones claras para que sepas qué esperar durante el proceso.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><Wrench className="size-5 text-[#facc15]" aria-hidden="true" /><h3 className="mt-4 text-sm font-bold">Autos seleccionados</h3><p className="mt-2 text-xs leading-5 text-white/45">Un catálogo que prioriza la calidad y la información de cada vehículo.</p></div>
            </div>
            <a href="https://wa.me/56931466279" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#facc15]">Conversemos sobre tu próximo auto <ArrowRight className="size-4" aria-hidden="true" /></a>
          </div>
        </section>

        <section id="ubicacion" className="border-y border-white/[.06] bg-[#15181e] py-20 sm:py-24">
          <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="Pit stop station" title="Pasa a saludarnos en Viña." copy="La atención presencial de Autos Altiva es de Lunes a sábado, de 10:00 a 19:00 hrs. Ven a conocer los autos y conversemos en persona." />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0f1115] p-4"><MapPin className="mt-0.5 size-4 shrink-0 text-[#facc15]" aria-hidden="true" /><div><p className="text-xs font-bold">Camino Internacional 3500</p><p className="mt-1 text-[11px] text-white/45">Viña del Mar, Valparaíso</p></div></div>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0f1115] p-4"><Clock3 className="mt-0.5 size-4 shrink-0 text-[#facc15]" aria-hidden="true" /><div><p className="text-xs font-bold">Lunes a sábado · 10:00–19:00</p><p className="mt-1 text-[11px] text-white/45">Domingos cerrado</p></div></div>
              </div>
            </div>
            <div className="surface-grid relative min-h-[290px] overflow-hidden rounded-3xl border border-white/10 bg-[#11141a] p-6 sm:min-h-[340px]">
              <div className="absolute inset-0 opacity-25" aria-hidden="true"><div className="absolute left-1/4 top-[-15%] h-[130%] w-12 rotate-[28deg] border-x border-white/15 bg-white/[.025]" /><div className="absolute right-[18%] top-[-10%] h-[130%] w-9 rotate-[-42deg] border-x border-white/10 bg-white/[.025]" /><div className="absolute left-[-10%] top-[54%] h-10 w-[120%] rotate-[-12deg] border-y border-white/10 bg-white/[.02]" /></div>
              <div className="relative flex h-full min-h-[240px] flex-col justify-between sm:min-h-[290px]">
                <span className="w-fit rounded-full border border-white/10 bg-[#0f1１１５]/9０ px-3 py-2 text-[１０px] font-semibold text-white/6０"><MapPin className="mr-１ inline size-３ text-[#facc１５]" aria-hidden="true" /> Viña del Mar · Chile</span>
                <div className="float-soft mx-auto flex size-１４ items-center justify-center rounded-full border border-[#facc１５]/4０ bg-[#facc１５] text-[#１１１] shadow-[０_０_５５px_rgba(２５０,２０４,２１,.２５)]"><MapPin className="size-６" aria-hidden="true" /></div>
                <div className="flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-[#0f1115]/90 p-4 backdrop-blur">
                  <div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#facc15]">Nuestra ubicación</p><p className="mt-1 text-sm font-bold">Camino Internacional 3500</p><p className="mt-1 text-[10px] text-white/45">Visitas presenciales cada domingo</p></div>
                  <a href="https://maps.google.com/?q=Camino+Internacional+3500+Vi%C3%B1a+del+Mar" aria-label="Ver Autos Altiva en el mapa" className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-[#facc15] hover:text-[#facc15]"><ArrowUpRight className="size-4" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap py-20 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#facc15]/20 bg-[#facc15] p-7 text-[#111] sm:p-12 lg:p-14">
            <div className="absolute -right-10 -top-16 size-64 rounded-full border border-black/10" aria-hidden="true" /><div className="absolute -right-3 -top-9 size-48 rounded-full border border-black/10" aria-hidden="true" />
            <div className="relative grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl"><p className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em]"><Sparkles className="size-4" aria-hidden="true" /> Novedad Altiva</p><h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Un auto nuevo en tu historia.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-black/65">Muy pronto podrás conocer todos los detalles del Sorteo especial de Autos Altiva.</p></div>
              <a href="/sorte" className={buttonVariants({ size: "lg", className: "w-fit rounded-lg bg-[#111] px-5 font-bold text-white hover:bg-[#252525]" })}>Descubrir el Sorteo <ArrowRight data-icon="inline-end" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a href="https://wa.me/56931466279" aria-label="Contactar a Autos Altiva por WhatsApp" className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-[#facc15] text-[#111] shadow-lg shadow-black/30 transition-transform hover:scale-105"><MessageCircle className="size-6" aria-hidden="true" /></a>
    </div>
  )
}
