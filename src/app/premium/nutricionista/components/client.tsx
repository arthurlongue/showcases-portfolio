"use client"

import { Activity, Clock, Droplet, Target, Zap } from "lucide-react"
import { motion } from "motion/react"
import type { ReactNode } from "react"

const Icons = {
	Clock,
	Zap,
	Activity,
	Target,
	Droplet,
}

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
			initial={{ opacity: 0, filter: "brightness(0.9)" }}
			whileInView={{ opacity: 1, filter: "brightness(1)" }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function CinematicImage({
	src,
	alt,
	className,
}: {
	src: string
	alt: string
	className?: string
}) {
	return (
		<div className={`relative overflow-hidden ${className}`}>
			<div className="pointer-events-none absolute inset-0 z-10 bg-[#C49A5C]/5 mix-blend-overlay" />
			<motion.div
				initial={{ scale: 1 }}
				whileInView={{ scale: 1.05 }}
				viewport={{ once: false }}
				transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
				className="h-full w-full"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-cover"
					style={{ filter: "sepia(5%) saturate(1.1)" }}
				/>
			</motion.div>
		</div>
	)
}

export function PillCategory({
	label,
	iconName,
	index,
}: {
	label: string
	iconName: string
	index: number
}) {
	const IconComponent = Icons[iconName as keyof typeof Icons]

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.06 }}
			className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-primary transition-colors hover:bg-primary/10"
		>
			{IconComponent && <IconComponent className="h-4 w-4" />}
			<span className="font-semibold text-sm uppercase tracking-wider">{label}</span>
		</motion.div>
	)
}

export function AmbientGlow() {
	return (
		<motion.div
			animate={{ opacity: [0.08, 0.15, 0.08] }}
			transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
			className="pointer-events-none absolute top-[20%] left-[50%] z-0 h-[80vw] max-h-[800px] w-[80vw] max-w-[800px] -translate-x-1/2 rounded-full"
			style={{
				background: "radial-gradient(ellipse at center, rgba(196,154,92,0.6) 0%, transparent 70%)",
			}}
		/>
	)
}
