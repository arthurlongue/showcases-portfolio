import { Shield, Target, Zap } from "lucide-react"
import type { ReactNode } from "react"

export interface Pillar {
	title: string
	description: string
	icon: ReactNode
}

export const pillarItems: Pillar[] = [
	{
		title: "Força",
		description: "Base sólida para ganhar massa e proteger articulações no longo prazo.",
		icon: <Shield className="h-6 w-6 text-white" />,
	},
	{
		title: "Resistência",
		description: "Condicionamento para manter intensidade do início ao fim da sessão.",
		icon: <Zap className="h-6 w-6 text-white" />,
	},
	{
		title: "Disciplina",
		description: "Metas semanais, check-ins e ajustes para você evoluir sem estagnar.",
		icon: <Target className="h-6 w-6 text-white" />,
	},
]

export const ctaNames = ["João", "Maria", "Pedro", "Lucas", "Ana", "Carlos", "Júlia"] as const
