import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Nutricionista Premium | Showcase",
	description: "Veja além. Desbloqueie sua saúde através da nutrição com precisão clínica.",
}

export default function NutricionistaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="nutricionista-theme dark min-h-screen bg-background text-foreground selection:bg-primary/30">
			{children}
		</div>
	)
}
