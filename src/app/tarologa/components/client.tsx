"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { type ReactNode, useState } from "react"
import type { TarologaFaqItem } from "../data"

/* ─────────────────────────────────────────────
   TAROT REVEAL — Scroll-triggered fade+slide
   ───────────────────────────────────────────── */

const EASE_CUSTOM: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function TarotReveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode
	className?: string
	delay?: number
}) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			initial={{ opacity: 0, y: reduced ? 0 : 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, ease: EASE_CUSTOM }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   TAROT HERO CONTENT — Staggered entrance
   ───────────────────────────────────────────── */

export function TarotHeroContent({ children, className }: { children: ReactNode; className?: string }) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function TarotHeroItem({ children, className }: { children: ReactNode; className?: string }) {
	const reduced = useReducedMotion()

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: reduced ? 0 : 24 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: reduced ? 0 : 0.7, ease: EASE_CUSTOM },
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/* ─────────────────────────────────────────────
   TAROT BUTTON — Hover/tap micro-interactions
   ───────────────────────────────────────────── */

export function TarotButton({
	children,
	className,
	href,
	target,
	rel,
}: {
	children: ReactNode
	className?: string
	href?: string
	target?: string
	rel?: string
}) {
	return (
		<motion.a
			href={href}
			target={target}
			rel={rel}
			whileHover={{ scale: 1.02, y: -1 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className={className}
		>
			{children}
		</motion.a>
	)
}

/* ─────────────────────────────────────────────
   TAROT NAV — Mobile hamburger with AnimatePresence
   ───────────────────────────────────────────── */

interface TarotNavProps {
	brand: ReactNode
	navItems: ReadonlyArray<{ href: string; label: string }>
	ctaHref: string
}

export function TarotNav({ brand, navItems, ctaHref }: TarotNavProps) {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07070d]/70 backdrop-blur-xl">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
				{brand}
				<div className="hidden items-center gap-7 text-[0.82rem] font-semibold text-white/75 md:flex">
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className="transition-colors hover:text-white">
							{item.label}
						</a>
					))}
				</div>
				<a
					href={ctaHref}
					target="_blank"
					rel="noopener noreferrer"
					className="hidden rounded-full bg-[#25D366] px-5 py-2 text-[0.78rem] font-bold text-white transition-colors hover:bg-[#20ba5a] md:inline-flex"
				>
					Agendar no WhatsApp
				</a>
				<button
					type="button"
					className="cursor-pointer text-white focus-visible:outline-none md:hidden"
					aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
					onClick={() => setMobileOpen((c) => !c)}
				>
					{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="flex flex-col gap-5 overflow-hidden border-t border-white/10 bg-[#07070d]/95 px-6 py-6 backdrop-blur-xl md:hidden"
					>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-[0.92rem] font-semibold text-white/80 transition-colors hover:text-white"
								onClick={() => setMobileOpen(false)}
							>
								{item.label}
							</a>
						))}
						<a
							href={ctaHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex w-fit rounded-full bg-[#25D366] px-5 py-2.5 text-[0.82rem] font-bold text-white transition-colors hover:bg-[#20ba5a]"
							onClick={() => setMobileOpen(false)}
						>
							Agendar no WhatsApp
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION — Motion-powered height animation
   ───────────────────────────────────────────── */

interface TarologaFaqAccordionProps {
	items: TarologaFaqItem[]
}

interface WhatsAppMockMessage {
	sender: "cliente" | "tarologa"
	text: string
	time: string
}

interface WhatsAppProofCardProps {
	title: string
	subtitle: string
	messages: WhatsAppMockMessage[]
}

export function TarologaFaqAccordion({ items }: TarologaFaqAccordionProps) {
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<div className="flex flex-col gap-3">
			{items.map((item, index) => {
				const isOpen = openIndex === index
				const panelId = `faq-panel-${index}`
				const buttonId = `faq-button-${index}`

				return (
					<div
						key={item.question}
						className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm"
					>
						<button
							type="button"
							id={buttonId}
							aria-expanded={isOpen}
							aria-controls={panelId}
							onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
							className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
						>
							<span className="text-[0.98rem] font-semibold leading-snug text-white">
								{item.question}
							</span>
							<span
								className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-transform duration-300 ${
									isOpen ? "rotate-180" : "rotate-0"
								}`}
							>
								<ChevronDown className="h-4 w-4 text-white" />
							</span>
						</button>
						<motion.div
							id={panelId}
							role="region"
							aria-labelledby={buttonId}
							initial={false}
							animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
							transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
							className="overflow-hidden"
						>
							<p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-white/70">
								{item.answer}
							</p>
						</motion.div>
					</div>
				)
			})}
		</div>
	)
}

/* ─────────────────────────────────────────────
   WHATSAPP PROOF CARD — With message hover effects
   ───────────────────────────────────────────── */

export function WhatsAppProofCard({ title, subtitle, messages }: WhatsAppProofCardProps) {
	return (
		<article className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0a1013] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
			<div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
				<div>
					<h4 className="text-sm font-semibold text-white">{title}</h4>
					<p className="text-xs text-white/60">{subtitle}</p>
				</div>
				<span className="rounded-full bg-[#2a3b44] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#87e7a5]">
					Online
				</span>
			</div>

			<div className="flex flex-col gap-3">
				{messages.map((message, i) => {
					const isClient = message.sender === "cliente"
					return (
						<motion.div
							key={`${message.sender}-${message.time}-${message.text}`}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.12, ease: EASE_CUSTOM }}
							whileHover={{ scale: 1.01 }}
							className={`flex ${isClient ? "justify-start" : "justify-end"}`}
						>
							<div
								className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
									isClient
										? "rounded-bl-sm bg-white/12 text-white"
										: "rounded-br-sm bg-[#0f5f4a] text-white"
								}`}
							>
								<p>{message.text}</p>
								<p className="mt-1 text-right text-[0.7rem] text-white/60">{message.time}</p>
							</div>
						</motion.div>
					)
				})}
			</div>
		</article>
	)
}
