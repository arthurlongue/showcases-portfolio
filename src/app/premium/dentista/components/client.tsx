"use client"

import { motion, useScroll, useTransform } from "framer-motion"
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
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function AmbientOrbs() {
	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			<motion.div
				animate={{
					x: ["0%", "5%", "-2%", "0%"],
					y: ["0%", "-5%", "3%", "0%"],
				}}
				transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full opacity-30 mix-blend-screen blur-[120px]"
				style={{
					background: "radial-gradient(circle, var(--dent-accent-purple) 0%, transparent 70%)",
				}}
			/>
			<motion.div
				animate={{
					x: ["0%", "-4%", "5%", "0%"],
					y: ["0%", "6%", "-4%", "0%"],
				}}
				transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
				className="absolute right-[-10%] bottom-[-10%] h-[60vw] w-[60vw] rounded-full opacity-20 mix-blend-screen blur-[140px]"
				style={{
					background: "radial-gradient(circle, var(--dent-accent-blue) 0%, transparent 60%)",
				}}
			/>
			<motion.div
				animate={{
					x: ["0%", "8%", "-6%", "0%"],
					y: ["0%", "-8%", "5%", "0%"],
				}}
				transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
				className="absolute top-[40%] left-[60%] h-[40vw] w-[40vw] rounded-full opacity-15 mix-blend-screen blur-[100px]"
				style={{
					background: "radial-gradient(circle, var(--dent-accent-pink) 0%, transparent 70%)",
				}}
			/>
		</div>
	)
}

export function GlassCard({
	children,
	className,
	glow = false,
}: {
	children: ReactNode
	className?: string
	glow?: boolean
}) {
	return (
		<motion.div
			whileHover={{
				y: -4,
				backgroundColor: "rgba(255,255,255,0.06)",
				borderColor: "rgba(255,255,255,0.2)",
			}}
			transition={{ duration: 0.3 }}
			className={`glass-card group relative overflow-hidden rounded-[20px] p-8 ${glow ? "hover:shadow-[0_0_40px_rgba(0,194,255,0.2)]" : ""} ${className}`}
		>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
			<div className="relative z-10">{children}</div>
		</motion.div>
	)
}

export function GlowingButton({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={`group relative overflow-hidden rounded-[10px] border border-[var(--dent-accent-blue)]/50 bg-white/5 px-8 py-4 font-semibold text-sm text-white tracking-wide transition-all duration-300 hover:border-[var(--dent-accent-blue)] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)] ${className}`}
		>
			<span className="relative z-10">{children}</span>
		</motion.button>
	)
}

export function FloatingElement({
	children,
	delay = 0,
	speed = 1,
}: {
	children: ReactNode
	delay?: number
	speed?: number
}) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed])

	return (
		<motion.div ref={ref} style={{ y }} className="h-full w-full">
			<motion.div
				animate={{ y: ["-2%", "2%", "-2%"] }}
				transition={{ duration: 6 / speed, repeat: Infinity, ease: "easeInOut", delay }}
				className="h-full w-full"
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
