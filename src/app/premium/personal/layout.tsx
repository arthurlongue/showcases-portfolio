import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Personal Premium | Showcase",
	description:
		"Alta performance geométrica, limpa e brutalista. O auge do treinamento personalizado.",
}

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
	return <div className="min-h-screen bg-background text-foreground antialiased">{children}</div>
}
