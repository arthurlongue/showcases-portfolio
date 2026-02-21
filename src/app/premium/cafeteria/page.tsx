import { ArrowRight, Play } from "lucide-react"
import {
	FadeUp,
	FloatingNavbar,
	HeroTextStagger,
	HeroVideoZoom,
	MagneticButton,
	OriginShuffler,
	PhilosophySection,
	SensorialTypewriter,
	StickyStackingCards,
	SubscriptionScheduler,
} from "./components/client"
import { auraData } from "./data"

export default function CafeteriaPremiumPage() {
	return (
		<main className="min-h-screen bg-[#FAF7F3] text-[#1A1208] selection:bg-[#C49A5C]/30">
			<FloatingNavbar />

			{/* Hero Section */}
			<section className="relative flex min-h-screen flex-col justify-end px-6 pt-32 pb-24 md:px-12">
				<HeroVideoZoom video={auraData.hero.video} poster={auraData.hero.poster} />

				<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-12 text-[#FAF7F3] md:flex-row md:items-end">
					<div className="w-full max-w-4xl">
						<HeroTextStagger
							text={auraData.hero.headline[0]}
							className="font-medium font-sans text-[#C49A5C] text-[clamp(20px,6vw,48px)] uppercase tracking-widest"
						/>
						<HeroTextStagger
							text={auraData.hero.headline[1]}
							className="pr-4 font-dm-serif text-[clamp(56px,12vw,160px)] italic leading-[0.85]"
						/>
					</div>

					<div className="w-full max-w-md">
						<FadeUp delay={0.6}>
							<p className="mb-8 text-[#FAF7F3]/80 text-lg leading-relaxed">
								{auraData.hero.subheadline}
							</p>
						</FadeUp>
						<FadeUp delay={0.8} className="flex items-center gap-4">
							<MagneticButton className="group flex items-center rounded-full bg-[#C49A5C] px-8 py-4 font-bold text-[#FAF7F3] transition-colors hover:bg-white hover:text-[#1A1208]">
								{auraData.hero.cta}
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</MagneticButton>
							<MagneticButton className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FAF7F3]/20 backdrop-blur-md transition-colors hover:bg-[#FAF7F3] hover:text-[#1A1208]">
								<Play className="h-5 w-5 fill-current" />
							</MagneticButton>
						</FadeUp>
					</div>
				</div>
			</section>

			{/* Features / Artefatos Funcionais */}
			<section className="relative z-20 mx-auto  max-w-[1400px] px-6">
				<FadeUp delay={0.2} className="pt-32 mb-16 flex items-center justify-between md:mb-24">
					<h2 className="font-dm-serif text-5xl md:text-7xl">
						Artefatos <br />
						<span className="text-[#C49A5C] italic">Sensoriais.</span>
					</h2>
					<p className="hidden max-w-xs text-right font-medium text-[#1A1208]/50 text-sm uppercase tracking-widest md:block">
						Arquitetura Sensorial
						<br />
						Afinada em laboratório
					</p>
				</FadeUp>

				<div className="grid grid-cols-1 gap-6 pb-32 md:grid-cols-3">
					<FadeUp delay={0.3} className="h-full">
						<OriginShuffler />
					</FadeUp>
					<FadeUp delay={0.4} className="h-full">
						<SensorialTypewriter />
					</FadeUp>
					<FadeUp delay={0.5} className="h-full">
						<SubscriptionScheduler />
					</FadeUp>
				</div>
			</section>

			{/* Philosophy / Parallax */}
			<PhilosophySection />

			{/* Protocolo da Torra */}
			<section className="relative z-10 bg-[#FAF7F3] py-32">
				<div className="mx-auto max-w-[1400px] px-6 text-center">
					<FadeUp delay={0.2}>
						<p className="mb-4 font-bold text-[#1A1208]/50 text-sm uppercase tracking-widest">
							Transparência Total
						</p>
						<h2 className="font-dm-serif text-6xl md:text-8xl">
							O Protocolo
							<br />
							<span className="text-[#C49A5C] italic">Aura.</span>
						</h2>
					</FadeUp>
				</div>
				<StickyStackingCards />
			</section>

			{/* Footer */}
			<footer className="relative z-20 mt-24 overflow-hidden rounded-t-[3rem] bg-[#1A1208] px-6 py-20 text-[#FAF7F3] md:rounded-t-[4rem] md:py-32">
				<div className="mx-auto max-w-[1400px]">
					<div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
						<div>
							<h2 className="mb-8 font-dm-serif text-5xl italic md:text-8xl">Aura.</h2>
							<div className="flex items-center gap-3 font-mono text-[#C49A5C] text-xs uppercase tracking-widest">
								<div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
								Ecosistema de Torra Operacional
							</div>
						</div>

						<div className="flex flex-col justify-end">
							<p className="mb-8 max-w-md text-[#FAF7F3]/70 text-xl">
								Faça parte da vanguarda do café especial. Acesso exclusivo a microlotes numerados.
							</p>
							<div className="flex w-full max-w-md items-center border-[#FAF7F3]/20 border-b pb-2 transition-colors focus-within:border-[#C49A5C]">
								<input
									type="email"
									placeholder="Seu melhor e-mail"
									className="w-full bg-transparent outline-none placeholder:text-[#FAF7F3]/30"
								/>
								<MagneticButton className="text-[#C49A5C] transition-colors hover:text-white">
									<ArrowRight className="h-6 w-6" />
								</MagneticButton>
							</div>
						</div>
					</div>

					<div className="mt-32 flex flex-col items-center justify-between border-[#FAF7F3]/10 border-t pt-8 font-mono text-[#FAF7F3]/40 text-sm md:flex-row">
						<p>© 2026 Aura Roasters. Direitos Reservados.</p>
						<div className="mt-4 flex gap-8 uppercase tracking-widest md:mt-0">
							<a href="#" className="transition-colors hover:text-[#C49A5C]">
								Instagram
							</a>
							<a href="#" className="transition-colors hover:text-[#C49A5C]">
								Journal
							</a>
							<a href="#" className="transition-colors hover:text-[#C49A5C]">
								Contato
							</a>
						</div>
					</div>
				</div>
			</footer>
		</main>
	)
}
