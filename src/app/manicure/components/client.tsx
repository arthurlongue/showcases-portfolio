"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

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
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function AvatarCircles({ avatars }: { avatars: string[] }) {
	return (
		<div className="flex -space-x-4">
			{avatars.map((src, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, scale: 0, x: -20 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{
						type: "spring",
						damping: 12,
						stiffness: 100,
						delay: 0.2 + i * 0.1,
					}}
					className="relative"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={src}
						alt="Avatar"
						className="h-14 w-14 rounded-full border-[3px] border-[var(--mani-bg-primary)] object-cover shadow-sm md:h-16 md:w-16"
					/>
				</motion.div>
			))}
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5 }}
				className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[var(--mani-bg-primary)] bg-[var(--mani-accent-main)] font-bold text-sm text-white shadow-sm md:h-16 md:w-16"
			>
				+500
			</motion.div>
		</div>
	)
}

export function PillButton({
	children,
	className,
	dark = false,
}: {
	children: ReactNode
	className?: string
	dark?: boolean
}) {
	return (
		<motion.button
			whileHover={{ scale: 1.02, y: -2 }}
			whileTap={{ scale: 0.98 }}
			className={`rounded-full px-8 py-4 font-bold transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${dark ? "bg-[var(--mani-accent-dark)] text-white" : "bg-[var(--mani-accent-main)] text-white"} ${className}`}
		>
			{children}
		</motion.button>
	)
}

export function PastelCard({
	colorClass,
	title,
	desc,
	index,
}: {
	colorClass: string
	title: string
	desc: string
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
			className={`${colorClass} flex h-full flex-col justify-center rounded-[24px] p-8 transition-all md:p-10`}
		>
			<h3 className="mb-4 font-bold text-2xl text-black tracking-tight">{title}</h3>
			<p className="text-[var(--mani-text-secondary)] leading-relaxed">{desc}</p>
		</motion.div>
	)
}

export function StepCard({
	title,
	desc,
	image,
	index,
}: {
	title: string
	desc: string
	image: string
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} my-24 items-center gap-12 lg:gap-24`}
		>
			<div className="relative w-full flex-1">
				<div
					className={`absolute -inset-6 -z-10 rounded-[32px] ${index === 0 ? "bg-[var(--mani-bg-mint)]" : index === 1 ? "bg-[var(--mani-bg-peach)]" : "bg-[var(--mani-bg-lavender)]"} opacity-50 mix-blend-multiply`}
				/>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={image}
					alt={title}
					className="aspect-[4/3] w-full transform rounded-[24px] object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]"
				/>
			</div>

			<div className="w-full flex-1">
				<span className="mb-4 block font-bold text-[48px] text-black/10 leading-none md:text-[72px]">
					0{index + 1}
				</span>
				<h3 className="mb-6 font-bold text-[clamp(32px,3vw,44px)] text-black leading-tight tracking-tight">
					{title}
				</h3>
				<p className="max-w-md text-[var(--mani-text-secondary)] text-lg leading-relaxed">{desc}</p>
			</div>
		</motion.div>
	)
}
