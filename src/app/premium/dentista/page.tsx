"use client"

import {
	ArrowRight,
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
import { useState } from "react"

const navLinkClass =
	"cursor-pointer transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light rounded-sm"

const iconButtonClass =
	"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-dark text-brand-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light active:scale-95"

const primaryButtonClass =
	"cursor-pointer rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light active:scale-95 active:translate-y-0"

const footerLinkClass =
	"cursor-pointer transition-colors hover:text-brand-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-sm"

const heroImageUrl = "/showcases/dentista/consultorio-premium.jpeg"
const estheticImageUrl = "/showcases/dentista/textura-agua.png"
const treatmentsImageUrl = "/showcases/dentista/alinhador-transparente.png"
const digitalImageUrl = "/showcases/dentista/scanner-digital.png"
const galleryImageUrl = "/showcases/dentista/recepcao-clinica.jpeg"

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
					Personalizada
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
				<p className="text-lg font-medium text-brand-dark">Mais conforto, precisão e estética!</p>
				<div className="flex gap-4">
					<button type="button" className={primaryButtonClass}>
						Agendar Avaliação
					</button>
					<button type="button" className={primaryButtonClass}>
						Ver Tratamentos
					</button>
				</div>
			</motion.div>
		</section>
	)
}

function Statement() {
	const statementItems = [
		{
			title: "Soluções Flexíveis",
			desc: "Pare de depender de tratamentos genéricos. Tenha um plano feito sob medida.",
		},
		{
			title: "Orçamentos Claros",
			desc: "Saiba exatamente o que está pagando. Sem taxas ocultas. Sem promessas irreais.",
		},
		{
			title: "Totalmente Personalizável",
			desc: "Controle todos os aspectos do seu tratamento. Adicione serviços complementares facilmente.",
		},
		{
			title: "Cuidado Pessoal",
			desc: "Receba suporte completo do nosso time de especialistas. Estamos com você em cada etapa.",
		},
	] as const

	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="mb-20 max-w-5xl text-[clamp(32px,5vw,64px)] leading-[1.1] font-bold tracking-tight text-brand-dark"
			>
				Acreditamos que em um mundo onde pacientes viraram números, uma abordagem pessoal é a chave
				para garantir que você tenha a melhor experiência odontológica.
			</motion.h2>

			<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
				{statementItems.map((item, i) => (
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
						Soluções inteligentes para todas as suas necessidades odontológicas
					</p>
					<button
						type="button"
						className="cursor-pointer rounded-full border border-brand-white/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-brand-white hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
					>
						Todos os Serviços
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
			<div className="group relative flex h-[400px] flex-col justify-end overflow-hidden bg-brand-accent p-12 text-brand-white lg:h-auto">
				<svg
					className="absolute top-12 right-12 h-32 w-32 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
					viewBox="0 0 100 100"
				>
					<title>Trajetória de tratamento</title>
					<path
						d="M10,90 Q50,10 90,90"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeDasharray="5,5"
					/>
					<circle cx="90" cy="90" r="3" fill="currentColor" />
				</svg>
				<h2 className="relative z-10 text-3xl font-bold">Reabilitação</h2>
			</div>
		</section>
	)
}

function PopularTreatments() {
	const items = [
		{
			id: 1,
			title: "Lentes de Contato",
			cat: "Estética",
			image:
				"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
		},
		{
			id: 2,
			title: "Implantes",
			cat: "Reabilitação",
			image:
				"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
		},
		{ id: 3, title: "Invisalign", cat: "Ortodontia", image: treatmentsImageUrl },
		{
			id: 4,
			title: "Clareamento",
			cat: "Estética",
			image:
				"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
		},
	] as const

	const [activeId, setActiveId] = useState<number>(items[0].id)
	const activeItem = items.find((item) => item.id === activeId) || items[0]

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
					{items.map((item, i) => {
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
						Gestão Digital
						<br />
						do Sorriso
					</h2>
					<div className="pt-16 lg:pt-32">
						<p className="mb-6 leading-relaxed text-brand-white/80">
							Todos os nossos tratamentos contam com o serviço de Planejamento Digital. Seu
							especialista dedicado garante que cada detalhe do seu novo sorriso seja desenhado e
							aprovado por você antes de qualquer intervenção.
						</p>
						<p className="leading-relaxed text-brand-white/80">
							Fale com nossa equipe em Português, Inglês ou Espanhol.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

function Experience() {
	const items = [
		{
			icon: Shield,
			title: "Garantia de Qualidade",
			desc: "Nossa clínica combina a vantagem da tecnologia com a facilidade de um atendimento humano. Tenha acesso a serviços premium sem taxas abusivas.",
		},
		{
			icon: User,
			title: "Atendimento Exclusivo",
			desc: "Pacientes podem agendar horários flexíveis, compartilhando a clínica apenas com pessoas da mesma família se desejarem. Experimente o conforto.",
		},
		{
			icon: Microscope,
			title: "Tecnologia de Ponta",
			desc: "Fazemos a nossa parte para garantir um tratamento mais previsível. Via scanners 3D, os pacientes podem visualizar todo o resultado antes de começar.",
		},
		{
			icon: Clock,
			title: "Cuidado Digital",
			desc: "Não fazemos negócios como nos anos 80. Receba orçamentos instantâneos online. Agende sua avaliação com um clique via um processo sem atritos.",
		},
		{
			icon: Sparkles,
			title: "Serviços Adicionais",
			desc: "Evite taxas ocultas e pague apenas pelo serviço que você precisa. Melhore seu tratamento com múltiplos complementos. Molde sua jornada.",
		},
		{
			icon: FileText,
			title: "Especialista Pessoal",
			desc: "Nossos especialistas podem apoiar qualquer demanda, 24/7. De pequenas correções a grandes reabilitações. Desfrute de um processo sem estresse.",
		},
	] as const

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
						Na Lumière somos ousados. A tecnologia é apenas uma ferramenta que usamos para levar
						você até onde deseja. Nossos pacientes desfrutam de muito mais valor pela sua confiança,
						acessando personalização inigualável.
					</p>
					<p className="mb-8 text-text-muted">
						Oferecemos <strong>experiências personalizadas</strong> com nossos tratamentos
						<strong> sob demanda</strong> e <strong>flexibilidade exclusiva</strong>. Nós elevamos a
						forma como você sorri.
					</p>
					<button type="button" className={primaryButtonClass}>
						Agendar Avaliação
					</button>
				</motion.div>

				<div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:col-span-8">
					{items.map((item, i) => {
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
	return (
		<section className="mx-auto max-w-7xl px-6 pb-24">
			<div className="relative h-[600px] overflow-hidden rounded-3xl">
				<Image src={galleryImageUrl} alt="Galeria" fill className="object-cover" sizes="100vw" />
				<div className="absolute right-8 bottom-8 flex items-center gap-4 text-brand-white">
					<ArrowRight className="h-8 w-8 rotate-180" />
					<ArrowRight className="h-8 w-8" />
					<span className="ml-4 text-3xl font-bold">1/6</span>
				</div>
			</div>
		</section>
	)
}

function CTA() {
	return (
		<section className="px-6 py-32 text-center">
			<p className="mb-4 font-medium text-text-muted">O que você está esperando?</p>
			<h2 className="text-[clamp(48px,10vw,120px)] leading-[0.9] font-black tracking-tighter text-brand-dark">
				Agende uma
				<br />
				avaliação
			</h2>
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
