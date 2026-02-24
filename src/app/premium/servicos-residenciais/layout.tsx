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
	title: "CasaPronta Prime | Serviços Residenciais Premium",
	description:
		"Reforma e manutenção residencial com visita técnica em 24h, escopo fechado e garantia por escrito.",
}

export default function ServicosResidenciaisLayout({ children }: { children: React.ReactNode }) {
	return <div className={`${plusJakarta.variable} ${cormorant.variable}`}>{children}</div>
}
