"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import type { TarologaFaqItem } from "../data"

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
								className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-transform ${
									isOpen ? "rotate-180" : "rotate-0"
								}`}
							>
								<ChevronDown className="h-4 w-4 text-white" />
							</span>
						</button>
						<section
							id={panelId}
							aria-labelledby={buttonId}
							className={`grid transition-all duration-300 ease-out ${
								isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
							}`}
						>
							<div className="overflow-hidden">
								<p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-white/70">
									{item.answer}
								</p>
							</div>
						</section>
					</div>
				)
			})}
		</div>
	)
}

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
				{messages.map((message) => {
					const isClient = message.sender === "cliente"
					return (
						<div
							key={`${message.sender}-${message.time}-${message.text}`}
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
						</div>
					)
				})}
			</div>
		</article>
	)
}
