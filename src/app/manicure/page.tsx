"use client"

import {
	ArrowRight,
	BadgeCheck,
	Calendar,
	Diamond,
	Gem,
	Mail,
	MapPin,
	Menu,
	MessageCircle,
	Phone,
} from "lucide-react"
import { motion } from "motion/react"

const heroImageUrl = "/showcases/manicure/unhas-nude.webp"
const heroVideoUrl = "/showcases/manicure/destaque.mp4"

const serviceImages = {
	gel: "/showcases/manicure/pincel-gel.webp",
	minimalist: "/showcases/manicure/unhas-naturais.webp",
	natural: "/showcases/manicure/unhas-perolas.webp",
} as const

const galleryImages = {
	transform1: "/showcases/manicure/unhas-vinho.webp",
	transform2: "/showcases/manicure/unhas-nude.webp",
} as const

const navLinkClass =
	"cursor-pointer text-xs font-medium uppercase tracking-widest transition-colors hover:text-mani-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2 focus-visible:ring-offset-mani-bg"

function Header() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between border-b border-mani-border bg-mani-bg/95 px-6 py-4 backdrop-blur-sm lg:px-10">
			<div className="flex items-center gap-3">
				<Gem className="h-5 w-5 text-mani-primary" />
				<h2 className="font-display text-lg font-bold uppercase tracking-tight">MAISON UNHAS</h2>
			</div>
			<nav className="hidden flex-1 justify-center gap-12 md:flex">
				<a href="#services" className={navLinkClass}>
					Serviços
				</a>
				<a href="#manifesto" className={navLinkClass}>
					Resultados
				</a>
				<a href="#contact" className={navLinkClass}>
					Contato
				</a>
			</nav>
			<div className="flex items-center gap-4">
				<button
					type="button"
					className="hidden cursor-pointer items-center gap-2 border border-mani-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-mani-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2 sm:flex"
				>
					Agendar Avaliação
				</button>
				<button type="button" className="cursor-pointer md:hidden">
					<Menu className="h-6 w-6" />
				</button>
			</div>
		</header>
	)
}

function Hero() {
	return (
		<section className="grid grid-cols-1 border-b border-mani-border lg:min-h-[85vh] lg:grid-cols-12">
			<div className="col-span-1 flex flex-col justify-between border-b border-mani-border bg-mani-bg p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-16">
				<div className="flex flex-col gap-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-mani-text-muted"
					>
						<span className="h-2 w-2 bg-mani-secondary" />
						Atendimento com horário marcado
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
						className="break-words font-display text-6xl font-medium uppercase leading-[0.8] tracking-tight text-mani-primary sm:text-7xl md:text-8xl lg:text-9xl"
					>
						BELEZA
						<br />
						<span className="text-gray-400">PRECISA</span>
					</motion.h1>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-16 flex flex-col gap-8 lg:mt-0"
				>
					<p className="max-w-md text-sm font-light leading-relaxed text-mani-text-muted sm:text-base">
						Alongamento, esmaltação em gel e spa das mãos com biossegurança rigorosa. Sessões de 60
						a 120 minutos, com retorno técnico em até 7 dias para ajustes.
					</p>
					<div className="flex flex-wrap gap-4">
						<button
							type="button"
							className="flex w-full cursor-pointer items-center justify-center gap-2 bg-mani-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2 sm:w-auto"
						>
							Ver Agenda da Semana
							<ArrowRight className="h-4 w-4" />
						</button>
					</div>
				</motion.div>
			</div>
			<div className="group relative col-span-1 aspect-square overflow-hidden bg-mani-oat sm:aspect-video lg:col-span-5 lg:aspect-auto lg:h-auto">
				<motion.div
					initial={{ scale: 1.1, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute inset-0"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={heroImageUrl}
						alt="Mão elegante com manicure minimalista"
						className="h-full w-full object-cover grayscale-[20%] contrast-110 transition-transform duration-700 group-hover:scale-105"
					/>
				</motion.div>
				<motion.video
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
					src={heroVideoUrl}
					autoPlay
					muted
					loop
					playsInline
					className="absolute right-4 bottom-20 z-10 hidden h-[200px] w-[160px] rounded-sm border border-white/20 object-cover shadow-2xl md:block md:h-[280px] md:w-[220px]"
				/>
				<div className="absolute bottom-0 left-0 border-t border-r border-mani-border bg-white/90 p-6 backdrop-blur">
					<p className="font-mono text-xs uppercase tracking-widest">Desde 2024</p>
					<p className="font-mono text-xs uppercase tracking-widest text-mani-text-muted">
						Pinheiros, São Paulo
					</p>
				</div>
			</div>
		</section>
	)
}

function Ticker() {
	return (
		<section className="overflow-hidden border-b border-mani-border bg-mani-oat py-6">
			<div className="flex items-center justify-around text-xs font-bold uppercase tracking-widest text-gray-800 sm:text-sm">
				<div className="flex items-center gap-2">
					<BadgeCheck className="h-5 w-5 text-mani-text-muted" />
					<span className="font-display">Autoclave</span>
				</div>
				<div className="hidden items-center gap-2 sm:flex">
					<span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
					<span className="font-display">Retorno 7 dias</span>
				</div>
				<div className="flex items-center gap-2">
					<Gem className="h-5 w-5 text-mani-text-muted" />
					<span className="font-display">Gel premium</span>
				</div>
				<div className="hidden items-center gap-2 sm:flex">
					<span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
					<span className="font-display">Até 21 dias</span>
				</div>
			</div>
		</section>
	)
}

function Services() {
	const cards = [
		{
			title: "Alongamento em Gel",
			desc: "Extensão com fibra e gel construtor, curvatura personalizada e checklist técnico. Duração média de 18 a 21 dias.",
			image: serviceImages.gel,
			bg: "bg-mani-secondary",
			grayscale: true,
		},
		{
			title: "Esmaltação em Gel",
			desc: "Preparação da lâmina + blindagem e acabamento uniforme. Tempo médio de 70 minutos, com remoção segura.",
			image: serviceImages.minimalist,
			bg: "bg-mani-oat",
			grayscale: false,
		},
		{
			title: "Spa das Mãos",
			desc: "Cutilagem técnica sem excesso, esfoliação e máscara nutritiva. Indicado para unhas sensíveis e fragilizadas.",
			image: serviceImages.natural,
			bg: "bg-mani-oat/60",
			grayscale: true,
		},
	] as const

	return (
		<section id="services">
			<div className="grid auto-rows-[280px] grid-cols-1 sm:grid-cols-2 sm:auto-rows-[320px] lg:auto-rows-[400px] lg:grid-cols-3">
				{/* Intro card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="relative col-span-1 flex flex-col justify-between border-b border-mani-border bg-white p-8 sm:col-span-2 sm:border-r lg:col-span-1 lg:p-12"
				>
					<div>
						<span className="pointer-events-none absolute top-4 right-4 font-display text-6xl font-bold leading-none text-gray-200 lg:text-8xl">
							01
						</span>
						<h2 className="mb-4 font-display text-4xl font-medium uppercase tracking-tight">
							Serviços
						</h2>
						<p className="text-sm leading-relaxed text-mani-text-muted">
							Pacotes com valores transparentes: esmaltação a partir de R$ 89, alongamento a partir
							de R$ 240 e manutenção programada a cada 15 a 21 dias.
						</p>
					</div>
					<a
						href="#"
						className="mt-8 inline-flex w-fit items-center gap-2 border-b border-mani-primary pb-1 text-xs font-bold uppercase tracking-widest text-mani-primary transition-transform hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2"
					>
						Explorar Menu
					</a>
				</motion.div>

				{/* Service cards */}
				{cards.map((card, i) => (
					<motion.div
						key={card.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
						className={`group relative overflow-hidden border-b border-mani-border ${card.bg} ${i < 2 ? "border-r" : ""}`}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={card.image}
							alt={card.title}
							loading="lazy"
							className={`absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 ${card.grayscale ? "grayscale" : ""}`}
						/>
						<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-8">
							<h3 className="mb-2 font-display text-2xl font-medium uppercase text-white">
								{card.title}
							</h3>
							<p className="translate-y-4 text-sm font-light text-gray-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
								{card.desc}
							</p>
						</div>
					</motion.div>
				))}

				{/* Diamond process */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="relative col-span-1 flex flex-col items-center justify-center overflow-hidden border-b border-mani-border bg-mani-oat p-8 text-center sm:col-span-2 lg:col-span-2"
				>
					<Diamond className="absolute -right-10 -bottom-10 h-72 w-72 rotate-12 text-mani-primary opacity-5" />
					<h3 className="relative z-10 mb-4 font-display text-4xl font-medium uppercase text-mani-primary sm:text-6xl">
						Nosso Método
					</h3>
					<p className="relative z-10 max-w-md text-xs font-bold uppercase tracking-[0.2em] text-mani-text-muted">
						Anamnese &bull; Preparo Seguro &bull; Execução Técnica &bull; Orientação Pós
					</p>
				</motion.div>
			</div>
		</section>
	)
}

function Manifesto() {
	return (
		<section id="manifesto" className="grid grid-cols-1 border-b border-mani-border lg:grid-cols-2">
			<div className="flex flex-col justify-center border-b border-mani-border bg-mani-bg p-8 lg:border-b-0 lg:border-r lg:p-16">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
						O que nossas clientes dizem
					</span>
					<h2 className="mb-8 font-display text-5xl font-medium uppercase leading-[0.9] text-mani-primary lg:text-7xl">
						Resultado
						<br />
						<span className="text-gray-400">Comprovado</span>
					</h2>
				</motion.div>
				<div className="space-y-10">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="border-l border-mani-primary pl-6"
					>
						<p className="mb-4 text-lg font-light italic text-gray-700">
							&ldquo;Fiz alongamento almond para um evento e voltei só depois de 20 dias para
							manutenção. Não descolou nenhuma ponta.&rdquo;
						</p>
						<p className="text-xs font-bold uppercase tracking-widest text-gray-400">
							— Isabella R., Cliente desde março/2025
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="cursor-pointer border-l border-gray-300 pl-6 opacity-60 transition-opacity hover:opacity-100"
					>
						<p className="mb-4 text-lg font-light italic text-gray-700">
							&ldquo;Tenho alergia a produtos fortes e foi o primeiro estúdio que me explicou cada
							etapa antes de começar. Atendimento impecável.&rdquo;
						</p>
						<p className="text-xs font-bold uppercase tracking-widest text-gray-400">
							— Bruna M., Cliente de esmaltação em gel
						</p>
					</motion.div>
				</div>
			</div>

			<div className="grid grid-cols-1 bg-mani-secondary sm:grid-cols-2">
				<div className="group relative h-64 overflow-hidden border-b border-mani-border sm:h-80 sm:border-b-0 sm:border-r lg:h-auto">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={galleryImages.transform1}
						alt="Transformação 01"
						className="absolute inset-0 h-full w-full object-cover contrast-125 grayscale transition-all duration-500 group-hover:grayscale-0"
					/>
					<div className="absolute top-4 left-4 bg-mani-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
						Transformação 01
					</div>
				</div>
				<div className="group relative h-64 overflow-hidden sm:h-80 lg:h-auto">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={galleryImages.transform2}
						alt="Transformação 02"
						className="absolute inset-0 h-full w-full object-cover contrast-125 grayscale transition-all duration-500 group-hover:grayscale-0"
					/>
					<div className="absolute top-4 left-4 bg-mani-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
						Transformação 02
					</div>
				</div>
			</div>
		</section>
	)
}

function Contact() {
	return (
		<section
			id="contact"
			className="relative overflow-hidden border-b border-mani-border bg-mani-primary py-20 text-mani-bg lg:py-32"
		>
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
					backgroundSize: "20px 20px",
				}}
			/>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
				className="relative z-10 flex flex-col items-center px-4 text-center"
			>
				<Calendar className="mb-6 h-16 w-16 text-gray-300" strokeWidth={1} />
				<h2 className="mb-8 font-display text-5xl font-medium uppercase tracking-tighter md:text-7xl lg:text-9xl">
					Agenda
					<br />
					<span className="text-gray-400">Exclusiva</span>
				</h2>
				<p className="mb-12 max-w-2xl text-base font-light text-gray-300 md:text-xl">
					Agenda enxuta para manter pontualidade real. Confirmação em até 30 minutos no WhatsApp
					durante horário comercial e política clara de remarcação.
				</p>
				<button
					type="button"
					className="flex cursor-pointer items-center gap-3 border border-transparent bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-mani-primary shadow-xl transition-all hover:border-white hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mani-primary"
				>
					<MessageCircle className="h-5 w-5" />
					Solicitar via WhatsApp
				</button>
				<p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-gray-400">
					Vagas desta semana: 6 horários
				</p>
			</motion.div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="border-t border-mani-border bg-mani-bg px-8 pt-16 pb-8">
			<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
				<div className="col-span-1 pr-10 md:col-span-2">
					<h3 className="mb-6 font-display text-3xl font-medium uppercase text-mani-primary">
						Maison Unhas
					</h3>
					<p className="mb-8 max-w-sm text-sm leading-relaxed text-mani-text-muted">
						Especialistas em manicure de alta durabilidade para rotina corrida. Mais de 1.800
						atendimentos com protocolo de biossegurança documentado.
					</p>
					<div className="flex gap-4">
						<a
							href="#"
							className="group flex h-12 w-12 cursor-pointer items-center justify-center border border-mani-border transition-colors hover:border-mani-primary hover:bg-mani-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2"
						>
							<span className="text-xs font-bold transition-transform group-hover:scale-110">
								IG
							</span>
						</a>
						<a
							href="#"
							className="group flex h-12 w-12 cursor-pointer items-center justify-center border border-mani-border transition-colors hover:border-mani-primary hover:bg-mani-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary focus-visible:ring-offset-2"
						>
							<span className="text-xs font-bold transition-transform group-hover:scale-110">
								TT
							</span>
						</a>
					</div>
				</div>
				<div>
					<h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-mani-primary">
						Menu
					</h4>
					<ul className="space-y-4 text-sm font-medium text-mani-text-muted">
						<li>
							<a
								href="#"
								className="cursor-pointer text-xs uppercase tracking-wide transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
							>
								Serviços
							</a>
						</li>
						<li>
							<a
								href="#"
								className="cursor-pointer text-xs uppercase tracking-wide transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
							>
								Galeria
							</a>
						</li>
						<li>
							<a
								href="#"
								className="cursor-pointer text-xs uppercase tracking-wide transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
							>
								Sobre Nós
							</a>
						</li>
						<li>
							<a
								href="#"
								className="cursor-pointer text-xs uppercase tracking-wide transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
							>
								Contato
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-mani-primary">
						Contato
					</h4>
					<ul className="space-y-4 text-sm font-medium text-mani-text-muted">
						<li className="flex items-center gap-3">
							<MapPin className="h-4 w-4" />
							Rua Oscar Freire, 1120 - Pinheiros
						</li>
						<li className="flex items-center gap-3">
							<Mail className="h-4 w-4" />
							ola@maisonunhas.com.br
						</li>
						<li className="flex items-center gap-3">
							<Phone className="h-4 w-4" />
							+55 11 99999-9999
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-mani-border pt-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 md:flex-row">
				<p>&copy; 2024 Maison Unhas. Todos os direitos reservados.</p>
				<div className="flex gap-8">
					<a
						href="#"
						className="cursor-pointer transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
					>
						Política de Privacidade
					</a>
					<a
						href="#"
						className="cursor-pointer transition-colors hover:text-mani-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mani-primary"
					>
						Termos de Uso
					</a>
				</div>
			</div>
		</footer>
	)
}

export default function ManicurePremiumPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
			{/* Grid overlay */}
			<div
				className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<Header />

			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col border-x border-mani-border bg-mani-bg"
			>
				<Hero />
				<Ticker />
				<Services />
				<Manifesto />
				<Contact />
				<Footer />
			</motion.main>
		</div>
	)
}
