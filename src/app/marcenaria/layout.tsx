import type { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google"

import "./theme.css"

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
})

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-cormorant",
	weight: ["300", "400", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Madeira Viva | Marcenaria Sob Medida Premium",
	description:
		"Móveis planejados sob medida com projeto 3D, fabricação própria e garantia de 24 meses.",
}

export default function MarcenariaLayout({ children }: { children: React.ReactNode }) {
	return <div className={`${plusJakarta.variable} ${cormorant.variable}`}>{children}</div>
}
