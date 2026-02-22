import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Psicóloga Essencial | Showcase",
	description: "Você não está quebrado. Você está em transformação. Terapia segura e acolhedora.",
}

export default function PsicologoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="psicologo-theme light min-h-screen bg-background text-foreground selection:bg-primary/20">
			{children}
		</div>
	)
}
