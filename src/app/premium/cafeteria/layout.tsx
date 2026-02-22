import type { Metadata } from "next"
import { Anton, Inter, JetBrains_Mono } from "next/font/google"
import "./styles.css"

const anton = Anton({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-anton",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
})

export const metadata: Metadata = {
	title: "VOID Coffee Roasters | Cafeína Extrema",
	description:
		"Torramos os grãos até chorarem. Sem xaropes. Sem descafeinado. Sem misericórdia. Bem-vindo ao vazio.",
}

export default function CafeteriaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`cafeteria-theme ${anton.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-[var(--color-brutal-bg)] font-[family-name:var(--font-body)] text-[var(--color-brutal-text)] antialiased selection:bg-[var(--color-brutal-accent)] selection:text-[var(--color-brutal-text-light)]`}
		>
			{children}
		</div>
	)
}
