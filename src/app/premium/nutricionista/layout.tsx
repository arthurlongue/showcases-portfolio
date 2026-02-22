import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Nutricionista Premium | Showcase",
	description:
		"Transforme sua relação com a alimentação. Nutrição funcional e personalizada para uma vida plena.",
}

export default function NutricionistaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="nutricionista-theme min-h-screen bg-(--nutri-warm) text-(--nutri-text-main) antialiased selection:bg-(--nutri-forest)/20">
			{children}
		</div>
	)
}
