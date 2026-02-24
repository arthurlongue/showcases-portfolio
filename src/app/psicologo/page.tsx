import { DM_Sans, DM_Serif_Display } from "next/font/google"

import { PsicologoPremiumClient } from "./components/client"
import { psiData } from "./data"

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-psi-body",
})

const dmSerif = DM_Serif_Display({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-psi-display",
})

export default function PsicologoPage() {
	return (
		<div
			className={`${dmSans.variable} ${dmSerif.variable}`}
			style={{
				fontFamily: "var(--font-psi-body), system-ui, sans-serif",
			}}
		>
			<style>{`
				.font-serif {
					font-family: var(--font-psi-display), Georgia, serif;
				}
				@keyframes float {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-10px); }
				}
			`}</style>
			<PsicologoPremiumClient data={psiData} />
		</div>
	)
}
