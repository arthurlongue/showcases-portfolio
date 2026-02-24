import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./theme.css"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Arctos Fotografia | Campanhas e Editorial",
	description:
		"Produção fotográfica premium para marcas, experts e editoriais com direção criativa, pós-produção e entrega com prazo.",
}

export default function FotografoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`fotografo-theme min-h-screen bg-background font-sans text-foreground antialiased ${playfair.variable}`}
		>
			{children}
		</div>
	)
}
