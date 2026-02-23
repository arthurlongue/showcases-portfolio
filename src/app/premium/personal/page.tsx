"use client"

import {
	Activity,
	ArrowRight,
	CheckCircle2,
	Play,
	Shield,
	Target,
	TrendingUp,
	Zap,
} from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

interface Pillar {
	title: string
	description: string
	icon: React.ReactNode
}

const pillarItems: Pillar[] = [
	{
		title: "Forca",
		description:
			"Construa uma base solida. A forca e a mae de todas as qualidades fisicas e o pilar da longevidade.",
		icon: <Shield className="h-6 w-6 text-white" />,
	},
	{
		title: "Resistencia",
		description:
			"Capacidade de suportar o processo. Condicionamento de elite para performar no treino e na vida.",
		icon: <Zap className="h-6 w-6 text-white" />,
	},
	{
		title: "Disciplina",
		description:
			"Onde a motivacao falha, a disciplina assume. O metodo so funciona se voce executar o planejado.",
		icon: <Target className="h-6 w-6 text-white" />,
	},
]

const ctaNames = ["Joao", "Maria", "Pedro", "Lucas", "Ana", "Carlos", "Julia"] as const

export default function PersonalPremiumPage() {
	return (
		<div className="min-h-screen bg-[#040404] text-white selection:bg-[#E6FF00] selection:text-black">
			<Navbar />
			<main>
				<Hero />
				<FeatureOne />
				<FeatureTwo />
				<Showcase />
				<Transformations />
				<Global />
				<Philosophy />
				<Pillars />
				<Cta />
			</main>
			<Footer />
		</div>
	)
}

function Navbar() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#040404]/80 backdrop-blur-md">
			<div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
						<div className="h-4 w-4 rounded-full bg-[#040404]" />
					</div>
					<span className="font-display text-sm font-bold tracking-tight text-white">
						Apex<span className="text-[#888888]">Performance</span>
					</span>
				</div>

				<div className="hidden items-center gap-8 md:flex">
					<div className="h-px w-8 bg-white/20" />
				</div>

				<div className="flex items-center gap-3">
					<a
						href="#contato"
						className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:text-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						Avaliacao
					</a>
					<a
						href="#contato"
						className="cursor-pointer rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						Comecar
					</a>
				</div>
			</div>
		</nav>
	)
}

function Hero() {
	const heroRef = useRef<HTMLElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	})
	const floatingY = useTransform(scrollYProgress, [0, 1], [0, -60])

	return (
		<section
			ref={heroRef}
			className="relative flex min-h-screen items-center overflow-hidden bg-[#040404] pt-20"
		>
			<div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

			<div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
				<div className="max-w-2xl">
					<motion.h1
						className="mb-6 font-display text-[clamp(64px,8vw,120px)] leading-[0.9] font-medium tracking-tighter text-white"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						Forca <br />
						<span className="text-[#888888]">Bruta &</span> <br />
						Refinada
					</motion.h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="mt-12 flex items-center gap-2 text-sm text-[#888888]"
					>
						<div className="flex h-6 w-4 justify-center rounded-full border border-[#888888] p-1">
							<motion.div
								animate={{ y: [0, 8, 0] }}
								transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
								className="h-1 w-1 rounded-full bg-[#888888]"
							/>
						</div>
						Scroll
					</motion.div>
				</div>

				<div className="relative hidden h-[600px] lg:block">
					<motion.div
						style={{ y: floatingY }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="absolute left-1/2 top-1/2 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px]"
					>
						<Image
							src="/showcases/personal/halter-closeup.webp"
							alt="Treino de alta performance"
							fill
							sizes="400px"
							className="object-cover opacity-80 grayscale contrast-125"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent" />
					</motion.div>

					<motion.div
						style={{ y: floatingY }}
						initial={{ opacity: 0, x: 50, y: -20 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="absolute -left-10 top-20 w-64 rounded-2xl border border-black/5 bg-white p-4 text-black shadow-2xl"
					>
						<div className="mb-4 flex items-start justify-between">
							<div>
								<div className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
									Metabolismo
								</div>
								<div className="font-display text-xl font-bold">2.450 kcal</div>
							</div>
							<div className="flex items-center gap-1 rounded-md bg-[#E6FF00]/20 px-2 py-1 text-xs font-bold">
								<TrendingUp className="h-3 w-3" /> +12%
							</div>
						</div>
						<div className="flex h-12 items-end gap-1">
							{[40, 60, 45, 80, 55, 90, 70].map((height, index) => (
								<div
									key={height + index}
									className="flex-1 rounded-t-sm bg-black/10"
									style={{ height: `${height}%` }}
								>
									{index === 5 ? <div className="h-full w-full rounded-t-sm bg-[#E6FF00]" /> : null}
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						style={{ y: floatingY }}
						initial={{ opacity: 0, x: -50, y: 20 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="absolute -right-10 bottom-32 w-56 rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-2xl backdrop-blur-xl"
					>
						<div className="mb-3 flex items-center gap-3">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6FF00]">
								<CheckCircle2 className="h-5 w-5 text-black" />
							</div>
							<div className="text-sm font-medium text-white">Treino Concluido</div>
						</div>
						<div className="mb-1 text-xs text-[#888888]">Carga total movida</div>
						<div className="font-display text-2xl font-bold text-white">12.4 Ton</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

function FeatureOne() {
	return (
		<section className="relative border-t border-white/5 bg-[#040404] py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
				<div>
					<div className="relative flex flex-col gap-8 border-l border-white/10 pl-8">
						<div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-white" />
						<div className="absolute -left-[5px] top-1/2 h-2 w-2 rounded-full bg-white/20" />
						<div className="absolute -left-[5px] bottom-0 h-2 w-2 rounded-full bg-white/20" />

						<div>
							<h2 className="mb-4 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
								Diagnostico <br /> Biomecanico
							</h2>
							<p className="max-w-md text-lg leading-relaxed text-[#888888]">
								Nao adivinhamos, nos medimos. Uma analise completa da sua estrutura, mobilidade e
								assimetrias para criar a base perfeita do seu treino.
							</p>
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-[#F4F4F4] p-8 md:p-12"
				>
					<div className="absolute left-8 top-8">
						<div className="font-display text-2xl font-bold text-black">
							Upload do seu <br /> assessment
						</div>
					</div>

					<div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#111111] shadow-2xl">
						<Image
							src="/showcases/personal/biomechanics_data.webp"
							alt="Análise biomecânica de dados"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

function FeatureTwo() {
	return (
		<section className="relative bg-[#040404] py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
				<div className="order-2 lg:order-1">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="relative flex aspect-[4/5] flex-col justify-between rounded-[32px] border border-white/5 bg-[#111111] p-8 md:p-12"
					>
						<div className="absolute inset-0 z-0">
							<Image
								src="/showcases/personal/macro_weights.webp"
								alt="Equipamentos premium"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover opacity-30 grayscale mix-blend-luminosity"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
						</div>

						<div className="relative z-10 w-full mb-8">
							<h3 className="mb-8 font-display text-3xl font-medium text-white">
								Prescricao <br /> Exata
							</h3>
							<div className="space-y-6">
								<div className="flex items-center justify-between border-b border-white/10 pb-4">
									<div className="text-sm text-[#888888]">Foco do mesociclo</div>
									<div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
										<CheckCircle2 className="h-3 w-3" /> Hipertrofia
									</div>
								</div>
								<div>
									<div className="mb-1 text-sm text-[#888888]">Volume semanal</div>
									<div className="font-display text-4xl font-medium text-white">18 Series</div>
								</div>
							</div>
						</div>

						<div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row">
							<button
								type="button"
								className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#040404]/50 backdrop-blur-md py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
							>
								<Activity className="h-4 w-4" /> Ver detalhes
							</button>
							<button
								type="button"
								className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-4 text-sm font-bold text-black transition-colors hover:bg-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
							>
								<Play className="h-4 w-4" /> Iniciar treino
							</button>
						</div>
					</motion.div>
				</div>

				<div className="order-1 lg:order-2">
					<div className="relative flex flex-col gap-8 border-l border-white/10 pl-8">
						<div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-white/20" />
						<div className="absolute -left-[5px] top-1/2 h-2 w-2 rounded-full bg-white" />
						<div className="absolute -left-[5px] bottom-0 h-2 w-2 rounded-full bg-white/20" />

						<div>
							<h2 className="mb-4 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
								Treino <br /> Periodizado
							</h2>
							<p className="max-w-md text-lg leading-relaxed text-[#888888]">
								Esqueca fichas genericas. Cada serie, repeticao e intervalo e calculado para extrair
								o maximo do seu potencial, ajustado semana a semana.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function Showcase() {
	return (
		<section className="relative overflow-hidden bg-[#040404] py-32">
			<div className="mx-auto mb-16 max-w-7xl px-6 text-center">
				<h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white md:text-6xl">
					Evolucao <br /> <span className="text-[#888888]">Visivel.</span>
				</h2>
				<p className="mx-auto max-w-xl text-lg text-[#888888]">
					Acompanhe seu progresso com metricas reais. O que nao e medido, nao e gerenciado.
				</p>
			</div>

			<div className="relative mx-auto max-w-5xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1 }}
					className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] shadow-2xl"
				>
					<div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
						<div className="h-3 w-3 rounded-full bg-white/20" />
						<div className="h-3 w-3 rounded-full bg-white/20" />
						<div className="h-3 w-3 rounded-full bg-white/20" />
						<div className="mx-auto flex items-center gap-2 text-xs font-medium text-[#888888]">
							<Activity className="h-3 w-3" /> apexperformance.app
						</div>
					</div>

					<div className="p-8 md:p-12">
						<div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
							<div>
								<div className="mb-2 text-sm text-[#888888]">Carga total levantada (mes)</div>
								<div className="font-display text-5xl font-medium text-white md:text-7xl">
									48.200 kg
								</div>
							</div>
							<div className="flex flex-wrap gap-4">
								<button
									type="button"
									className="cursor-pointer rounded-full border border-white/10 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
								>
									Historico
								</button>
								<button
									type="button"
									className="cursor-pointer rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
								>
									Novo recorde
								</button>
							</div>
						</div>

						<div className="flex h-64 items-end justify-between gap-2 border-t border-white/5 pt-8">
							{[30, 45, 40, 60, 55, 75, 65, 85, 80, 100].map((height, index) => (
								<motion.div
									key={height + index}
									initial={{ height: 0 }}
									whileInView={{ height: `${height}%` }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.05 }}
									className={`w-full rounded-t-md ${index === 9 ? "bg-[#E6FF00]" : "bg-white/10"}`}
								/>
							))}
						</div>
					</div>
				</motion.div>

				<div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
					<span className="whitespace-nowrap font-display text-[120px] font-bold uppercase tracking-tighter text-white/5">
						Performance
					</span>
				</div>
			</div>
		</section>
	)
}

function Transformations() {
	return (
		<section className="relative bg-[#040404] py-32 border-t border-white/5">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
					<div>
						<h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
							Sua Melhor <br /> <span className="text-[#888888]">Versao.</span>
						</h2>
						<p className="max-w-md text-lg leading-relaxed text-[#888888]">
							O resultado da juncao entre disciplina implacavel e um metodo validado. A
							transformacao fisica e inevitavel quando voce nao aceita desculpas.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold tracking-widest text-white backdrop-blur-md">
							100+ ALUNOS
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{[
						{ img: "transformation-2.webp", title: "Foco Intenso" },
						{ img: "transformation-1.webp", title: "Forca Absoluta" },
						{ img: "transformation-3.webp", title: "Mutacao" },
					].map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="group relative aspect-[3/4] overflow-hidden rounded-[24px] bg-[#111111]"
						>
							<Image
								src={`/showcases/personal/${item.img}`}
								alt={item.title}
								fill
								sizes="(max-width: 768px) 100vw, 33vw"
								className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-80 grayscale contrast-125"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/20 to-transparent opacity-80" />
							<div className="absolute bottom-0 left-0 p-8">
								<h3 className="font-display text-2xl font-medium text-white">{item.title}</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

function Global() {
	return (
		<section className="relative bg-[#040404] py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
				<div>
					<h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
						Resultados Reais, <br /> Onde Estiver.
					</h2>
					<p className="mb-8 max-w-md text-lg leading-relaxed text-[#888888]">
						Consultoria online premium que transcende fronteiras. Nao importa se voce treina em uma
						academia de luxo ou no estudio do seu predio, o metodo se adapta ao seu ambiente.
					</p>
					<a
						href="#contato"
						className="inline-flex cursor-pointer items-center gap-2 font-medium text-white transition-colors hover:text-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						Ver planos disponiveis <ArrowRight className="h-4 w-4" />
					</a>
				</div>

				<div className="relative mx-auto aspect-square w-full max-w-md">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="relative h-full w-full overflow-hidden rounded-full border border-white/10"
					>
						<Image
							src="/showcases/personal/academia-premium.webp"
							alt="Treino em consultoria remota"
							fill
							sizes="(max-width: 768px) 90vw, 420px"
							className="object-cover grayscale contrast-125"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-[#E6FF00]/20 to-transparent mix-blend-overlay" />
						<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
							<div className="h-2 w-2 animate-pulse rounded-full bg-[#E6FF00]" />
							<span className="text-xs font-bold uppercase tracking-wider text-white">
								Treino ativo
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

function Philosophy() {
	return (
		<section className="relative border-t border-white/5 bg-[#040404] py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
				<div>
					<h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
						Comprometimento <br /> <span className="text-[#E6FF00]">Total.</span>
					</h2>
					<p className="mb-8 max-w-md text-lg leading-relaxed text-[#888888]">
						Nos importamos com o seu resultado tanto quanto voce. Nao vendemos planilhas, entregamos
						transformacao. Se voce esta disposto a fazer o trabalho duro, nos forneceremos o mapa
						exato.
					</p>
					<button
						type="button"
						className="cursor-pointer rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						Nossa filosofia
					</button>
				</div>

				<div className="relative flex h-[400px] items-center justify-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="relative h-full w-full overflow-hidden rounded-[32px]"
					>
						<Image
							src="/showcases/personal/abstract_energy_core.webp"
							alt="Filosofia e energia contínua"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover grayscale contrast-125 mix-blend-lighten opacity-80"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-[#040404]" />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

function Pillars() {
	return (
		<section className="relative bg-[#F4F4F4] py-32 text-black">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{pillarItems.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className={`flex h-[320px] flex-col justify-between rounded-[24px] border border-black/5 bg-white p-10 shadow-xl ${
								index === 1 ? "md:translate-y-12" : ""
							} ${index === 2 ? "md:translate-y-24" : ""}`}
						>
							<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-black">
								{item.icon}
							</div>
							<div>
								<h3 className="mb-4 font-display text-2xl font-bold">{item.title}</h3>
								<p className="text-sm leading-relaxed text-[#666666]">{item.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

function Cta() {
	return (
		<section id="contato" className="relative overflow-hidden bg-[#040404] py-32">
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mb-16 text-center">
					<div className="mask-image-fade relative flex h-64 flex-col items-center justify-center overflow-hidden">
						{ctaNames.map((name, index) => (
							<motion.div
								key={name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className={`font-display text-5xl font-medium tracking-tighter md:text-7xl ${
									index === 3 ? "my-4 scale-110 text-[#E6FF00]" : "text-white/10"
								}`}
							>
								{name}
							</motion.div>
						))}
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row">
					<h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-6xl">
						Resultados para <span className="text-[#E6FF00]">VOCE.</span>
					</h2>
					<button
						type="button"
						className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-[#E6FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						Agendar avaliacao
						<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</button>
				</div>
			</div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="border-t border-white/5 bg-[#040404] py-12">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
				<div className="text-sm font-medium text-[#888888]">
					&copy; {new Date().getFullYear()} Apex Performance.
				</div>

				<div className="flex gap-6">
					<a
						href="#"
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-[#888888] transition-all hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						IG
					</a>
					<a
						href="#"
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-[#888888] transition-all hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
					>
						WA
					</a>
				</div>

				<div className="text-sm font-medium text-[#888888]">Consultoria premium</div>
			</div>
		</footer>
	)
}
