"use client"

import { Confetti, type ConfettiRef } from "@/components/ui/confetti"
import { FlipWords } from "@/components/ui/flip-words"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ScrollProgress } from "@/components/ui/scroll-progress"
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
import { useRef } from "react"
import {
	TarologaFaqAccordion,
	TarotButton,
	TarotHeroContent,
	TarotHeroItem,
	TarotNav,
	TarotReveal,
	TarotStarfield,
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
	"mb-4 inline-flex rounded-full border border-(--tarot-accent-gold)/30 bg-(--tarot-accent-gold)/10 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-(--tarot-accent-champagne)"

export default function TarologaPage() {
	const confettiRef = useRef<ConfettiRef>(null)
	return (
		<div
			className={`${manrope.variable} ${cormorant.variable}`}
			style={{
				fontFamily: "var(--font-tarot-body), system-ui, sans-serif",
			}}
		>
			<main className="cosmos-bg min-h-screen text-(--tarot-text-body) selection:bg-(--tarot-accent-gold) selection:text-black">
				<Confetti
					ref={confettiRef}
					options={{
						particleCount: 60,
						spread: 80,
						origin: { y: 0.6 },
						colors: ["#d4af37", "#f7e7ce", "#b08d57"],
					}}
				/>
				<ScrollProgress className="top-0 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#d4af37]" />
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
									Clareza espiritual para{" "}
									<span className="text-[var(--tarot-accent-gold)]">
										<FlipWords
											words={["amor", "carreira", "direção", "propósito"]}
											duration={3000}
											className="text-[var(--tarot-accent-gold)]"
										/>
									</span>
								</h1>
							</TarotHeroItem>
							<TarotHeroItem>
								<p className="mt-6 max-w-xl text-lg leading-relaxed text-(--tarot-text-body)/80 md:text-xl">
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
										onClick={() => confettiRef.current?.fire()}
									>
										<MessageCircle className="h-5 w-5" />
										{tarologaData.hero.primaryCtaLabel}
									</TarotButton>
									<TarotButton
										href={tarologaData.hero.secondaryCtaHref}
										className="tarot-btn-secondary"
									>
										{tarologaData.hero.secondaryCtaLabel}
										<ArrowRight className="h-4 w-4" />
									</TarotButton>
								</div>
							</TarotHeroItem>
							<TarotHeroItem>
								<div className="mt-9 flex flex-wrap items-center gap-3">
									<div className="tarot-chip">
										<strong className="font-extrabold text-(--tarot-accent-champagne)">
											<NumberTicker
												value={9}
												className="font-extrabold text-(--tarot-accent-champagne)"
											/>
											+
										</strong>
										<span className="text-(--tarot-text-body)/70">anos de experiência</span>
									</div>
									<div className="tarot-chip">
										<strong className="font-extrabold text-(--tarot-accent-champagne)">
											<NumberTicker
												value={1400}
												className="font-extrabold text-(--tarot-accent-champagne)"
											/>
											+
										</strong>
										<span className="text-(--tarot-text-body)/70">leituras realizadas</span>
									</div>
									<div className="tarot-chip">
										<strong className="font-extrabold text-(--tarot-accent-champagne)">
											<NumberTicker
												value={100}
												className="font-extrabold text-(--tarot-accent-champagne)"
											/>
											%
										</strong>
										<span className="text-(--tarot-text-body)/70">online</span>
									</div>
									<div className="tarot-chip">
										<strong className="font-extrabold text-(--tarot-accent-champagne)">
											Pix + cartão
										</strong>
										<span className="text-(--tarot-text-body)/70">com parcelamento</span>
									</div>
								</div>
							</TarotHeroItem>
						</TarotHeroContent>

						<TarotReveal className="relative w-full lg:w-1/2" delay={0.2}>
							<div className="tarot-photo-card">
								<div className="relative overflow-hidden rounded-[1.6rem] border border-(--tarot-border)">
									<TarotStarfield className="pointer-events-none absolute inset-0 z-[5] opacity-70 [mask-image:radial-gradient(circle_at_50%_20%,white,transparent_75%)]" />
									<Image
										src="/showcases/tarologa/hero.webp"
										alt="Foto profissional da taróloga em ambiente místico"
										width={760}
										height={980}
										priority
										className="h-[470px] w-full object-cover md:h-[620px]"
									/>
									<div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(10,11,16,0)_45%,rgba(10,11,16,0.8)_100%)]" />
									<div className="absolute right-4 bottom-4 left-4 z-20 rounded-2xl border border-(--tarot-border) bg-[#0a0b10]/60 p-4 backdrop-blur-lg">
										<p className="text-sm text-(--tarot-text-body)/80">Atendimento acolhedor</p>
										<p className="tarot-display mt-1 text-2xl text-(--tarot-accent-champagne)">
											Tarot para amor, carreira e direção.
										</p>
									</div>
								</div>
								<div className="absolute -top-4 -left-4 z-20 rounded-2xl border border-(--tarot-border) bg-[#0a0b10]/85 px-4 py-3 backdrop-blur-md">
									<p className="text-xs font-bold uppercase tracking-widest text-(--tarot-accent-gold)">
										{tarologaData.hero.floatingBadge.title}
									</p>
									<p className="mt-1 text-sm text-(--tarot-text-body)/90">
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
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.about.title}
							</h2>
							<div className="mt-6 space-y-4 text-(--tarot-text-body)/80">
								{tarologaData.about.paragraphs.map((paragraph) => (
									<p key={paragraph} className="text-lg leading-relaxed">
										{paragraph}
									</p>
								))}
							</div>
						</TarotReveal>
						<TarotReveal className="w-full lg:w-1/2" delay={0.15}>
							<div className="tarot-surface p-8 md:p-10">
								<p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-(--tarot-text-body)/60">
									Formação e vertentes
								</p>
								<div className="flex flex-wrap gap-3">
									{tarologaData.about.credentials.map((credential) => (
										<span key={credential} className="tarot-chip">
											{credential}
										</span>
									))}
								</div>
								<div className="mt-8 rounded-2xl border border-(--tarot-border) bg-[#0a0b10]/40 p-6">
									<p className="text-sm leading-relaxed text-(--tarot-text-body)/80">
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
							{tarologaData.services.items.map((service, i) => {
								const isFeatured = service.name === "Mandala Astrológica"
								return (
									<TarotReveal key={service.name} delay={i * 0.08}>
										<article
											className={`tarot-surface relative h-full overflow-hidden rounded-[1.3rem] border p-7 transition-all duration-500 hover:border-(--tarot-accent-gold)/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] ${
												isFeatured
													? "border-(--tarot-accent-gold)/60 bg-gradient-to-br from-[var(--tarot-panel)] via-[var(--tarot-panel)] to-(--tarot-accent-gold)/5"
													: "border-[var(--tarot-border)]"
											}`}
										>
											{isFeatured && (
												<div className="absolute inset-0 opacity-30">
													<div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-(--tarot-accent-gold)/20 blur-3xl" />
													<div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-(--tarot-accent-champagne)/10 blur-3xl" />
												</div>
											)}
											<div className="relative">
												<div className="mb-5 flex items-start justify-between gap-4">
													<div>
														<h3 className="tarot-display text-3xl leading-none text-(--tarot-accent-champagne)">
															{service.name}
														</h3>
														<p className="mt-2 text-sm text-(--tarot-text-body)/70">
															{service.duration}
														</p>
													</div>
													<span className="rounded-full border border-(--tarot-accent-gold)/45 bg-(--tarot-accent-gold)/12 px-3 py-1.5 text-sm font-bold text-(--tarot-accent-gold)">
														{service.price}
													</span>
												</div>
												<p className="text-sm leading-relaxed text-(--tarot-text-body)/80">
													{service.description}
												</p>
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
											</div>
										</article>
									</TarotReveal>
								)
							})}
						</div>
					</div>
				</section>

				{/* ── HOW IT WORKS ── */}
				<section id="como-funciona" className="px-6 py-16 md:py-22">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-16">
						<TarotReveal className="w-full lg:w-1/2">
							<span className={sectionLabelClass}>{tarologaData.howItWorks.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.howItWorks.title}
							</h2>
							<div className="mt-8 flex flex-col gap-4">
								{tarologaData.howItWorks.steps.map((step, i) => (
									<TarotReveal key={step.title} delay={i * 0.1}>
										<div className="tarot-surface p-6">
											<p className="text-base font-bold text-(--tarot-accent-champagne)">
												{step.title}
											</p>
											<p className="mt-2 text-sm leading-relaxed text-(--tarot-text-body)/80">
												{step.description}
											</p>
										</div>
									</TarotReveal>
								))}
							</div>
						</TarotReveal>

						<TarotReveal className="w-full lg:w-1/2" delay={0.15}>
							<div className="tarot-panel h-full">
								<div className="mb-7 flex items-center gap-3">
									<Video className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold text-(--tarot-accent-champagne)">
										Formato do atendimento
									</h3>
								</div>
								<ul className="space-y-3 text-sm text-(--tarot-text-body)/80">
									{tarologaData.howItWorks.formats.map((format) => (
										<li key={format} className="flex items-center gap-2">
											<ShieldCheck className="h-4 w-4 text-(--tarot-accent-gold)" />
											{format}
										</li>
									))}
								</ul>

								<div className="my-7 border-t border-(--tarot-border)" />

								<div className="mb-7 flex items-center gap-3">
									<CircleDollarSign className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold text-(--tarot-accent-champagne)">
										Formas de pagamento
									</h3>
								</div>
								<ul className="space-y-3 text-sm text-(--tarot-text-body)/80">
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
									onClick={() => confettiRef.current?.fire()}
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
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.benefits.title}
							</h2>
						</TarotReveal>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							{tarologaData.benefits.items.map((benefit, i) => (
								<TarotReveal key={benefit} delay={i * 0.06}>
									<div className="tarot-surface flex items-center gap-4 px-6 py-5">
										<CheckCircle2 className="h-6 w-6 shrink-0 text-(--tarot-accent-gold)" />
										<p className="text-sm leading-relaxed text-(--tarot-text-body)/90">{benefit}</p>
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
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.testimonials.title}
							</h2>
							<p className="mt-4 text-(--tarot-text-body)/80">
								{tarologaData.testimonials.description}
							</p>
						</TarotReveal>

						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
							<div className="flex flex-col gap-5">
								{tarologaData.testimonials.items.map((testimonial, i) => (
									<TarotReveal key={testimonial.quote} delay={i * 0.1}>
										<article className="tarot-surface p-8">
											<p className="text-base leading-relaxed text-(--tarot-text-body)/90">
												"{testimonial.quote}"
											</p>
											<div className="mt-5 flex items-center justify-between text-sm">
												<span className="font-semibold text-(--tarot-accent-champagne)">
													{testimonial.name}
												</span>
												<span className="text-(--tarot-text-body)/60">{testimonial.detail}</span>
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
					{/* Marquee Testimonials */}
					<div className="mt-16 overflow-hidden">
						<Marquee pauseOnHover className="[--duration:30s]">
							<div className="tarot-panel mx-4 rounded-xl px-6 py-4">
								<p className="text-sm italic text-[var(--tarot-text-secondary)]">
									"A leitura trouxe clareza que eu precisava..."
								</p>
							</div>
							<div className="tarot-panel mx-4 rounded-xl px-6 py-4">
								<p className="text-sm italic text-[var(--tarot-text-secondary)]">
									"Clarice me ajudou a entender meu propósito"
								</p>
							</div>
							<div className="tarot-panel mx-4 rounded-xl px-6 py-4">
								<p className="text-sm italic text-[var(--tarot-text-secondary)]">
									"Transformadora! Recomendo demais."
								</p>
							</div>
							<div className="tarot-panel mx-4 rounded-xl px-6 py-4">
								<p className="text-sm italic text-[var(--tarot-text-secondary)]">
									"Meu relacionamento melhorou muito"
								</p>
							</div>
						</Marquee>
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
								<TarotStarfield
									className="pointer-events-none absolute inset-0 z-0 opacity-55"
									color="247, 231, 206"
									gap={26}
									dotSize={2}
									maxOpacity={0.2}
								/>
								<h2 className="tarot-display relative z-10 text-center text-[clamp(2rem,4vw,3.4rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
									{tarologaData.finalCta.title}
								</h2>
								<p className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-(--tarot-text-body)/80">
									{tarologaData.finalCta.description}
								</p>
								<TarotButton
									href={tarologaData.finalCta.buttonHref}
									target="_blank"
									rel="noopener noreferrer"
									className="tarot-btn-primary relative z-10 mx-auto mt-8"
									onClick={() => confettiRef.current?.fire()}
								>
									<MessageCircle className="h-5 w-5" />
									{tarologaData.finalCta.buttonLabel}
								</TarotButton>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── FOOTER ── */}
				<footer className="border-t border-(--tarot-border) px-6 pt-14 pb-24">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
						<div className="max-w-md">
							<p className="tarot-display text-4xl text-(--tarot-accent-champagne)">
								{tarologaData.footer.brand}
							</p>
							<p className="mt-3 text-sm leading-relaxed text-(--tarot-text-body)/70">
								{tarologaData.footer.description}
							</p>
							<p className="mt-3 text-xs text-(--tarot-text-body)/50">
								{tarologaData.footer.address}
							</p>
						</div>

						<div className="flex flex-col gap-4 text-sm text-(--tarot-text-body)/80">
							<a
								href={tarologaData.footer.instagramHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 transition-colors hover:text-(--tarot-accent-champagne)"
							>
								<Instagram className="h-4 w-4" />
								{tarologaData.footer.instagramLabel}
							</a>
							<a
								href={tarologaData.footer.whatsappHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 transition-colors hover:text-(--tarot-accent-champagne)"
							>
								<MessageCircle className="h-4 w-4" />
								{tarologaData.footer.whatsappLabel}
							</a>
						</div>
					</div>
					<div className="mx-auto mt-10 w-full max-w-7xl border-t border-(--tarot-border) pt-5 text-xs text-(--tarot-text-body)/50">
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
