"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { type ReactNode, useRef } from "react"

export function RevealSection({
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
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function GhostButton({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<button
			type="button"
			className={`group relative overflow-hidden rounded-full border border-current px-8 py-4 font-bold tracking-wide transition-colors ${className}`}
		>
			<span className="relative z-10 transition-colors duration-300 group-hover:text-black">
				{children}
			</span>
			<div className="absolute inset-0 z-0 translate-y-full bg-[#4ADE80] transition-transform duration-300 ease-out group-hover:translate-y-0" />
		</button>
	)
}

export function FloatingMockup({ src, className }: { src: string; className?: string }) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	// Perspective changes as you scroll
	const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15])
	const y = useTransform(scrollYProgress, [0, 1], [50, -50])

	return (
		<div className={`perspective-[1200px] ${className}`} ref={ref}>
			<motion.div
				style={{ rotateX, y, rotateY: -5 }}
				className="glow-effect overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={src} alt="App UI Mockup" className="h-auto w-full object-cover" />
				<div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
			</motion.div>
		</div>
	)
}

export function AbstractRender({ src, className }: { src: string; className?: string }) {
	return (
		<div className={`w-full overflow-hidden ${className}`}>
			<motion.div
				animate={{
					scale: [1, 1.05, 1],
					filter: ["hue-rotate(0deg)", "hue-rotate(15deg)", "hue-rotate(0deg)"],
				}}
				transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
				className="h-full w-full"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt="3D Render"
					className="h-full w-full object-cover opacity-80 mix-blend-lighten"
				/>
			</motion.div>
		</div>
	)
}

export function BlockStat({ value, label }: { value: string; label: string }) {
	return (
		<RevealSection className="flex flex-col">
			<div className="mb-2 font-bold font-mono text-[#4ADE80] text-[clamp(48px,6vw,80px)] leading-none tracking-tighter">
				{value}
			</div>
			<div className="font-semibold text-[var(--pt-text-muted-dark)] text-sm uppercase tracking-widest">
				{label}
			</div>
		</RevealSection>
	)
}
