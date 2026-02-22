import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Manicure Essencial | Showcase",
	description: "Unhas impecáveis. Atendimento humano. Agende seu horário de forma fácil e rápida.",
}

export default function ManicureLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="manicure-theme light min-h-screen bg-background font-sans text-foreground antialiased selection:bg-[var(--mani-accent-main)] selection:text-white">
			{children}
		</div>
	)
}
