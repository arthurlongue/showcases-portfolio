import type { Metadata } from "next"
import "./theme.css"

export const metadata: Metadata = {
	title: "Personal Premium | Showcase",
	description:
		"Alta performance geométrica, limpa e brutalista. O auge do treinamento personalizado.",
}

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="personal-theme dark min-h-screen bg-[var(--pt-bg-dark)] text-[var(--pt-text-on-dark)] antialiased selection:bg-[var(--pt-accent-green)] selection:text-black">
			{children}
		</div>
	)
}
