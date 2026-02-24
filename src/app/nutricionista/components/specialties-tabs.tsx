"use client"

import { ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const specialties = [
	{
		id: "emagrecimento",
		title: "Emagrecimento Saudável",
		description:
			"Estratégia para perda de gordura com manutenção de massa magra, sem cardápio impossível de seguir.",
		subDescription: "Meta definida por fase, retorno em 30 dias e ajustes quinzenais.",
	},
	{
		id: "saude-intestinal",
		title: "Saúde Intestinal (Disbiose)",
		description:
			"Protocolo para gases, estufamento, constipação e desconforto abdominal com foco em rotina alimentar.",
		subDescription:
			"Conduta individual para disbiose e SII, com evolução acompanhada por sintomas.",
	},
	{
		id: "modulacao-hormonal",
		title: "Modulação Hormonal",
		description:
			"Abordagem nutricional para SOP, tireoide, menopausa e fadiga, alinhada com exames laboratoriais.",
		subDescription:
			"Plano alimentar por fases para reduzir sintomas e melhorar disposição ao longo do mês.",
	},
	{
		id: "nutricao-esportiva",
		title: "Nutrição Esportiva",
		description:
			"Planejamento de pré, intra e pós-treino para performance, recuperação e composição corporal.",
		subDescription: "Estratégias para praticantes e atletas com rotina de treino e competição.",
	},
	{
		id: "doencas-autoimunes",
		title: "Doenças Autoimunes",
		description:
			"Manejo nutricional com foco anti-inflamatório, adesão e redução de gatilhos alimentares.",
		subDescription:
			"Suporte para Hashimoto, artrite reumatoide, psoríase e outras condições autoimunes.",
	},
]

export function SpecialtiesTabs() {
	const [activeTab, setActiveTab] = useState(specialties[0].id)

	const activeSpecialty = specialties.find((s) => s.id === activeTab) || specialties[0]

	return (
		<section id="servicos" className="flex flex-col lg:flex-row">
			<div className="flex-1 bg-(--nutri-forest) py-32 px-8 lg:pl-24 lg:pr-20 flex flex-col justify-center text-white">
				<div className="max-w-xl ml-auto w-full">
					<div className="text-xs font-bold text-(--nutri-sage) uppercase tracking-[0.15em] mb-10">
						Especialidades
					</div>
					<div className="space-y-8">
						{specialties.map((specialty) => {
							const isActive = activeTab === specialty.id
							return (
								<button
									type="button"
									key={specialty.id}
									onClick={() => setActiveTab(specialty.id)}
									className="flex items-center space-x-6 text-2xl md:text-3xl font-bold cursor-pointer group text-left w-full"
								>
									<span
										className={cn(
											"transition-colors",
											isActive ? "text-white" : "text-(--nutri-sage)/70 group-hover:text-white",
										)}
									>
										{specialty.title}
									</span>
									{isActive && (
										<motion.div
											layoutId="active-arrow"
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: 10 }}
											transition={{ duration: 0.3 }}
										>
											<ArrowRight className="w-6 h-6 text-(--nutri-sage)" />
										</motion.div>
									)}
								</button>
							)
						})}
					</div>
				</div>
			</div>
			<div className="flex-1 bg-(--nutri-sage) py-32 px-8 lg:pr-24 lg:pl-20 flex flex-col justify-center overflow-hidden">
				<div className="max-w-xl w-full relative min-h-64">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="absolute inset-0"
						>
							<p className="text-2xl md:text-3xl leading-relaxed mb-10 font-medium text-(--nutri-text-main)">
								{activeSpecialty.description}
							</p>
							<p className="text-xl md:text-2xl leading-relaxed font-medium text-(--nutri-text-muted)">
								{activeSpecialty.subDescription}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}
