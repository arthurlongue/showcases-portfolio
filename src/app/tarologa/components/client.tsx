"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react"
import type { TarologaFaqItem } from "../data"

/* ─────────────────────────────────────────────
   TAROT REVEAL — Scroll-triggered fade+slide
   ───────────────────────────────────────────── */

const EASE_CUSTOM: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

interface TarotStarfieldProps {
	className?: string
	color?: string
	dotSize?: number
	gap?: number
	maxOpacity?: number
	flickerChance?: number
}

export function TarotStarfield({
	className,
	color = "212, 175, 55",
	dotSize = 2,
	gap = 22,
	maxOpacity = 0.34,
	flickerChance = 0.16,
}: TarotStarfieldProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const reduced = useReducedMotion()

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		const container = canvas.parentElement
		if (!container) return

		const dpr = window.devicePixelRatio || 1
		let raf = 0
		let last = 0
		let cols = 0
		let rows = 0
		let opacities = new Float32Array(0)

		const setup = () => {
			const width = container.clientWidth
			const height = container.clientHeight
			canvas.width = width * dpr
			canvas.height = height * dpr
			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

			cols = Math.ceil(width / gap)
			rows = Math.ceil(height / gap)
			opacities = new Float32Array(cols * rows)
			for (let i = 0; i < opacities.length; i++) {
				opacities[i] = Math.random() * maxOpacity
			}
		}

		const draw = (time: number) => {
			const width = canvas.width / dpr
			const height = canvas.height / dpr
			const delta = Math.min((time - last) / 1000, 0.05)
			last = time

			if (!reduced) {
				for (let i = 0; i < opacities.length; i++) {
					if (Math.random() < flickerChance * delta * 10) {
						opacities[i] = Math.random() * maxOpacity
					}
				}
			}

			ctx.clearRect(0, 0, width, height)
			for (let x = 0; x < cols; x++) {
				for (let y = 0; y < rows; y++) {
					const opacity = opacities[x * rows + y]
					ctx.fillStyle = `rgba(${color}, ${opacity})`
					ctx.fillRect(x * gap, y * gap, dotSize, dotSize)
				}
			}

			if (!reduced) {
				raf = requestAnimationFrame(draw)
			}
		}

		setup()
		const resizeObserver = new ResizeObserver(setup)
		resizeObserver.observe(container)

		if (reduced) {
			draw(0)
		} else {
			raf = requestAnimationFrame(draw)
		}

		return () => {
			cancelAnimationFrame(raf)
			resizeObserver.disconnect()
		}
	}, [color, dotSize, flickerChance, gap, maxOpacity, reduced])

	return <canvas ref={canvasRef} className={className} aria-hidden />
}

export function TarotBorderBeam({
	className,
	duration = 8,
	size = 64,
}: {
	className?: string
	duration?: number
	size?: number
}) {
	const reduced = useReducedMotion()

	return (
		<div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]">
			<motion.div
				className={`absolute aspect-square bg-linear-to-l from-[#f7e7ce] via-[#d4af37] to-transparent ${className ?? ""}`}
				style={
					{
						width: size,
						offsetPath: `rect(0 auto auto 0 round ${size}px)`,
					} as CSSProperties
				}
				initial={{ offsetDistance: "0%" }}
				animate={reduced ? { opacity: 0.45 } : { offsetDistance: ["0%", "100%"] }}
				transition={
					reduced
						? undefined
						: {
								duration,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}
				}
			/>
		</div>
	)
}

export function TarotReveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode
	className?: string
	delay?: number
}) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			initial={{ opacity: 0, y: reduced ? 0 : 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, ease: EASE_CUSTOM }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   TAROT HERO CONTENT — Staggered entrance
   ───────────────────────────────────────────── */

export function TarotHeroContent({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function TarotHeroItem({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: reduced ? 0 : 24 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: reduced ? 0 : 0.7, ease: EASE_CUSTOM },
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   TAROT BUTTON — Hover/tap micro-interactions
   ───────────────────────────────────────────── */

export function TarotButton({
	children,
	className,
	href,
	target,
	rel,
	onClick,
}: {
	children: ReactNode
	className?: string
	href?: string
	target?: string
	rel?: string
	onClick?: () => void
}) {
	return (
		<motion.a
			href={href}
			target={target}
			rel={rel}
			onClick={onClick}
			whileHover={{ scale: 1.02, y: -1 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className={className}
		>
			{children}
		</motion.a>
	)
}

/* ─────────────────────────────────────────────
   TAROT NAV — Mobile hamburger with AnimatePresence
   ───────────────────────────────────────────── */

interface TarotNavProps {
	brand: ReactNode
	navItems: ReadonlyArray<{ href: string; label: string }>
	ctaHref: string
}

export function TarotNav({ brand, navItems, ctaHref }: TarotNavProps) {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-(--tarot-border) bg-[#0a0b10]/70 backdrop-blur-xl">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
				{brand}
				<div className="hidden items-center gap-7 text-[0.82rem] font-semibold text-(--tarot-text-body)/75 md:flex">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="transition-colors hover:text-(--tarot-accent-champagne)"
						>
							{item.label}
						</a>
					))}
				</div>
				<a
					href={ctaHref}
					target="_blank"
					rel="noopener noreferrer"
					className="hidden rounded-full bg-[#25D366] px-5 py-2 text-[0.78rem] font-bold text-white transition-colors hover:bg-[#20ba5a] md:inline-flex"
				>
					Agendar no WhatsApp
				</a>
				<button
					type="button"
					className="cursor-pointer text-(--tarot-text-body) focus-visible:outline-none md:hidden"
					aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
					onClick={() => setMobileOpen((c) => !c)}
				>
					{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="flex flex-col gap-5 overflow-hidden border-t border-(--tarot-border) bg-[#0a0b10]/95 px-6 py-6 backdrop-blur-xl md:hidden"
					>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-[0.92rem] font-semibold text-(--tarot-text-body)/80 transition-colors hover:text-(--tarot-accent-champagne)"
								onClick={() => setMobileOpen(false)}
							>
								{item.label}
							</a>
						))}
						<a
							href={ctaHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex w-fit rounded-full bg-[#25D366] px-5 py-2.5 text-[0.82rem] font-bold text-white transition-colors hover:bg-[#20ba5a]"
							onClick={() => setMobileOpen(false)}
						>
							Agendar no WhatsApp
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION — Motion-powered height animation
   ───────────────────────────────────────────── */

interface TarologaFaqAccordionProps {
	items: TarologaFaqItem[]
}

interface WhatsAppMockMessage {
	sender: "cliente" | "tarologa"
	text: string
	time: string
}

interface WhatsAppProofCardProps {
	title: string
	subtitle: string
	messages: WhatsAppMockMessage[]
}

export function TarologaFaqAccordion({ items }: TarologaFaqAccordionProps) {
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<div className="flex flex-col gap-3">
			{items.map((item, index) => {
				const isOpen = openIndex === index
				const panelId = `faq-panel-${index}`
				const buttonId = `faq-button-${index}`

				return (
					<div
						key={item.question}
						className="overflow-hidden rounded-2xl border border-(--tarot-border) bg-[#0a0b10]/40 backdrop-blur-sm"
					>
						<button
							type="button"
							id={buttonId}
							aria-expanded={isOpen}
							aria-controls={panelId}
							onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
							className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
						>
							<span className="text-[0.98rem] font-semibold leading-snug text-(--tarot-accent-champagne)">
								{item.question}
							</span>
							<span
								className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--tarot-border) bg-(--tarot-accent-gold)/5 transition-transform duration-300 ${
									isOpen ? "rotate-180" : "rotate-0"
								}`}
							>
								<ChevronDown className="h-4 w-4 text-(--tarot-accent-gold)" />
							</span>
						</button>
						<motion.div
							id={panelId}
							role="region"
							aria-labelledby={buttonId}
							initial={false}
							animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
							transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
							className="overflow-hidden"
						>
							<p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-(--tarot-text-body)/80">
								{item.answer}
							</p>
						</motion.div>
					</div>
				)
			})}
		</div>
	)
}

/* ─────────────────────────────────────────────
   WHATSAPP PROOF CARD — With message hover effects
   ───────────────────────────────────────────── */

export function WhatsAppProofCard({ title, subtitle, messages }: WhatsAppProofCardProps) {
	return (
		<article className="relative overflow-hidden rounded-3xl border border-(--tarot-border) bg-[#0a0b10] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
			<div className="mb-4 flex items-center justify-between border-b border-(--tarot-border) pb-4">
				<div>
					<h4 className="text-sm font-semibold text-(--tarot-accent-champagne)">{title}</h4>
					<p className="text-xs text-(--tarot-text-body)/60">{subtitle}</p>
				</div>
				<span className="rounded-full bg-[#1a1b20] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-(--tarot-accent-gold)">
					Online
				</span>
			</div>

			<div className="flex flex-col gap-3">
				{messages.map((message, i) => {
					const isClient = message.sender === "cliente"
					return (
						<motion.div
							key={`${message.sender}-${message.time}-${message.text}`}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.12, ease: EASE_CUSTOM }}
							whileHover={{ scale: 1.01 }}
							className={`flex ${isClient ? "justify-start" : "justify-end"}`}
						>
							<div
								className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
									isClient
										? "rounded-bl-sm bg-[#1a1b20] text-(--tarot-text-body)/90 border border-(--tarot-border)"
										: "rounded-br-sm bg-(--tarot-accent-gold)/15 text-(--tarot-text-body) border border-(--tarot-accent-gold)/20"
								}`}
							>
								<p>{message.text}</p>
								<p className="mt-1 text-right text-[0.7rem] text-(--tarot-text-body)/60">
									{message.time}
								</p>
							</div>
						</motion.div>
					)
				})}
			</div>
		</article>
	)
}
