"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"

const navLink =
	"cursor-pointer rounded-sm text-sm font-medium tracking-wide text-[#d6d3d1] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"

const outlineBtn =
	"cursor-pointer rounded-full border border-[#78716c] px-8 py-4 text-base font-medium tracking-wide text-[#d6d3d1] backdrop-blur-sm transition-all duration-300 hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"

const primaryBtn =
	"cursor-pointer rounded-full bg-[#d41132] px-8 py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-[#d41132]/20 transition-all duration-300 hover:bg-[#b50e29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1917] active:scale-95"

interface Project {
	tag: string
	title: string
	desc: string
	image: string
}

interface Card {
	title: string
	desc: string
	icon: "forest" | "verified" | "eco"
}

function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="fixed top-0 z-50 w-full border-b border-[#292524] bg-[#1c1917]/90 backdrop-blur-md">
			<div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
				<div className="flex items-center gap-3">
					<svg
						aria-hidden="true"
						focusable="false"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.8}
						className="h-7 w-7 text-white"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8 21V8l2-2 1 1 4-4 3 3-4 4 1 1-2 2v8"
						/>
					</svg>
					<h2 className="font-display text-xl font-bold tracking-tight text-white">
						CasaPronta
						<span className="ml-1 font-serif text-2xl font-light italic text-[#a8a29e]">Prime</span>
					</h2>
				</div>

				<nav className="hidden items-center gap-10 lg:flex">
					<a href="#colecoes" className={navLink}>
						Casos
					</a>
					<a href="#sob-medida" className={navLink}>
						Como Funciona
					</a>
					<a href="#manifesto" className={navLink}>
						Método
					</a>
				</nav>

				<button
					type="button"
					className="hidden cursor-pointer rounded-full bg-[#f5f5f4] px-6 py-2.5 text-sm font-bold tracking-wide text-[#1c1917] transition-all duration-200 hover:bg-[#d6d3d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132] sm:flex"
				>
					Pedir Orçamento
				</button>

				<button
					type="button"
					className="cursor-pointer text-white focus-visible:outline-none lg:hidden"
					aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
					onClick={() => setMobileOpen((current) => !current)}
				>
					<span className="mb-1.5 block h-px w-5 bg-white" />
					<span className="mb-1.5 block h-px w-5 bg-white" />
					<span className="block h-px w-5 bg-white" />
				</button>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="flex flex-col gap-5 border-t border-[#292524] bg-[#1c1917] px-6 py-6 lg:hidden"
					>
						<a href="#colecoes" className={navLink} onClick={() => setMobileOpen(false)}>
							Casos
						</a>
						<a href="#sob-medida" className={navLink} onClick={() => setMobileOpen(false)}>
							Como Funciona
						</a>
						<a href="#manifesto" className={navLink} onClick={() => setMobileOpen(false)}>
							Método
						</a>
						<button
							type="button"
							className="cursor-pointer rounded-full bg-[#f5f5f4] px-6 py-2.5 text-sm font-bold tracking-wide text-[#1c1917] transition-all duration-200 hover:bg-[#d6d3d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"
						>
							Pedir Orçamento
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}

function Hero() {
	const sectionRef = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	})
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-[85vh] items-center justify-end overflow-hidden px-6 py-20 lg:px-20"
		>
			<motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
				<div className="absolute inset-0 z-10 bg-gradient-to-l from-black/90 via-black/50 to-black/20" />
				<video
					src="/showcases/marcenaria/destaque.mp4"
					poster="/showcases/marcenaria/movel-madeira.webp"
					autoPlay
					muted
					loop
					playsInline
					className="h-[130%] w-full object-cover opacity-60"
				/>
			</motion.div>

			<div className="relative z-20 flex max-w-3xl flex-col items-end gap-6 text-right">
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.9, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="font-serif text-2xl tracking-wide italic text-[#d41132] md:text-3xl"
				>
					Serviços Residenciais Premium • São Paulo e região
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
					className="font-display text-5xl leading-[0.9] font-black tracking-tighter text-stone-50 md:text-7xl lg:text-8xl"
				>
					Sua Casa
					<span className="block font-serif font-light italic text-[#d6d3d1]">Funcionando.</span>
					<span className="mt-2 block">No Prazo.</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					className="mt-4 max-w-lg font-serif text-lg leading-relaxed font-light text-[#d6d3d1] md:text-xl"
				>
					Elétrica, hidráulica, pintura e manutenção com escopo fechado, visita técnica em até 24h e
					garantia por escrito de 12 meses.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
					className="mt-8 flex flex-wrap justify-end gap-4"
				>
					<button type="button" className={primaryBtn}>
						Quero orçamento em 24h
					</button>
					<button type="button" className={outlineBtn}>
						Ver escopos e prazos
					</button>
				</motion.div>
			</div>
		</section>
	)
}

function Icon({ icon }: { icon: Card["icon"] }) {
	if (icon === "forest") {
		return (
			<svg
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.7}
				className="h-8 w-8"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 22V7" />
				<path strokeLinecap="round" strokeLinejoin="round" d="m8 11 4-6 4 6" />
				<path strokeLinecap="round" strokeLinejoin="round" d="m6 16 6-8 6 8" />
			</svg>
		)
	}

	if (icon === "verified") {
		return (
			<svg
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.7}
				className="h-8 w-8"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3l7 3v6c0 4.2-2.5 7.7-7 9-4.5-1.3-7-4.8-7-9V6l7-3Z"
				/>
				<path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
			</svg>
		)
	}

	return (
		<svg
			aria-hidden="true"
			focusable="false"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.7}
			className="h-8 w-8"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11" />
			<path strokeLinecap="round" strokeLinejoin="round" d="m7 13 5-10 5 10" />
			<path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
		</svg>
	)
}

function AuthorityGrid() {
	const cards: Card[] = [
		{
			icon: "forest",
			title: "Escopo Fechado por Ambiente",
			desc: "Você recebe checklist com materiais, mão de obra, prazo e investimento antes de começar.",
		},
		{
			icon: "verified",
			title: "Equipe Própria e Responsável Técnico",
			desc: "Profissionais identificados, supervisão de obra e atualização diária no WhatsApp.",
		},
		{
			icon: "eco",
			title: "Garantia e Pós-Obra",
			desc: "Entrega com checklist final, nota fiscal e suporte de ajustes por 30 dias após a obra.",
		},
	]

	return (
		<section id="sob-medida" className="border-t border-[#3a3330] bg-[#292524] py-20">
			<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
				<div className="mb-16 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="font-display mb-4 text-3xl font-bold text-stone-100 md:text-5xl"
					>
						Compromissos que{" "}
						<span className="font-serif font-light italic text-[#a8a29e]">
							evitam dor de cabeça
						</span>
					</motion.h2>
					<div className="mx-auto h-1 w-20 rounded-full bg-[#d41132]" />
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{cards.map((card, index) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
							className="group cursor-default rounded-3xl border border-[#3a3330] bg-[#1c1917]/50 p-8 transition-all duration-300 hover:border-[#4a4340] hover:bg-[#1c1917]"
						>
							<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#3a3330]/50 text-stone-200 transition-colors duration-300 group-hover:bg-[#d41132]/10 group-hover:text-[#d41132]">
								<Icon icon={card.icon} />
							</div>
							<h3 className="mb-3 text-xl font-bold text-stone-100">{card.title}</h3>
							<p className="font-serif text-lg leading-relaxed text-[#a8a29e]">{card.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

function Manifesto() {
	return (
		<section id="manifesto" className="flex min-h-200 flex-col lg:flex-row">
			<div className="relative flex flex-col justify-center overflow-hidden bg-[#1c1917] px-8 py-20 lg:w-1/2 lg:px-24">
				<div
					className="pointer-events-none absolute inset-0 opacity-5"
					style={{
						backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
						backgroundSize: "20px 20px",
					}}
				/>

				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="z-10 mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[#78716c]"
				>
					Nosso Método
				</motion.span>

				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="z-10 mb-8 font-serif text-4xl leading-tight font-light text-stone-100 lg:text-6xl"
				>
					Não vendemos promessa.
					<br />
					<span className="text-[#d41132] italic">Entregamos obra com método e contrato.</span>
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="z-10 max-w-md space-y-6 text-lg leading-relaxed text-[#a8a29e]"
				>
					<p>
						Começamos com visita técnica e diagnóstico. Em seguida, você recebe escopo fechado por
						ambiente, cronograma e valor final para aprovar com clareza.
					</p>
					<p>
						Durante a execução, protegemos piso e móveis, atualizamos seu grupo no WhatsApp e
						finalizamos com checklist de entrega, nota fiscal e garantia.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.35 }}
					className="z-10 mt-12"
				>
					<a
						href="#"
						className="cursor-pointer inline-flex items-center gap-2 border-b border-[#3a3330] pb-1 text-stone-100 transition-colors hover:border-[#d41132] hover:text-[#d41132] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"
					>
						<span>Ver exemplo de cronograma real</span>
						<svg
							aria-hidden="true"
							focusable="false"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-4 w-4"
						>
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</motion.div>
			</div>

			<div className="group relative h-125 overflow-hidden bg-stone-200 lg:h-auto lg:w-1/2">
				<motion.div
					initial={{ scale: 1.05 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute inset-0"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/showcases/marcenaria/movel-madeira.webp"
						alt="Equipe executando acabamento em reforma residencial"
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</motion.div>
				<div className="absolute bottom-8 right-8 rounded-lg bg-black/60 px-4 py-2 font-mono text-xs text-white/80 backdrop-blur-md">
					Entrega residencial em 6 dias
				</div>
			</div>
		</section>
	)
}

function ProjectsShowcase() {
	const projects: Project[] = [
		{
			tag: "Reforma Rápida",
			title: "Apartamento Jardins",
			desc: "Troca elétrica, pintura completa e marcenaria pontual entregues em 7 dias úteis.",
			image: "/showcases/marcenaria/team-1.webp",
		},
		{
			tag: "Banho e Cozinha",
			title: "Residência Villa Lobos",
			desc: "Correção de infiltração, troca de metais e pintura antiumidade com garantia.",
			image: "/showcases/marcenaria/team-2.webp",
		},
		{
			tag: "Sala e Iluminação",
			title: "Painel Ibirapuera",
			desc: "Novo circuito de iluminação, sanca e acabamento fino sem quebra-quebra excessivo.",
			image: "/showcases/marcenaria/team-3.webp",
		},
		{
			tag: "Manutenção Programada",
			title: "Atelier Botânico",
			desc: "Plano mensal com visitas preventivas para elétrica, hidráulica e pequenos reparos.",
			image: "/showcases/marcenaria/team-4.webp",
		},
	]

	return (
		<section id="colecoes" className="bg-[#181112] py-20">
			<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
				<div className="mb-12 flex flex-col items-end justify-between md:flex-row">
					<div>
						<span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#d41132]">
							Casos Reais
						</span>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="font-display text-4xl font-bold text-stone-100 lg:text-5xl"
						>
							Antes e Depois{" "}
							<span className="font-serif font-light italic text-[#a8a29e]">Entregues</span>
						</motion.h2>
					</div>
					<a
						href="#"
						className="mt-4 hidden cursor-pointer items-center gap-2 font-medium text-[#d6d3d1] transition-colors hover:text-[#d41132] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132] md:flex md:mt-0"
					>
						Ver mais casos e escopos
						<svg
							aria-hidden="true"
							focusable="false"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-4 w-4 -rotate-45"
						>
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-12">
					<motion.div
						initial={{ opacity: 0, scale: 0.97 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8 }}
						className="group relative row-span-2 overflow-hidden rounded-3xl md:col-span-8"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={projects[0].image}
							alt={projects[0].title}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
						<div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
							<span className="mb-2 block text-sm font-bold uppercase tracking-widest text-[#d41132]">
								{projects[0].tag}
							</span>
							<h3 className="mb-2 font-serif text-3xl italic text-white">{projects[0].title}</h3>
							<p className="line-clamp-2 max-w-xl text-stone-300">{projects[0].desc}</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.97 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="group relative row-span-2 overflow-hidden rounded-3xl md:col-span-4"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={projects[1].image}
							alt={projects[1].title}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
						<div className="absolute bottom-0 left-0 w-full p-8">
							<span className="mb-2 block text-sm font-bold uppercase tracking-widest text-[#d41132]">
								{projects[1].tag}
							</span>
							<h3 className="mb-2 font-serif text-3xl italic text-white">{projects[1].title}</h3>
							<p className="line-clamp-2 text-stone-300">{projects[1].desc}</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, delay: 0.15 }}
						className="group relative row-span-1 overflow-hidden rounded-3xl md:col-span-7"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={projects[2].image}
							alt={projects[2].title}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
						<div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
							<div>
								<h3 className="font-serif text-2xl italic text-white">{projects[2].title}</h3>
								<span className="text-sm text-stone-300">{projects[2].tag}</span>
							</div>
							<div className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors duration-200 group-hover:bg-[#d41132]">
								<svg
									aria-hidden="true"
									focusable="false"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="group relative row-span-1 overflow-hidden rounded-3xl md:col-span-5"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={projects[3].image}
							alt={projects[3].title}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
						<div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
							<div>
								<h3 className="font-serif text-2xl italic text-white">{projects[3].title}</h3>
								<span className="text-sm text-stone-300">{projects[3].tag}</span>
							</div>
							<div className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors duration-200 group-hover:bg-[#d41132]">
								<svg
									aria-hidden="true"
									focusable="false"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</motion.div>
				</div>

				<div className="mt-8 text-center md:hidden">
					<button
						type="button"
						className="w-full cursor-pointer rounded-xl bg-[#292524] py-4 font-bold text-stone-100 transition-colors hover:bg-[#3a3330] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"
					>
						Ver mais casos e escopos
					</button>
				</div>
			</div>
		</section>
	)
}

function CTA() {
	return (
		<section className="relative overflow-hidden bg-[#221013] px-6 py-24">
			<div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 rounded-l-full bg-[#d41132]/5 blur-3xl" />

			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.9, ease: "easeOut" }}
				>
					<svg
						aria-hidden="true"
						focusable="false"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.7}
						className="mx-auto mb-6 h-10 w-10 text-[#d41132]"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10l-2 10H9L7 8Z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 8V5a3 3 0 0 1 6 0v3" />
					</svg>

					<h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
						Receba seu plano de obra <br />
						<span className="font-serif italic text-[#a8a29e]">em até 24h.</span>
					</h2>

					<p className="mx-auto mb-10 max-w-2xl text-lg text-[#a8a29e]">
						Enviamos escopo detalhado, cronograma por etapa e investimento final para você decidir
						com segurança, sem surpresas no meio da execução.
					</p>

					<form
						className="mx-auto flex max-w-lg flex-col justify-center gap-4 sm:flex-row"
						onSubmit={(event) => event.preventDefault()}
					>
						<input
							type="email"
							placeholder="Seu melhor e-mail"
							className="flex-1 rounded-xl border-0 bg-[#292524] px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-[#3a3330] placeholder:text-[#78716c] focus:outline-none focus:ring-2 focus:ring-[#d41132]"
						/>
						<button
							type="submit"
							className="cursor-pointer rounded-xl bg-[#d41132] px-8 py-4 font-bold text-white shadow-lg shadow-[#d41132]/25 transition-all hover:bg-[#b50e29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132] active:scale-95"
						>
							Quero meu orçamento
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}

function Footer() {
	const footerLinks = {
		Empresa: ["Quem Somos", "Avaliações", "CNPJ e Seguros", "Trabalhe Conosco"],
		Serviços: ["Reforma Rápida", "Elétrica e Hidráulica", "Pintura", "Manutenção Geral"],
		Suporte: ["Contato", "Perguntas Frequentes", "Política de Privacidade", "Termos de Serviço"],
	} as const

	return (
		<footer className="border-t border-[#1c1917] bg-black px-6 py-16 text-sm text-[#a8a29e] lg:px-20">
			<div className="mx-auto mb-16 grid max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-4">
				<div className="md:col-span-1">
					<div className="mb-6 flex items-center gap-2 text-stone-100">
						<svg
							aria-hidden="true"
							focusable="false"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.8}
							className="h-5 w-5"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 21V8l2-2 1 1 4-4 3 3-4 4 1 1-2 2v8"
							/>
						</svg>
						<span className="font-display text-lg font-bold tracking-tight">CasaPronta Prime</span>
					</div>

					<p className="mb-6 leading-relaxed text-[#78716c]">
						Rua dos Pinheiros, 120
						<br />
						Pinheiros, São Paulo - SP
						<br />
						CEP 05422-001
					</p>

					<div className="flex gap-3">
						{["Instagram", "LinkedIn"].map((platform) => (
							<a
								key={platform}
								href="#"
								aria-label={platform}
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#292524] transition-colors hover:bg-[#292524] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"
							>
								{platform === "Instagram" ? (
									<svg
										aria-hidden="true"
										focusable="false"
										fill="currentColor"
										className="h-4 w-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838A6.162 6.162 0 1 0 12 18.16a6.162 6.162 0 0 0 0-12.324Zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
									</svg>
								) : (
									<svg
										aria-hidden="true"
										focusable="false"
										fill="currentColor"
										className="h-4 w-4"
										viewBox="0 0 24 24"
									>
										<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM5 8H0v16h5V8Zm7.982 0H8.014v16h5v-8.306c0-4.613 5.432-5.17 5.432 0V24h5V13.401c0-8.195-8.744-8.035-10.464-3.693V8Z" />
									</svg>
								)}
							</a>
						))}
					</div>
				</div>

				{Object.entries(footerLinks).map(([column, links]) => (
					<div key={column} className="flex flex-col gap-4">
						<h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white">{column}</h4>
						{links.map((link) => (
							<a
								key={link}
								href="#"
								className="cursor-pointer transition-colors hover:text-[#d41132] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d41132]"
							>
								{link}
							</a>
						))}
					</div>
				))}
			</div>

			<div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 border-t border-[#1c1917] pt-8 md:flex-row">
				<p className="text-xs text-[#78716c]">
					© 2026 CasaPronta Prime. Todos os direitos reservados.
				</p>
				<div className="flex items-center gap-3 rounded-lg border border-[#1c1917] bg-[#0d0c0b] px-4 py-2">
					<svg
						aria-hidden="true"
						focusable="false"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5 text-amber-500"
					>
						<path
							fillRule="evenodd"
							d="M12 2a4 4 0 0 1 4 4v2h1a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Zm2 6V6a2 2 0 1 0-4 0v2h4Z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="text-xs font-medium uppercase tracking-wider text-stone-300">
						Atendimento com contrato e nota fiscal
					</span>
				</div>
			</div>
		</footer>
	)
}

export default function ServicosResidenciaisPage() {
	return (
		<div className="atelier-obra overflow-x-hidden bg-[#1c1917] text-stone-100 selection:bg-[#d41132] selection:text-white">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
				<Header />
				<main className="pt-20">
					<Hero />
					<AuthorityGrid />
					<Manifesto />
					<ProjectsShowcase />
					<CTA />
				</main>
				<Footer />
			</motion.div>
		</div>
	)
}
