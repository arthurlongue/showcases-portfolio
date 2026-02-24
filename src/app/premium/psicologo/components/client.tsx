"use client"

import { Award, Heart, Plus, Video } from "lucide-react"
import { motion } from "motion/react"
import { type ReactNode, useState } from "react"

const Icons = { Heart, Award, Video }

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
			transition={{ duration: 0.6, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function CredentialBadge({
	iconName,
	text,
	index,
	className,
}: {
	iconName: string
	text: string
	index: number
	className?: string
}) {
	const IconComponent = Icons[iconName as keyof typeof Icons]

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.6,
				delay: 0.8 + index * 0.15,
				type: "spring",
				stiffness: 100,
			}}
			className={`absolute flex items-center gap-2 rounded-full border border-primary/10 bg-white/90 px-4 py-2 text-primary shadow-lg backdrop-blur-sm ${className}`}
			style={{ rotate: index % 2 === 0 ? "2deg" : "-2deg" }}
		>
			<motion.div
				animate={{ y: [-2, 2, -2] }}
				transition={{ duration: 3, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
				className="flex items-center gap-2"
			>
				{IconComponent && <IconComponent className="h-4 w-4 text-[var(--psi-accent)]" />}
				<span className="font-semibold text-sm tracking-wide">{text}</span>
			</motion.div>
		</motion.div>
	)
}

export function TreatmentAccordion({
	items,
}: {
	items: { category: string; details: string; color: string }[]
}) {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	return (
		<div className="flex flex-col gap-4">
			{items.map((item, i) => {
				const isOpen = openIndex === i

				return (
					<motion.div
						key={i}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						className="relative overflow-hidden rounded-[12px] border border-primary/5 bg-card shadow-sm transition-colors hover:border-primary/20"
					>
						{/* Animated Gradient Border line */}
						<div
							className={`absolute top-0 bottom-0 left-0 w-[6px] bg-gradient-to-b ${item.color} transition-all duration-500`}
						/>

						<button
							type="button"
							onClick={() => setOpenIndex(isOpen ? null : i)}
							className="flex w-full cursor-pointer items-center justify-between p-6 pl-10 text-left md:p-8"
						>
							<span className="font-serif text-primary text-xl md:text-2xl">{item.category}</span>
							<span
								className={`font-semibold text-sm uppercase tracking-widest transition-colors ${isOpen ? "text-[var(--psi-accent)]" : "text-muted-foreground"}`}
							>
								{isOpen ? "Ocultar" : "Detalhes →"}
							</span>
						</button>

						<motion.div
							initial={false}
							animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
							className="ml-[6px] overflow-hidden bg-[#faf7f2]"
						>
							<div className="mt-2 border-primary/5 border-t p-6 pt-0 pt-6 pl-10 text-lg text-muted-foreground leading-relaxed md:p-8">
								{item.details}
							</div>
						</motion.div>
					</motion.div>
				)
			})}
		</div>
	)
}

export function HealingPath({ process }: { process: { title: string; desc: string }[] }) {
	return (
		<div className="relative mx-auto mt-16 flex w-full max-w-4xl flex-col justify-between md:flex-row">
			{/* The connecting line - visible on md+ */}
			<div className="absolute top-[28px] right-[5%] left-[5%] z-0 hidden h-[2px] bg-primary/20 md:block">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: "100%" }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1.5, ease: "easeInOut" }}
					className="h-full bg-primary"
				/>
			</div>

			{/* The steps */}
			{process.map((step, i) => (
				<div
					key={i}
					className="relative z-10 mb-12 flex w-full flex-col items-center px-4 text-center md:mb-0 md:w-1/3"
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 + i * 0.4, type: "spring" }}
						className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card font-bold text-lg text-primary shadow-md"
					>
						0{i + 1}
					</motion.div>
					<h3 className="mb-3 font-serif text-2xl text-primary">{step.title}</h3>
					<p className="text-muted-foreground">{step.desc}</p>
				</div>
			))}
		</div>
	)
}

export function FaqGrid({ faqs }: { faqs: { q: string; a: string }[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
			{faqs.map((faq, i) => {
				const isOpen = openIndex === i

				return (
					<div key={i} className="border-primary/10 border-b py-4">
						<button
							type="button"
							onClick={() => setOpenIndex(isOpen ? null : i)}
							className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left"
						>
							<span className="font-semibold text-primary leading-snug transition-colors group-hover:text-[var(--psi-accent)]">
								{faq.q}
							</span>
							<motion.div
								animate={{ rotate: isOpen ? 45 : 0 }}
								className="mt-1 shrink-0 text-[var(--psi-accent)]"
							>
								<Plus className="h-5 w-5" />
							</motion.div>
						</button>
						<motion.div
							initial={false}
							animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
							className="overflow-hidden"
						>
							<div className="pt-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
						</motion.div>
					</div>
				)
			})}
		</div>
	)
}

export function StarRating() {
	return (
		<div className="mb-6 flex justify-center gap-1 text-[#DAA520]">
			{[1, 2, 3, 4, 5].map((star, i) => (
				<motion.span
					key={star}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: i * 0.1, type: "spring" }}
				>
					★
				</motion.span>
			))}
		</div>
	)
}
