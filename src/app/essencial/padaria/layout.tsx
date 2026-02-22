import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Padaria Essencial | Showcase",
	description: "O sabor da sua cozinha, mas melhor. Pão fresco todos os dias.",
}

export default function PadariaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
