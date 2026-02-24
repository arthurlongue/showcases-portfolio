"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { type ReactNode, useRef, useState } from "react"

/* ─────────────────────────────────────────────
   NEWSPRINT REVEAL — Scroll-triggered fade+slide
   ───────────────────────────────────────────── */

export function NewsprintReveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode
	className?: string
	delay?: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   MARQUEE TICKER — Infinite horizontal scroll
   ───────────────────────────────────────────── */

export function MarqueeTicker({
	children,
	speed = 30,
	className,
}: {
	children: ReactNode
	speed?: number
	className?: string
}) {
	return (
		<div className={`overflow-hidden ${className ?? ""}`}>
			<motion.div
				className="flex w-max"
				animate={{ x: ["0%", "-50%"] }}
				transition={{ duration: speed, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
			>
				{children}
				{children}
			</motion.div>
		</div>
	)
}

/* ─────────────────────────────────────────────
   NEWSPRINT NAV — Sticky header with edition
   ───────────────────────────────────────────── */

export function NewsprintNav({
	brand,
	edition,
	links,
}: {
	brand: string
	edition: string
	links: { label: string; href: string }[]
}) {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (v) => {
		setScrolled(v > 50)
	})

	return (
		<>
			<nav
				className={`fixed top-0 right-0 left-0 z-40 border-b transition-all duration-200 ${
					scrolled ? "bg-[var(--np-bg)]/95 backdrop-blur-sm" : "bg-[var(--np-bg)]"
				}`}
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				{/* Main nav */}
				<div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">
					<a
						href="#"
						className="transition-colors hover:text-[var(--np-accent)]"
						style={{ fontFamily: "var(--font-headline)", fontSize: "1.5rem", fontWeight: 900 }}
					>
						{brand}
					</a>

					{/* Desktop links */}
					<div className="hidden items-center gap-8 md:flex">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="transition-colors duration-200 hover:text-[var(--np-accent)]"
								style={{
									fontFamily: "var(--font-ui)",
									fontSize: "11px",
									letterSpacing: "0.15em",
									textTransform: "uppercase",
									fontWeight: 500,
								}}
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Mobile hamburger */}
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border transition-colors hover:bg-[var(--np-ink)] hover:text-[var(--np-bg)] md:hidden"
						style={{ borderColor: "var(--np-ink)", borderWidth: "var(--np-border-width)" }}
						aria-label={open ? "Fechar menu" : "Abrir menu"}
					>
						<span
							className="text-lg"
							style={{ fontFamily: "var(--font-ui)", fontWeight: 700, lineHeight: 1 }}
						>
							{open ? "✕" : "☰"}
						</span>
					</button>
				</div>

				{/* Mobile menu */}
				<motion.div
					initial={false}
					animate={{
						height: open ? "auto" : 0,
						opacity: open ? 1 : 0,
					}}
					transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
					className="overflow-hidden border-t md:hidden"
					style={{
						borderColor: "var(--np-ink)",
						borderWidth: open ? "var(--np-border-width) 0 0 0" : "0",
					}}
				>
					<div className="flex flex-col bg-[var(--np-bg)]">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="border-b px-6 py-4 transition-colors duration-200 hover:bg-[var(--np-neutral-100)]"
								style={{
									borderColor: "var(--np-muted)",
									borderWidth: "0 0 1px 0",
									fontFamily: "var(--font-ui)",
									fontSize: "12px",
									letterSpacing: "0.15em",
									textTransform: "uppercase",
									fontWeight: 500,
								}}
							>
								{link.label}
							</a>
						))}
					</div>
				</motion.div>
			</nav>

			{/* Spacer for fixed nav */}
			<div className="h-[85px]" />
		</>
	)
}

/* ─────────────────────────────────────────────
   STAGGER COUNTER — Animated number count-up
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
	const ref = useRef<HTMLDivElement>(null)
	const [display, setDisplay] = useState(0)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.9", "start 0.5"],
	})

	useMotionValueEvent(scrollYProgress, "change", (v) => {
		setDisplay(Math.round(v * value))
	})

	return (
		<div ref={ref} className="text-center">
			<div
				style={{
					fontFamily: "var(--font-headline)",
					fontSize: "clamp(2.5rem, 6vw, 4rem)",
					fontWeight: 900,
					lineHeight: 1,
				}}
			>
				{display}
				<span style={{ color: "var(--np-accent)" }}>{suffix}</span>
			</div>
			<div
				className="mt-2"
				style={{
					fontFamily: "var(--font-data)",
					fontSize: "10px",
					letterSpacing: "0.15em",
					textTransform: "uppercase",
					color: "var(--np-neutral-500)",
				}}
			>
				{label}
			</div>
		</div>
	)
}

/* ─────────────────────────────────────────────
   PROCESS STEP — Numbered method step
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
		<NewsprintReveal delay={index * 0.1}>
			<div
				className="flex gap-6 border-b py-8"
				style={{ borderColor: "var(--np-bg)", borderWidth: "0 0 2px 0" }}
			>
				<div
					style={{
						fontFamily: "var(--font-data)",
						fontSize: "clamp(2rem, 4vw, 3.5rem)",
						fontWeight: 700,
						lineHeight: 1,
						color: "var(--np-accent)",
						minWidth: "3rem",
					}}
				>
					{number}
				</div>
				<div>
					<h3
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "1.5rem",
							fontWeight: 700,
						}}
					>
						{title}
					</h3>
					<p
						className="mt-2"
						style={{
							fontFamily: "var(--font-body)",
							fontSize: "0.875rem",
							lineHeight: 1.7,
							color: "var(--np-neutral-400)",
						}}
					>
						{description}
					</p>
				</div>
			</div>
		</NewsprintReveal>
	)
}

/* ─────────────────────────────────────────────
   TESTIMONIAL CARD — Bordered quote card
   ───────────────────────────────────────────── */

export function TestimonialCard({
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
		<NewsprintReveal delay={index * 0.1}>
			<div
				className="hard-shadow-hover flex h-full flex-col justify-between border p-6 lg:p-8"
				style={{
					borderColor: "var(--np-ink)",
					borderWidth: "var(--np-border-width)",
					backgroundColor: "var(--np-bg)",
				}}
			>
				<div>
					<span
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "3rem",
							lineHeight: 1,
							color: "var(--np-accent)",
						}}
					>
						&ldquo;
					</span>
					<p
						className="-mt-4"
						style={{
							fontFamily: "var(--font-body)",
							fontSize: "0.9375rem",
							lineHeight: 1.7,
							fontStyle: "italic",
						}}
					>
						{quote}
					</p>
				</div>
				<div
					className="mt-6 border-t pt-4"
					style={{ borderColor: "var(--np-muted)", borderWidth: "1px 0 0 0" }}
				>
					<div
						style={{
							fontFamily: "var(--font-ui)",
							fontSize: "0.8125rem",
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: "0.05em",
						}}
					>
						{author}
					</div>
					<div
						className="mt-1"
						style={{
							fontFamily: "var(--font-data)",
							fontSize: "10px",
							textTransform: "uppercase",
							letterSpacing: "0.1em",
							color: "var(--np-neutral-500)",
						}}
					>
						{role}
					</div>
				</div>
			</div>
		</NewsprintReveal>
	)
}

/* ─────────────────────────────────────────────
   PARALLAX IMAGE — Scroll-driven movement
   ───────────────────────────────────────────── */

export function ParallaxImage({
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
	const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`])

	return (
		<div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
			<motion.div style={{ y }} className="h-full w-full">
				{children}
			</motion.div>
		</div>
	)
}

/* ─────────────────────────────────────────────
   PROGRAM CARD — Grid item with border collapse
   ───────────────────────────────────────────── */

export function ProgramCard({
	id,
	title,
	description,
	tag,
	index,
	total,
}: {
	id: string
	title: string
	description: string
	tag?: string
	index: number
	total: number
}) {
	return (
		<NewsprintReveal delay={index * 0.08}>
			<div
				className={`group relative flex h-full flex-col justify-between p-6 transition-colors duration-200 hover:bg-[var(--np-neutral-100)] lg:p-8 ${
					index < total - 1 ? "border-b lg:border-b-0" : ""
				} ${(index + 1) % 2 !== 0 ? "lg:border-r" : ""}`}
				style={{ borderColor: "var(--np-ink)", borderWidth: "0" }}
			>
				{tag && (
					<div
						className="absolute top-4 right-4 px-2 py-1"
						style={{
							backgroundColor: "var(--np-accent)",
							color: "var(--np-bg)",
							fontFamily: "var(--font-data)",
							fontSize: "9px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							fontWeight: 700,
						}}
					>
						{tag}
					</div>
				)}

				<div>
					<div
						style={{
							fontFamily: "var(--font-data)",
							fontSize: "0.75rem",
							color: "var(--np-neutral-500)",
							letterSpacing: "0.1em",
						}}
					>
						Nº {id}
					</div>
					<h3
						className="mt-3"
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "1.5rem",
							fontWeight: 700,
							lineHeight: 1.2,
						}}
					>
						{title}
					</h3>
					<p
						className="mt-3"
						style={{
							fontFamily: "var(--font-body)",
							fontSize: "0.875rem",
							lineHeight: 1.7,
							color: "var(--np-neutral-600)",
						}}
					>
						{description}
					</p>
				</div>

				<div
					className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
					style={{
						fontFamily: "var(--font-ui)",
						fontSize: "11px",
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						fontWeight: 600,
						color: "var(--np-accent)",
					}}
				>
					Saiba Mais →
				</div>
			</div>
		</NewsprintReveal>
	)
}

/* ─────────────────────────────────────────────
   ORNAMENTAL DIVIDER — Serif ornament
   ───────────────────────────────────────────── */

export function OrnamentalDivider() {
	return (
		<div
			className="py-8 text-center"
			style={{
				fontFamily: "var(--font-headline)",
				fontSize: "1.5rem",
				color: "var(--np-neutral-400)",
				letterSpacing: "1em",
			}}
		>
			&#x2727; &#x2727; &#x2727;
		</div>
	)
}
