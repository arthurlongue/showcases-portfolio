"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────────
   MARQUEE — Infinite scrolling text strip
   ───────────────────────────────────────────── */

export function Marquee({
	children,
	speed = 30,
	reverse = false,
	className,
}: {
	children: ReactNode
	speed?: number
	reverse?: boolean
	className?: string
}) {
	return (
		<div
			className={`flex overflow-hidden whitespace-nowrap ${className}`}
			style={{ ["--marquee-speed" as string]: `${speed}s` }}
		>
			{[0, 1].map((i) => (
				<motion.div
					key={i}
					className="flex shrink-0 items-center gap-8"
					animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
					transition={{
						x: {
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "loop",
							duration: speed,
							ease: "linear",
						},
					}}
				>
					{children}
				</motion.div>
			))}
		</div>
	)
}

/* ─────────────────────────────────────────────
   BRUTAL REVEAL — Slide-in with hard edge
   ───────────────────────────────────────────── */

export function BrutalReveal({
	children,
	className,
	delay = 0,
	direction = "up",
}: {
	children: ReactNode
	className?: string
	delay?: number
	direction?: "up" | "left" | "right"
}) {
	const variants = {
		up: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
		left: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
		right: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
	}

	return (
		<motion.div
			initial={variants[direction].initial}
			whileInView={variants[direction].animate}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   BRUTAL BUTTON — Heavy shadow, no radius
   ───────────────────────────────────────────── */

export function BrutalButton({
	children,
	variant = "primary",
	className,
	...props
}: {
	children: ReactNode
	variant?: "primary" | "outline"
	className?: string
} & ComponentProps<typeof motion.button>) {
	const base =
		"relative cursor-pointer border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] font-[family-name:var(--font-heading)] text-sm uppercase tracking-[0.15em] transition-all duration-150 px-8 py-4"
	const variants = {
		primary:
			"bg-[var(--color-brutal-accent)] text-[var(--color-brutal-text-light)] shadow-[var(--brutal-shadow)] hover:shadow-[var(--brutal-shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
		outline:
			"bg-transparent text-[var(--color-brutal-text)] shadow-[var(--brutal-shadow)] hover:bg-[var(--color-brutal-text)] hover:text-[var(--color-brutal-text-light)] hover:shadow-[var(--brutal-shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
	}

	return (
		<motion.button
			type="button"
			whileTap={{ scale: 0.97 }}
			className={`${base} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</motion.button>
	)
}

/* ─────────────────────────────────────────────
   BRUTAL CARD — Outlined box with hard shadow
   ───────────────────────────────────────────── */

export function BrutalCard({
	children,
	className,
	hover = true,
}: {
	children: ReactNode
	className?: string
	hover?: boolean
}) {
	return (
		<motion.div
			whileHover={
				hover ? { x: -3, y: -3, boxShadow: "6px 6px 0px var(--color-brutal-border)" } : undefined
			}
			transition={{ duration: 0.15 }}
			className={`border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-surface)] shadow-[var(--brutal-shadow)] ${className}`}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   STAGGER COUNTER — Numbers that count up
   ───────────────────────────────────────────── */

export function StaggerCounter({
	value,
	label,
	suffix = "",
}: {
	value: number
	label: string
	suffix?: string
}) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const [inView, setInView] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setInView(true)
			},
			{ threshold: 0.5 },
		)
		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!inView) return
		const duration = 1500
		const steps = 40
		const increment = value / steps
		let current = 0
		const timer = setInterval(() => {
			current += increment
			if (current >= value) {
				setCount(value)
				clearInterval(timer)
			} else {
				setCount(Math.floor(current))
			}
		}, duration / steps)
		return () => clearInterval(timer)
	}, [inView, value])

	return (
		<div ref={ref} className="flex flex-col">
			<span className="font-[family-name:var(--font-heading)] text-[clamp(48px,8vw,96px)] leading-none text-[var(--color-brutal-accent)]">
				{count}
				{suffix}
			</span>
			<span className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-brutal-text-muted)]">
				{label}
			</span>
		</div>
	)
}

/* ─────────────────────────────────────────────
   BRUTAL NAV — Fixed top bar with hard lines
   ───────────────────────────────────────────── */

export function BrutalNav() {
	const [scrolled, setScrolled] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 50)
	})

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
			className={`fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] px-6 py-4 transition-colors duration-300 md:px-12 ${
				scrolled ? "bg-[var(--color-brutal-bg)]/95 backdrop-blur-md" : "bg-[var(--color-brutal-bg)]"
			}`}
		>
			<div className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-3xl uppercase tracking-wider">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="var(--color-brutal-accent)"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M10 2v2" />
					<path d="M14 2v2" />
					<path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
					<path d="M6 2v2" />
				</svg>
				VOID
			</div>

			<div className="hidden items-center gap-10 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest md:flex">
				{[
					{ label: "Filosofia", href: "#filosofia" },
					{ label: "Cardápio", href: "#cardapio" },
					{ label: "Galeria", href: "#galeria" },
					{ label: "Visite", href: "#visite" },
				].map((item) => (
					<a
						key={item.label}
						href={item.href}
						className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-brutal-accent)]"
					>
						{item.label}
					</a>
				))}
			</div>

			{/* Mobile menu toggle */}
			<button
				type="button"
				className="cursor-pointer border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase transition-colors hover:bg-[var(--color-brutal-text)] hover:text-[var(--color-brutal-text-light)] md:hidden"
				aria-label="Menu"
			>
				Menu
			</button>
		</motion.nav>
	)
}

/* ─────────────────────────────────────────────
   MENU ITEM ROW — Horizontal line with price
   ───────────────────────────────────────────── */

export function MenuItemRow({
	name,
	description,
	price,
	index,
}: {
	name: string
	description: string
	price: string
	index: number
}) {
	return (
		<BrutalReveal delay={index * 0.08}>
			<div className="group flex cursor-pointer items-baseline justify-between border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] py-5 transition-colors duration-200 hover:bg-[var(--color-brutal-text)] hover:px-4 hover:text-[var(--color-brutal-text-light)]">
				<div className="flex-1">
					<div className="flex items-center gap-3">
						<span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-brutal-text-muted)] group-hover:text-[var(--color-brutal-accent)]">
							{String(index + 1).padStart(2, "0")}
						</span>
						<span className="font-[family-name:var(--font-heading)] text-lg uppercase tracking-wide md:text-xl">
							{name}
						</span>
					</div>
					<p className="mt-1 ml-8 font-[family-name:var(--font-body)] text-sm text-[var(--color-brutal-text-muted)] group-hover:text-[var(--color-brutal-surface-dark)]">
						{description}
					</p>
				</div>
				<span className="font-[family-name:var(--font-mono)] text-lg font-bold tracking-tight group-hover:text-[var(--color-brutal-accent)]">
					{price}
				</span>
			</div>
		</BrutalReveal>
	)
}

/* ─────────────────────────────────────────────
   PARALLAX SECTION — Scroll-driven movement
   ───────────────────────────────────────────── */

export function ParallaxSection({
	children,
	className,
	speed = 0.3,
}: {
	children: ReactNode
	className?: string
	speed?: number
}) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})
	const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])

	return (
		<div ref={ref} className={`relative overflow-hidden ${className}`}>
			<motion.div style={{ y }}>{children}</motion.div>
		</div>
	)
}

/* ─────────────────────────────────────────────
   ROTATING BADGE — Spinning text circle
   ───────────────────────────────────────────── */

export function RotatingBadge({ text, className }: { text: string; className?: string }) {
	const characters = text.split("")
	const angleStep = 360 / characters.length

	return (
		<motion.div
			animate={{ rotate: 360 }}
			transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
			className={`relative ${className}`}
		>
			{characters.map((char, i) => (
				<span
					key={`${char}-${i}`}
					className="absolute top-0 left-1/2 origin-[0_calc(var(--badge-size)/2)] font-[family-name:var(--font-mono)] text-[10px] uppercase"
					style={{
						transform: `rotate(${i * angleStep}deg)`,
						["--badge-size" as string]: "100%",
					}}
				>
					{char}
				</span>
			))}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   PROCESS STEP — Numbered step with line
   ───────────────────────────────────────────── */

export function ProcessStep({
	number,
	title,
	description,
	index,
}: {
	number: string
	title: string
	description: string
	index: number
}) {
	return (
		<BrutalReveal delay={index * 0.15} className="group relative">
			<div className="flex gap-6">
				<div className="flex flex-col items-center">
					<div className="flex h-16 w-16 shrink-0 items-center justify-center border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-accent)] font-[family-name:var(--font-heading)] text-2xl text-[var(--color-brutal-text-light)] shadow-[var(--brutal-shadow)]">
						{number}
					</div>
					{index < 3 && (
						<div className="h-full w-[var(--brutal-border-width)] bg-[var(--color-brutal-border)]" />
					)}
				</div>
				<div className="pb-12">
					<h3 className="font-[family-name:var(--font-heading)] text-2xl uppercase tracking-wide md:text-3xl">
						{title}
					</h3>
					<p className="mt-3 max-w-md text-[var(--color-brutal-text-muted)]">{description}</p>
				</div>
			</div>
		</BrutalReveal>
	)
}

/* ─────────────────────────────────────────────
   TESTIMONIAL BLOCK — Brutalist quote card
   ───────────────────────────────────────────── */

export function TestimonialBlock({
	quote,
	author,
	role,
	index,
}: {
	quote: string
	author: string
	role: string
	index: number
}) {
	return (
		<BrutalReveal delay={index * 0.12}>
			<BrutalCard className="relative p-6 md:p-8">
				<div className="absolute top-4 left-6 font-[family-name:var(--font-heading)] text-6xl leading-none text-[var(--color-brutal-accent)] opacity-30">
					&ldquo;
				</div>
				<p className="relative z-10 mt-6 mb-6 text-lg leading-relaxed">{quote}</p>
				<div className="border-t-[var(--brutal-border-width)] border-[var(--color-brutal-border)] pt-4">
					<span className="font-[family-name:var(--font-heading)] uppercase tracking-wide">
						{author}
					</span>
					<span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-brutal-text-muted)]">
						{role}
					</span>
				</div>
			</BrutalCard>
		</BrutalReveal>
	)
}

/* ─────────────────────────────────────────────
   SCROLL PROGRESS — Top bar indicator
   ───────────────────────────────────────────── */

export function ScrollProgress() {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
			className="fixed top-0 left-0 z-[60] h-1 w-full bg-[var(--color-brutal-accent)]"
		/>
	)
}

/* ─────────────────────────────────────────────
   GLITCH TEXT — Text with glitch hover effect
   ───────────────────────────────────────────── */

export function GlitchText({ children, className }: { children: string; className?: string }) {
	return (
		<span className={`group relative inline-block ${className}`}>
			<span className="relative z-10">{children}</span>
			<span
				className="absolute top-0 left-0 z-0 opacity-0 transition-opacity duration-100 group-hover:opacity-70"
				style={{
					color: "var(--color-brutal-accent)",
					clipPath: "inset(10% 0 60% 0)",
					transform: "translate(2px, -2px)",
				}}
				aria-hidden="true"
			>
				{children}
			</span>
			<span
				className="absolute top-0 left-0 z-0 opacity-0 transition-opacity duration-100 group-hover:opacity-70"
				style={{
					color: "var(--color-brutal-accent)",
					clipPath: "inset(50% 0 10% 0)",
					transform: "translate(-2px, 2px)",
				}}
				aria-hidden="true"
			>
				{children}
			</span>
		</span>
	)
}

/* ─────────────────────────────────────────────
   BRUTAL IMAGE — Grayscale to color on hover
   ───────────────────────────────────────────── */

export function BrutalImage({
	src,
	alt,
	className,
	aspect = "4/3",
}: {
	src: string
	alt: string
	className?: string
	aspect?: string
}) {
	return (
		<motion.div
			className={`group relative overflow-hidden border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] shadow-[var(--brutal-shadow)] ${className}`}
			whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px var(--color-brutal-border)" }}
			transition={{ duration: 0.15 }}
			style={{ aspectRatio: aspect }}
		>
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
			/>
			<div className="pointer-events-none absolute inset-0 border-[var(--brutal-border-width)] border-[var(--color-brutal-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   HERO VIDEO — Floating autoplay video element
   ───────────────────────────────────────────── */

export function HeroVideo({ src, className }: { src: string; className?: string }) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})
	const y = useTransform(scrollYProgress, [0, 1], [0, 80])
	const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

	return (
		<motion.div ref={ref} style={{ y, opacity }} className={className}>
			{/* Full offset rectangle outline behind the video */}
			<div
				className="pointer-events-none absolute -inset-2 border-[var(--brutal-border-width)] border-[var(--color-brutal-border)]"
				aria-hidden="true"
			/>
			{/* Video with its own border */}
			<div className="relative h-full w-full overflow-hidden border-[var(--brutal-border-width)] border-[var(--color-brutal-border)]">
				<video autoPlay loop muted playsInline className="h-full w-full object-cover">
					<source src={src} type="video/mp4" />
				</video>
			</div>
		</motion.div>
	)
}
