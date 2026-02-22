"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"
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
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function WatercolorBlobs() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

	const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
	const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" ref={ref}>
			<motion.div
				style={{ y: y1 }}
				animate={{
					x: ["0%", "3%", "-2%", "0%"],
					scale: [1, 1.05, 0.95, 1],
				}}
				transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[-20%] left-[-10%] h-[60vw] w-[60vw] rounded-full bg-purple-300/30 mix-blend-multiply blur-[100px]"
			/>
			<motion.div
				style={{ y: y2 }}
				animate={{
					x: ["0%", "-5%", "4%", "0%"],
					scale: [1, 0.9, 1.1, 1],
				}}
				transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
				className="absolute top-[20%] right-[-10%] h-[70vw] w-[70vw] rounded-full bg-blue-300/30 mix-blend-multiply blur-[120px]"
			/>
			<motion.div
				animate={{
					y: ["0%", "5%", "-3%", "0%"],
					scale: [1, 1.1, 1, 1],
				}}
				transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
				className="absolute bottom-[-20%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-pink-300/30 mix-blend-multiply blur-[100px]"
			/>
			<motion.div
				animate={{
					x: ["0%", "6%", "-4%", "0%"],
					scale: [1, 0.95, 1.05, 1],
				}}
				transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
				className="absolute right-[10%] bottom-10 h-[40vw] w-[40vw] rounded-full bg-emerald-100/40 mix-blend-multiply blur-[90px]"
			/>
		</div>
	)
}

export function DecorativeSparkle({ className }: { className?: string }) {
	return (
		<motion.div
			animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
			transition={{
				duration: 3 + Math.random() * 2,
				repeat: Infinity,
				ease: "easeInOut",
				delay: Math.random() * 2,
			}}
			className={`pointer-events-none absolute text-[var(--foto-accent-purple)]/60 ${className}`}
		>
			<Sparkles size={16} strokeWidth={1} />
		</motion.div>
	)
}

export function GlassButton({
	children,
	primary = false,
}: {
	children: ReactNode
	primary?: boolean
}) {
	return (
		<motion.button
			whileHover={{
				y: -2,
				backgroundColor: primary ? "rgba(123,97,255,0.9)" : "rgba(255,255,255,0.8)",
			}}
			whileTap={{ scale: 0.98 }}
			className={`rounded-[12px] px-8 py-3.5 font-medium shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all ${primary ? "border border-[var(--foto-accent-purple)] bg-[var(--foto-accent-purple)] text-white" : "foto-glass text-[var(--foto-text-primary)] hover:border-white"}`}
		>
			{children}
		</motion.button>
	)
}

export function PhotoCard({ src, index }: { src: string; index: number }) {
	const rotation = index % 2 === 0 ? 2 : -2

	return (
		<motion.div
			initial={{ opacity: 0, rotate: rotation > 0 ? 8 : -8, scale: 0.9 }}
			whileInView={{ opacity: 1, rotate: rotation, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: (index % 3) * 0.15 }}
			whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
			className="foto-glass group relative rounded-[20px] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)]"
		>
			<div className="pointer-events-none absolute inset-0 z-0 rounded-[20px] bg-gradient-to-tr from-[var(--foto-accent-purple)]/10 to-[var(--foto-accent-pink)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="relative z-10 h-[400px] w-full overflow-hidden rounded-[14px]">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt="Portfolio"
					className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				/>
			</div>
		</motion.div>
	)
}
