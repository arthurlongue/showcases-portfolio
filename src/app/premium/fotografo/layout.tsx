import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Aurora Photography | Premium Showcase",
	description: "Capturando a luz através de uma lente etérea. Fotografia editorial e documental.",
}

export default function FotografoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground antialiased">
			{children}
		</div>
	)
}
