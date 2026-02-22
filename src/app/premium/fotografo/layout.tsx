import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Aurora Photography | Premium Showcase",
	description: "Capturando a luz através de uma lente etérea. Fotografia editorial e documental.",
}

export default function FotografoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="fotografo-theme light min-h-screen overflow-hidden bg-background font-sans text-foreground antialiased selection:bg-[var(--foto-accent-pink)]/30">
			{children}
		</div>
	)
}
