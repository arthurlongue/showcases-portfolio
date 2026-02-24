"use client"

import {
	ArrowRight,
	Brain,
	Check,
	ChevronRight,
	Clock3,
	Heart,
	Menu,
	MessageCircle,
	MoveRight,
	Plus,
	Quote,
	SignalHigh,
	Star,
	UserCircle2,
	Users,
	X,
} from "lucide-react"
import { motion } from "motion/react"
import { type CSSProperties, useEffect, useMemo, useState } from "react"

import type { PsicologoPageData } from "../data"

const iconByName = {
	brain: Brain,
	users: Users,
	clock: Clock3,
	pulse: SignalHigh,
	plus: Plus,
	heart: Heart,
} as const

const navLinkClass =
	"cursor-pointer text-[0.92rem] font-medium tracking-[0.01em] text-[var(--psi-text-secondary)] transition-colors duration-300 hover:text-[var(--psi-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)]"

const sectionOverlineClass =
	"text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--psi-terracotta)]"

const surfaceStyle = {
	"--psi-cream": "#FDF6EE",
	"--psi-warm-bg": "#F5EDE3",
	"--psi-terracotta": "#C4704B",
	"--psi-terracotta-light": "#D4896A",
	"--psi-terracotta-dark": "#A85A38",
	"--psi-sage": "#7A8B6F",
	"--psi-sage-light": "#E8EDE4",
	"--psi-brown": "#5C4033",
	"--psi-brown-light": "#8B6E5A",
	"--psi-text-primary": "#3D2E23",
	"--psi-text-secondary": "#6B5B50",
	"--psi-text-muted": "#9B8B80",
	"--psi-accent-yellow": "#E8C564",
	"--psi-accent-yellow-light": "#FFF4D6",
	"--psi-border": "rgba(92, 64, 51, 0.1)",
} as CSSProperties

export function PsicologoPremiumClient({ data }: { data: PsicologoPageData }) {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [openFaqIndex, setOpenFaqIndex] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40)
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const ctaRowClass = useMemo(
		() =>
			"inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		[],
	)

	return (
		<div
			style={surfaceStyle}
			className="overflow-x-hidden bg-[var(--psi-cream)] text-[var(--psi-text-primary)]"
		>
			<nav
				className={`fixed top-0 right-0 left-0 z-50 py-4 transition-all duration-400 ${
					isScrolled
						? "bg-[color:rgba(253,246,238,0.92)] shadow-[0_1px_20px_rgba(61,46,35,0.06)] backdrop-blur-xl"
						: ""
				}`}
			>
				<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">
					<a
						href="#topo"
						className="cursor-pointer font-serif text-[1.4rem] text-[var(--psi-terracotta)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)]"
					>
						Helena Martins
					</a>
					<ul className="hidden items-center gap-9 md:flex">
						<li>
							<a href="#sobre" className={navLinkClass}>
								Sobre
							</a>
						</li>
						<li>
							<a href="#servicos" className={navLinkClass}>
								Serviços
							</a>
						</li>
						<li>
							<a href="#como-funciona" className={navLinkClass}>
								Como Funciona
							</a>
						</li>
						<li>
							<a href="#faq" className={navLinkClass}>
								Dúvidas
							</a>
						</li>
						<li>
							<a
								href="#agendar"
								className="cursor-pointer rounded-full bg-[var(--psi-terracotta)] px-6 py-2.5 text-[0.88rem] font-medium text-white transition-all duration-300 hover:-translate-y-px hover:bg-[var(--psi-terracotta-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)]"
							>
								Agendar Consulta
							</a>
						</li>
					</ul>
					<button
						type="button"
						onClick={() => setMobileMenuOpen((previous) => !previous)}
						className="inline-flex cursor-pointer items-center rounded-md p-2 text-[var(--psi-text-primary)] transition-colors hover:bg-[color:rgba(61,46,35,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)] md:hidden"
						aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
					>
						{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
				{mobileMenuOpen ? (
					<div className="mx-auto mt-3 w-full max-w-[1200px] px-6 md:hidden">
						<div className="rounded-2xl border border-[var(--psi-border)] bg-[var(--psi-cream)] p-5 shadow-lg">
							<div className="flex flex-col gap-4">
								<a href="#sobre" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
									Sobre
								</a>
								<a
									href="#servicos"
									className={navLinkClass}
									onClick={() => setMobileMenuOpen(false)}
								>
									Serviços
								</a>
								<a
									href="#como-funciona"
									className={navLinkClass}
									onClick={() => setMobileMenuOpen(false)}
								>
									Como Funciona
								</a>
								<a href="#faq" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
									Dúvidas
								</a>
								<a
									href="#agendar"
									className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--psi-terracotta)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--psi-terracotta-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)]"
									onClick={() => setMobileMenuOpen(false)}
								>
									Agendar Consulta
								</a>
							</div>
						</div>
					</div>
				) : null}
			</nav>

			<main id="topo">
				<section className="relative overflow-hidden px-6 pt-[120px] pb-16 md:pt-[140px] md:pb-20">
					<div className="-right-48 pointer-events-none absolute -top-28 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,112,75,0.08)_0%,transparent_70%)]" />
					<div className="-left-36 pointer-events-none absolute -bottom-12 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,139,111,0.08)_0%,transparent_70%)]" />
					<div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-15">
						<div className="relative z-10 text-center lg:text-left">
							<motion.span
								initial={{ opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className="mb-7 inline-flex items-center gap-2 rounded-full bg-[var(--psi-sage-light)] px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.04em] text-[var(--psi-sage)]"
							>
								<span className="h-2 w-2 rounded-full bg-[var(--psi-sage)]" />
								{data.hero.badge}
							</motion.span>
							<motion.h1
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
								className="mb-6 font-serif text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.12]"
							>
								{data.hero.title}
								<br />
								<em className="text-[var(--psi-terracotta)]">{data.hero.emphasis}</em>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
								className="mx-auto mb-10 max-w-[480px] text-[1.03rem] leading-[1.75] text-[var(--psi-text-secondary)] lg:mx-0"
							>
								{data.hero.description}
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
								className="flex flex-wrap items-center justify-center gap-5 lg:justify-start"
							>
								<a
									href="#agendar"
									className={`${ctaRowClass} bg-[var(--psi-terracotta)] px-9 py-4 text-white shadow-[0_4px_20px_rgba(196,112,75,0.25)] hover:-translate-y-0.5 hover:bg-[var(--psi-terracotta-dark)] hover:shadow-[0_8px_30px_rgba(196,112,75,0.35)] focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-[var(--psi-cream)]`}
								>
									{data.hero.primaryAction}
									<ArrowRight className="h-4.5 w-4.5" />
								</a>
								<a
									href="#como-funciona"
									className="inline-flex cursor-pointer items-center gap-2 font-medium text-[0.95rem] text-[var(--psi-text-secondary)] transition-colors hover:text-[var(--psi-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-cream)]"
								>
									<MessageCircle className="h-4.5 w-4.5" />
									{data.hero.secondaryAction}
								</a>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
							className="relative mx-auto w-full max-w-[430px]"
						>
							<div className="pointer-events-none absolute -top-5 -right-5 h-24 w-24 animate-[spin_20s_linear_infinite] rounded-full border-[3px] border-[var(--psi-accent-yellow)] opacity-60 max-[480px]:hidden" />
							<div className="aspect-[4/5] overflow-hidden rounded-[2.6rem] bg-[linear-gradient(135deg,var(--psi-warm-bg)_0%,#E8D5C4_100%)]">
								<div className="flex h-full items-center justify-center">
									<UserCircle2 className="h-30 w-30 text-[color:rgba(196,112,75,0.35)]" />
								</div>
							</div>
							<div className="absolute bottom-5 left-3 z-10 hidden animate-[float_6s_ease-in-out_infinite] items-center gap-3 rounded-[20px] bg-white px-5 py-4 shadow-[0_12px_40px_rgba(61,46,35,0.1)] min-[481px]:flex">
								<div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[var(--psi-accent-yellow-light)]">
									<Star className="h-5 w-5 text-[#B8941E]" />
								</div>
								<div>
									<p className="text-[0.76rem] font-semibold uppercase tracking-[0.06em] text-[var(--psi-text-muted)]">
										Avaliação
									</p>
									<p className="font-serif text-[1.2rem] leading-none">4.9 ★ Google</p>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				<section className="border-y border-[var(--psi-border)] px-6 py-14 md:py-15">
					<div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-8 text-center md:grid-cols-4">
						{data.stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-80px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<p className="mb-2 font-serif text-[2.3rem] leading-none text-[var(--psi-terracotta)] md:text-[2.6rem]">
									{stat.value}
								</p>
								<p className="text-[0.88rem] font-medium text-[var(--psi-text-muted)]">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				<section id="sobre" className="px-6 py-20 md:py-25">
					<div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
							className="relative mx-auto w-full max-w-[420px]"
						>
							<div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#E8D5C4_0%,var(--psi-warm-bg)_100%)]">
								<div className="flex h-full items-end justify-center pb-14">
									<UserCircle2 className="h-24 w-24 text-[color:rgba(92,64,51,0.2)]" />
								</div>
							</div>
							<div className="-bottom-4 right-0 max-w-[280px] rounded-[20px] bg-white p-6 shadow-[0_12px_40px_rgba(61,46,35,0.1)] min-[481px]:absolute min-[481px]:-right-8">
								<blockquote className="mb-3 font-serif text-[1.02rem] leading-[1.5] italic">
									"{data.about.quote}"
								</blockquote>
								<cite className="text-[0.82rem] font-semibold text-[var(--psi-terracotta)] not-italic">
									— {data.about.signature}
								</cite>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: 0.1 }}
						>
							<p className={sectionOverlineClass}>{data.about.overline}</p>
							<h2 className="mt-4 mb-6 font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]">
								{data.about.title}
							</h2>
							{data.about.paragraphs.map((paragraph) => (
								<p
									key={paragraph}
									className="mb-5 text-[1.02rem] leading-[1.8] text-[var(--psi-text-secondary)]"
								>
									{paragraph}
								</p>
							))}
							<div className="mt-8 mb-9 flex flex-wrap gap-2.5">
								{data.about.credentials.map((credential) => (
									<span
										key={credential}
										className="inline-flex items-center gap-1.5 rounded-full bg-[var(--psi-sage-light)] px-4 py-2 text-[0.82rem] font-semibold text-[var(--psi-sage)]"
									>
										<Check className="h-3.5 w-3.5" />
										{credential}
									</span>
								))}
							</div>
							<a
								href="#agendar"
								className={`${ctaRowClass} bg-[var(--psi-terracotta)] px-9 py-4 text-white shadow-[0_4px_20px_rgba(196,112,75,0.25)] hover:-translate-y-0.5 hover:bg-[var(--psi-terracotta-dark)] hover:shadow-[0_8px_30px_rgba(196,112,75,0.35)] focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-[var(--psi-cream)]`}
							>
								{data.about.action}
								<MoveRight className="h-4.5 w-4.5" />
							</a>
						</motion.div>
					</div>
				</section>

				<section id="servicos" className="bg-[var(--psi-warm-bg)] px-6 py-20 md:py-25">
					<div className="mx-auto w-full max-w-[1200px]">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
							className="mb-14 text-center md:mb-15"
						>
							<p className={sectionOverlineClass}>Áreas de Atuação</p>
							<h2 className="mx-auto mt-4 max-w-[500px] font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]">
								Como posso te ajudar
							</h2>
						</motion.div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
							{data.treatments.map((item, index) => {
								const IconComponent = iconByName[item.icon]
								const bgPalette = [
									"bg-[#FFF0E6] text-[var(--psi-terracotta)]",
									"bg-[var(--psi-sage-light)] text-[var(--psi-sage)]",
									"bg-[var(--psi-accent-yellow-light)] text-[#B8941E]",
									"bg-[#F0E6F6] text-[#8B5FB0]",
									"bg-[#E6F0F5] text-[#4A7C95]",
									"bg-[#FDE8E8] text-[#C25050]",
								]
								return (
									<motion.article
										key={item.title}
										initial={{ opacity: 0, y: 24 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: "-90px" }}
										transition={{ duration: 0.6, delay: index * 0.05 }}
										className="cursor-default rounded-[20px] border border-transparent bg-white p-8 transition-all duration-400 hover:-translate-y-1 hover:border-[var(--psi-terracotta-light)] hover:shadow-[0_16px_48px_rgba(61,46,35,0.08)] md:p-9"
									>
										<div className="flex items-start gap-5">
											<div
												className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${bgPalette[index]}`}
											>
												<IconComponent className="h-7 w-7" />
											</div>
											<div>
												<h3 className="mb-2.5 font-serif text-[1.3rem] leading-tight">
													{item.title}
												</h3>
												<p className="text-[0.92rem] leading-[1.65] text-[var(--psi-text-secondary)]">
													{item.description}
												</p>
											</div>
										</div>
									</motion.article>
								)
							})}
						</div>
					</div>
				</section>

				<section id="como-funciona" className="px-6 py-20 md:py-25">
					<div className="mx-auto w-full max-w-[1200px]">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
							className="mb-14 text-center md:mb-17"
						>
							<p className={sectionOverlineClass}>Como Funciona</p>
							<h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]">
								Seu caminho começa aqui
							</h2>
						</motion.div>

						<div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
							<div className="absolute top-12 right-[16%] left-[16%] z-0 hidden h-0.5 bg-[linear-gradient(90deg,var(--psi-terracotta)_0%,var(--psi-accent-yellow)_50%,var(--psi-sage)_100%)] opacity-30 md:block" />
							{data.steps.map((step, index) => {
								const pillColors = [
									"bg-[#FFF0E6] text-[var(--psi-terracotta)]",
									"bg-[var(--psi-accent-yellow-light)] text-[#9B7B1A]",
									"bg-[var(--psi-sage-light)] text-[var(--psi-sage)]",
								]
								return (
									<motion.div
										key={step.title}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: "-90px" }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="relative z-10 text-center"
									>
										<div
											className={`mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full font-serif text-[2rem] transition-transform duration-400 hover:scale-[1.08] ${pillColors[index]}`}
										>
											0{index + 1}
										</div>
										<h3 className="mb-3 font-serif text-[1.3rem]">{step.title}</h3>
										<p className="mx-auto max-w-[300px] text-[0.92rem] leading-[1.65] text-[var(--psi-text-secondary)]">
											{step.description}
										</p>
									</motion.div>
								)
							})}
						</div>
					</div>
				</section>

				<section className="relative overflow-hidden bg-[var(--psi-brown)] px-6 py-20 text-white md:py-25">
					<div className="pointer-events-none absolute -top-48 -right-48 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,197,100,0.08)_0%,transparent_70%)]" />
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7 }}
						className="relative z-10 mx-auto w-full max-w-[1200px] text-center"
					>
						<Quote className="mx-auto mb-8 h-14 w-14 text-[var(--psi-accent-yellow)] opacity-60" />
						<p className="mx-auto mb-9 max-w-[720px] font-serif text-[clamp(1.35rem,2.5vw,1.9rem)] leading-[1.5] text-[color:rgba(255,255,255,0.92)] italic">
							{data.testimonial.quote}
						</p>
						<div className="mb-5 flex justify-center gap-1 text-[var(--psi-accent-yellow)]">
							{["a", "b", "c", "d", "e"].map((star) => (
								<Star key={star} className="h-5 w-5 fill-current" />
							))}
						</div>
						<div className="flex items-center justify-center gap-3.5">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--psi-brown-light)] text-[0.88rem] font-bold text-[color:rgba(255,255,255,0.72)]">
								{data.testimonial.initials}
							</div>
							<div>
								<p className="text-[0.95rem] font-semibold">{data.testimonial.name}</p>
								<p className="text-[0.82rem] text-[color:rgba(255,255,255,0.55)]">
									{data.testimonial.role}
								</p>
							</div>
						</div>
					</motion.div>
				</section>

				<section id="faq" className="px-6 py-20 md:py-25">
					<div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
						>
							<p className={sectionOverlineClass}>{data.faq.overline}</p>
							<h2 className="mt-4 mb-5 font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]">
								{data.faq.title}
							</h2>
							<p className="text-[1rem] leading-[1.7] text-[var(--psi-text-secondary)]">
								{data.faq.description}
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: 0.1 }}
							className="flex flex-col gap-3"
						>
							{data.faq.items.map((item, index) => {
								const isOpen = openFaqIndex === index
								return (
									<div
										key={item.question}
										className="overflow-hidden rounded-xl border border-[var(--psi-border)] bg-white transition-colors hover:border-[color:rgba(196,112,75,0.2)]"
									>
										<button
											type="button"
											onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
											className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-7 py-5 text-left text-[1rem] font-semibold transition-colors hover:text-[var(--psi-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-inset"
										>
											<span>{item.question}</span>
											<span
												className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
													isOpen
														? "rotate-45 bg-[var(--psi-terracotta)] text-white"
														: "bg-[var(--psi-cream)] text-[var(--psi-text-primary)]"
												}`}
											>
												<Plus className="h-4 w-4" />
											</span>
										</button>
										<motion.div
											initial={false}
											animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
											className="overflow-hidden"
										>
											<p className="px-7 pb-5 text-[0.94rem] leading-[1.7] text-[var(--psi-text-secondary)]">
												{item.answer}
											</p>
										</motion.div>
									</div>
								)
							})}
						</motion.div>
					</div>
				</section>

				<section id="agendar" className="bg-[var(--psi-sage-light)] px-6 py-20 md:py-25">
					<div className="mx-auto w-full max-w-[1200px]">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
							className="relative overflow-hidden rounded-[2rem] bg-white px-7 py-14 text-center shadow-[0_20px_60px_rgba(61,46,35,0.06)] md:px-15 md:py-20"
						>
							<div className="absolute top-0 right-0 left-0 h-1 bg-[linear-gradient(90deg,var(--psi-terracotta),var(--psi-accent-yellow),var(--psi-sage))]" />
							<h2 className="mx-auto max-w-[600px] font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.18]">
								Pronto para dar o
								<br />
								<em className="text-[var(--psi-terracotta)]">{data.cta.emphasis}</em>
							</h2>
							<p className="mx-auto mt-5 mb-10 max-w-[500px] text-[1.05rem] leading-[1.7] text-[var(--psi-text-secondary)]">
								{data.cta.description}
							</p>
							<div className="flex flex-wrap items-center justify-center gap-5">
								<a
									href={data.cta.whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#25D366] px-9 py-4 font-semibold text-white shadow-[0_4px_20px_rgba(37,211,102,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20BA5A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
								>
									<MessageCircle className="h-5.5 w-5.5 fill-current" />
									{data.cta.whatsappLabel}
								</a>
								<a
									href="#sobre"
									className="inline-flex cursor-pointer items-center gap-2 text-[0.95rem] font-medium text-[var(--psi-text-secondary)] transition-colors hover:text-[var(--psi-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
								>
									{data.cta.secondaryLabel}
									<ChevronRight className="h-4 w-4" />
								</a>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			<footer className="bg-[var(--psi-text-primary)] px-6 pt-15 pb-8 text-[color:rgba(255,255,255,0.6)]">
				<div className="mx-auto w-full max-w-[1200px]">
					<div className="mb-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-15">
						<div>
							<h3 className="mb-4 font-serif text-[1.5rem] text-white">{data.footer.brand}</h3>
							<p className="max-w-[320px] text-[0.92rem] leading-[1.65]">
								{data.footer.description}
							</p>
						</div>
						<div>
							<h4 className="mb-5 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-white">
								Navegação
							</h4>
							<ul className="flex flex-col gap-3">
								{[
									{ href: "#sobre", label: "Sobre" },
									{ href: "#servicos", label: "Serviços" },
									{ href: "#como-funciona", label: "Como Funciona" },
									{ href: "#faq", label: "Perguntas Frequentes" },
								].map((item) => (
									<li key={item.href}>
										<a
											href={item.href}
											className="cursor-pointer text-[0.92rem] transition-colors hover:text-[var(--psi-terracotta-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-text-primary)]"
										>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="mb-5 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-white">
								Contato
							</h4>
							<ul className="flex flex-col gap-3">
								<li>
									<a
										href={data.footer.whatsapp}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer text-[0.92rem] transition-colors hover:text-[var(--psi-terracotta-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-text-primary)]"
									>
										WhatsApp: (27) 99999-9999
									</a>
								</li>
								<li>
									<a
										href={`mailto:${data.footer.email}`}
										className="cursor-pointer text-[0.92rem] transition-colors hover:text-[var(--psi-terracotta-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-text-primary)]"
									>
										{data.footer.email}
									</a>
								</li>
								<li>
									<a
										href={data.footer.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer text-[0.92rem] transition-colors hover:text-[var(--psi-terracotta-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--psi-terracotta-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--psi-text-primary)]"
									>
										@helenamartins
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-center justify-between gap-3 border-t border-[color:rgba(255,255,255,0.08)] pt-7 text-center text-[0.82rem] md:flex-row md:text-left">
						<span>{data.footer.copyright}</span>
						<span className="text-[color:rgba(255,255,255,0.4)]">{data.footer.crp}</span>
					</div>
				</div>
			</footer>
		</div>
	)
}
