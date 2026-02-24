import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Taróloga Online | Agende sua Consulta no WhatsApp",
	description:
		"Landing page de taróloga com foco em agendamento rápido via WhatsApp, serviços com preços visíveis, prova social e FAQ para quebra de objeções.",
}

export default function TarologaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
