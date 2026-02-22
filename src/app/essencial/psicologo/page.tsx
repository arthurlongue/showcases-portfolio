import {
	CredentialBadge,
	FaqGrid,
	HealingPath,
	RevealSection,
	StarRating,
	TreatmentAccordion,
} from "./components/client"
import { psiData } from "./data"

export default function PsicologoEssencialPage() {
	return (
		<main className="min-h-screen bg-[var(--psi-bg)] font-sans text-foreground selection:bg-[var(--psi-peach)] selection:text-[var(--psi-header)]">
			{/* Navbar */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between border-primary/5 border-b bg-[var(--psi-bg)]/80 px-6 py-4 backdrop-blur-md">
				<div className="font-medium font-serif text-2xl text-primary tracking-wide">
					Dra. Laura.
				</div>
				<button
					type="button"
					className="rounded-full border border-primary/20 px-5 py-2 font-semibold text-primary text-sm tracking-wide transition-colors hover:bg-primary/5"
				>
					Contato
				</button>
			</nav>

			{/* Hero & About */}
			<section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-24 pb-16 md:flex-row md:pt-32 md:pb-24 lg:gap-20">
				{/* Portrait Column */}
				<div className="relative w-full md:w-5/12">
					<RevealSection>
						<div className="relative z-10 mx-auto aspect-[4/5] max-w-[400px] overflow-hidden rounded-t-[100px] rounded-b-[24px] border-8 border-white/40 shadow-[0_8px_32px_rgba(139,69,19,0.15)]">
							<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#8B4513]/40 via-transparent to-transparent mix-blend-multiply" />
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={psiData.hero.image}
								alt="Dra. Laura Fragman"
								className="h-full w-full origin-bottom scale-[1.02] transform object-cover transition-transform duration-1000 hover:scale-[1.05]"
							/>
						</div>

						{/* Floating Badges */}
						<div className="pointer-events-none absolute inset-0 z-20">
							{psiData.hero.badges.map((badge, i) => (
								<CredentialBadge
									key={i}
									index={i}
									iconName={badge.icon}
									text={badge.text}
									className={
										i === 0
											? "top-[10%] -left-[10%]"
											: i === 1
												? "-right-[15%] bottom-[20%]"
												: "bottom-[5%] -left-[5%]"
									}
								/>
							))}
						</div>
					</RevealSection>
				</div>

				{/* Text Column */}
				<div className="flex w-full flex-col justify-center md:w-7/12">
					<RevealSection delay={0.2}>
						<h1 className="mb-6 max-w-xl font-serif text-[clamp(36px,4.5vw,56px)] text-primary leading-[1.15]">
							{psiData.hero.headline}
						</h1>
						<p className="mb-10 max-w-md text-lg text-muted-foreground leading-relaxed">
							{psiData.hero.subheadline}
						</p>
						<button
							type="button"
							className="inline-block transform rounded-full bg-[var(--psi-header)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6c350e] hover:shadow-[0_0_20px_rgba(139,69,19,0.25)]"
						>
							{psiData.hero.cta}
						</button>
					</RevealSection>

					<RevealSection
						delay={0.4}
						className="relative mt-16 rounded-3xl border border-white/60 bg-white/40 p-8 shadow-sm"
					>
						<div className="absolute -top-4 -left-2 rotate-12 font-serif text-6xl text-[var(--psi-peach)] opacity-60">
							"
						</div>
						<p className="relativ z-10 mb-6 text-primary leading-relaxed">{psiData.about.text}</p>
						<div className="text-right font-serif text-2xl text-[var(--psi-header)] italic">
							{psiData.about.signature}
						</div>
					</RevealSection>
				</div>
			</section>

			{/* Treatments Accordion */}
			<section className="mx-auto max-w-3xl px-6 py-24">
				<RevealSection className="mb-12 text-center">
					<span className="mb-4 block font-bold text-[var(--psi-accent)] text-sm uppercase tracking-widest">
						TRATAMENTOS
					</span>
					<h2 className="font-serif text-[clamp(28px,3vw,40px)] text-primary">
						Como posso ajudar você
					</h2>
				</RevealSection>

				<TreatmentAccordion items={psiData.treatments} />
			</section>

			{/* Healing Path */}
			<section className="border-primary/5 border-y bg-white px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<RevealSection className="mb-0 text-center md:mb-8">
						<span className="mb-4 block font-bold text-[var(--psi-accent)] text-sm uppercase tracking-widest">
							SUA JORNADA DE CURA
						</span>
						<h2 className="font-serif text-[clamp(28px,3vw,40px)] text-primary">
							O primeiro passo é o mais importante
						</h2>
					</RevealSection>

					<HealingPath process={psiData.process} />
				</div>
			</section>

			{/* Testimonial & FAQ */}
			<section className="mx-auto max-w-4xl px-6 py-24">
				{/* Testimonial */}
				<RevealSection className="mb-24 rounded-3xl border border-[var(--psi-olive)]/30 bg-[var(--psi-olive)]/15 p-8 text-center md:p-12">
					<StarRating />
					<p className="mb-8 font-serif text-2xl text-primary italic leading-relaxed md:text-3xl">
						"{psiData.testimonial.quote}"
					</p>
					<div className="flex flex-col items-center">
						<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 font-serif text-primary text-xl">
							{psiData.testimonial.name.charAt(0)}
						</div>
						<div className="font-bold text-primary">{psiData.testimonial.name}</div>
						<div className="text-muted-foreground text-sm">{psiData.testimonial.role}</div>
					</div>
				</RevealSection>

				{/* FAQ */}
				<RevealSection className="mb-12">
					<h2 className="mb-12 text-center font-serif text-[clamp(28px,3vw,40px)] text-primary">
						Dúvidas Frequentes
					</h2>
					<FaqGrid faqs={psiData.faqs} />
				</RevealSection>
			</section>

			{/* CTA Bottom */}
			<section className="border-[var(--psi-olive-dark)]/20 border-y bg-[var(--psi-olive)] px-6 py-24 text-center">
				<div className="mx-auto max-w-2xl">
					<RevealSection>
						<h2 className="mb-8 font-serif text-[#2B331A] text-[clamp(32px,4vw,48px)] leading-tight">
							Pronta para se sentir como você mesma novamente?
						</h2>
						<button
							type="button"
							className="transform rounded-full bg-[var(--psi-header)] px-10 py-5 font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c350e] hover:shadow-xl"
						>
							Vamos Iniciar?
						</button>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white px-6 py-12">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
					<div className="font-medium font-serif text-primary text-xl tracking-wide">
						Dra. Laura.
					</div>
					<div className="text-muted-foreground text-sm">
						© 2026 Laura Fragman. Psicologia Clínica. CRP 00/00000.
					</div>
					<div className="flex gap-6 font-semibold text-primary text-sm">
						<a href="#" className="transition-colors hover:text-[var(--psi-accent)]">
							Termos
						</a>
						<a href="#" className="transition-colors hover:text-[var(--psi-accent)]">
							Privacidade
						</a>
					</div>
				</div>
			</footer>
		</main>
	)
}
