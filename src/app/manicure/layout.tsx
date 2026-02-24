import type { Metadata } from "next"
import { Anton, Inter } from "next/font/google"
import "./theme.css"

const anton = Anton({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-anton",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Maison Unhas | Showcase Premium",
	description:
		"Estúdio de manicure premium em Pinheiros com alongamento em gel, retorno técnico em 7 dias e agenda com confirmação rápida no WhatsApp.",
}

export default function ManicureLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`manicure-theme min-h-screen ${anton.variable} ${inter.variable}`}>
			{children}
		</div>
	)
}
