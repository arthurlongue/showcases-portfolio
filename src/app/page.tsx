import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const premiumShowcases = [
	{
		href: "/cafeteria",
		title: "Cafeteria",
		description: "Cafeteria sofisticada com menu de especialidades e ambiente.",
		tags: ["Café", "Gastronomia"],
		thumbnail: "/showcases/cafeteria/xicara-mesa.webp",
	},
	{
		href: "/dentista",
		title: "Clínica Odontológica",
		description: "Clínica dentária com tratamentos estéticos e reabilitação oral.",
		tags: ["Saúde", "Odontologia"],
		thumbnail: "/showcases/dentista/consultorio-premium.webp",
	},
	{
		href: "/fotografo",
		title: "Fotógrafo",
		description: "Portfólio de fotógrafo profissional para ensaios e eventos.",
		tags: ["Arte", "Fotografia"],
		thumbnail: "/showcases/fotografo/retrato-dramatico.webp",
	},
	{
		href: "/nutricionista",
		title: "Nutricionista",
		description: "Consultório de nutrição esportiva e emagrecimento saudável.",
		tags: ["Saúde", "Nutrição"],
		thumbnail: "/showcases/nutricionista/nutricionista-na-cozinha.webp",
	},
	{
		href: "/personal",
		title: "Personal Trainer",
		description: "Trainer especializado em hipertrofia, emagrecimento e performance.",
		tags: ["Fitness", "Treino"],
		thumbnail: "/showcases/personal/academia-premium.webp",
	},
	{
		href: "/manicure",
		title: "Manicure & Nail Studio",
		description: "Estúdio de manicure e esmaltação em gel com agendamento online.",
		tags: ["Beleza", "Agendamento"],
		thumbnail: "/showcases/manicure/unhas-nude.webp",
	},
	{
		href: "/padaria",
		title: "Padaria Artesanal",
		description: "Padaria com pães artesanais, confeitaria e café da manhã.",
		tags: ["Alimentação", "Delivery"],
		thumbnail: "/showcases/padaria/hero.webp",
	},
	{
		href: "/psicologa",
		title: "Psicóloga",
		description: "Consultório de psicologia com atendimento presencial e online.",
		tags: ["Saúde Mental", "Consultas"],
		thumbnail: "/showcases/psicologa/hero.jpg",
	},
	{
		href: "/tarologa",
		title: "Taróloga",
		description: "Clareza espiritual e direcionamento através do Tarot e Baralho Cigano.",
		tags: ["Misticismo", "Tarot", "Espiritualidade"],
		thumbnail: "/showcases/tarologa/hero-portrait.jpeg",
	},
	{
		href: "/marcenaria",
		title: "Ateliê Obra (Reformas)",
		description: "Empresa de reformas, pintura e manutenção doméstica de alto padrão.",
		tags: ["Reformas", "Casa", "Luxo"],
		thumbnail: "/showcases/marcenaria/movel-madeira.webp",
	},
]

interface ShowcaseCardProps {
	href: string
	title: string
	description: string
	tags: string[]
	thumbnail: string
}

function ShowcaseCard({ href, title, description, tags, thumbnail }: ShowcaseCardProps) {
	return (
		<Link
			href={href}
			className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
		>
			<div className="relative aspect-video w-full overflow-hidden bg-muted">
				<Image
					src={thumbnail}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 640px) 100vw, 50vw"
				/>
			</div>
			<div className="flex flex-col gap-3 p-5 pt-0">
				<div className="flex items-start justify-between gap-2">
					<h3 className="font-semibold text-base leading-snug">{title}</h3>
					<ArrowUpRight
						className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
						aria-hidden
					/>
				</div>
				<p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
				<div className="mt-auto flex flex-wrap gap-1.5 pt-1">
					{tags.map((tag) => (
						<Badge key={tag} className="text-xs">
							{tag}
						</Badge>
					))}
				</div>
			</div>
		</Link>
	)
}

export default function Home() {
	return (
		<main className="mx-auto min-h-screen max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
			<header className="mb-12">
				<p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
					Portfólio
				</p>
				<h1 className="font-bold text-4xl tracking-tight sm:text-5xl">Showcases</h1>
				<p className="mt-3 max-w-xl text-muted-foreground">
					Exemplos de sites para diferentes nichos no plano <strong>Premium</strong>.
				</p>
			</header>

			<section>
				<div className="mb-5 flex items-center gap-3">
					<h2 className="font-semibold text-xl">Premium Showcases</h2>
					<span className="h-px flex-1 bg-border" />
					<Badge>{premiumShowcases.length} projetos</Badge>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{premiumShowcases.map((showcase) => (
						<ShowcaseCard key={showcase.href} {...showcase} />
					))}
				</div>
			</section>
		</main>
	)
}
