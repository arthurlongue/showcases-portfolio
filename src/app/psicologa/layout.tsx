import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Psicóloga Premium | Showcase",
	description: "Você não está quebrado. Você está em transformação. Terapia segura e acolhedora.",
}

export default function PsicologaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
