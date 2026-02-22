"use client"

import { ChevronDown, Droplet, Leaf, Wheat } from "lucide-react"
import { motion } from "motion/react"
import { type ReactNode, useState } from "react"

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
			transition={{ duration: 0.5, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function RecipeCard({
	title,
	description,
	image,
	ingredients,
	index,
}: {
	title: string
	description: string
	image: string
	ingredients: string[]
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
			whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(92,64,51,0.12)" }}
			className="flex h-full flex-col overflow-hidden rounded-[16px] border border-padaria-tan/20 bg-card transition-all duration-300"
		>
			<div className="h-64 overflow-hidden">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
			</div>

			<div className="flex flex-grow flex-col p-6">
				<div className="mb-4 flex gap-2">
					{ingredients.map((ing, i) => (
						<div
							key={i}
							title={ing}
							className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-padaria-tan/20 text-padaria-brown transition-transform hover:-translate-y-1"
						>
							{i === 0 ? <Wheat size={16} /> : i === 1 ? <Droplet size={16} /> : <Leaf size={16} />}
						</div>
					))}
				</div>
				<h3 className="mb-3 font-medium font-serif text-2xl text-padaria-brown">{title}</h3>
				<p className="flex-grow text-muted-foreground leading-relaxed">{description}</p>
			</div>
		</motion.div>
	)
}

export function ChatBubbles({ chat }: { chat: { sender: string; text: string }[] }) {
	return (
		<div className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-[16px] bg-padaria-tan/10 p-6">
			{chat.map((msg, i) => {
				const isUser = msg.sender === "user"
				return (
					<motion.div
						key={i}
						initial={{ opacity: 0, x: isUser ? 20 : -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.3 }}
						className={`flex ${isUser ? "justify-end" : "justify-start"}`}
					>
						<div
							className={`max-w-[80%] rounded-[12px] p-4 text-sm md:text-base ${
								isUser
									? "rounded-tr-sm bg-white text-padaria-brown shadow-sm"
									: "rounded-tl-sm bg-primary text-primary-foreground"
							}`}
						>
							{msg.text}
						</div>
					</motion.div>
				)
			})}
		</div>
	)
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
			{items.map((item, i) => {
				const isOpen = openIndex === i

				return (
					<div
						key={i}
						className="overflow-hidden rounded-[16px] border border-padaria-tan/20 bg-card shadow-sm"
					>
						<button
							type="button"
							onClick={() => setOpenIndex(isOpen ? null : i)}
							className="flex w-full cursor-pointer items-center justify-between p-6 text-left transition-colors hover:bg-padaria-tan/5"
						>
							<span className="font-medium font-serif text-padaria-brown text-xl">
								{item.question}
							</span>
							<motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
								<ChevronDown className="h-6 w-6 text-primary" />
							</motion.div>
						</button>
						<motion.div
							initial={false}
							animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
							className="overflow-hidden"
						>
							<div className="p-6 pt-0 text-muted-foreground leading-relaxed">{item.answer}</div>
						</motion.div>
					</div>
				)
			})}
		</div>
	)
}

export function HeroImage({ src }: { src: string }) {
	return (
		<motion.div
			animate={{ scale: [1, 1.03, 1] }}
			transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			className="h-full min-h-[400px] w-full overflow-hidden rounded-[16px] md:min-h-[600px]"
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={src} alt="Fresh bread" className="h-full w-full object-cover" />
		</motion.div>
	)
}
