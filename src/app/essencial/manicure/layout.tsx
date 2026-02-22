import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Manicure Essencial | Showcase",
	description: "Unhas impecáveis. Atendimento humano. Agende seu horário de forma fácil e rápida.",
}

export default function ManicureLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
