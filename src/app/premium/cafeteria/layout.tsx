import type { Metadata } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"

const dmSerifDisplay = DM_Serif_Display({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dm-serif",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Aura Roasters | Cinematic Espresso",
	description: "O café premium, redefinido. Um manifesto à clareza.",
}

export default function CafeteriaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`${dmSerifDisplay.variable} ${inter.variable} relative min-h-screen bg-[#FAF7F3] font-sans text-[#1A1208] antialiased selection:bg-[#C49A5C]/30`}
		>
			{/* Global Noise Overlay */}
			<div
				className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-5 mix-blend-multiply"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			></div>
			{children}
		</div>
	)
}
