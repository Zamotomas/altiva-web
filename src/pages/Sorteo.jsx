import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, CircleHelp, Clock3, FileCheck2, Gift, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const steps = [
  { icon: FileCheck2, number: "01", title: "Bases claras", copy: "La información oficial se compartirá antes de abrir cualquier participación." },
  { icon: CalendarDays, number: "02", title: "Fechas anunciadas", copy: "Publicaremos las fechas y condiciones en nuestros canales oficiales." },
  { icon: BadgeCheck, number: "03", title: "Sorteo transparente", copy: "Cada detalle del proceso se comunicará de forma abierta y verificable." },
]

export default function Sorte() {
  return (
    <div className="page-shell min-h-screen bg-[#0f1115] text-white">
      <Navbar active="sorte" />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0d0f12]">
          <div className="surface-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
          <div className="section-wrap grid min-h-[630px] items-center gap-10 py-14 sm:min-h-[690px] sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
            <div className="relative z-10">
              <a href="/" className="mb-9 inline-flex items-center gap-2 text-xs font-semibold text-white/45 transition hover:text-[#facc15]"><ArrowLeft className="size-4" aria-hidden="true" /> Volver a Autos Altiva</a>
              <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.26em] text-[#facc15]"><span className="size-1.5 rounded-full bg-[#facc15]" aria-hidden="true" /> Sorteo especial · Próximamente</p>
              <h1 className="font-display max-w-[600px] text-5xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[76px]">Un auto puede cambiar <span className="text-[#facc15]">el camino.</span></h1>
              <p className="mt-6 max-w-[500px] text-sm leading-7 text-white/55 sm:text-base">Estamos preparando una oportunidad especial para la comunidad Altiva. Pronto compartiremos todos los detalles de nuestro Sorteo de un automóvil.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-3 text-xs font-semibold text-[#facc15]"><Gift className="size-4" aria-hidden="true" /> Un automóvil como premio</span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.035] px-4 py-3 text-xs font-medium text-white/55"><Clock3 className="size-4" aria-hidden="true" /> Información próximamente</span>
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/45"><ShieldCheck className="size-4 text-[#facc15]" aria-hidden="true" /> Sigue solo los anuncios oficiales de Autos Altiva.</div>
            </div>
            <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#15181e] sm:min-h-[480px] lg:min-h-[520px]">
              <img src="/images/altiva-hero.png" alt="Automóvil deportivo iluminado sobre un fondo oscuro, inspirado en el próximo Sorteo de Autos Altiva" className="absolute inset-0 size-full object-cover object-[63%_center]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/95 via-[#0d0f12]/5 to-[#0d0f12]/15" aria-hidden="true" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-white/75 backdrop-blur"><Sparkles className="size-3 text-[#facc15]" aria-hidden="true" /> Próximo gran premio</div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[#0f1115]/75 p-5 backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#facc15]">Sorteo Autos Altiva</p>
                <h2 className="font-display mt-2 text-2xl font-bold sm:text-3xl">Tu próxima aventura empieza aquí.</h2>
                <p className="mt-2 max-w-lg text-xs leading-5 text-white/55">Fechas, bases y detalles se anunciarán por los canales oficiales de Altiva.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.25em] text-[#facc15]"><span className="h-px w-7 bg-[#facc15]" aria-hidden="true" /> A tu manera, con claridad</p>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Un Sorteo a la altura de la comunidad Altiva.</h2>
              <p className="mt-4 text-sm leading-7 text-white/50">Queremos que cada parte de esta experiencia sea sencilla de entender. Por eso, primero compartiremos las condiciones completas y toda la información oficial.</p>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#facc15]/20 bg-[#facc15]/[.06] p-4 text-xs leading-5 text-white/65"><CircleHelp className="mt-0.5 size-4 shrink-0 text-[#facc15]" aria-hidden="true" /><span>No hay inscripciones ni venta de participaciones disponibles en esta página. Revisa nuestros canales oficiales para conocer futuras novedades.</span></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {steps.map(({ icon: Icon, number, title, copy }) => (
                <Card key={number} className="rounded-2xl border border-white/10 bg-[#171a20] text-white shadow-none">
                  <CardHeader className="p-5 pb-2"><div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-xl bg-[#facc15]/10 text-[#facc15]"><Icon className="size-4" aria-hidden="true" /></span><span className="font-display text-[10px] font-bold tracking-[.16em] text-white/25">{number}</span></div><CardTitle className="font-display pt-4 text-base font-bold text-white">{title}</CardTitle></CardHeader>
                  <CardContent className="px-5 pb-5"><p className="text-xs leading-6 text-white/45">{copy}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/[.06] bg-[#15181e] py-16 sm:py-20">
          <div className="section-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl"><p className="mb-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#facc15]">Mantente atento</p><h2 className="font-display text-2xl font-bold sm:text-3xl">Las novedades llegarán por los canales oficiales.</h2><p className="mt-3 text-sm leading-6 text-white/50">Síguenos o visítanos en Viña del Mar para enterarte cuando publiquemos las bases.</p></div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/" className={buttonVariants({ size: "lg", className: "rounded-lg bg-[#facc15] px-5 font-bold text-[#111] hover:bg-[#f7dc64]" })}>Instagram Altiva <ArrowRight data-icon="inline-end" /></a>
              <a href="https://wa.me/56931466279" className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 px-4 text-xs font-semibold text-white transition hover:border-white/40"><MapPin className="size-4 text-[#facc15]" aria-hidden="true" /> Contactar</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
