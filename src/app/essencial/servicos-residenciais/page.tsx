import { ArrowRight } from "lucide-react"
import { ComparisonCard, LineIconCard, MinimalPhoto, RevealSection } from "./components/client"
import { Icons } from "./components/icons"
import { servicesData } from "./data"

export default function HomeServicesPage() {
	return (
		<main className="min-h-screen bg-[var(--sr-bg-white)] text-[var(--sr-text-primary)]">
			{/* Navbar */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between border-neutral-100 border-b bg-[var(--sr-bg-white)]/90 px-6 py-6 backdrop-blur-md transition-all duration-300 md:px-12">
				<div className="font-medium font-serif text-2xl text-[var(--sr-text-primary)] italic tracking-tight">
					Habitat<span className="ml-0.5 text-[#A3B18A] opacity-60">.</span>
				</div>
				<ul className="hidden gap-8 font-semibold text-[var(--sr-text-secondary)] text-sm uppercase tracking-widest md:flex">
					<li className="cursor-pointer transition-colors hover:text-[var(--sr-accent-dark)]">
						Serviços
					</li>
					<li className="cursor-pointer transition-colors hover:text-[var(--sr-accent-dark)]">
						Método
					</li>
					<li className="cursor-pointer transition-colors hover:text-[var(--sr-accent-dark)]">
						Projetos
					</li>
				</ul>
				<button
					type="button"
					className="rounded-[4px] bg-[var(--sr-accent-dark)] px-6 py-2.5 font-semibold text-sm text-white uppercase tracking-wider transition-colors hover:bg-neutral-800"
				>
					Contato
				</button>
			</nav>

			{/* Hero Section */}
			<section className="mx-auto flex max-w-[1200px] flex-col items-center px-6 pt-40 pb-20 text-center md:px-12">
				<RevealSection className="mx-auto flex max-w-4xl flex-col items-center">
					<span className="mb-6 block rounded-full border border-neutral-200 px-4 py-1.5 font-bold text-[var(--sr-text-secondary)] text-xs uppercase tracking-[0.2em]">
						Manutenção & Reformas
					</span>
					<h1 className="mb-8 font-medium font-serif text-[clamp(36px,5vw,64px)] text-[var(--sr-text-primary)] leading-[1.1]">
						{servicesData.hero.headline}
					</h1>

					<button
						type="button"
						className="group mt-4 inline-flex items-center rounded-[4px] border border-[var(--sr-accent-dark)] px-8 py-4 font-semibold text-[var(--sr-accent-dark)] text-sm uppercase tracking-wider transition-colors hover:bg-[var(--sr-accent-dark)] hover:text-white"
					>
						{servicesData.hero.cta}
						<ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</button>
				</RevealSection>

				<RevealSection delay={0.3} className="mt-20 h-[50vh] w-full md:mt-24 md:h-[70vh]">
					<MinimalPhoto
						src={servicesData.hero.image}
						alt="Clean minimalist interior"
						className="h-full w-full"
					/>
				</RevealSection>
			</section>

			{/* Process (Mint) */}
			<section className="border-black/5 border-t border-b bg-[var(--sr-bg-mint)] px-6 py-32 md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<RevealSection className="mb-20 text-center">
						<h2 className="font-medium font-serif text-[clamp(28px,4vw,40px)] text-[var(--sr-text-primary)]">
							Nosso Método
						</h2>
					</RevealSection>

					<div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
						<div className="absolute top-[40px] right-[10%] left-[10%] z-0 hidden h-[1px] bg-black/10 md:block" />

						{servicesData.process.map((step, i) => (
							<div key={i} className="relative z-10 flex flex-col items-center text-center">
								<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-black/5 bg-white text-[var(--sr-text-primary)] shadow-sm">
									<div className="scale-125">
										{(() => {
											const Icon = Icons[step.icon as keyof typeof Icons]
											return <Icon strokeWidth={1} width={32} height={32} />
										})()}
									</div>
								</div>
								<h3 className="mb-4 font-serif text-2xl text-[var(--sr-text-primary)]">
									{step.title}
								</h3>
								<p className="text-[var(--sr-text-secondary)] text-sm leading-relaxed">
									{step.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Grid (White) */}
			<section className="bg-white px-6 py-32 md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<div className="mb-20 flex flex-col justify-between gap-8 border-neutral-100 border-b pb-12 md:flex-row md:items-end">
						<RevealSection className="max-w-2xl">
							<h2 className="mb-4 font-medium font-serif text-[clamp(32px,4vw,44px)]">
								Especialidades
							</h2>
							<p className="text-[var(--sr-text-secondary)] text-lg leading-relaxed">
								Atuamos de forma modular ou completa. Nossas equipes são setoriais e especialistas
								no que fazem.
							</p>
						</RevealSection>
						<RevealSection delay={0.2}>
							<button
								type="button"
								className="hidden border-[var(--sr-accent-dark)] border-b-2 pb-1 font-bold text-xs uppercase tracking-[0.1em] transition-colors hover:border-[var(--sr-text-secondary)] hover:text-[var(--sr-text-secondary)] md:block"
							>
								Ver Projetos Mestre
							</button>
						</RevealSection>
					</div>

					<div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
						{servicesData.services.map((service, i) => (
							<div key={i} className="group cursor-pointer">
								<div className="mb-6 h-12 w-12 text-[var(--sr-text-primary)] transition-transform group-hover:-translate-y-1">
									{(() => {
										const Icon = Icons[service.icon as keyof typeof Icons]
										return <Icon strokeWidth={1} width={40} height={40} />
									})()}
								</div>
								<h3 className="mb-3 font-serif text-xl">{service.title}</h3>
								<p className="text-[var(--sr-text-secondary)] text-sm leading-relaxed transition-colors group-hover:text-[var(--sr-text-primary)]">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Us / Dark Section */}
			<section className="bg-[var(--sr-bg-dark)] px-6 py-32 text-white md:px-12">
				<div className="mx-auto max-w-[1200px]">
					<RevealSection className="mb-24 text-center">
						<h2 className="font-medium font-serif text-[clamp(32px,4vw,48px)]">
							{servicesData.whyUs.headline}
						</h2>
					</RevealSection>

					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
						{servicesData.whyUs.features.map((feat, i) => (
							<LineIconCard
								key={i}
								dark
								index={i}
								iconName={feat.icon}
								title={feat.title}
								desc={feat.desc}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Comparison Section (Pink) */}
			<section className="border-white/20 border-t bg-[var(--sr-bg-pink)] px-6 py-32 md:px-12">
				<div className="mx-auto max-w-[1000px]">
					<RevealSection className="mb-16 text-center">
						<h2 className="mb-6 font-medium font-serif text-[clamp(28px,4vw,40px)] text-[var(--sr-text-primary)]">
							{servicesData.comparison.headline}
						</h2>
					</RevealSection>

					<div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
						{servicesData.comparison.cards.map((card, i) => (
							<ComparisonCard
								key={i}
								index={i}
								title={card.title}
								points={card.points}
								isPremium={i === 1}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Quote / Case Study (Cream) */}
			<section className="relative overflow-hidden bg-[var(--sr-bg-cream)] px-6 py-32 md:px-12">
				<div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-12 md:flex-row md:gap-0">
					{/* Text Overlapping Left */}
					<div className="z-20 w-full md:-mr-16 md:w-5/12">
						<RevealSection className="relative rounded-[8px] border border-black/5 bg-white p-10 shadow-xl md:p-14">
							<div className="absolute top-1/2 left-0 h-[40%] w-[4px] -translate-y-1/2 bg-[#A3B18A]" />
							<p className="mb-8 font-serif text-[var(--sr-text-primary)] text-xl italic leading-relaxed md:text-2xl">
								"{servicesData.quote.text}"
							</p>
							<div>
								<p className="mb-1 font-bold text-sm uppercase tracking-widest">
									{servicesData.quote.author}
								</p>
								<p className="text-[var(--sr-text-secondary)] text-sm">
									{servicesData.quote.location}
								</p>
							</div>
						</RevealSection>
					</div>

					{/* Image Right */}
					<RevealSection delay={0.2} className="z-10 h-[50vh] w-full md:h-[65vh] md:w-8/12">
						<MinimalPhoto
							src={servicesData.quote.image}
							alt="Finished Interior"
							className="h-full w-full"
						/>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-neutral-100 border-t bg-white px-6 py-20 md:px-12">
				<div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-6">
					<div className="md:col-span-6">
						<div className="mb-6 font-medium font-serif text-3xl text-[var(--sr-text-primary)] italic tracking-tight">
							Habitat<span className="ml-0.5 text-[#A3B18A] opacity-60">.</span>
						</div>
						<p className="max-w-sm text-[var(--sr-text-secondary)] text-sm">
							Elevando o padrão de manutenções e pequenas obras residenciais através de design,
							processo e transparência.
						</p>
					</div>
					<div className="flex flex-col gap-4 font-semibold text-[var(--sr-text-primary)] text-sm uppercase tracking-wide md:col-span-3">
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Serviços
						</a>
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Sobre Nós
						</a>
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Casos de Uso
						</a>
					</div>
					<div className="flex flex-col gap-4 font-semibold text-[var(--sr-text-primary)] text-sm uppercase tracking-wide md:col-span-3">
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Instagram
						</a>
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Pinterest
						</a>
						<a href="#" className="transition-colors hover:text-[var(--sr-text-secondary)]">
							Contato
						</a>
					</div>
				</div>
				<div className="mx-auto mt-20 flex max-w-[1200px] justify-between border-neutral-100 border-t pt-8 text-[var(--sr-text-secondary)] text-xs uppercase tracking-wider">
					<span>© 2026 Habitat Manutenção.</span>
					<span>Feito com exatidão.</span>
				</div>
			</footer>
		</main>
	)
}
