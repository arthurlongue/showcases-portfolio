"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

export function Reveal({
	children,
	className,
	delay = 0,
	direction = "up",
}: {
	children: ReactNode
	className?: string
	delay?: number
	direction?: "up" | "down" | "left" | "right" | "none"
}) {
	const y = direction === "up" ? 40 : direction === "down" ? -40 : 0
	const x = direction === "left" ? 40 : direction === "right" ? -40 : 0

	return (
		<motion.div
			initial={{ opacity: 0, y, x }}
			whileInView={{ opacity: 1, y: 0, x: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function InteractiveMenuItem({
	title,
	price,
	description,
	ingredients,
}: {
	title: string
	price: string
	description: string
	ingredients: string
}) {
	return (
		<div className="group relative border-b border-black/20 py-8 px-6 hover:bg-black hover:text-[#F4F3F0] transition-all duration-500 cursor-pointer">
			<div className="flex flex-col md:flex-row items-baseline justify-between w-full gap-4 md:gap-0">
				<div className="flex flex-col">
					<h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-500 font-sans">
						{title}
					</h3>
					<span className="text-[10px] opacity-60 font-mono hidden group-hover:block transition-all mt-2 uppercase tracking-widest">
						{ingredients}
					</span>
				</div>
				<span className="text-xl font-serif italic opacity-80 group-hover:opacity-100 transition-opacity">
					{price}
				</span>
			</div>
			<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
				<div className="overflow-hidden">
					<p className="mt-6 text-sm font-mono opacity-80 max-w-md md:ml-4 leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
