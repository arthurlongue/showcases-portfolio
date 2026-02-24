import type { Metadata } from "next"
import { Playfair_Display, Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
})

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

export const metadata: Metadata = {
	title: "O Rigor | Padaria artesanal em Guarapari",
	description:
		"Fermentação natural, fornadas diárias e entrega programada entre 6h e 8h em Guarapari.",
}

export default function PadariaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased`}>
			{children}
		</div>
	)
}
