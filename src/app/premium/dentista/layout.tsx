import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "OdontoDigital Premium | Showcase",
	description:
		"O futuro da odontologia estética. Escaneamento 3D, precisão milimétrica e tecnologia de ponta.",
}

export default function DentistaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="dentista-theme dark min-h-screen overflow-hidden bg-background font-sans text-foreground antialiased selection:bg-[var(--dent-accent-blue)]/30">
			{children}
		</div>
	)
}
