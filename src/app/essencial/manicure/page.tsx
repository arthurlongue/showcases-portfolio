import { Star } from "lucide-react"
import { AvatarCircles, PastelCard, PillButton, RevealSection, StepCard } from "./components/client"
import { maniData } from "./data"

export default function ManicureEssencialPage() {
	return (
		<main className="min-h-screen bg-[var(--mani-bg-primary)] font-sans text-[var(--mani-text-primary)]">
			{/* Navbar */}
			<nav className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12">
				<div className="font-bold text-2xl tracking-tighter">
					NailBar<span className="text-[var(--mani-accent-main)]">.</span>
				</div>
				<PillButton className="px-6 py-2.5 text-sm" dark>
					Agendar
				</PillButton>
			</nav>

			{/* Hero Section */}
			<section className="mx-auto max-w-[1200px] px-6 pt-32 pb-20 text-center md:px-12 md:pt-48">
				<RevealSection className="mx-auto flex max-w-4xl flex-col items-center">
					<h1 className="mb-8 max-w-3xl font-bold text-[clamp(40px,6vw,72px)] leading-[1.1] tracking-tight">
						{maniData.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
						<span className="relative inline-block">
							<span className="relative z-10">
								{maniData.hero.headline.split(" ").slice(-2).join(" ")}
							</span>
							<span className="absolute bottom-2 left-0 -z-10 h-4 w-full rounded-full bg-[var(--mani-bg-peach)]" />
						</span>
					</h1>

					<p className="mb-12 max-w-2xl text-[var(--mani-text-secondary)] text-xl leading-relaxed md:text-2xl">
						{maniData.hero.subheadline}
					</p>

					<div className="flex flex-col items-center gap-6 sm:flex-row">
						<PillButton className="px-10 text-lg">{maniData.hero.cta}</PillButton>
						<span className="font-medium text-[var(--mani-text-secondary)]">✨ Rápido & Fácil</span>
					</div>

					<div className="mt-20 flex w-full flex-col items-center justify-center gap-12 border-[var(--mani-bg-peach)] border-t pt-12 md:flex-row">
						<AvatarCircles avatars={maniData.hero.avatars} />
						<div className="flex gap-8 md:gap-12">
							{maniData.stats.map((stat, i) => (
								<div key={i} className="text-left">
									<div className="mb-1 font-bold text-2xl md:text-3xl">{stat.value}</div>
									<div className="font-medium text-[var(--mani-text-secondary)] text-sm">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</RevealSection>
			</section>

			{/* Beliefs Grid */}
			<section className="px-6 py-24 md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<RevealSection className="mb-16 max-w-xl">
						<h2 className="mb-4 font-bold text-[clamp(32px,4vw,48px)] tracking-tight">
							Acreditamos que o <span className="text-[var(--mani-accent-main)]">básico</span>{" "}
							precisa ser impecável.
						</h2>
					</RevealSection>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
						{maniData.beliefs.map((belief, i) => (
							<PastelCard
								key={i}
								index={i}
								colorClass={belief.color}
								title={belief.title}
								desc={belief.desc}
							/>
						))}
					</div>
				</div>
			</section>

			{/* How it Works / Steps */}
			<section className="mt-12 rounded-[40px] border border-black/5 bg-white px-6 py-32 shadow-sm md:mx-6 md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<RevealSection className="mb-24 text-center">
						<h2 className="font-bold text-[clamp(36px,4vw,56px)] tracking-tight">
							Sua pausa da semana <br /> em 3 passos.
						</h2>
					</RevealSection>

					<div className="flex flex-col">
						{maniData.steps.map((step, i) => (
							<StepCard key={i} index={i} title={step.title} desc={step.desc} image={step.image} />
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="px-6 py-32 md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<RevealSection className="mb-16">
						<h2 className="font-bold text-[clamp(32px,4vw,48px)] tracking-tight">
							Por que nossas clientes <br /> não nos trocam?
						</h2>
					</RevealSection>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{maniData.testimonials.map((test, i) => (
							<RevealSection key={i} delay={i * 0.2}>
								<div className="flex h-full flex-col justify-between rounded-[32px] border border-[var(--mani-bg-peach)] bg-white p-10 shadow-sm md:p-12">
									<div>
										<div className="mb-8 flex gap-1 text-yellow-400">
											{[...Array(5)].map((_, j) => (
												<Star key={j} className="h-5 w-5 fill-current" />
											))}
										</div>
										<p className="mb-12 font-medium text-xl leading-relaxed md:text-2xl">
											"{test.quote}"
										</p>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--mani-bg-lavender)] font-bold text-black text-lg">
											{test.name.charAt(0)}
										</div>
										<div>
											<div className="font-bold">{test.name}</div>
											<div className="text-[var(--mani-text-secondary)] text-sm">{test.role}</div>
										</div>
									</div>
								</div>
							</RevealSection>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="px-6 py-32 text-center md:px-12">
				<div className="relative mx-auto max-w-[800px] overflow-hidden rounded-[48px] bg-[var(--mani-bg-peach)] p-12 md:p-20">
					<div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/2 rounded-full bg-[var(--mani-bg-yellow)] opacity-50 blur-3xl" />
					<div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full bg-[var(--mani-bg-mint)] opacity-50 blur-3xl" />

					<RevealSection className="relative z-10">
						<h2 className="mb-8 font-bold text-[clamp(40px,5vw,64px)] leading-[1.1] tracking-tight">
							Suas unhas prontas para a semana.
						</h2>
						<p className="mx-auto mb-12 max-w-lg text-[var(--mani-text-secondary)] text-xl">
							Escolha o melhor dia livre na nossa agenda online. É fácil e rápido.
						</p>
						<PillButton className="px-12 py-5 text-lg shadow-xl">
							Ver Horários Disponíveis
						</PillButton>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-black/5 border-t bg-white px-6 py-12 md:px-12">
				<div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
					<div className="font-bold text-2xl tracking-tighter">
						NailBar<span className="text-[var(--mani-accent-main)]">.</span>
					</div>
					<div className="flex gap-8 font-semibold text-[var(--mani-text-secondary)] text-sm">
						<a href="#" className="transition-colors hover:text-black">
							Instagram
						</a>
						<a href="#" className="transition-colors hover:text-black">
							WhatsApp
						</a>
						<a href="#" className="transition-colors hover:text-black">
							Chegar lá
						</a>
					</div>
				</div>
			</footer>
		</main>
	)
}
