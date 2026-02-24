import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./theme.css"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Lumière Odontologia Premium | Showcase",
	description:
		"Odontologia premium com escaneamento 3D, plano por fases, prazos definidos e acompanhamento completo.",
}

export default function DentistaLayout({ children }: { children: React.ReactNode }) {
	return <div className={`dentista-theme min-h-screen ${inter.variable}`}>{children}</div>
}
