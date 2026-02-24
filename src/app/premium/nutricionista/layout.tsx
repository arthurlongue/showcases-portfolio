import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import "./theme.css"

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Nutricionista Premium | Showcase",
	description:
		"Nutrição clínica funcional com plano em 48h, metas por fases e acompanhamento quinzenal.",
}

export default function NutricionistaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`nutricionista-theme min-h-screen bg-(--nutri-warm) text-(--nutri-text-main) antialiased selection:bg-(--nutri-forest)/20 ${fraunces.variable}`}
		>
			{children}
		</div>
	)
}
