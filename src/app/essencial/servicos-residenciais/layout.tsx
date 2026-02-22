import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Serviços Residenciais Essencial | Showcase",
	description: "Reformas e manutenções com precisão, transparência e design limpo.",
}

export default function ServicosResidenciaisLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
