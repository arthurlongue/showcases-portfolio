import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Padaria Essencial | Showcase",
	description: "O sabor da sua cozinha, mas melhor. Pão fresco todos os dias.",
}

export default function PadariaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="padaria-theme light min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
			{children}
		</div>
	)
}
