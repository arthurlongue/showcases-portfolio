"use client"

import { Check, X } from "lucide-react"
import { motion } from "motion/react"
import type { ReactNode } from "react"

import { Icons } from "./icons"

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
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function MinimalPhoto({
	src,
	alt,
	className,
}: {
	src: string
	alt: string
	className?: string
}) {
	return (
		<div className={`relative overflow-hidden rounded-[4px] bg-neutral-100 ${className} group`}>
			<div className="pointer-events-none absolute inset-0 z-10 bg-[#FFF8F0]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
			<motion.div
				initial={{ scale: 1.05 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="h-full w-full"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
				/>
			</motion.div>
		</div>
	)
}

export function LineIconCard({
	iconName,
	title,
	desc,
	index = 0,
	dark = false,
}: {
	iconName: string
	title: string
	desc: string
	index?: number
	dark?: boolean
}) {
	const IconComponent = Icons[iconName as keyof typeof Icons]

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className={`flex flex-col ${dark ? "text-white" : "text-primary"}`}
		>
			<div className="relative mb-6 w-10">
				{IconComponent && <IconComponent className="h-10 w-10 stroke-[1.5px]" />}
				{/* SVG draw animation concept simulated with framer-motion over the path isn't possible dynamically without SVG paths, so we use a simple opacity fade above */}
			</div>
			<h3 className="mb-3 font-serif text-xl">{title}</h3>
			<p
				className={`text-sm leading-relaxed ${dark ? "text-neutral-400" : "text-muted-foreground"}`}
			>
				{desc}
			</p>
		</motion.div>
	)
}

export function ComparisonCard({
	title,
	points,
	isPremium,
	index,
}: {
	title: string
	points: string[]
	isPremium: boolean
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.15 }}
			className={`rounded-[8px] border bg-white p-8 md:p-12 ${isPremium ? "relative border-primary shadow-sm" : "border-neutral-200"} group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1`}
		>
			{isPremium && (
				<div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-semibold text-[10px] text-white uppercase tracking-widest">
					Essencial
				</div>
			)}
			<h3
				className={`mb-8 font-serif text-2xl ${isPremium ? "text-primary" : "text-muted-foreground"}`}
			>
				{title}
			</h3>
			<ul className="mt-4 flex-1 space-y-5 border-neutral-100 border-t pt-8">
				{points.map((point, i) => (
					<li
						key={i}
						className={`flex text-sm leading-relaxed ${isPremium ? "text-primary" : "text-muted-foreground line-through opacity-70"}`}
					>
						<span className="mt-0.5 mr-4 shrink-0">
							{isPremium ? (
								<Check className="h-5 w-5 text-green-700" strokeWidth={1.5} />
							) : (
								<X className="h-5 w-5 text-red-400" strokeWidth={1.5} />
							)}
						</span>
						{point}
					</li>
				))}
			</ul>
		</motion.div>
	)
}
