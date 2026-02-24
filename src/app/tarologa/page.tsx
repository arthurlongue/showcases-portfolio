import {
	ArrowRight,
	CheckCircle2,
	CircleDollarSign,
	Instagram,
	MessageCircle,
	MoonStar,
	ShieldCheck,
	Video,
} from "lucide-react"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import Image from "next/image"
import {
	TarologaFaqAccordion,
	TarotButton,
	TarotHeroContent,
	TarotHeroItem,
	TarotNav,
	TarotReveal,
	WhatsAppProofCard,
} from "./components/client"
import { tarologaData } from "./data"
import "./theme.css"

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-tarot-body",
})

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-tarot-display",
})

const navItems = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#servicos", label: "Serviços" },
	{ href: "#como-funciona", label: "Como funciona" },
	{ href: "#depoimentos", label: "Depoimentos" },
	{ href: "#faq", label: "FAQ" },
] as const

const sectionLabelClass =
	"mb-4 inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/70"

export default function TarologaPage() {
	return (
		<div
			className={`${manrope.variable} ${cormorant.variable}`}
			style={{
				fontFamily: "var(--font-tarot-body), system-ui, sans-serif",
			}}
		>
			<main className="cosmos-bg min-h-screen text-white selection:bg-(--tarot-accent-gold) selection:text-black">
				<TarotNav
					brand={
						<a
							href="#hero"
							className="flex items-center gap-2 text-sm font-extrabold tracking-wide"
						>
							<MoonStar className="h-5 w-5 text-(--tarot-accent-gold)" />
							Clarice Lua
						</a>
					}
					navItems={navItems}
					ctaHref={tarologaData.hero.primaryCtaHref}
				/>

				{/* ── HERO ── */}
				<section id="hero" className="relative px-6 pt-34 pb-18 md:pt-40 md:pb-24">
					<div className="tarot-glow tarot-glow-primary" />
					<div className="tarot-glow tarot-glow-secondary" />
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
						<TarotHeroContent className="w-full lg:w-1/2">
							<TarotHeroItem>
								<span className={sectionLabelClass}>{tarologaData.hero.badge}</span>
							</TarotHeroItem>
							<TarotHeroItem>
								<h1 className="tarot-display text-[clamp(2.2rem,6vw,4.7rem)] leading-[0.95] text-balance">
									{tarologaData.hero.title}
								</h1>
							</TarotHeroItem>
							<TarotHeroItem>
								<p className="mt-6 max-w-xl text-lg leading-relaxed text-white/78 md:text-xl">
									{tarologaData.hero.description}
								</p>
							</TarotHeroItem>
							<TarotHeroItem>
								<div className="mt-9 flex flex-col gap-3 sm:flex-row">
									<TarotButton
										href={tarologaData.hero.primaryCtaHref}
										target="_blank"
										rel="noopener noreferrer"
										className="tarot-btn-primary"
									>
										<MessageCircle className="h-5 w-5" />
										{tarologaData.hero.primaryCtaLabel}
									</TarotButton>
									<TarotButton href={tarologaData.hero.secondaryCtaHref} className="tarot-btn-secondary">
										{tarologaData.hero.secondaryCtaLabel}
										<ArrowRight className="h-4 w-4" />
									</TarotButton>
								</div>
							</TarotHeroItem>
							<TarotHeroItem>
								<div className="mt-9 flex flex-wrap items-center gap-3">
									{tarologaData.stats.map((stat) => (
										<div key={stat.label} className="tarot-chip">
											<strong className="font-extrabold text-white">{stat.value}</strong>
											<span className="text-white/65">{stat.label}</span>
										</div>
									))}
								</div>
							</TarotHeroItem>
						</TarotHeroContent>

						<TarotReveal className="relative w-full lg:w-1/2" delay={0.2}>
							<div className="tarot-photo-card">
								<div className="relative overflow-hidden rounded-[1.6rem] border border-white/20">
									<Image
										src="/showcases/tarologa/hero.webp"
										alt="Foto profissional da taróloga em ambiente místico"
										width={760}
										height={980}
										priority
										className="h-[470px] w-full object-cover md:h-[620px]"
									/>
									<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,10,0)_45%,rgba(5,5,10,0.72)_100%)]" />
									<div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-lg">
										<p className="text-sm text-white/70">Atendimento acolhedor</p>
										<p className="tarot-display mt-1 text-2xl">
											Tarot para amor, carreira e direção.
										</p>
									</div>
								</div>
								<div className="absolute -top-4 -left-4 rounded-2xl border border-white/15 bg-[#0b1018]/85 px-4 py-3 backdrop-blur-md">
									<p className="text-xs font-bold uppercase tracking-widest text-(--tarot-accent-gold)">
										{tarologaData.hero.floatingBadge.title}
									</p>
									<p className="mt-1 text-sm text-white/85">
										{tarologaData.hero.floatingBadge.description}
									</p>
								</div>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── ABOUT ── */}
				<section id="sobre" className="px-6 py-16 md:py-22">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
						<TarotReveal className="w-full lg:w-1/2">
							<span className={sectionLabelClass}>{tarologaData.about.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.about.title}
							</h2>
							<div className="mt-6 space-y-4 text-white/78">
								{tarologaData.about.paragraphs.map((paragraph) => (
									<p key={paragraph} className="text-lg leading-relaxed">
										{paragraph}
									</p>
								))}
							</div>
						</TarotReveal>
						<TarotReveal className="w-full lg:w-1/2" delay={0.15}>
							<div className="tarot-surface p-6 md:p-8">
								<p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
									Formação e vertentes
								</p>
								<div className="flex flex-wrap gap-3">
									{tarologaData.about.credentials.map((credential) => (
										<span key={credential} className="tarot-chip">
											{credential}
										</span>
									))}
								</div>
								<div className="mt-8 rounded-2xl border border-white/12 bg-black/25 p-5">
									<p className="text-sm leading-relaxed text-white/73">
										Meu atendimento é para orientação e autoconhecimento, sempre respeitando limites
										éticos e livre-arbítrio.
									</p>
								</div>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── SERVICES ── */}
				<section id="servicos" className="relative px-6 py-16 md:py-22">
					<div className="tarot-glow tarot-glow-services" />
					<div className="mx-auto w-full max-w-7xl">
						<TarotReveal className="mb-10 max-w-3xl">
							<span className={sectionLabelClass}>{tarologaData.services.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.services.title}
							</h2>
							<p className="mt-4 text-lg text-white/78">{tarologaData.services.description}</p>
						</TarotReveal>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
							{tarologaData.services.items.map((service, i) => (
								<TarotReveal key={service.name} delay={i * 0.08}>
									<article className="tarot-panel h-full">
										<div className="mb-5 flex items-start justify-between gap-4">
											<div>
												<h3 className="tarot-display text-3xl leading-none">{service.name}</h3>
												<p className="mt-2 text-sm text-white/70">{service.duration}</p>
											</div>
											<span className="rounded-full border border-(--tarot-accent-gold)/45 bg-(--tarot-accent-gold)/12 px-3 py-1.5 text-sm font-bold text-(--tarot-accent-gold)">
												{service.price}
											</span>
										</div>
										<p className="text-sm leading-relaxed text-white/77">{service.description}</p>
										<div className="mt-5 flex flex-wrap gap-2">
											<span className="tarot-chip">{service.oracle}</span>
											<span className="tarot-chip">{service.theme}</span>
										</div>
										<a
											href={service.whatsappHref}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-(--tarot-accent-gold) transition-colors hover:text-(--tarot-accent-gold)/80"
										>
											Agendar esta leitura
											<ArrowRight className="h-4 w-4" />
										</a>
									</article>
								</TarotReveal>
							))}
						</div>
					</div>
				</section>

				{/* ── HOW IT WORKS ── */}
				<section id="como-funciona" className="px-6 py-16 md:py-22">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-16">
						<TarotReveal className="w-full lg:w-1/2">
							<span className={sectionLabelClass}>{tarologaData.howItWorks.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.howItWorks.title}
							</h2>
							<div className="mt-8 flex flex-col gap-4">
								{tarologaData.howItWorks.steps.map((step, i) => (
									<TarotReveal key={step.title} delay={i * 0.1}>
										<div className="tarot-surface p-5">
											<p className="text-base font-bold text-white">{step.title}</p>
											<p className="mt-2 text-sm leading-relaxed text-white/72">{step.description}</p>
										</div>
									</TarotReveal>
								))}
							</div>
						</TarotReveal>

						<TarotReveal className="w-full lg:w-1/2" delay={0.15}>
							<div className="tarot-panel h-full">
								<div className="mb-7 flex items-center gap-3">
									<Video className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold">Formato do atendimento</h3>
								</div>
								<ul className="space-y-2 text-sm text-white/78">
									{tarologaData.howItWorks.formats.map((format) => (
										<li key={format} className="flex items-center gap-2">
											<ShieldCheck className="h-4 w-4 text-(--tarot-accent-gold)" />
											{format}
										</li>
									))}
								</ul>

								<div className="my-7 border-t border-white/12" />

								<div className="mb-7 flex items-center gap-3">
									<CircleDollarSign className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold">Formas de pagamento</h3>
								</div>
								<ul className="space-y-2 text-sm text-white/78">
									{tarologaData.howItWorks.payments.map((payment) => (
										<li key={payment} className="flex items-center gap-2">
											<CheckCircle2 className="h-4 w-4 text-(--tarot-accent-gold)" />
											{payment}
										</li>
									))}
								</ul>

								<TarotButton
									href={tarologaData.hero.primaryCtaHref}
									target="_blank"
									rel="noopener noreferrer"
									className="tarot-btn-primary mt-8"
								>
									<MessageCircle className="h-5 w-5" />
									Reservar horário agora
								</TarotButton>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── BENEFITS ── */}
				<section className="px-6 py-16 md:py-22">
					<div className="mx-auto w-full max-w-7xl">
						<TarotReveal className="mb-10 max-w-3xl">
							<span className={sectionLabelClass}>{tarologaData.benefits.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.benefits.title}
							</h2>
						</TarotReveal>
						<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
							{tarologaData.benefits.items.map((benefit, i) => (
								<TarotReveal key={benefit} delay={i * 0.06}>
									<div className="tarot-surface flex items-center gap-3 px-5 py-4">
										<CheckCircle2 className="h-5 w-5 shrink-0 text-(--tarot-accent-gold)" />
										<p className="text-sm leading-relaxed text-white/82">{benefit}</p>
									</div>
								</TarotReveal>
							))}
						</div>
					</div>
				</section>

				{/* ── TESTIMONIALS ── */}
				<section id="depoimentos" className="px-6 py-16 md:py-22">
					<div className="mx-auto w-full max-w-7xl">
						<TarotReveal className="mb-10 max-w-3xl">
							<span className={sectionLabelClass}>{tarologaData.testimonials.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.testimonials.title}
							</h2>
							<p className="mt-4 text-white/76">{tarologaData.testimonials.description}</p>
						</TarotReveal>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
							<div className="flex flex-col gap-4">
								{tarologaData.testimonials.items.map((testimonial, i) => (
									<TarotReveal key={testimonial.quote} delay={i * 0.1}>
										<article className="tarot-surface p-6">
											<p className="text-base leading-relaxed text-white/88">"{testimonial.quote}"</p>
											<div className="mt-4 flex items-center justify-between text-sm">
												<span className="font-semibold text-white">{testimonial.name}</span>
												<span className="text-white/60">{testimonial.detail}</span>
											</div>
										</article>
									</TarotReveal>
								))}
							</div>

							<TarotReveal delay={0.2}>
								<WhatsAppProofCard
									title={tarologaData.testimonials.whatsappMock.title}
									subtitle={tarologaData.testimonials.whatsappMock.subtitle}
									messages={tarologaData.testimonials.whatsappMock.messages}
								/>
							</TarotReveal>
						</div>
					</div>
				</section>

				{/* ── FAQ ── */}
				<section id="faq" className="px-6 py-16 md:py-22">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-16">
						<TarotReveal className="w-full lg:w-2/5">
							<span className={sectionLabelClass}>{tarologaData.faq.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance">
								{tarologaData.faq.title}
							</h2>
							<p className="mt-5 text-white/74">{tarologaData.faq.description}</p>
						</TarotReveal>
						<TarotReveal className="w-full lg:w-3/5" delay={0.1}>
							<TarologaFaqAccordion items={tarologaData.faq.items} />
						</TarotReveal>
					</div>
				</section>

				{/* ── FINAL CTA ── */}
				<section className="relative px-6 pt-8 pb-16 md:pb-24">
					<div className="tarot-glow tarot-glow-cta-left" />
					<div className="tarot-glow tarot-glow-cta-right" />
					<div className="mx-auto w-full max-w-6xl">
						<TarotReveal>
							<div className="tarot-cta-wrap">
								<h2 className="tarot-display text-center text-[clamp(2rem,4vw,3.4rem)] leading-tight text-balance">
									{tarologaData.finalCta.title}
								</h2>
								<p className="mx-auto mt-4 max-w-2xl text-center text-white/76">
									{tarologaData.finalCta.description}
								</p>
								<TarotButton
									href={tarologaData.finalCta.buttonHref}
									target="_blank"
									rel="noopener noreferrer"
									className="tarot-btn-primary mx-auto mt-8"
								>
									<MessageCircle className="h-5 w-5" />
									{tarologaData.finalCta.buttonLabel}
								</TarotButton>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── FOOTER ── */}
				<footer className="border-t border-white/10 px-6 pt-14 pb-24">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
						<div className="max-w-md">
							<p className="tarot-display text-4xl">{tarologaData.footer.brand}</p>
							<p className="mt-3 text-sm leading-relaxed text-white/70">
								{tarologaData.footer.description}
							</p>
							<p className="mt-3 text-xs text-white/52">{tarologaData.footer.address}</p>
						</div>

						<div className="flex flex-col gap-4 text-sm text-white/78">
							<a
								href={tarologaData.footer.instagramHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 transition-colors hover:text-white"
							>
								<Instagram className="h-4 w-4" />
								{tarologaData.footer.instagramLabel}
							</a>
							<a
								href={tarologaData.footer.whatsappHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 transition-colors hover:text-white"
							>
								<MessageCircle className="h-4 w-4" />
								{tarologaData.footer.whatsappLabel}
							</a>
						</div>
					</div>
					<div className="mx-auto mt-10 w-full max-w-7xl border-t border-white/10 pt-5 text-xs text-white/50">
						<p>{tarologaData.footer.disclaimer}</p>
						<p className="mt-2">{tarologaData.footer.copyright}</p>
					</div>
				</footer>

				<a
					href={tarologaData.finalCta.buttonHref}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Falar no WhatsApp"
					className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-[1.02]"
				>
					<MessageCircle className="h-5 w-5" />
					WhatsApp
				</a>
			</main>
		</div>
	)
}
