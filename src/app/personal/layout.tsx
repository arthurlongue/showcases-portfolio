import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Lora, Playfair_Display } from "next/font/google"
import "./theme.css"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

const jetbrains = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
	display: "swap",
})

export const metadata: Metadata = {
	title: "ATLAS Performance | Treinamento de Elite em São Paulo",
	description:
		"Treinamento baseado em ciência, periodização e biomecânica. Resultados mensuráveis para quem leva performance a sério.",
}

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`personal-theme dot-grid-bg min-h-screen antialiased ${playfair.variable} ${lora.variable} ${inter.variable} ${jetbrains.variable}`}
			style={{ color: "var(--np-ink)" }}
		>
			{children}
		</div>
	)
}
