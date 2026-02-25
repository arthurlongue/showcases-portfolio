"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { type CSSProperties, type ReactNode, useCallback, useEffect, useRef, useState } from "react"
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

export function TarotLens({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<div className={`relative ${className ?? ""}`}>
			<div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-[radial-gradient(circle_at_55%_28%,rgba(247,231,206,0.16),transparent_52%)]" />
			<div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] shadow-[inset_0_0_80px_rgba(10,11,16,0.35)]" />
			{children}
		</div>
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
			className={`${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0221]`}
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
	ctaLabel: string
}

export function TarotNav({ brand, navItems, ctaHref, ctaLabel }: TarotNavProps) {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-6 pointer-events-none">
			<nav
				className={`mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 pointer-events-auto ${
					scrolled
						? "bg-[#0a0b10]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl border border-white/5"
						: "bg-transparent"
				}`}
			>
				{brand}
				<div className="hidden items-center gap-7 text-[0.82rem] font-semibold text-(--tarot-text-body)/75 md:flex">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-sm transition-colors hover:text-(--tarot-accent-champagne) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10]"
						>
							{item.label}
						</a>
					))}
				</div>
				<a
					href={ctaHref}
					target="_blank"
					rel="noopener noreferrer"
					className="tarot-btn-whatsapp hidden md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10]"
				>
					{ctaLabel}
				</a>
				<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
					<SheetTrigger asChild>
						<button
							type="button"
							className="cursor-pointer rounded-sm text-(--tarot-text-body) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10] md:hidden"
							aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
						>
							{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="border-none bg-[#0a0b10]/95 p-0 text-(--tarot-text-body) shadow-[-10px_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
					>
						<SheetHeader className="px-6 py-4 shadow-[0_1px_0_rgba(255,215,0,0.1)]">
							<SheetTitle className="text-sm tracking-wide text-(--tarot-accent-champagne)">
								Menu
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-5 px-6 py-6">
							{navItems.map((item) => (
								<SheetClose asChild key={item.href}>
									<a
										href={item.href}
										className="rounded-sm text-[0.92rem] font-semibold text-(--tarot-text-body)/80 transition-colors hover:text-(--tarot-accent-champagne) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10]"
									>
										{item.label}
									</a>
								</SheetClose>
							))}
							<SheetClose asChild>
								<a
									href={ctaHref}
									target="_blank"
									rel="noopener noreferrer"
									className="tarot-btn-whatsapp mt-2 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10]"
								>
									{ctaLabel}
								</a>
							</SheetClose>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	)
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION — Motion-powered height animation
   ───────────────────────────────────────────── */

interface TarologaFaqAccordionProps {
	items: TarologaFaqItem[]
}

export function TarologaFaqAccordion({ items }: TarologaFaqAccordionProps) {
	return (
		<Accordion type="single" collapsible defaultValue="faq-0" className="flex flex-col gap-3">
			{items.map((item, index) => (
				<BlurFade key={item.question} delay={index * 0.05} inView>
					<AccordionItem
						value={`faq-${index}`}
						className="overflow-hidden rounded-2xl bg-[#0a0b10]/40 px-6 shadow-[0_4px_16px_rgba(0,0,0,0.2)] backdrop-blur-sm"
					>
						<AccordionTrigger className="cursor-pointer rounded-sm py-5 text-left text-[0.98rem] font-semibold leading-snug text-(--tarot-accent-champagne) hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--tarot-accent-gold)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b10] [&>svg]:text-(--tarot-accent-gold)">
							{item.question}
						</AccordionTrigger>
						<AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-(--tarot-text-body)/80">
							{item.answer}
						</AccordionContent>
					</AccordionItem>
				</BlurFade>
			))}
		</Accordion>
	)
}

/* ─────────────────────────────────────────────
   PING-PONG VIDEO — Plays forward then backward
   ───────────────────────────────────────────── */

export function PingPongVideo({ src, className }: { src: string; className?: string }) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const directionRef = useRef<1 | -1>(1)
	const rafRef = useRef(0)
	const lastTimeRef = useRef(0)
	const reduced = useReducedMotion()

	const tick = useCallback((timestamp: number) => {
		const video = videoRef.current
		if (!video || !video.duration) {
			rafRef.current = requestAnimationFrame(tick)
			return
		}

		const delta = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05)
		lastTimeRef.current = timestamp

		const next = video.currentTime + delta * directionRef.current
		if (next >= video.duration) {
			video.currentTime = video.duration
			directionRef.current = -1
		} else if (next <= 0) {
			video.currentTime = 0
			directionRef.current = 1
		} else {
			video.currentTime = next
		}

		rafRef.current = requestAnimationFrame(tick)
	}, [])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		if (reduced) return

		const onLoaded = () => {
			video.pause()
			directionRef.current = 1
			lastTimeRef.current = performance.now()
			rafRef.current = requestAnimationFrame(tick)
		}

		if (video.readyState >= 2) {
			onLoaded()
		} else {
			video.addEventListener("loadeddata", onLoaded, { once: true })
		}

		return () => {
			cancelAnimationFrame(rafRef.current)
			video.removeEventListener("loadeddata", onLoaded)
		}
	}, [tick, reduced])

	return (
		<video
			ref={videoRef}
			src={src}
			muted
			playsInline
			preload="auto"
			autoPlay={!!reduced}
			loop={!!reduced}
			className={className}
		/>
	)
}
