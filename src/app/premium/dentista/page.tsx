"use client"

import {
	ChevronLeft,
	ChevronRight,
	Clock,
	FileText,
	Instagram,
	Menu,
	Microscope,
	Shield,
	Sparkles,
	User,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useCallback, useState } from "react"

const navLinkClass =
	"cursor-pointer transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light rounded-sm"

const iconButtonClass =
	"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-dark text-brand-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light active:scale-95"

const primaryButtonClass =
	"cursor-pointer rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light active:scale-95 active:translate-y-0"

const footerLinkClass =
	"cursor-pointer transition-colors hover:text-brand-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"

const heroImageUrl = "/showcases/dentista/consultorio-premium.webp"
const estheticImageUrl = "/showcases/dentista/textura-agua.webp"
const treatmentsImageUrl = "/showcases/dentista/alinhador-transparente.webp"
const digitalImageUrl = "/showcases/dentista/scanner-digital.webp"

const STATEMENT_ITEMS = [
	{
		title: "Plano Fechado na 1ª Consulta",
		desc: "Você sai com diagnóstico, etapas do tratamento, investimento e cronograma por fase.",
	},
	{
		title: "Prazos Reais",
		desc: "Procedimentos estéticos simples podem começar em até 7 dias após a avaliação.",
	},
	{
		title: "Entregáveis Concretos",
		desc: "Documentação fotográfica, escaneamento 3D e simulação do sorriso antes de iniciar.",
	},
	{
		title: "Acompanhamento Contínuo",
		desc: "Retornos programados e orientações pós-procedimento com canal direto da equipe.",
	},
] as const

const POPULAR_TREATMENTS = [
	{
		id: 1,
		title: "Lentes de Contato Dental",
		cat: "Estética",
		image: "/showcases/dentista/lentes-de-contato.webp",
	},
	{
		id: 2,
		title: "Implante Unitário",
		cat: "Reabilitação",
		image: "/showcases/dentista/implantes.webp",
	},
	{ id: 3, title: "Alinhadores Transparentes", cat: "Ortodontia", image: treatmentsImageUrl },
	{
		id: 4,
		title: "Clareamento em Consultório",
		cat: "Estética",
		image: "/showcases/dentista/clareamento.webp",
	},
] as const

const EXPERIENCE_ITEMS = [
	{
		icon: Shield,
		title: "Garantia de Qualidade",
		desc: "Corpo clínico com inscrição ativa no CRO, protocolos de biossegurança e documentação completa de cada etapa.",
	},
	{
		icon: User,
		title: "Atendimento Exclusivo",
		desc: "Agenda estendida, confirmação por WhatsApp e tempo de consulta planejado para explicar opções sem pressa.",
	},
	{
		icon: Microscope,
		title: "Tecnologia de Ponta",
		desc: "Scanner 3D, fotografia clínica e planejamento digital para decisões com previsibilidade clínica e estética.",
	},
	{
		icon: Clock,
		title: "Cuidado Digital",
		desc: "Você recebe orçamento em PDF, cronograma por fase e orientações pré e pós-procedimento no mesmo dia.",
	},
	{
		icon: Sparkles,
		title: "Serviços Adicionais",
		desc: "Inclua manutenção, placas, profilaxia e ajustes estéticos de forma transparente, sem itens surpresa.",
	},
	{
		icon: FileText,
		title: "Especialista Pessoal",
		desc: "Um dentista responsável acompanha seu caso do início ao fim, com revisões programadas após cada fase.",
	},
] as const

const GALLERY_IMAGES = [
	{ src: "/showcases/dentista/recepcao-clinica.webp", alt: "Recepção da clínica Lumière" },
	{ src: "/showcases/dentista/consultorio-premium.webp", alt: "Consultório premium" },
	{ src: "/showcases/dentista/consultorio-moderno.webp", alt: "Consultório moderno" },
	{ src: "/showcases/dentista/consultorio-classico.webp", alt: "Consultório clássico" },
	{ src: "/showcases/dentista/scanner-digital.webp", alt: "Scanner digital 3D" },
	{ src: "/showcases/dentista/sorriso-perfeito.webp", alt: "Resultado de tratamento estético" },
] as const

function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col px-6 pt-6 pb-6 overflow-hidden">
			<div className="relative z-10 flex items-start justify-between">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="text-[clamp(80px,15vw,200px)] leading-[0.8] font-black tracking-tighter text-brand-dark"
				>
					Lumière<sup className="text-[clamp(20px,4vw,60px)] font-bold">®</sup>
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="mt-4 flex items-start gap-8"
				>
					<div className="hidden items-center gap-6 text-sm font-medium md:flex">
						<a href="#" className={navLinkClass}>
							Tratamentos
						</a>
						<a href="#" className={navLinkClass}>
							Sobre nós
						</a>
						<a href="#" className={navLinkClass}>
							Contato
						</a>
					</div>
					<div className="flex items-center gap-2">
						<button type="button" className={iconButtonClass}>
							<User size={16} />
						</button>
						<button type="button" className={iconButtonClass}>
							<Menu size={16} />
						</button>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
				className="absolute top-0 right-6 z-10 mt-32 hidden text-right lg:block"
			>
				<h2 className="text-4xl leading-none font-bold tracking-tight text-brand-dark">
					Odontologia
					<br />
					de Alto Padrão
				</h2>
			</motion.div>

			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="relative mt-8 flex-grow overflow-hidden rounded-2xl bg-brand-white"
			>
				<motion.div
					animate={{ scale: 1.1 }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "reverse",
						ease: "linear",
					}}
					className="absolute inset-0"
				>
					<Image
						src={heroImageUrl}
						alt="Clínica Lumière"
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</motion.div>
				<div className="absolute inset-0 bg-gradient-to-b from-brand-light/40 to-transparent" />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
				className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row"
			>
				<p className="text-lg font-medium text-brand-dark">
					Diagnóstico completo, plano fechado e prazos definidos desde a 1ª consulta.
				</p>
				<div className="flex gap-4">
					<button type="button" className={primaryButtonClass}>
						Agendar Consulta Inicial
					</button>
					<button type="button" className={primaryButtonClass}>
						Ver Planos de Tratamento
					</button>
				</div>
			</motion.div>
		</section>
	)
}

function Statement() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="mb-20 max-w-5xl text-[clamp(32px,5vw,64px)] leading-[1.1] font-bold tracking-tight text-brand-dark"
			>
				Tratamento premium não é promessa vaga: é planejamento clínico claro, previsibilidade de
				prazo e acompanhamento de ponta a ponta.
			</motion.h2>

			<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
				{STATEMENT_ITEMS.map((item, i) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
					>
						<div className="mb-6 h-0.5 w-full bg-brand-dark" />
						<h3 className="mb-3 text-lg font-bold text-brand-dark">{item.title}</h3>
						<p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}

function SplitServices() {
	return (
		<section className="grid h-auto w-full grid-cols-1 lg:h-[600px] lg:grid-cols-3">
			<div className="flex flex-col justify-between bg-brand-dark p-12 text-brand-white">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="mb-8 text-5xl font-bold tracking-tight">
						Serviços
						<br />
						Especializados
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<p className="mb-8 text-brand-white/80">
						Da harmonização do sorriso à reabilitação oral completa, com protocolos definidos.
					</p>
					<button
						type="button"
						className="cursor-pointer rounded-full border border-brand-white/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-brand-white hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
					>
						Conhecer Tratamentos
					</button>
				</motion.div>
			</div>
			<div className="group overflow-hidden relative h-[400px] bg-gray-200 lg:h-auto">
				<Image
					src={estheticImageUrl}
					alt="Estética"
					fill
					className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					sizes="(min-width: 1024px) 33vw, 100vw"
				/>
				<div className="absolute inset-0 bg-brand-dark/10 transition-colors duration-500 group-hover:bg-transparent" />
				<div className="absolute bottom-8 left-8 text-3xl font-bold text-brand-white">Estética</div>
			</div>
			<div className="group overflow-hidden relative h-[400px] bg-gray-200 lg:h-auto">
				<Image
					src="/showcases/dentista/reabilitacao-oral.webp"
					alt="Reabilitação"
					fill
					className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					sizes="(min-width: 1024px) 33vw, 100vw"
				/>
				<div className="absolute inset-0 bg-brand-dark/10 transition-colors duration-500 group-hover:bg-transparent" />
				<div className="absolute bottom-8 left-8 text-3xl font-bold text-brand-white">
					Reabilitação
				</div>
			</div>
		</section>
	)
}

function PopularTreatments() {
	const [activeId, setActiveId] = useState<number>(POPULAR_TREATMENTS[0].id)
	const activeItem =
		POPULAR_TREATMENTS.find((item) => item.id === activeId) || POPULAR_TREATMENTS[0]

	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
				className="mb-12 text-4xl font-bold tracking-tight text-brand-dark"
			>
				Tratamentos Populares
			</motion.h2>
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="relative h-[400px] overflow-hidden rounded-2xl bg-brand-dark/5"
				>
					<AnimatePresence mode="popLayout">
						<motion.div
							key={activeItem.id}
							initial={{ opacity: 0, scale: 1.05 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="absolute inset-0"
						>
							<Image
								src={activeItem.image}
								alt={activeItem.title}
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 50vw, 100vw"
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<div className="flex flex-col justify-center gap-8">
					{POPULAR_TREATMENTS.map((item, i) => {
						const isActive = item.id === activeId
						return (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className={`cursor-pointer border-b pb-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded-sm ${isActive ? "border-brand-dark pl-4 opacity-100" : "border-gray-300 opacity-50 hover:opacity-80"}`}
								onClick={() => setActiveId(item.id)}
								onMouseEnter={() => setActiveId(item.id)}
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault()
										setActiveId(item.id)
									}
								}}
							>
								<h3
									className={`mb-2 text-2xl font-bold transition-colors duration-300 ${isActive ? "text-brand-dark" : "text-brand-dark/70"}`}
								>
									{item.title}
								</h3>
								<p className="text-sm text-text-muted">{item.cat}</p>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

function DigitalCare() {
	return (
		<section className="bg-brand-dark px-6 py-24 text-brand-white">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="order-2 flex justify-center lg:order-1"
				>
					<Image
						src={digitalImageUrl}
						alt="Tecnologia 3D"
						width={700}
						height={900}
						className="max-h-[600px] rounded-3xl object-cover"
						sizes="(min-width: 1024px) 40vw, 90vw"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="order-1 lg:order-2"
				>
					<h2 className="mb-8 text-5xl font-bold tracking-tight">
						Planejamento Digital
						<br />
						do Sorriso
					</h2>
					<div className="pt-16 lg:pt-32">
						<p className="mb-6 leading-relaxed text-brand-white/80">
							Em todos os planos premium, você recebe escaneamento intraoral, estudo fotográfico e
							simulação 3D. Antes de qualquer intervenção, validamos forma, proporção e etapas do
							tratamento junto com você.
						</p>
						<p className="leading-relaxed text-brand-white/80">
							Seu plano é entregue por escrito, com valores por fase e previsão de sessões.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

function Experience() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
				className="mb-16 text-[clamp(60px,12vw,150px)] leading-[0.8] font-black tracking-tighter text-brand-dark"
			>
				Lumière<sup className="text-[clamp(20px,4vw,60px)] font-bold">®</sup>
				<br />
				Experience
			</motion.h2>

			<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="lg:col-span-4"
				>
					<p className="mb-6 text-lg font-medium text-brand-dark">
						Na Lumière, cada plano é estruturado para reduzir incerteza: diagnóstico completo,
						priorização clínica e execução com prazo definido.
					</p>
					<p className="mb-8 text-text-muted">
						Você aprova o projeto do sorriso antes do início e acompanha os avanços com registros
						clínicos em todas as etapas.
					</p>
					<button type="button" className={primaryButtonClass}>
						Agendar Avaliação Completa
					</button>
				</motion.div>

				<div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:col-span-8">
					{EXPERIENCE_ITEMS.map((item, i) => {
						const Icon = item.icon
						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className="group cursor-default"
							>
								<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-300 text-brand-dark transition-colors duration-300 group-hover:border-brand-dark group-hover:bg-brand-dark group-hover:text-brand-white">
									<Icon className="h-8 w-8 stroke-1 transition-transform duration-300 group-hover:scale-110" />
								</div>
								<h3 className="mb-3 text-lg font-bold text-brand-dark">{item.title}</h3>
								<p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

function Gallery() {
	const [[currentIndex, direction], setSlide] = useState([0, 0])

	const navigate = useCallback((newDirection: number) => {
		setSlide(([prev]) => {
			const next = (prev + newDirection + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
			return [next, newDirection]
		})
	}, [])

	const variants = {
		enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
	}

	return (
		<section className="mx-auto max-w-7xl px-6 pb-24">
			<div className="relative h-[600px] overflow-hidden rounded-3xl">
				<AnimatePresence initial={false} custom={direction} mode="popLayout">
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
						className="absolute inset-0"
					>
						<Image
							src={GALLERY_IMAGES[currentIndex].src}
							alt={GALLERY_IMAGES[currentIndex].alt}
							fill
							className="object-cover"
							sizes="100vw"
						/>
					</motion.div>
				</AnimatePresence>

				<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

				<div className="absolute right-8 bottom-8 flex items-center gap-3">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 text-brand-white backdrop-blur-sm transition-all duration-300 hover:bg-white/40 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent active:scale-95"
						aria-label="Foto anterior"
					>
						<ChevronLeft className="h-6 w-6" />
					</button>
					<button
						type="button"
						onClick={() => navigate(1)}
						className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 text-brand-white backdrop-blur-sm transition-all duration-300 hover:bg-white/40 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent active:scale-95"
						aria-label="Próxima foto"
					>
						<ChevronRight className="h-6 w-6" />
					</button>
					<span className="ml-2 text-3xl font-bold text-brand-white tabular-nums">
						{currentIndex + 1}/{GALLERY_IMAGES.length}
					</span>
				</div>
			</div>
		</section>
	)
}

function CTA() {
	return (
		<section className="px-6 py-32 text-center">
			<p className="mb-4 font-medium text-text-muted">
				Comece com um plano clínico claro e sem surpresa.
			</p>
			<h2 className="text-[clamp(48px,10vw,120px)] leading-[0.9] font-black tracking-tighter text-brand-dark">
				Agende uma
				<br />
				avaliação completa
			</h2>
			<button type="button" className={`${primaryButtonClass} mt-10 px-10 py-4 text-base`}>
				Agendar Minha Avaliação
			</button>
		</section>
	)
}

function Footer() {
	return (
		<footer className="bg-brand-dark px-6 pt-24 pb-12 text-brand-white">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16">
					<h2 className="text-4xl font-black tracking-tighter">
						Lumière<sup className="text-lg font-bold">®</sup>
					</h2>
				</div>

				<div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-4">
					<div>
						<h4 className="mb-6 font-bold">Siga-nos</h4>
						<div className="flex gap-4">
							<a
								href="#"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-white text-brand-dark transition-colors hover:bg-brand-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
							>
								<Instagram size={18} />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-white text-brand-dark transition-colors hover:bg-brand-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
							>
								<Instagram size={18} />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-white text-brand-dark transition-colors hover:bg-brand-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
							>
								<Instagram size={18} />
							</a>
						</div>
					</div>

					<div>
						<h4 className="mb-6 font-bold">Tratamentos</h4>
						<ul className="space-y-3 text-sm text-brand-white/60">
							<li>
								<a href="#" className={footerLinkClass}>
									Estética Dental
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Reabilitação Oral
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Ortodontia
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-6 font-bold">Clínica</h4>
						<ul className="space-y-3 text-sm text-brand-white/60">
							<li>
								<a href="#" className={footerLinkClass}>
									Sobre nós
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Especialistas
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Contato
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-6 font-bold">Minha Conta</h4>
						<ul className="space-y-3 text-sm text-brand-white/60">
							<li>
								<a href="#" className={footerLinkClass}>
									Agendar
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Resultados
								</a>
							</li>
							<li>
								<a href="#" className={footerLinkClass}>
									Portal
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-start justify-between gap-6 border-t border-brand-white/10 pt-8 text-xs text-brand-white/40 md:flex-row md:items-center">
					<div className="max-w-md">
						<p className="mb-4">© Lumière Odontologia 2026</p>
						<p>
							Lumière® é uma marca registrada. Todos os tratamentos são realizados por profissionais
							devidamente inscritos no CRO. As imagens são meramente ilustrativas e os resultados
							podem variar de paciente para paciente.
						</p>
					</div>
					<div className="flex gap-6">
						<a href="#" className={footerLinkClass}>
							Política de Cookies
						</a>
						<a href="#" className={footerLinkClass}>
							Termos e Condições
						</a>
						<a href="#" className={footerLinkClass}>
							Política de Privacidade
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default function DentistaPremiumPage() {
	return (
		<div className="font-sans bg-brand-light text-text-main">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
				<Hero />
				<Statement />
				<SplitServices />
				<PopularTreatments />
				<DigitalCare />
				<Experience />
				<Gallery />
				<CTA />
				<Footer />
			</motion.div>
		</div>
	)
}
