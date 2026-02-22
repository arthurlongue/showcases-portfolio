import { ChevronRight, ScanFace } from "lucide-react"
import {
	AmbientOrbs,
	FloatingElement,
	GlassCard,
	GlowingButton,
	RevealSection,
} from "./components/client"
import { Icons } from "./components/icons"
import { dentData } from "./data"

export default function DentistaPremiumPage() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-[var(--dent-bg-primary)] font-sans text-[var(--dent-text-primary)] selection:bg-[var(--dent-accent-blue)]/30 selection:text-white">
			{/* Cosmic Background Orbs */}
			<AmbientOrbs />

			{/* Noise Overlay */}
			<div
				className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Navigation */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between border-white/5 border-b bg-[var(--dent-bg-primary)]/50 px-6 py-4 backdrop-blur-xl">
				<div className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--dent-accent-blue)] to-[var(--dent-accent-purple)] p-[1px]">
						<div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--dent-bg-primary)]">
							<div className="h-3 w-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
						</div>
					</div>
					<span className="font-bold text-lg tracking-tight">CosmoDent</span>
				</div>
				<ul className="hidden gap-8 font-medium text-[var(--dent-text-secondary)] text-sm md:flex">
					<li className="cursor-pointer transition-colors hover:text-white">Protocolo</li>
					<li className="cursor-pointer transition-colors hover:text-white">Tecnologia</li>
					<li className="cursor-pointer transition-colors hover:text-white">Pacientes</li>
				</ul>
				<GlowingButton className="px-5 py-2 text-xs">Avaliação 3D</GlowingButton>
			</nav>

			{/* Hero Section */}
			<section className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] items-center px-6 pt-32 pb-20">
				<div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Left Content */}
					<RevealSection className="pr-4">
						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
							<div className="h-2 w-2 animate-pulse rounded-full bg-[var(--dent-accent-blue)] shadow-[0_0_10px_rgba(0,194,255,0.5)]" />
							<span className="font-semibold text-[var(--dent-text-secondary)] text-xs uppercase tracking-wider">
								Próxima Geração
							</span>
						</div>

						<h1 className="mb-6 font-extrabold text-[clamp(48px,6vw,72px)] leading-[1.05] tracking-[-0.02em]">
							{dentData.hero.headline.split(".")[0]}
							<span className="text-[var(--dent-accent-blue)]">.</span>
						</h1>

						<p className="mb-10 max-w-lg text-[clamp(16px,1.2vw,18px)] text-[var(--dent-text-secondary)] leading-[1.6]">
							{dentData.hero.subheadline}
						</p>

						<div className="flex flex-wrap items-center gap-4">
							<GlowingButton className="glow-blue px-8 py-4 text-base">
								{dentData.hero.cta}
							</GlowingButton>
							<button
								type="button"
								className="group flex items-center gap-2 px-6 py-4 font-medium text-[var(--dent-text-secondary)] text-sm transition-colors hover:text-white"
							>
								Ver Tecnologia
								<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</button>
						</div>
					</RevealSection>

					{/* Right 3D/Abstract Visual */}
					<div className="perspective-[1000px] relative mx-auto h-[500px] w-full max-w-[600px] lg:mx-0">
						<FloatingElement speed={0.8}>
							<div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-tr from-[var(--dent-accent-purple)]/20 to-[var(--dent-accent-blue)]/20 shadow-[0_0_100px_rgba(123,97,255,0.2)] backdrop-blur-3xl">
								{/* Pseudo-3D Mesh/Scan Representation */}
								<div
									className="flex h-[80%] w-[80%] animate-spin-slow items-center justify-center rounded-full border-[0.5px] border-white/20"
									style={{ animationDuration: "40s" }}
								>
									<div className="flex h-[80%] w-[80%] flex-col items-center justify-center gap-2 rounded-full border-[0.5px] border-[var(--dent-accent-blue)]/40">
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--dent-accent-pink)]/50 to-transparent" />
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--dent-accent-blue)]/80 to-transparent" />
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--dent-accent-purple)]/50 to-transparent" />
									</div>
								</div>

								{/* Floating Scanned Tooth abstract representation */}
								<div className="glow-blue absolute top-1/2 left-1/2 flex h-40 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[40%] border border-white/30 bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.1)] backdrop-blur-md">
									<ScanFace className="h-12 w-12 text-[var(--dent-accent-blue)] opacity-80" />
								</div>
							</div>
						</FloatingElement>
					</div>
				</div>
			</section>

			{/* Metrics Section */}
			<section className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-6 sm:px-12 lg:-mt-20">
				<GlassCard className="p-8 md:p-12">
					<div className="grid grid-cols-1 gap-8 divide-y divide-white/10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
						{dentData.metrics.map((metric, i) => (
							<RevealSection
								key={i}
								delay={i * 0.15}
								className={`flex flex-col items-center justify-center ${i !== 0 ? "pt-8 md:pt-0 md:pl-8" : "pb-8 md:pr-8 md:pb-0"}`}
							>
								<div className="mb-2 bg-gradient-to-r from-white to-[var(--dent-text-secondary)] bg-clip-text font-extrabold text-4xl text-transparent tracking-tight md:text-[clamp(40px,4vw,56px)]">
									{metric.value}
								</div>
								<div className="font-semibold text-[var(--dent-accent-blue)] text-xs uppercase tracking-[0.15em]">
									{metric.label}
								</div>
							</RevealSection>
						))}
					</div>
				</GlassCard>
			</section>

			{/* Technology Trio */}
			<section className="relative z-10 mx-auto max-w-[1200px] px-6 py-32">
				<RevealSection className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-[clamp(32px,4vw,48px)] tracking-tight">
						O Software do Sorriso
					</h2>
					<p className="mx-auto max-w-2xl text-[var(--dent-text-secondary)]">
						Hardware militar aplicado à odontologia estética. Cada etapa é matemática.
					</p>
				</RevealSection>

				<div className="grid grid-cols-1 gap-[var(--gap-cards)] md:grid-cols-3">
					{dentData.tech.map((item, i) => {
						const IconComponent = Icons[item.icon as keyof typeof Icons]
						return (
							<RevealSection key={i} delay={i * 0.2}>
								<GlassCard glow className="h-full">
									<div
										className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] ${i === 0 ? "bg-[var(--dent-accent-blue)]/10 text-[var(--dent-accent-blue)]" : i === 1 ? "bg-[var(--dent-accent-purple)]/10 text-[var(--dent-accent-purple)]" : "bg-[var(--dent-accent-pink)]/10 text-[var(--dent-accent-pink)]"}`}
									>
										<IconComponent className="h-6 w-6" />
									</div>
									<h3 className="mb-4 font-bold text-2xl">{item.title}</h3>
									<p className="text-[var(--dent-text-secondary)] text-sm leading-relaxed">
										{item.desc}
									</p>
								</GlassCard>
							</RevealSection>
						)
					})}
				</div>
			</section>

			{/* Protocol Section */}
			<section className="relative z-10 border-white/5 border-t border-b bg-[var(--dent-bg-secondary)]/50 px-6 py-32">
				<div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
					<RevealSection>
						<h2 className="mb-12 font-bold text-[clamp(32px,4vw,48px)] tracking-tight">
							{dentData.process.headline}
						</h2>

						<div className="space-y-10">
							{dentData.process.steps.map((step, i) => (
								<div key={i} className="group flex gap-6">
									<div className="flex flex-col items-center">
										<div className="glow-purple z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--dent-accent-purple)]/30 bg-[var(--dent-bg-primary)] font-mono text-[var(--dent-accent-purple)] text-sm transition-colors group-hover:border-[var(--dent-accent-purple)]">
											0{i + 1}
										</div>
										{i !== dentData.process.steps.length - 1 && (
											<div className="mt-2 h-full w-[1px] bg-gradient-to-b from-[var(--dent-accent-purple)]/30 to-transparent" />
										)}
									</div>
									<div className="pb-8">
										<h3 className="mb-2 font-bold text-white text-xl transition-colors group-hover:text-[var(--dent-accent-blue)]">
											{step.title}
										</h3>
										<p className="text-[var(--dent-text-secondary)] text-sm leading-relaxed">
											{step.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</RevealSection>

					{/* Image Reveal */}
					<RevealSection
						delay={0.3}
						className="glow-purple perspective-[1000px] relative h-[600px] overflow-hidden rounded-[24px] border border-white/10"
					>
						<div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--dent-bg-primary)] to-transparent align-bottom" />
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={dentData.hero.image}
							alt="3D Dental Scan Overlay"
							className="h-full w-full scale-105 object-cover opacity-60 mix-blend-screen transition-transform duration-1000 hover:scale-100"
							style={{
								filter:
									"grayscale(100%) contrast(1.5) sepia(100%) hue-rotate(200deg) saturate(300%)",
							}}
						/>

						<div className="absolute right-8 bottom-8 left-8 z-20">
							<GlassCard className="flex items-center justify-between p-6">
								<div>
									<div className="mb-1 font-bold text-sm text-white">Status Scan</div>
									<div className="animate-pulse font-mono text-[var(--dent-accent-blue)] text-xs">
										PROCESSANDO MESH 3D...
									</div>
								</div>
								<div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--dent-accent-blue)] border-t-transparent" />
							</GlassCard>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 border-white/10 border-t bg-[var(--dent-bg-primary)] px-6 py-12">
				<div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
					<div className="flex items-center gap-2">
						<div className="h-6 w-6 rounded-full bg-gradient-to-br from-[var(--dent-accent-blue)] to-[var(--dent-accent-purple)]" />
						<span className="font-bold text-white tracking-tight">CosmoDent</span>
					</div>
					<div className="font-medium text-[var(--dent-text-secondary)] text-xs uppercase tracking-[0.1em]">
						Odontologia Digital & Estética © 2026
					</div>
					<div className="flex gap-6 font-medium text-[var(--dent-text-secondary)] text-sm">
						<a href="#" className="transition-colors hover:text-white">
							Termos
						</a>
						<a href="#" className="transition-colors hover:text-white">
							Privacidade
						</a>
					</div>
				</div>
			</footer>
		</main>
	)
}
