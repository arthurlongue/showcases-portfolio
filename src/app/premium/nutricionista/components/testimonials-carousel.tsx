"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useState } from "react"

interface Testimonial {
	quote: string
	name: string
	initials: string
	label: string
}

const testimonials: Testimonial[] = [
	{
		quote:
			"Em 10 semanas perdi 6,2 kg, reduzi medidas e consegui manter meus almoços fora de casa sem culpa. Foi a primeira vez que segui um plano até o fim.",
		name: "Mariana C.",
		initials: "MC",
		label: "Paciente há 6 meses",
	},
	{
		quote:
			"Eu vivia estufado e com dor abdominal no fim do dia. Após o protocolo intestinal, em cerca de 5 semanas os sintomas reduziram bastante e meu sono melhorou.",
		name: "Rafael P.",
		initials: "RP",
		label: "Paciente há 1 ano",
	},
	{
		quote:
			"Cheguei com cansaço constante e exames alterados. Em 3 meses, normalizei marcadores importantes e hoje tenho rotina alimentar que consigo manter.",
		name: "Laura S.",
		initials: "LS",
		label: "Paciente há 8 meses",
	},
]

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 300 : -300,
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -300 : 300,
		opacity: 0,
	}),
}

const STARS = Array.from({ length: 5 })

export function TestimonialsCarousel() {
	const [[current, direction], setCurrent] = useState([0, 0])

	const paginate = useCallback((dir: number) => {
		setCurrent(([prev]) => {
			const next = (prev + dir + testimonials.length) % testimonials.length
			return [next, dir]
		})
	}, [])

	useEffect(() => {
		const timer = setInterval(() => paginate(1), 5000)
		return () => clearInterval(timer)
	}, [paginate])

	const t = testimonials[current]

	return (
		<div className="relative">
			{/* Card container */}
			<div className="relative overflow-hidden min-h-[320px] flex items-center">
				<AnimatePresence initial={false} custom={direction} mode="wait">
					<motion.div
						key={current}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="w-full"
					>
						<div className="bg-(--nutri-warm) p-10 md:p-14 rounded-4xl shadow-[0_12px_30px_rgba(45,106,79,0.05)] max-w-2xl mx-auto">
							<div className="flex space-x-1 mb-6">
								{STARS.map((_, i) => (
									<span key={`star-${current}-${i}`} className="text-(--nutri-forest) text-lg">
										★
									</span>
								))}
							</div>
							<p className="text-lg md:text-xl text-(--nutri-text-main) font-medium leading-relaxed mb-8">
								&ldquo;{t.quote}&rdquo;
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-(--nutri-sage) rounded-full flex items-center justify-center text-(--nutri-forest) font-bold">
									{t.initials}
								</div>
								<div>
									<div className="font-bold text-(--nutri-text-main)">{t.name}</div>
									<div className="text-xs text-(--nutri-text-muted) uppercase tracking-wider">
										{t.label}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Navigation */}
			<div className="flex items-center justify-center gap-6 mt-10">
				<button
					type="button"
					onClick={() => paginate(-1)}
					className="w-12 h-12 rounded-full border border-(--nutri-sage) flex items-center justify-center text-(--nutri-forest) hover:bg-(--nutri-forest) hover:text-white hover:border-(--nutri-forest) transition-all duration-300 cursor-pointer"
					aria-label="Depoimento anterior"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>

				<div className="flex gap-2">
					{testimonials.map((_, i) => (
						<button
							key={`dot-${testimonials[i].initials}`}
							type="button"
							onClick={() => setCurrent([i, i > current ? 1 : -1])}
							className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
								i === current
									? "w-8 bg-(--nutri-forest)"
									: "w-2 bg-(--nutri-sage) hover:bg-(--nutri-forest)/50"
							}`}
							aria-label={`Ir para depoimento ${i + 1}`}
						/>
					))}
				</div>

				<button
					type="button"
					onClick={() => paginate(1)}
					className="w-12 h-12 rounded-full border border-(--nutri-sage) flex items-center justify-center text-(--nutri-forest) hover:bg-(--nutri-forest) hover:text-white hover:border-(--nutri-forest) transition-all duration-300 cursor-pointer"
					aria-label="Próximo depoimento"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		</div>
	)
}
