import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Psicólogo Essencial | Showcase",
	description: "Você não está quebrado. Você está em transformação. Terapia segura e acolhedora.",
}

export default function PsicologoLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
