import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Serviços Residenciais Essencial | Showcase",
	description: "Reformas e manutenções com precisão, transparência e design limpo.",
}

export default function HomeServicesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="home-services-theme light viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.02%22/%3E%3C/svg%3E')] min-h-screen bg-[url('data:image/svg+xml,%3Csvg bg-background font-sans text-foreground antialiased selection:bg-black/10">
			{children}
		</div>
	)
}
