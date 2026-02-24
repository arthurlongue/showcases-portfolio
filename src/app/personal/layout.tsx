import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./theme.css"

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Personal Premium | Consultoria",
	description:
		"Consultoria personalizada com avaliação inicial, plano em até 48h e acompanhamento quinzenal.",
}

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`personal-theme min-h-screen bg-background text-foreground antialiased ${outfit.variable}`}
		>
			{children}
		</div>
	)
}
