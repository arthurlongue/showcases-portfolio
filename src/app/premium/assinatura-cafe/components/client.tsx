"use client"

import { CalendarDays, MousePointer2, Type } from "lucide-react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { type ReactNode, useEffect, useRef, useState } from "react"
import { auraData } from "../data"

// -----------------------------
// Hero Video Zoom
// -----------------------------
export function HeroVideoZoom({ video, poster }: { video: string; poster: string }) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

	return (
		<div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
			<motion.div style={{ scale }} className="h-full w-full origin-center">
				<video
					src={video}
					poster={poster}
					autoPlay
					loop
					muted
					playsInline
					className="h-full w-full object-cover"
				/>
			</motion.div>
			<div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-[#1A1208]/40 to-transparent" />
		</div>
	)
}

// -----------------------------
// Magnetic Button
// -----------------------------
export function MagneticButton({
	children,
	className,
	onClick,
}: {
	children: ReactNode
	className?: string
	onClick?: () => void
}) {
	const ref = useRef<HTMLButtonElement>(null)
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!ref.current) return
		const { clientX, clientY } = e
		const { height, width, left, top } = ref.current.getBoundingClientRect()
		const middleX = clientX - (left + width / 2)
		const middleY = clientY - (top + height / 2)
		setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
	}

	const reset = () => {
		setPosition({ x: 0, y: 0 })
	}

	return (
		<motion.button
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x: position.x, y: position.y }}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
			className={`hover:shadow-[#C49A5C]/20 hover:shadow-lg ${className}`}
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}

// -----------------------------
// Floating Navbar
// -----------------------------
export function FloatingNavbar() {
	const { scrollY } = useScroll()
	const backgroundColor = useTransform(
		scrollY,
		[0, 100],
		["rgba(250, 247, 243, 0)", "rgba(250, 247, 243, 0.8)"],
	)
	const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])
	const color = useTransform(scrollY, [0, 100], ["#FAF7F3", "#1A1208"])
	const borderColor = useTransform(
		scrollY,
		[0, 100],
		["rgba(26, 18, 8, 0)", "rgba(26, 18, 8, 0.1)"],
	)

	return (
		<motion.nav
			style={{ backgroundColor, backdropFilter: backdropBlur, color, borderColor }}
			className="fixed top-6 left-1/2 z-50 flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border px-4 py-3 transition-shadow duration-500 md:px-8 md:py-4"
		>
			<div className="font-dm-serif text-xl italic tracking-tighter md:text-2xl">Aura Roasters</div>
			<div className="hidden gap-8 font-bold text-sm uppercase tracking-widest md:flex">
				<a href="#" className="transition-colors hover:text-[#C49A5C]">
					Origens
				</a>
				<a href="#" className="transition-colors hover:text-[#C49A5C]">
					Manifesto
				</a>
				<a href="#" className="transition-colors hover:text-[#C49A5C]">
					Clube de Curadoria
				</a>
			</div>
			<MagneticButton className="rounded-full bg-[#C49A5C] px-6 py-2 font-bold text-[#FAF7F3] transition-colors hover:bg-[#1A1208]">
				Fazer parte
			</MagneticButton>
		</motion.nav>
	)
}

// -----------------------------
// Reveal Animations
// -----------------------------
export function FadeUp({
	children,
	delay = 0,
	className,
}: {
	children: ReactNode
	delay?: number
	className?: string
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function HeroTextStagger({ text, className }: { text: string; className?: string }) {
	return (
		<div className={`overflow-hidden ${className}`}>
			<motion.div
				initial={{ y: "110%", rotate: 2 }}
				whileInView={{ y: 0, rotate: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
			>
				{text}
			</motion.div>
		</div>
	)
}

// -----------------------------
// Micro-UI: Origin Shuffler
// -----------------------------
export function OriginShuffler() {
	const [index, setIndex] = useState(0)
	const origins = auraData.features.origins

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % origins.length)
		}, 3000)
		return () => clearInterval(timer)
	}, [origins.length])

	return (
		<div className="group flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] border border-[#1A1208]/5 bg-[#FAF7F3] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:min-h-[400px]">
			<div className="mb-4 flex items-center justify-between">
				<span className="font-bold text-[#1A1208]/50 text-xs uppercase tracking-widest">
					Terroir
				</span>
				<div className="flex gap-1">
					{origins.map((_, i) => (
						<div
							key={i}
							className={`h-1.5 w-1.5 rounded-full transition-colors ${i === index ? "bg-[#C49A5C]" : "bg-[#1A1208]/20"}`}
						/>
					))}
				</div>
			</div>

			<div className="relative h-48 w-full overflow-hidden rounded-2xl">
				<AnimatePresence mode="popLayout">
					<motion.img
						key={index}
						src={origins[index].image}
						alt={origins[index].region}
						initial={{ opacity: 0, y: 20, scale: 1.1 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.9 }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
						className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-500 group-hover:brightness-110 group-hover:contrast-105"
					/>
				</AnimatePresence>
			</div>

			<div className="mt-auto pt-6">
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.4 }}
					>
						<h3 className="font-dm-serif text-3xl text-[#1A1208]">{origins[index].region}</h3>
						<p className="mt-2 font-mono text-[#1A1208]/60 text-xs">{origins[index].notes}</p>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}

// -----------------------------
// Micro-UI: Sensorial Typewriter
// -----------------------------
export function SensorialTypewriter() {
	const [textIndex, setTextIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const texts = auraData.features.sensorial

	useEffect(() => {
		if (textIndex >= texts.length) {
			const reset = setTimeout(() => {
				setTextIndex(0)
				setCharIndex(0)
			}, 4000)
			return () => clearTimeout(reset)
		}

		if (charIndex < texts[textIndex].length) {
			const timer = setTimeout(() => setCharIndex((prev) => prev + 1), 60)
			return () => clearTimeout(timer)
		} else {
			const timer = setTimeout(() => {
				setTextIndex((prev) => prev + 1)
				setCharIndex(0)
			}, 1500)
			return () => clearTimeout(timer)
		}
	}, [charIndex, textIndex, texts])

	return (
		<div className="group flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] bg-[#1A1208] p-8 text-[#FAF7F3] shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:min-h-[400px]">
			<div className="mb-4 flex items-center justify-between opacity-50">
				<span className="font-bold text-xs uppercase tracking-widest">
					Métricas Sensoriais em Tempo Real
				</span>
				<Type className="h-4 w-4" />
			</div>

			<div className="mt-auto font-mono text-[#C49A5C] text-sm leading-relaxed">
				{texts.slice(0, textIndex).map((t, i) => (
					<div key={i} className="mb-2 opacity-80">
						{">"} {t}
					</div>
				))}
				{textIndex < texts.length && (
					<div className="mb-2">
						{">"} {texts[textIndex].substring(0, charIndex)}
						<motion.span
							animate={{ opacity: [1, 0] }}
							transition={{ repeat: Infinity, duration: 0.8 }}
						>
							_
						</motion.span>
					</div>
				)}
				{textIndex >= texts.length && (
					<div className="mb-2">
						{">"}{" "}
						<motion.span
							animate={{ opacity: [1, 0] }}
							transition={{ repeat: Infinity, duration: 0.8 }}
						>
							_
						</motion.span>
					</div>
				)}
			</div>
		</div>
	)
}

// -----------------------------
// Micro-UI: Subscription Scheduler
// -----------------------------
export function SubscriptionScheduler() {
	const [selected, setSelected] = useState(14)
	const days = Array.from({ length: 30 }, (_, i) => i + 1)

	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((prev) => (prev === 14 ? 28 : prev === 28 ? 7 : 14))
		}, 2500)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] border border-[#1A1208]/5 bg-[#FAF7F3] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:min-h-[400px]">
			<div className="mb-4 flex items-center justify-between text-[#1A1208]/50">
				<span className="font-bold text-xs uppercase tracking-widest">Assinatura de Precisão</span>
				<CalendarDays className="h-4 w-4" />
			</div>

			<div className="relative mt-auto">
				<div className="grid grid-cols-7 gap-2">
					{days.map((day) => (
						<motion.div
							key={day}
							animate={{
								backgroundColor: selected === day ? "#C49A5C" : "rgba(26, 18, 8, 0.03)",
								color: selected === day ? "#FAF7F3" : "rgba(26, 18, 8, 0.4)",
								scale: selected === day ? 1.1 : 1,
							}}
							className="flex aspect-square items-center justify-center rounded-lg font-mono text-xs"
						>
							{day}
						</motion.div>
					))}
				</div>

				<motion.div
					className="pointer-events-none absolute top-0 left-0"
					animate={{
						x: ((selected - 1) % 7) * 35 + 20,
						y: Math.floor((selected - 1) / 7) * 35 + 20,
					}}
					transition={{ type: "spring", stiffness: 100, damping: 20 }}
				>
					<MousePointer2 className="h-6 w-6 text-[#1A1208] drop-shadow-md" fill="#FAF7F3" />
				</motion.div>
			</div>
		</div>
	)
}

// -----------------------------
// Philosophy Parallax & Text
// -----------------------------
export function PhilosophySection() {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
	const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

	const words = auraData.philosophy.highlight.split(" ")

	return (
		<section
			ref={ref}
			className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1A1208] py-32"
		>
			<motion.div style={{ y }} className="absolute inset-0 z-0 opacity-20">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={auraData.philosophy.image}
					alt="Philosophy"
					className="h-[140%] w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-transparent to-[#1A1208]" />
			</motion.div>

			<div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-[#FAF7F3]">
				<FadeUp delay={0.2}>
					<p className="mb-6 font-bold text-[#C49A5C] text-sm uppercase tracking-widest">
						O Manifesto
					</p>
				</FadeUp>
				<FadeUp delay={0.3}>
					<p className="mb-4 text-2xl opacity-80 md:text-3xl">{auraData.philosophy.prefix}</p>
				</FadeUp>
				<h2 className="flex flex-wrap justify-center gap-4 text-[clamp(48px,8vw,120px)] leading-none tracking-tight">
					{words.map((word, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-10%" }}
							transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
						>
							{word}
						</motion.span>
					))}
					<motion.span
						initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
						whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
						viewport={{ once: true, margin: "-10%" }}
						transition={{ delay: 0.4 + words.length * 0.1, duration: 1, type: "spring" }}
						className="font-dm-serif text-[#C49A5C] italic"
					>
						{auraData.philosophy.serif}
					</motion.span>
				</h2>
			</div>
		</section>
	)
}

// -----------------------------
// Cinematic Protocol Section
// with Sticky Scroll Title
// -----------------------------
export function ProtocolSection() {
	const sectionRef = useRef<HTMLDivElement>(null)
	const [activeStep, setActiveStep] = useState(0)
	const protocolCount = auraData.protocol.length

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	})

	const stepProgress = useTransform(scrollYProgress, [0.2, 0.95], [0, protocolCount - 1])
	useMotionValueEvent(stepProgress, "change", (value) => {
		const step = Math.max(0, Math.min(protocolCount - 1, Math.round(value)))
		setActiveStep((previousStep) => (previousStep === step ? previousStep : step))
	})

	// Title stays pinned while cards progress through the section
	const titleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.96], [0, 1, 1, 0])
	const titleScale = useTransform(scrollYProgress, [0, 0.18, 0.35], [0.96, 1, 0.94])
	const titleY = useTransform(scrollYProgress, [0, 0.22], ["6%", "-8%"])

	// Decorative progress line
	const lineWidth = useTransform(scrollYProgress, [0.2, 0.95], ["0%", "100%"])

	return (
		<section ref={sectionRef} className="relative z-10 bg-[#FAF7F3] pt-20 md:pt-32">
			{/* Sticky title container — fills viewport, stays pinned */}
			<div className="sticky top-0 z-20 flex h-screen items-center justify-center overflow-hidden">
				<motion.div
					style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
					className="flex w-full flex-col items-center px-6 text-center"
				>
					<p className="mb-4 font-bold text-[#1A1208]/50 text-xs uppercase tracking-[0.3em] md:text-sm">
						Transparência Total
					</p>
					<h2 className="font-dm-serif text-6xl text-[#1A1208] md:text-8xl lg:text-9xl">
						O Protocolo
						<br />
						<span className="text-[#C49A5C] italic">Aura.</span>
					</h2>

					<div className="mt-8 flex w-full max-w-xs items-center gap-3 md:max-w-sm md:gap-4">
						<span className="font-mono text-[#1A1208]/45 text-xs uppercase tracking-widest">
							0{activeStep + 1}
						</span>
						<div className="h-px flex-1 bg-[#1A1208]/15">
							<motion.div style={{ width: lineWidth }} className="h-full bg-[#C49A5C]" />
						</div>
						<span className="font-mono text-[#1A1208]/35 text-xs uppercase tracking-widest">
							0{protocolCount}
						</span>
					</div>

					<p className="mt-6 max-w-md text-[#1A1208]/40 text-sm leading-relaxed md:text-base">
						Cada etapa, exposta. Cada processo, rastreável.
					</p>
				</motion.div>
			</div>

			{/* Cards stack on top of the title */}
			<div className="relative z-30 -mt-[18svh] flex flex-col items-center gap-14 px-4 pb-[36svh] md:px-6">
				{auraData.protocol.map((protocol, i) => (
					<StickyCard key={protocol.title} protocol={protocol} index={i} total={protocolCount} />
				))}
			</div>
		</section>
	)
}

function StickyCard({
	protocol,
	index,
	total,
}: {
	protocol: {
		title: string
		description: string
		media: string
		poster?: string
		type: "video" | "image"
	}
	index: number
	total: number
}) {
	const cardRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "end start"],
	})

	// Cards that aren't last dim/shrink as the next card rolls in
	const isLast = index === total - 1
	const scale = useTransform(scrollYProgress, [0.4, 1], isLast ? [1, 1] : [1, 0.93])
	const cardOpacity = useTransform(scrollYProgress, [0.4, 1], isLast ? [1, 1] : [1, 0.45])
	const rotate = useTransform(scrollYProgress, [0.4, 1], isLast ? [0, 0] : [0, -2.5])
	const y = useTransform(scrollYProgress, [0.4, 1], isLast ? [0, 0] : [0, -36])
	const filter = useTransform(
		scrollYProgress,
		[0.4, 1],
		isLast ? ["brightness(1)", "brightness(1)"] : ["brightness(1)", "brightness(0.4)"],
	)

	return (
		<motion.div
			ref={cardRef}
			className="sticky flex h-[85svh] max-h-[900px] w-full max-w-6xl origin-top flex-col justify-end overflow-hidden rounded-[2rem] bg-[#1A1208] p-6 shadow-2xl md:h-[80svh] md:p-10 lg:p-20"
			style={{
				top: `calc(9vh + ${index * 34}px)`,
				zIndex: 30 + index,
				scale,
				opacity: cardOpacity,
				rotate,
				y,
				filter,
			}}
		>
			<div className="absolute inset-0 z-0">
				{protocol.type === "video" ? (
					<video
						src={protocol.media}
						poster={protocol.poster}
						autoPlay
						loop
						muted
						playsInline
						className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
					/>
				) : (
					/* eslint-disable-next-line @next/next/no-img-element */
					<img
						src={protocol.media}
						alt={protocol.title}
						className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-[#1A1208]/40 to-transparent" />
			</div>

			<div className="relative z-10 flex w-full flex-col md:w-1/2">
				<motion.span
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-4 font-bold text-[#C49A5C] text-sm uppercase tracking-widest"
				>
					Fase 0{index + 1}
				</motion.span>
				<motion.h3
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
					className="mb-6 font-dm-serif text-3xl text-[#FAF7F3] leading-[1.1] md:text-5xl lg:text-7xl"
				>
					{protocol.title}
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
					className="max-w-md text-[#FAF7F3]/70 text-lg leading-relaxed md:text-xl"
				>
					{protocol.description}
				</motion.p>
			</div>
		</motion.div>
	)
}
