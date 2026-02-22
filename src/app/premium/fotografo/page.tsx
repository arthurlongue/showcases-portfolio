import { ArrowRight, Star } from "lucide-react"
import {
	DecorativeSparkle,
	GlassButton,
	PhotoCard,
	RevealSection,
	WatercolorBlobs,
} from "./components/client"
import { fotoData } from "./data"

export default function FotografoPremiumPage() {
	return (
		<main className="relative min-h-screen bg-[var(--foto-bg-base)] font-sans text-[var(--foto-text-primary)]">
			<WatercolorBlobs />

			{/* Navigation */}
			<nav className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-8">
				<div className="font-medium font-serif text-2xl italic tracking-tight">
					Aurora<span className="text-[var(--foto-accent-purple)]">.</span>
				</div>
				<ul className="hidden gap-10 font-medium text-[var(--foto-text-secondary)] text-sm tracking-wide md:flex">
					<li className="cursor-pointer transition-colors hover:text-[var(--foto-text-primary)]">
						Galeria
					</li>
					<li className="cursor-pointer transition-colors hover:text-[var(--foto-text-primary)]">
						Serviços
					</li>
					<li className="cursor-pointer transition-colors hover:text-[var(--foto-text-primary)]">
						Sobre
					</li>
				</ul>
				<GlassButton>Contato</GlassButton>
			</nav>

			{/* Hero Section */}
			<section className="relative z-10 mx-auto flex min-h-screen max-w-[1000px] flex-col items-center justify-center px-6 pt-40 pb-20 text-center">
				<DecorativeSparkle className="top-[25%] left-[20%]" />
				<DecorativeSparkle className="top-[15%] right-[25%]" />
				<DecorativeSparkle className="bottom-[30%] left-[30%]" />

				<RevealSection>
					<h1 className="mb-8 font-medium font-serif text-[clamp(48px,7vw,84px)] text-[var(--foto-text-primary)] italic leading-[1.05]">
						A luz como matéria-prima <br /> para a sua essência.
					</h1>
					<p className="mx-auto mb-12 max-w-2xl font-sans text-[var(--foto-text-secondary)] text-lg leading-relaxed md:text-xl">
						{fotoData.hero.subheadline}
					</p>
					<div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
						<GlassButton primary>{fotoData.hero.cta2}</GlassButton>
						<button
							type="button"
							className="border-[var(--foto-text-primary)] border-b pb-1 font-medium text-[var(--foto-text-primary)] text-sm uppercase tracking-widest transition-colors hover:border-[var(--foto-accent-purple)] hover:text-[var(--foto-accent-purple)]"
						>
							{fotoData.hero.cta1}
						</button>
					</div>
				</RevealSection>
			</section>

			{/* Why Us / Manifesto */}
			<section className="relative z-10 px-6 py-32">
				<div className="mx-auto max-w-[800px] text-center">
					<RevealSection>
						<DecorativeSparkle className="-top-12 left-1/2" />
						<h2 className="mb-8 font-serif text-[clamp(32px,4vw,48px)] text-[var(--foto-text-primary)] italic">
							{fotoData.whyUs.headline}
						</h2>
						<p className="text-[var(--foto-text-secondary)] text-xl leading-relaxed">
							{fotoData.whyUs.text}
						</p>
					</RevealSection>
				</div>
			</section>

			{/* Services */}
			<section className="relative z-10 px-6 py-32">
				<div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 md:grid-cols-3 lg:gap-24">
					{fotoData.services.map((service, i) => (
						<RevealSection key={i} delay={i * 0.2} className="relative">
							{/* Abstract SVG Decoration behind title */}
							<div className="absolute -top-8 -left-8 h-24 w-24 text-[var(--foto-accent-purple)] opacity-30">
								{i === 0 && (
									<svg
										aria-hidden="true"
										viewBox="0 0 100 100"
										className="h-full w-full"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
									>
										<circle cx="50" cy="50" r="40" />
										<circle cx="45" cy="45" r="40" />
									</svg>
								)}
								{i === 1 && (
									<svg
										aria-hidden="true"
										viewBox="0 0 100 100"
										className="h-full w-full"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
									>
										<path d="M10,50 Q25,25 50,50 T90,50" />
									</svg>
								)}
								{i === 2 && (
									<svg
										aria-hidden="true"
										viewBox="0 0 100 100"
										className="h-full w-full"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
									>
										<circle cx="50" cy="50" r="40" />
										<path d="M50,10 L50,90 M10,50 L90,50" />
									</svg>
								)}
							</div>

							<h3 className="relative z-10 mb-6 font-serif text-3xl text-[var(--foto-text-primary)] italic md:text-4xl">
								{service.title}
							</h3>
							<p className="relative z-10 text-[var(--foto-text-secondary)] leading-loose">
								{service.desc}
							</p>
							<div className="relative z-10 mt-8">
								<ArrowRight className="h-5 w-5 text-[var(--foto-accent-purple)]" />
							</div>
						</RevealSection>
					))}
				</div>
			</section>

			{/* Showcase Grid */}
			<section className="relative z-10 overflow-hidden px-6 pt-20 pb-40 md:px-12">
				<RevealSection className="mb-24 text-center">
					<h2 className="font-serif text-[clamp(40px,5vw,64px)] italic">Portfólio Selecionado</h2>
				</RevealSection>

				<div className="mx-auto max-w-[1200px]">
					<div className="columns-1 gap-8 space-y-12 md:columns-2 lg:columns-3">
						{fotoData.showcase.map((src, i) => (
							<PhotoCard key={i} index={i} src={src} />
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="relative z-10 px-6 py-32">
				<div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
					{fotoData.testimonials.map((test, i) => (
						<RevealSection key={i} delay={i * 0.2}>
							<div className="foto-glass group flex h-full flex-col justify-between rounded-[24px] border border-[var(--foto-glass-border)] p-10 transition-colors hover:border-white lg:p-14">
								<div className="mb-12">
									<div className="mb-8 flex gap-1 text-[#E8A0CF]">
										{[...Array(5)].map((_, j) => (
											<Star key={j} className="h-4 w-4 fill-current" />
										))}
									</div>
									<p className="font-serif text-2xl text-[var(--foto-text-primary)] italic leading-relaxed lg:text-3xl">
										"{test.quote}"
									</p>
								</div>
								<div className="flex items-center gap-4 border-[var(--foto-text-primary)]/10 border-t pt-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--foto-text-primary)] font-serif text-white text-xl">
										{test.name.charAt(0)}
									</div>
									<div>
										<div className="font-bold text-sm uppercase tracking-wide">{test.name}</div>
										<div className="text-[var(--foto-text-secondary)] text-sm">{test.type}</div>
									</div>
								</div>
							</div>
						</RevealSection>
					))}
				</div>
			</section>

			{/* Footer / Final CTA */}
			<footer className="relative z-10 mt-20 border-[var(--foto-text-primary)]/5 border-t px-6 pt-32 pb-12">
				<div className="mx-auto mb-32 max-w-[800px] text-center">
					<DecorativeSparkle className="-top-8 right-1/4" />
					<h2 className="mb-10 font-serif text-[clamp(40px,5vw,64px)] text-[var(--foto-text-primary)] italic">
						Pronto para criar <br /> algo eterno?
					</h2>
					<GlassButton primary>Falar com Aurora</GlassButton>
				</div>

				<div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 font-medium text-[var(--foto-text-secondary)] text-sm md:flex-row">
					<div className="font-serif text-2xl text-[var(--foto-text-primary)] italic">Aurora.</div>
					<div className="flex gap-8 uppercase tracking-widest">
						<a href="#" className="transition-colors hover:text-[var(--foto-text-primary)]">
							Instagram
						</a>
						<a href="#" className="transition-colors hover:text-[var(--foto-text-primary)]">
							Behance
						</a>
						<a href="#" className="transition-colors hover:text-[var(--foto-text-primary)]">
							Vimeo
						</a>
					</div>
					<div>© 2026. Fine Art Photography.</div>
				</div>
			</footer>
		</main>
	)
}
