"use client"

import { ArrowRight, Instagram, Mail, MapPin } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

export default function FotografoPremiumPage() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-(--foto-bg) font-sans text-(--foto-text) selection:bg-black selection:text-white">
			<Navbar />
			<main>
				<Hero />
				<Brands />
				<ProcessDark />
				<Services />
				<Portfolio />
				<WhyUs />
			</main>
			<Footer />
		</div>
	)
}

function Navbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-black/5 border-b bg-(--foto-bg)/80 px-6 py-6 backdrop-blur-md">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between">
				<div className="flex items-center gap-2">
					<FourPointStar className="h-6 w-6 text-(--foto-text)" />
					<div className="font-serif font-bold text-(--foto-text) text-2xl tracking-widest uppercase">
						Arctos
					</div>
				</div>

				<div className="hidden items-center gap-8 text-(--foto-text-muted) text-sm font-medium tracking-wide md:flex">
					<NavLink href="#servicos">Serviços</NavLink>
					<NavLink href="#portfolio">Projetos</NavLink>
					<NavLink href="#metodo">Método</NavLink>
					<NavLink href="#sobre">Estúdio</NavLink>
				</div>

				<ActionButton className="px-6 py-2.5 text-xs" dark>
					Solicitar Proposta
				</ActionButton>
			</div>
		</nav>
	)
}

function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-(--foto-text) px-6 pt-32 pb-20">
			{/* Background Video */}
			<div className="absolute inset-0 z-0">
				<video
					src="/showcases/fotografo/hero-video.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="h-full w-full object-cover opacity-60"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 md:flex-row">
				<div className="max-w-3xl">
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
						className="mb-8 font-serif text-(--foto-text) text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[110px]"
					>
						Fotografia de <br />
						<span className="border-white/20 border-b pb-2 italic text-white/90">campanha</span>{" "}
						para <br />
						<span className="text-white/90">marcas, experts e editoriais</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="mb-10 max-w-md text-white/70 text-lg font-light leading-relaxed md:text-xl"
					>
						Do briefing ao arquivo final em um fluxo só. Você recebe direção criativa, captação e
						pós-produção com entregáveis claros e prazo fechado de até 7 dias úteis após o shooting.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
					>
						<ActionButton className="px-8 py-4 text-sm" dark={false}>
							<span className="uppercase tracking-widest text-black">Pedir orçamento</span>
							<ArrowRight className="h-4 w-4 text-black" />
						</ActionButton>
					</motion.div>
				</div>

				<div className="relative hidden aspect-square w-1/3 md:block">
					<FourPointStar className="absolute top-0 right-0 h-full w-full animate-[spin_30s_linear_infinite] text-white/10" />
					<div className="absolute bottom-10 left-10 h-16 w-48 -rotate-12 transform rounded-[100%] border-white/20 border-[1.5px]" />
					<div className="absolute bottom-8 left-12 h-16 w-48 -rotate-12 transform rounded-[100%] border-white/20 border-[1.5px]" />
				</div>
			</div>
		</section>
	)
}

function Brands() {
	const brands = ["AMARO", "TRACK&FIELD", "LIVO", "DENGO", "GQ BRASIL", "CASA VOGUE", "FFW"]
	const scrollBrands = [...brands, ...brands]

	return (
		<section className="relative z-10 flex flex-col items-center overflow-hidden border-black/10 border-b bg-(--foto-bg) py-16">
			<div className="mx-auto mb-12 flex w-full max-w-7xl items-center gap-4 px-6">
				<div className="h-px flex-1 bg-black/20" />
				<FourPointStar className="h-4 w-4 text-(--foto-text)" />
				<h2 className="font-serif text-(--foto-text) text-3xl italic md:text-4xl">
					Clientes e publicações
				</h2>
				<FourPointStar className="h-4 w-4 text-(--foto-text)" />
				<div className="h-px flex-1 bg-black/20" />
			</div>

			<div className="w-full overflow-hidden opacity-80">
				<motion.div
					className="flex min-w-max"
					animate={{ x: ["0%", "-50%"] }}
					transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
				>
					{scrollBrands.map((brand, index) => (
						<div key={`${brand}-${index}`} className="flex items-center justify-center px-8 py-2">
							<span className="whitespace-nowrap font-serif font-bold text-(--foto-text) text-2xl tracking-widest uppercase md:text-3xl">
								{brand}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

function ProcessDark() {
	const steps: ProcessStep[] = [
		{
			icon: "1",
			title: "Briefing e proposta em 24h",
			desc: "Você recebe escopo, investimento e cronograma em um PDF direto, sem pacote confuso.",
		},
		{
			icon: "2",
			title: "Pré-produção em até 5 dias",
			desc: "Definimos conceito, referências, locação, casting e lista de cenas antes da captação.",
		},
		{
			icon: "3",
			title: "Captação com direção no set",
			desc: "Equipe enxuta, checklist de tomadas e acompanhamento em tempo real com aprovação.",
		},
		{
			icon: "4",
			title: "Pós com 2 rodadas de ajuste",
			desc: "Tratamento de cor e pele com consistência, mantendo o padrão visual da sua marca.",
		},
		{
			icon: "5",
			title: "Entrega final em até 7 dias úteis",
			desc: "Galeria online + arquivos em alta e versão otimizada para site, social e mídia paga.",
		},
		{
			icon: "6",
			title: "Licenciamento claro e backup",
			desc: "Contrato simples, direitos de uso definidos e backup seguro por 12 meses.",
		},
	]

	return (
		<section
			id="metodo"
			className="relative z-10 overflow-hidden bg-(--foto-bg-dark) py-32 text-white"
		>
			<div className="pointer-events-none absolute top-1/2 left-1/2 h-[40vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4facfe] opacity-20 blur-[120px] mix-blend-screen" />
			<div className="pointer-events-none absolute top-0 right-0 h-[40vw] w-[40vw] rounded-full bg-[#a18cd1] opacity-20 blur-[120px] mix-blend-screen" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
				<FourPointStar className="mx-auto mb-6 h-8 w-8 text-white/50" />
				<h2 className="mb-24 font-serif text-5xl md:text-7xl">
					Processo claro,
					<br />
					<span className="text-white/80 italic">do briefing à entrega</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
					{steps.map((step, index) => (
						<div key={step.title} className="w-full max-w-sm px-4 md:w-[30%]">
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.6, delay: index * 0.06 }}
								className="flex flex-col items-center"
							>
								<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
									<span className="font-serif text-2xl text-white/70 italic">{step.icon}</span>
								</div>
								<h3 className="mb-3 text-lg font-medium">{step.title}</h3>
								<p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function Services() {
	return (
		<section id="servicos" className="relative z-10 overflow-hidden bg-(--foto-bg) py-32">
			<div className="pointer-events-none absolute top-[10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-[#fbc2eb] opacity-40 blur-[100px] mix-blend-multiply" />
			<div className="pointer-events-none absolute bottom-[20%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#f6d365] opacity-30 blur-[100px] mix-blend-multiply" />

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-40 px-6">
				<ServiceBlock
					title="Retrato e Editorial"
					description="Para experts e marcas pessoais que precisam vender imagem com consistência. Entregáveis: 25 fotos tratadas, 6 variações verticais para anúncios e guia de aplicação por canal. Prazo: até 5 dias úteis."
					reverse={false}
					drawing={
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
							<Image
								src="/showcases/fotografo/retrato-dramatico.webp"
								alt="Retrato"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
					}
				/>
				<ServiceBlock
					title="Casamentos"
					description="Cobertura documental de 8 a 12 horas com dois fotógrafos. Entregáveis: prévia em 48h, galeria final com 700+ fotos em até 20 dias e opção de álbum fine art."
					reverse
					drawing={
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
							<video
								src="/showcases/fotografo/galeria-video.mp4"
								autoPlay
								loop
								muted
								playsInline
								className="h-full w-full object-cover"
							/>
						</div>
					}
				/>
				<ServiceBlock
					title="Marcas e Corporativo"
					description="Produção para campanha, e-commerce e institucional no mesmo set. Entregáveis: 40 fotos finais, recortes para mídia paga e banco organizado por produto ou equipe. Prazo: até 7 dias úteis."
					reverse={false}
					drawing={
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
							<Image
								src="/showcases/fotografo/diretora-estudio.webp"
								alt="Corporativo"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
					}
				/>
			</div>
		</section>
	)
}

function Portfolio() {
	const images: PortfolioImage[] = [
		{
			src: "/showcases/fotografo/editorial-moda.webp",
			aspect: "aspect-[4/3]",
			col: "md:w-[48%]",
			alt: "Modelo em editorial de moda",
		},
		{
			src: "/showcases/fotografo/beleza-macro.webp",
			aspect: "aspect-[3/4]",
			col: "md:w-[48%]",
			alt: "Detalhe beleza macro",
		},
		{
			src: "/showcases/fotografo/silhueta-arquitetura.webp",
			aspect: "aspect-[3/4]",
			col: "md:w-[32%]",
			alt: "Silhueta em arquitetura",
		},
		{
			src: "/showcases/fotografo/retrato-dupla-exposicao.webp",
			aspect: "aspect-[4/5]",
			col: "md:w-[65%]",
			alt: "Retrato dupla exposição",
		},
	]

	return (
		<section id="portfolio" className="relative z-10 bg-(--foto-bg) py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-12 flex w-full items-center gap-4">
					<div className="h-px flex-1 bg-black/20" />
					<h2 className="font-serif text-(--foto-text) text-5xl italic md:text-6xl">
						Projetos recentes
					</h2>
					<div className="h-px flex-1 bg-black/20" />
				</div>

				<div className="mb-20 flex flex-wrap justify-center gap-4">
					<FilterButton active>Editorial</FilterButton>
					<FilterButton>Casamentos</FilterButton>
					<FilterButton>Marcas</FilterButton>
				</div>

				<div className="flex flex-wrap justify-between gap-6 md:gap-8">
					{images.map((image, index) => (
						<motion.div
							key={image.src}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className={`group relative w-full cursor-pointer overflow-hidden rounded-3xl shadow-sm ${image.col} ${image.aspect}`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover transition-transform duration-1000 group-hover:scale-105"
							/>
						</motion.div>
					))}
				</div>

				<div className="mt-24 text-center">
					<h2 className="mb-8 font-serif text-(--foto-text) text-4xl italic md:text-5xl">
						Receba proposta com escopo e cronograma
					</h2>
					<ActionButton className="mx-auto px-10 py-4 text-sm" dark>
						Solicitar Proposta
					</ActionButton>
				</div>
			</div>
		</section>
	)
}

function WhyUs() {
	return (
		<section
			id="sobre"
			className="relative z-10 overflow-hidden bg-(--foto-bg-dark) py-32 text-center text-white"
		>
			<div className="pointer-events-none absolute top-1/2 left-1/2 h-[30vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a18cd1] opacity-30 blur-[120px] mix-blend-screen" />

			<div className="relative z-10 mx-auto max-w-3xl px-6">
				<FourPointStar className="mx-auto mb-6 h-8 w-8 text-white/50" />
				<h2 className="mb-8 font-serif text-5xl md:text-6xl">Confiança em números reais</h2>
				<p className="mb-8 text-lg text-white/70 leading-relaxed">
					Nos últimos 24 meses, entregamos 63 projetos entre moda, beleza e serviços premium. Em 82%
					dos casos, o cliente voltou para uma segunda campanha em menos de 6 meses.
				</p>
				<p className="text-base text-white/50">
					Contrato objetivo, cronograma fechado e atendimento no WhatsApp com retorno em até 1 dia
					útil.
				</p>
			</div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="relative z-10 overflow-hidden bg-(--foto-accent) pt-20 pb-10 text-(--foto-text)">
			<div className="pointer-events-none absolute top-[-20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#a18cd1] opacity-20 blur-[100px] mix-blend-multiply" />

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mb-20 flex flex-col items-start justify-between gap-16 md:flex-row">
					<div className="max-w-sm">
						<div className="mb-6 flex items-center gap-2">
							<FourPointStar className="h-8 w-8 text-(--foto-text)" />
							<div className="font-serif font-bold text-3xl tracking-widest uppercase">Arctos</div>
						</div>
						<p className="mb-6 text-(--foto-text-muted) text-sm leading-relaxed">
							A ARCTOS integra direção criativa, fotografia e pós-produção em uma operação enxuta.
							Projetos a partir de R$ 4.900 com proposta detalhada em até 24h.
						</p>
						<div className="flex flex-col gap-3 text-(--foto-text-muted) text-sm">
							<a
								href="mailto:contato@arctos.com.br"
								className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-(--foto-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
							>
								<Mail className="h-4 w-4" /> contato@arctos.com.br
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-(--foto-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
							>
								<Instagram className="h-4 w-4" /> @arctos.studio
							</a>
							<div className="inline-flex items-center gap-2">
								<MapPin className="h-4 w-4" /> São Paulo, SP
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 text-sm font-medium md:items-end">
						<NavLink href="#">Home</NavLink>
						<NavLink href="#servicos">Serviços</NavLink>
						<NavLink href="#portfolio">Projetos</NavLink>
						<NavLink href="#sobre">Estúdio</NavLink>
					</div>
				</div>

				<div className="border-black/10 border-t pt-6 text-(--foto-text-light) text-xs">
					© ARCTOS Group, LLC | ARCTOS é uma marca gerida pela ARCTOS LLC, 2026
				</div>
			</div>
		</footer>
	)
}

function ServiceBlock({ title, description, drawing, reverse }: ServiceBlockProps) {
	return (
		<div
			className={`flex flex-col items-center gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
		>
			<div className="flex-1">
				<h3 className="mb-6 font-serif text-(--foto-text) text-5xl md:text-6xl">{title}</h3>
				<p className="mb-8 text-(--foto-text-muted) text-lg leading-relaxed">{description}</p>
				<a
					href="#portfolio"
					className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium tracking-wide text-(--foto-text) transition-colors duration-200 hover:text-(--foto-text-muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
				>
					Ver entregáveis <ArrowRight className="h-3.5 w-3.5" />
				</a>
			</div>
			<div className="w-full md:flex-1">{drawing}</div>
		</div>
	)
}

function FilterButton({ children, active = false }: FilterButtonProps) {
	if (active) {
		return (
			<motion.button
				type="button"
				whileTap={{ scale: 0.97 }}
				className="cursor-pointer rounded-full bg-(--foto-text) px-8 py-2.5 text-sm text-white font-medium tracking-wide transition-colors duration-200 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
			>
				{children}
			</motion.button>
		)
	}

	return (
		<motion.button
			type="button"
			whileTap={{ scale: 0.97 }}
			className="cursor-pointer rounded-full border border-black/20 px-8 py-2.5 text-(--foto-text) text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
		>
			{children}
		</motion.button>
	)
}

function NavLink({ href, children }: NavLinkProps) {
	return (
		<a
			href={href}
			className="cursor-pointer transition-colors duration-200 hover:text-(--foto-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text)"
		>
			{children}
		</a>
	)
}

function ActionButton({ children, className, dark = false }: ActionButtonProps) {
	if (dark) {
		return (
			<motion.button
				type="button"
				whileTap={{ scale: 0.97 }}
				className={`flex cursor-pointer items-center gap-3 rounded-full bg-(--foto-text) text-white font-medium transition-colors duration-300 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text) ${className}`}
			>
				{children}
			</motion.button>
		)
	}

	return (
		<motion.button
			type="button"
			whileTap={{ scale: 0.97 }}
			className={`flex cursor-pointer items-center gap-3 rounded-full bg-white text-(--foto-text) font-medium transition-colors duration-300 hover:bg-[#efefef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foto-text) ${className}`}
		>
			{children}
		</motion.button>
	)
}

function FourPointStar({ className }: FourPointStarProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M12 0C12 0 12 10 24 12C24 12 14 12 12 24C12 24 12 14 0 12C0 12 10 12 12 0Z" />
		</svg>
	)
}

interface FourPointStarProps {
	className?: string
}

interface FilterButtonProps {
	children: React.ReactNode
	active?: boolean
}

interface NavLinkProps {
	href: string
	children: React.ReactNode
}

interface ActionButtonProps {
	children: React.ReactNode
	className?: string
	dark?: boolean
}

interface ProcessStep {
	icon: string
	title: string
	desc: string
}

interface ServiceBlockProps {
	title: string
	description: string
	drawing: React.ReactNode
	reverse: boolean
}

interface PortfolioImage {
	src: string
	aspect: string
	col: string
	alt: string
}
