"use client"

import { ArrowRight, Instagram, Mail, MapPin } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

export default function FotografoPremiumPage() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-[#f8f8f8] font-sans text-[#111] selection:bg-black selection:text-white">
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
		<nav className="fixed top-0 left-0 right-0 z-50 border-black/5 border-b bg-[#f8f8f8]/80 px-6 py-6 backdrop-blur-md">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between">
				<div className="flex items-center gap-2">
					<FourPointStar className="h-6 w-6 text-[#111]" />
					<div className="font-serif font-bold text-[#111] text-2xl tracking-widest uppercase">
						Arctos
					</div>
				</div>

				<div className="hidden items-center gap-8 text-[#444] text-sm font-medium tracking-wide md:flex">
					<NavLink href="#servicos">Serviços</NavLink>
					<NavLink href="#portfolio">Projetos</NavLink>
					<NavLink href="#metodo">Método</NavLink>
					<NavLink href="#sobre">Sobre Nós</NavLink>
				</div>

				<ActionButton className="px-6 py-2.5 text-xs" dark>
					Iniciar Projeto
				</ActionButton>
			</div>
		</nav>
	)
}

function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#111] px-6 pt-32 pb-20">
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
						className="mb-8 font-serif text-[#111] text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[110px]"
					>
						Uma produtora <br />
						<span className="border-white/20 border-b pb-2 italic text-white/90">visual</span> para{" "}
						<br />
						<span className="text-white/90">marcas e editoriais</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="mb-10 max-w-md text-white/70 text-lg font-light leading-relaxed md:text-xl"
					>
						Nao somos apenas um estudio de fotografia. Criamos narrativas visuais de alto impacto,
						do editorial autoral ao posicionamento completo de marca.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
					>
						<ActionButton className="px-8 py-4 text-sm" dark={false}>
							<span className="uppercase tracking-widest text-black">Iniciar Projeto</span>
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
	const brands = [
		"VOGUE",
		"ELLE",
		"GQ",
		"HARPER'S BAZAAR",
		"VANITY FAIR",
		"L'OFFICIEL",
		"MARIE CLAIRE",
	]
	const scrollBrands = [...brands, ...brands]

	return (
		<section className="relative z-10 flex flex-col items-center overflow-hidden border-black/10 border-b bg-[#f8f8f8] py-16">
			<div className="mx-auto mb-12 flex w-full max-w-7xl items-center gap-4 px-6">
				<div className="h-px flex-1 bg-black/20" />
				<FourPointStar className="h-4 w-4 text-[#111]" />
				<h2 className="font-serif text-[#111] text-3xl italic md:text-4xl">Confiam em nós</h2>
				<FourPointStar className="h-4 w-4 text-[#111]" />
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
							<span className="whitespace-nowrap font-serif font-bold text-[#111] text-2xl tracking-widest uppercase md:text-3xl">
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
			icon: "B",
			title: "Preco Transparente",
			desc: "Chega de pacotes confusos. Nossos orcamentos sao diretos e objetivos.",
		},
		{
			icon: "E",
			title: "Direcao Visual Autoral",
			desc: "Sem template pronto. Sua marca recebe conceito, estilo e narrativa proprios.",
		},
		{
			icon: "W",
			title: "Entrega Rapida",
			desc: "Nada de meses esperando. Planejamento enxuto e producao com ritmo real.",
		},
		{
			icon: "R",
			title: "Comunicacao Clara",
			desc: "Voce acompanha cada etapa com previsibilidade e respostas no tempo certo.",
		},
		{
			icon: "T",
			title: "Operacao Sob Medida",
			desc: "Cada projeto e moldado para sua necessidade, sem etapas desnecessarias.",
		},
		{
			icon: "Y",
			title: "Arquivos no Seu Controle",
			desc: "Finalizou? O material e seu. Sem bloqueio contratual ou dependencia tecnica.",
		},
	]

	return (
		<section id="metodo" className="relative z-10 overflow-hidden bg-[#0b0b1a] py-32 text-white">
			<div className="pointer-events-none absolute top-1/2 left-1/2 h-[40vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4facfe] opacity-20 blur-[120px] mix-blend-screen" />
			<div className="pointer-events-none absolute top-0 right-0 h-[40vw] w-[40vw] rounded-full bg-[#a18cd1] opacity-20 blur-[120px] mix-blend-screen" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
				<FourPointStar className="mx-auto mb-6 h-8 w-8 text-white/50" />
				<h2 className="mb-24 font-serif text-5xl md:text-7xl">
					Problemas?
					<br />
					<span className="text-white/80 italic">Nunca Ouvimos Falar</span>
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
		<section id="servicos" className="relative z-10 overflow-hidden bg-[#f8f8f8] py-32">
			<div className="pointer-events-none absolute top-[10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-[#fbc2eb] opacity-40 blur-[100px] mix-blend-multiply" />
			<div className="pointer-events-none absolute bottom-[20%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#f6d365] opacity-30 blur-[100px] mix-blend-multiply" />

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-40 px-6">
				<ServiceBlock
					title="Retrato e Editorial"
					description="Capturamos essencia e personalidade com linguagem cinematografica e direcao de luz precisa. Projetos criados para elevar percepcao de valor e engajamento real."
					reverse={false}
					drawing={
						<div className="relative h-[120%] w-full overflow-hidden rounded-2xl">
							<Image
								src="/showcases/fotografo/retrato-dramatico.webp"
								alt="Retrato"
								fill
								className="object-cover"
							/>
						</div>
					}
				/>
				<ServiceBlock
					title="Casamentos"
					description="Cobertura artistica do seu grande dia com foco em emocao genuina e narrativa documental. Cada galeria e pensada para durar gerações."
					reverse
					drawing={
						<div className="relative h-[120%] w-full overflow-hidden rounded-2xl">
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
					description="Posicione sua empresa com imagens que comunicam autoridade, clareza e consistencia visual. Planejamento de conteudo para campanhas completas."
					reverse={false}
					drawing={
						<div className="relative h-[120%] w-full overflow-hidden rounded-2xl">
							<Image
								src="/showcases/fotografo/diretora-estudio.webp"
								alt="Corporativo"
								fill
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
		<section id="portfolio" className="relative z-10 bg-[#f8f8f8] py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-12 flex w-full items-center gap-4">
					<div className="h-px flex-1 bg-black/20" />
					<h2 className="font-serif text-[#111] text-5xl italic md:text-6xl">Showcase</h2>
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
					<h2 className="mb-8 font-serif text-[#111] text-4xl italic md:text-5xl">
						Pronto para o seu projeto?
					</h2>
					<ActionButton className="mx-auto px-10 py-4 text-sm" dark>
						Iniciar Projeto
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
			className="relative z-10 overflow-hidden bg-[#0b0b1a] py-32 text-center text-white"
		>
			<div className="pointer-events-none absolute top-1/2 left-1/2 h-[30vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a18cd1] opacity-30 blur-[120px] mix-blend-screen" />

			<div className="relative z-10 mx-auto max-w-3xl px-6">
				<FourPointStar className="mx-auto mb-6 h-8 w-8 text-white/50" />
				<h2 className="mb-8 font-serif text-5xl md:text-6xl">Por que nós</h2>
				<p className="mb-8 text-lg text-white/70 leading-relaxed">
					Existem muitos estudios de fotografia. Poucos integram estrategia, direcao criativa,
					captacao e entrega com o mesmo nivel de consistencia. Nosso foco e transformar imagem em
					resultado de negocio para sua marca.
				</p>
				<p className="text-base text-white/50">
					Taxa de entrega acima de 99% e relacionamento de longo prazo com clientes recorrentes.
				</p>
			</div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="relative z-10 overflow-hidden bg-[#eef27a] pt-20 pb-10 text-[#111]">
			<div className="pointer-events-none absolute top-[-20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#a18cd1] opacity-20 blur-[100px] mix-blend-multiply" />

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mb-20 flex flex-col items-start justify-between gap-16 md:flex-row">
					<div className="max-w-sm">
						<div className="mb-6 flex items-center gap-2">
							<FourPointStar className="h-8 w-8 text-[#111]" />
							<div className="font-serif font-bold text-3xl tracking-widest uppercase">Arctos</div>
						</div>
						<p className="mb-6 text-[#444] text-sm leading-relaxed">
							A ARCTOS une fotografia, branding e direcao de campanha em um unico fluxo. Mais
							consistencia visual, mais autoridade e mais retorno para sua marca.
						</p>
						<div className="flex flex-col gap-3 text-[#444] text-sm">
							<a
								href="mailto:contato@arctos.com.br"
								className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
							>
								<Mail className="h-4 w-4" /> contato@arctos.com.br
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
							>
								<Instagram className="h-4 w-4" /> @arctos.studio
							</a>
							<div className="inline-flex items-center gap-2">
								<MapPin className="h-4 w-4" /> Sao Paulo, SP
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 text-sm font-medium md:items-end">
						<NavLink href="#">Home</NavLink>
						<NavLink href="#servicos">Serviços</NavLink>
						<NavLink href="#portfolio">Projetos</NavLink>
						<NavLink href="#sobre">Sobre Nós</NavLink>
					</div>
				</div>

				<div className="border-black/10 border-t pt-6 text-[#666] text-xs">
					© ARCTOS Group, LLC | ARCTOS e uma marca gerida pela ARCTOS LLC, 2026
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
				<h3 className="mb-6 font-serif text-[#111] text-5xl md:text-6xl">{title}</h3>
				<p className="mb-8 text-[#444] text-lg leading-relaxed">{description}</p>
				<ActionButton className="px-8 py-3.5 text-xs" dark>
					Iniciar Projeto
				</ActionButton>
			</div>
			<div className="relative flex h-64 w-full flex-1 items-center justify-center">{drawing}</div>
		</div>
	)
}

function FilterButton({ children, active = false }: FilterButtonProps) {
	if (active) {
		return (
			<button
				type="button"
				className="cursor-pointer rounded-full bg-[#111] px-8 py-2.5 text-sm text-white font-medium tracking-wide transition-colors duration-200 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
			>
				{children}
			</button>
		)
	}

	return (
		<button
			type="button"
			className="cursor-pointer rounded-full border border-black/20 px-8 py-2.5 text-[#111] text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
		>
			{children}
		</button>
	)
}

function NavLink({ href, children }: NavLinkProps) {
	return (
		<a
			href={href}
			className="cursor-pointer transition-colors duration-200 hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
		>
			{children}
		</a>
	)
}

function ActionButton({ children, className, dark = false }: ActionButtonProps) {
	if (dark) {
		return (
			<button
				type="button"
				className={`flex cursor-pointer items-center gap-3 rounded-full bg-[#111] text-white font-medium transition-colors duration-300 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] ${className}`}
			>
				{children}
			</button>
		)
	}

	return (
		<button
			type="button"
			className={`flex cursor-pointer items-center gap-3 rounded-full bg-white text-[#111] font-medium transition-colors duration-300 hover:bg-[#efefef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] ${className}`}
		>
			{children}
		</button>
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
