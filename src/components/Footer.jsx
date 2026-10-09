import { ArrowUpRight, Camera, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10]">
      <div className="section-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_1fr] lg:py-16">
        <div>
          <a href="/" className="flex items-center gap-3">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/altiva%20logo-MFaq3PKw4WJ4h0qqPvKaLGmyUlh5BB.jpg" alt="" className="size-10 rounded-md object-cover" />
            <span className="font-display text-sm font-extrabold tracking-[.2em]">ALTIVA AUTOS</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">Compra, venta y consignación con atención cercana en Viña del Mar.</p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-white/35">Explora</p>
          <div className="flex flex-col items-start gap-3 text-sm text-white/65">
            <a href="/#servicios" className="transition-colors hover:text-[#facc15]">Servicios</a>
            <a href="/#catalogo" className="transition-colors hover:text-[#facc15]">Catálogo</a>
            <a href="/Sorteo" className="transition-colors hover:text-[#facc15]">Sorteo Altiva</a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-white/35">Encuéntranos</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-[#facc15]" aria-hidden="true" /> Camino Internacional 3500, Viña del Mar</p>
            <a href="tel:+56931466279" className="flex items-center gap-2 transition-colors hover:text-[#facc15]"><Phone className="size-4 text-[#facc15]" aria-hidden="true" /> +569 31466279</a>
            <a href="https://www.instagram.com/autos_altiva/" className="flex items-center gap-2 transition-colors hover:text-[#facc15]"><Camera className="size-4 text-[#facc15]" aria-hidden="true" /> Instagram <ArrowUpRight className="size-3" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="section-wrap flex flex-col gap-2 py-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© Autos Altiva · Todos los derechos reservados</span>
          <span>Atención presencial de lunes a sábado, de 10:00 a 19:00 hrs.</span>
        </div>
      </div>
    </footer>
  )
}
