import { ArrowUpRight, Clock3, Sparkles } from "lucide-react"

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Catálogo", href: "/#catalogo" },
  { label: "Ubicación", href: "/#ubicacion" },
]

export default function Navbar({ active = "inicio" }) {
  return (
    <header className="relative z-20 border-b border-white/10 bg-[#0f1115]/90 backdrop-blur-xl">
      <div className="section-wrap flex min-h-[78px] items-center justify-between gap-5">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Autos Altiva, inicio">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/altiva%20logo-MFaq3PKw4WJ4h0qqPvKaLGmyUlh5BB.jpg"
            alt=""
            className="size-11 rounded-md object-cover"
          />
          <span className="leading-none">
            <span className="font-display block text-[15px] font-extrabold tracking-[.18em] text-white">ALTIVA</span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[.28em] text-white/45">AUTOS · VIÑA DEL MAR</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-[13px] font-medium text-white/65 transition-colors hover:text-[#facc15]">
              {link.label}
            </a>
          ))}
          <a href="/Sorteo" className={`text-[13px] font-semibold transition-colors hover:text-[#facc15] ${active === "Sorteo" ? "text-[#facc15]" : "text-white/65"}`}>
            Sorteo
          </a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Clock3 className="size-4 text-[#facc15]" aria-hidden="true" />
            <span>Lunes a sábado · 10:00–19:00</span>
          </div>
          <a
            href="https://wa.me/56931466279"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#facc15] px-4 text-xs font-bold text-[#111] transition hover:bg-[#f5d94f]"
          >
            Hablemos <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <a href="/Sorteo" className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-white md:hidden">
          <Sparkles className="size-4 text-[#facc15]" aria-hidden="true" /> Sorteo
        </a>
      </div>
    </header>
  )
}