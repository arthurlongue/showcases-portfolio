import { Activity, ArrowRight, Calendar } from "lucide-react"
import { AmbientGlow, PillCategory, RevealSection } from "./components/client"
import { nutriData } from "./data"

export default function NutricionistaPremiumPage() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-[var(--n-bg-dark)] font-sans text-foreground selection:bg-primary/30">
			{/* Global Ambient Glow */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<AmbientGlow />
			</div>

			{/* Navbar */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 mix-blend-difference">
				<div className="font-serif text-2xl text-white tracking-wide">
					HV<span className="text-primary opacity-80">.</span>
				</div>
				<button
					type="button"
					className="rounded-[8px] border border-primary px-6 py-2 font-semibold text-primary text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(196,154,92,0.1)] transition-all duration-500 hover:bg-primary hover:text-[var(--n-bg-dark)] hover:shadow-[0_0_25px_rgba(196,154,92,0.3)]"
				>
					Consultório
				</button>
			</nav>

			{/* Hero */}
			<section className="relative z-10 flex min-h-[95vh] items-center pt-20">
				<div className="absolute inset-0 z-0">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={nutriData.hero.image}
						alt="Cinematic clinic light"
						className="h-full w-full object-cover object-left opacity-60 mix-blend-luminosity md:object-center"
						style={{ filter: "sepia(10%) saturate(1.2) contrast(1.1) brightness(0.6)" }}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[var(--n-bg-dark)] via-[var(--n-bg-dark)]/40 to-transparent" />
				</div>

				<div className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col justify-end px-6 pb-24">
					<RevealSection delay={0.2} className="mb-6">
						<span className="font-sans text-primary text-xs uppercase tracking-[0.2em] md:text-sm">
							{nutriData.hero.label}
						</span>
					</RevealSection>

					<RevealSection delay={0.4}>
						<h1 className="mb-8 max-w-3xl font-serif text-[clamp(44px,6vw,84px)] text-white leading-[1.05] tracking-tight mix-blend-plus-lighter">
							Veja além. <br />
							<span className="text-primary italic opacity-90">Desbloqueie</span> sua saúde.
						</h1>
					</RevealSection>

					<RevealSection delay={0.6} className="max-w-xl">
						<p className="mb-10 text-[var(--n-text-muted-dark)] text-lg leading-relaxed md:text-xl">
							{nutriData.hero.subheadline}
						</p>
						<button
							type="button"
							className="group flex items-center rounded-[8px] bg-primary px-8 py-4 font-semibold text-[var(--n-bg-dark)] transition-all duration-300 hover:bg-[#D4A96C] hover:shadow-[0_0_30px_rgba(196,154,92,0.2)]"
						>
							{nutriData.hero.cta}
							<ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</button>
					</RevealSection>
				</div>
			</section>

			{/* Mission (Light Section) */}
			<section className="relative z-10 border-primary/10 border-t bg-[var(--n-bg-light)] px-6 py-32 text-[var(--n-text-on-light)]">
				<div className="mx-auto max-w-[900px] text-center">
					<RevealSection>
						<p className="mb-12 font-serif text-[clamp(28px,4vw,44px)] text-[var(--n-bg-dark)] leading-[1.3]">
							"{nutriData.mission.quote}"
						</p>
						<div className="flex flex-col items-center">
							<div className="mb-6 h-[1px] w-16 bg-primary" />
							<span className="font-sans font-semibold text-sm uppercase tracking-widest">
								{nutriData.mission.author}
							</span>
							<span className="mt-2 font-serif text-[var(--n-text-muted-light)] italic">
								{nutriData.mission.role}
							</span>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* Topics / Pills (Dark Section) */}
			<section className="relative z-10 bg-[var(--n-bg-dark)] px-6 py-32">
				<div className="mx-auto max-w-[1100px] text-center">
					<RevealSection>
						<span className="mb-6 block text-primary text-xs uppercase tracking-[0.2em]">
							OTIMIZAÇÃO COMPLETA
						</span>
						<h2 className="mx-auto mb-16 max-w-2xl font-serif text-[clamp(32px,4vw,48px)] text-white leading-tight">
							Sua biologia é complexa. <br />
							<span className="text-[var(--n-text-muted-dark)] italic">
								A solução não precisa ser.
							</span>
						</h2>
					</RevealSection>

					<div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
						{nutriData.topics.map((topic, i) => (
							<PillCategory key={i} index={i} label={topic.label} iconName={topic.icon} />
						))}
					</div>
				</div>
			</section>

			{/* Product / Dashboard Mockup */}
			<section className="relative z-10 px-6 py-20">
				<div className="relative mx-auto max-w-[1100px]">
					{/* Dashboard Glass Card */}
					<RevealSection className="relative overflow-hidden rounded-[12px] border border-primary/20 bg-[var(--n-bg-mid)]/60 p-8 shadow-2xl backdrop-blur-xl md:p-12">
						<div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

						<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
							<div>
								<span className="mb-4 block text-primary text-xs uppercase tracking-[0.2em]">
									{nutriData.philosophy.label}
								</span>
								<h3 className="mb-6 font-serif text-[clamp(28px,3vw,36px)] text-white">
									{nutriData.philosophy.headline}
								</h3>
								<p className="mb-8 text-[var(--n-text-muted-dark)] text-lg leading-relaxed">
									{nutriData.philosophy.description}
								</p>
								<div className="flex gap-4">
									{nutriData.stats.slice(0, 2).map((stat, i) => (
										<div key={i} className="flex-1 border-primary/30 border-l py-1 pl-4">
											<div className="mb-1 font-serif text-3xl text-primary tracking-tight">
												{stat.value}
											</div>
											<div className="text-[var(--n-text-muted-dark)] text-xs uppercase tracking-wider">
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Abstract UI Representation */}
							<div className="relative rounded-[8px] border border-white/5 bg-[var(--n-bg-dark)] p-6 shadow-inner">
								<div className="mb-8 flex items-center justify-between border-white/5 border-b pb-4">
									<div className="flex items-center gap-3">
										<Activity className="h-5 w-5 text-primary" />
										<span className="font-mono text-[#E8C88A] text-sm tracking-widest">
											Biomarker Panel
										</span>
									</div>
									<div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
								</div>

								<div className="space-y-6">
									{[85, 92, 78].map((val, i) => (
										<div key={i}>
											<div className="mb-2 flex justify-between font-mono text-[var(--n-text-muted-dark)] text-xs uppercase">
												<span>{["Cortisol", "HbA1c", "Testosterona Livre"][i]}</span>
												<span className="text-white">{val}%</span>
											</div>
											<div className="h-1 w-full overflow-hidden rounded-full bg-[var(--n-bg-mid)]">
												<div
													className="h-full rounded-full bg-primary"
													style={{ width: `${val}%` }}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* What If (Light Section) */}
			<section className="relative z-10 mt-20 border-primary/10 border-t bg-[var(--n-bg-light)] px-6 py-32 text-[var(--n-text-on-light)]">
				<div className="mx-auto max-w-[800px] text-center">
					<RevealSection>
						<span className="mb-10 block font-bold font-sans text-primary text-xs uppercase tracking-[0.2em]">
							{nutriData.whatIf.label}
						</span>
						<div className="space-y-8 md:space-y-12">
							{nutriData.whatIf.questions.map((q, i) => (
								<h3
									key={i}
									className="font-serif text-[clamp(24px,3vw,36px)] text-[var(--n-bg-dark)] leading-tight opacity-90"
								>
									{q}
								</h3>
							))}
						</div>

						<button
							type="button"
							className="group mt-16 inline-flex items-center rounded-[8px] bg-[var(--n-bg-dark)] px-10 py-4 font-semibold text-primary transition-all duration-300 hover:bg-[#0a0703]"
						>
							Agendar Descoberta
							<Calendar className="ml-3 h-4 w-4" />
						</button>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 border-primary/20 border-t bg-[var(--n-bg-dark)] px-6 py-20">
				<div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 md:flex-row md:items-start">
					<div className="text-center md:text-left">
						<div className="mb-2 font-serif text-3xl text-white tracking-wide">
							HV<span className="text-primary opacity-80">.</span>
						</div>
						<div className="text-[var(--n-text-muted-dark)] text-sm">
							Nutrição de Precisão Clínica
						</div>
					</div>
					<div className="flex gap-8 font-semibold text-[var(--n-text-muted-dark)] text-sm uppercase tracking-widest">
						<a href="#" className="transition-colors hover:text-primary">
							Abordagem
						</a>
						<a href="#" className="transition-colors hover:text-primary">
							Consultório
						</a>
						<a href="#" className="transition-colors hover:text-primary">
							Contato
						</a>
					</div>
				</div>
			</footer>
		</main>
	)
}
