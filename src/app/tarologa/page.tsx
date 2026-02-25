"use client"

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
import { FlipWords } from "@/components/ui/flip-words"
import { HolographicWall } from "@/components/ui/holographic-wall"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"

import { NumberTicker } from "@/components/ui/number-ticker"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import {
	PingPongVideo,
	TarologaFaqAccordion,
	TarotBorderBeam,
	TarotButton,
	TarotHeroContent,
	TarotHeroItem,
	TarotLens,
	TarotNav,
	TarotReveal,
} from "./components/client"
import { TarotVectors } from "./components/vectors"
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
	"mb-4 inline-flex rounded-full bg-(--tarot-accent-gold)/5 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-(--tarot-accent-champagne) shadow-[0_2px_8px_rgba(255,215,0,0.1)]"

export default function TarologaPage() {
	const testimonialsRowA = tarologaData.testimonials.items.filter((_, index) => index % 2 === 0)
	const testimonialsRowB = tarologaData.testimonials.items.filter((_, index) => index % 2 !== 0)
	return (
		<div
			className={`${manrope.variable} ${cormorant.variable}`}
			style={{
				fontFamily: "var(--font-tarot-body), system-ui, sans-serif",
			}}
		>
			<main className="cosmos-bg relative min-h-screen text-(--tarot-text-body) selection:bg-(--tarot-accent-gold) selection:text-black">
				<TarotVectors />
				<ScrollProgress className="top-0 h-0.5 bg-linear-to-r from-[#ffd700] via-[#ffeb99] to-[#ffd700]" />
				<TarotNav
					brand={
						<a
							href="#hero"
							className="flex items-center gap-2 rounded-sm text-sm font-extrabold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10]"
						>
							<MoonStar className="h-5 w-5 text-(--tarot-accent-gold)" />
							Clarice Lua
						</a>
					}
					navItems={navItems}
					ctaHref={tarologaData.hero.primaryCtaHref}
					ctaLabel={tarologaData.hero.primaryCtaLabel}
				/>

				{/* ── HERO ── */}
				<section id="hero" className="relative overflow-hidden px-6 pt-34 pb-18 md:pt-40 md:pb-24">
					<div className="pointer-events-none absolute inset-0 z-0">
						<PingPongVideo
							src="/showcases/tarologa/hero-video.mp4"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-[#0a0b10]/75" />
					</div>
					<div className="tarot-glow tarot-glow-primary" />
					<div className="tarot-glow tarot-glow-secondary" />
					<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
						<TarotHeroContent className="w-full lg:w-1/2">
							<TarotHeroItem>
								<span className={sectionLabelClass}>{tarologaData.hero.badge}</span>
							</TarotHeroItem>
							<TarotHeroItem>
								<h1 className="tarot-display text-[clamp(2.2rem,6vw,4.7rem)] leading-[0.95] text-balance">
									Clareza espiritual para{" "}
									<span className="text-(--tarot-accent-gold)">
										<FlipWords
											words={["amor", "carreira", "direção", "propósito"]}
											duration={3000}
											className="text-(--tarot-accent-gold)"
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
								<TarotLens className="overflow-hidden rounded-[1.6rem]">
									<div className="relative">
										<Image
											src="/showcases/tarologa/hero-portrait.jpeg"
											alt="Foto profissional da taróloga em ambiente místico"
											width={760}
											height={980}
											priority
											className="h-117.5 w-full object-cover md:h-155"
										/>
										<div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(13,2,33,0)_45%,rgba(13,2,33,0.8)_100%)]" />
										<div className="absolute right-4 bottom-4 left-4 z-20 rounded-2xl bg-[#0d0221]/60 p-4 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
											<p className="text-sm text-(--tarot-text-body)/80">
												{tarologaData.hero.imageCardEyebrow}
											</p>
											<p className="tarot-display mt-1 text-2xl text-(--tarot-accent-champagne)">
												{tarologaData.hero.imageCardTitle}
											</p>
										</div>
									</div>
								</TarotLens>
								<div className="absolute -top-4 -left-4 z-20 rounded-2xl bg-[#0d0221]/85 px-4 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
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
							<div className="overflow-hidden rounded-[1.3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
								<Image
									src="/showcases/tarologa/reading-flatlay.jpeg"
									alt="Mesa de tarot com baralho dourado, velas, cristais e flores sobre veludo roxo"
									width={800}
									height={420}
									className="h-55 w-full object-cover md:h-70"
								/>
							</div>
							<div className="tarot-surface mt-5 p-8 md:p-10">
								<p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-(--tarot-text-body)/60">
									{tarologaData.about.credentialsTitle}
								</p>
								<div className="flex flex-wrap gap-3">
									{tarologaData.about.credentials.map((credential) => (
										<span key={credential} className="tarot-chip">
											{credential}
										</span>
									))}
								</div>
								<div className="mt-8 rounded-2xl bg-[#0d0221]/40 p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
									<p className="text-sm leading-relaxed text-(--tarot-text-body)/80">
										{tarologaData.about.disclaimer}
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
							<p className="mt-4 text-lg text-(--tarot-text-body)/80">
								{tarologaData.services.description}
							</p>
						</TarotReveal>
						<TarotReveal className="mb-8 overflow-hidden rounded-[1.3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
							<Image
								src="/showcases/tarologa/cards-spread.jpeg"
								alt="Três cartas de tarot reveladas — A Imperatriz, Os Amantes e O Carro"
								width={1200}
								height={500}
								className="h-48 w-full object-cover md:h-64"
							/>
						</TarotReveal>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
							{tarologaData.services.items.map((service, i) => {
								const isFeatured = service.name === "Mandala Astrológica"
								return (
									<TarotReveal key={service.name} delay={i * 0.08}>
										<MagicCard
											className="h-full rounded-[1.3rem]"
											gradientColor="rgba(255,215,0,0.16)"
											gradientFrom="#f7e7ce"
											gradientTo="#d4af37"
											gradientSize={220}
										>
											<article
												className={`tarot-surface relative h-full overflow-hidden rounded-[1.3rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(255,215,0,0.15)] ${
													isFeatured
														? "bg-linear-to-br from-[#1e0a2d] via-[#140520] to-(--tarot-accent-gold)/8 shadow-[0_0_0_1px_rgba(255,215,0,0.3),0_20px_40px_-10px_rgba(0,0,0,0.5)]"
														: "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
												}`}
											>
												{isFeatured && <TarotBorderBeam size={76} duration={10} />}
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
														<span className="rounded-full bg-(--tarot-accent-gold)/10 px-3 py-1.5 text-sm font-bold text-(--tarot-accent-gold) shadow-[0_2px_8px_rgba(255,215,0,0.15)]">
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
														className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-(--tarot-accent-gold) transition-colors hover:text-(--tarot-accent-gold)/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0221]"
													>
														{tarologaData.services.cardCtaLabel}
														<ArrowRight className="h-4 w-4" />
													</a>
												</div>
											</article>
										</MagicCard>
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
							<div className="mb-5 overflow-hidden rounded-[1.3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
								<Image
									src="/showcases/tarologa/celestial-cards.jpeg"
									alt="Cartas de tarot celestiais com velas e cristais de ametista"
									width={800}
									height={420}
									className="h-50 w-full object-cover md:h-65"
								/>
							</div>
							<div className="tarot-panel h-fit">
								<div className="mb-7 flex items-center gap-3">
									<Video className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold text-(--tarot-accent-champagne)">
										{tarologaData.howItWorks.formatsTitle}
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

								<div className="my-7 h-px w-full bg-linear-to-r from-transparent via-(--tarot-border-soft) to-transparent" />

								<div className="mb-7 flex items-center gap-3">
									<CircleDollarSign className="h-5 w-5 text-(--tarot-accent-gold)" />
									<h3 className="text-lg font-bold text-(--tarot-accent-champagne)">
										{tarologaData.howItWorks.paymentsTitle}
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
								>
									<MessageCircle className="h-5 w-5" />
									{tarologaData.howItWorks.ctaLabel}
								</TarotButton>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── BENEFITS ── */}
				<section className="relative py-16 md:py-22">
					<div className="absolute inset-0 bg-[#0a0b10]/40" />
					<div className="mx-auto w-full max-w-7xl px-6">
						<TarotReveal className="mb-10 max-w-3xl">
							<span className={sectionLabelClass}>{tarologaData.benefits.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.benefits.title}
							</h2>
						</TarotReveal>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{tarologaData.benefits.items.map((benefit, i) => (
								<TarotReveal key={benefit} delay={i * 0.06}>
									<div className="tarot-surface flex h-full items-start gap-4 px-6 py-5">
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-(--tarot-accent-gold)" />
										<p className="text-sm leading-relaxed text-(--tarot-text-body)/90">{benefit}</p>
									</div>
								</TarotReveal>
							))}
						</div>
					</div>
				</section>

				{/* ── TESTIMONIALS ── */}
				<section id="depoimentos" className="py-16 md:py-22">
					<div className="mx-auto w-full max-w-7xl px-6">
						<TarotReveal className="mb-10 max-w-3xl">
							<span className={sectionLabelClass}>{tarologaData.testimonials.overline}</span>
							<h2 className="tarot-display mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
								{tarologaData.testimonials.title}
							</h2>
							<p className="mt-4 text-(--tarot-text-body)/80">
								{tarologaData.testimonials.description}
							</p>
						</TarotReveal>
					</div>

					<div className="w-full">
						<div className="space-y-12 overflow-visible py-12">
							<Marquee pauseOnHover className="overflow-visible [--duration:36s]">
								{testimonialsRowA.map((testimonial) => (
									<article
										key={testimonial.quote}
										className="tarot-surface mx-3 w-[320px] p-6 md:w-95"
									>
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
								))}
							</Marquee>
							<Marquee reverse pauseOnHover className="overflow-visible [--duration:34s]">
								{testimonialsRowB.map((testimonial) => (
									<article
										key={testimonial.quote}
										className="tarot-surface mx-3 w-[320px] p-6 md:w-95"
									>
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
								))}
							</Marquee>
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
							<p className="mt-5 text-(--tarot-text-body)/80">{tarologaData.faq.description}</p>
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
							<div className="tarot-cta-wrap relative overflow-hidden">
								<Image
									src="/showcases/tarologa/cards-fan.jpeg"
									alt=""
									fill
									className="pointer-events-none absolute inset-0 z-0 object-cover opacity-20 mix-blend-lighten"
									aria-hidden="true"
								/>
								<HolographicWall
									intensity={0.7}
									radius={160}
									gridSize={14}
									className="absolute! inset-0 z-1 h-full! w-full! rounded-none! border-none bg-transparent"
								/>
								<div className="pointer-events-none relative z-10 flex flex-col items-center">
									<h2 className="tarot-display text-center text-[clamp(2rem,4vw,3.4rem)] leading-tight text-balance text-(--tarot-accent-champagne)">
										{tarologaData.finalCta.title}
									</h2>
									<p className="mx-auto mt-4 max-w-2xl text-center text-(--tarot-text-body)/80">
										{tarologaData.finalCta.description}
									</p>
									<TarotButton
										href={tarologaData.finalCta.buttonHref}
										target="_blank"
										rel="noopener noreferrer"
										className="tarot-btn-primary pointer-events-auto mx-auto mt-8"
									>
										<MessageCircle className="h-5 w-5" />
										{tarologaData.finalCta.buttonLabel}
									</TarotButton>
								</div>
							</div>
						</TarotReveal>
					</div>
				</section>

				{/* ── FOOTER ── */}
				<footer className="px-6 pt-14 pb-24">
					<div className="mx-auto mb-14 h-px w-full max-w-7xl bg-linear-to-r from-transparent via-(--tarot-border-soft) to-transparent" />
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
								className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-(--tarot-accent-champagne) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0221]"
							>
								<Instagram className="h-4 w-4" />
								{tarologaData.footer.instagramLabel}
							</a>
							<a
								href={tarologaData.footer.whatsappHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-(--tarot-accent-champagne) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0221]"
							>
								<MessageCircle className="h-4 w-4" />
								{tarologaData.footer.whatsappLabel}
							</a>
						</div>
					</div>
					<div className="mx-auto mt-10 h-px w-full max-w-7xl bg-linear-to-r from-transparent via-(--tarot-border-soft) to-transparent" />
					<div className="mx-auto w-full max-w-7xl pt-5 text-xs text-(--tarot-text-body)/50">
						<p>{tarologaData.footer.disclaimer}</p>
						<p className="mt-2">{tarologaData.footer.copyright}</p>
					</div>
				</footer>

				<a
					href={tarologaData.finalCta.buttonHref}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Falar no WhatsApp"
					className="tarot-btn-whatsapp fixed right-5 bottom-5 z-50 px-4 py-3 text-sm shadow-[0_12px_30px_rgba(255,215,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0221]"
				>
					<MessageCircle className="h-5 w-5" />
					{tarologaData.finalCta.floatingButtonLabel}
				</a>
			</main>
		</div>
	)
}
