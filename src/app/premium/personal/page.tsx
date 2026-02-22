import { Target } from "lucide-react"
import {
	AbstractRender,
	BlockStat,
	FloatingMockup,
	GhostButton,
	RevealSection,
} from "./components/client"
import { personalData } from "./data"

export default function PersonalPremiumPage() {
	return (
		<main className="min-h-screen overflow-hidden bg-[var(--pt-bg-dark)] font-sans text-[var(--pt-text-on-dark)]">
			{/* Navbar */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 mix-blend-difference">
				<div className="font-bold text-2xl tracking-tighter">
					SPEEDY<span className="text-[#4ADE80]">.</span>FIT
				</div>
				<GhostButton className="border-[#4ADE80] px-6 py-2 text-[#4ADE80] text-sm hover:border-transparent hover:bg-[#4ADE80] hover:text-black">
					Login
				</GhostButton>
			</nav>

			{/* Hero Section (Black) */}
			<section className="relative z-10 flex min-h-screen items-center bg-[var(--pt-bg-dark)] px-6 pt-32 pb-20">
				{/* Backglow */}
				<div className="pointer-events-none absolute top-[20%] right-[10%] h-[50vw] w-[50vw] rounded-full bg-[#4ADE80]/5 blur-[100px]" />

				<div className="relative z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<RevealSection>
							<h1 className="mb-8 font-bold text-[clamp(44px,7vw,80px)] leading-[1.05] tracking-tight">
								<span className="font-light text-white/80">Treino</span> Fácil{" "}
								<span className="opacity-40">&</span> <br />
								Rápido<sup className="ml-2 font-normal text-2xl text-[#4ADE80]">®</sup>
							</h1>
							<p className="mb-12 max-w-lg font-medium text-[var(--pt-text-muted-dark)] text-xl leading-relaxed md:text-2xl">
								{personalData.hero.subheadline}
							</p>

							<GhostButton className="w-full border-white px-10 py-5 text-lg text-white hover:border-[#4ADE80] group-hover:bg-[#4ADE80] sm:w-auto">
								{personalData.hero.cta}
							</GhostButton>
						</RevealSection>
					</div>

					<div className="perspective-[1200px] relative mt-12 h-[60vh] lg:col-span-5 lg:mt-0 lg:h-[80vh]">
						<div className="absolute top-1/2 left-1/2 h-full max-h-[700px] w-full -translate-x-1/2 -translate-y-1/2 sm:h-auto">
							<FloatingMockup src={personalData.hero.uiMockup} className="h-full w-full" />
						</div>
					</div>
				</div>
			</section>

			{/* Stats / Value (White Transition) */}
			<section className="relative z-10 bg-[var(--pt-bg-light)] px-6 py-32 text-[var(--pt-text-on-light)]">
				<div className="mx-auto max-w-[1100px]">
					<div className="flex flex-col justify-between gap-12 border-black/10 border-t pt-20 md:flex-row">
						{personalData.stats.map((stat, i) => (
							<BlockStat key={i} value={stat.value} label={stat.label} />
						))}
					</div>
				</div>
			</section>

			{/* 3D Render Divider */}
			<section className="h-[40vh] w-full bg-[var(--pt-bg-dark)]">
				<AbstractRender src={personalData.images.abstractDark} className="h-[40vh]" />
			</section>

			{/* Features Alternating (Black) */}
			<section className="relative z-10 bg-[var(--pt-bg-dark)] px-6 py-32">
				<div className="mx-auto max-w-[1100px] space-y-40">
					{personalData.features.map((feat, i) => (
						<div
							key={i}
							className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24`}
						>
							{/* Content */}
							<div className="w-full flex-1">
								<RevealSection>
									<span className="mb-6 block w-max rounded-full border border-white/10 px-4 py-2 font-mono text-[var(--pt-text-muted-dark)] text-sm tracking-[0.2em]">
										{feat.id}
									</span>
									<h2 className="mb-6 font-bold text-[clamp(32px,4vw,48px)] leading-tight tracking-tight">
										{feat.title.split(" ")[0]}{" "}
										<span className="font-light text-[#4ADE80]">
											{feat.title.split(" ").slice(1).join(" ")}
										</span>
									</h2>
									<p className="max-w-md text-[var(--pt-text-muted-dark)] text-lg leading-relaxed">
										{feat.desc}
									</p>
								</RevealSection>
							</div>

							{/* Mockup Box */}
							<div className="relative flex aspect-square w-full flex-1 items-center justify-center overflow-hidden rounded-[24px] border border-white/5 bg-[var(--pt-surface-dark)]">
								<div className="absolute inset-0 bg-gradient-to-tr from-[#4ADE80]/5 to-transparent opacity-50" />
								<RevealSection className="z-10 text-center">
									<Target className="mx-auto mb-4 h-16 w-16 text-[#4ADE80] opacity-50" />
									<div className="font-mono text-[#4ADE80] text-sm tracking-widest">
										SYSTEM.ONLINE
									</div>
								</RevealSection>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Manifesto (White) */}
			<section className="relative z-10 border-black/10 border-t bg-[var(--pt-bg-light)] px-6 py-40 text-[var(--pt-text-on-light)]">
				<div className="mx-auto max-w-[800px] text-center">
					<RevealSection>
						<h2 className="mb-12 font-bold text-[clamp(48px,6vw,72px)] tracking-tighter">
							{personalData.manifesto.title}
						</h2>
						<p className="mx-auto max-w-2xl font-light text-2xl text-[var(--pt-text-muted-light)] leading-relaxed md:text-3xl">
							{personalData.manifesto.text.split(" ").map((word, i) => (
								<span
									key={i}
									className={word.length > 5 && i % 4 === 0 ? "font-medium text-black" : ""}
								>
									{word}{" "}
								</span>
							))}
						</p>

						<div className="mt-20">
							<GhostButton className="hover:!text-black border-2 border-black px-12 py-5 text-black text-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none">
								Desafie-se
							</GhostButton>
						</div>
					</RevealSection>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 border-white/10 border-t bg-[var(--pt-bg-dark)] px-6 py-16">
				<div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 md:flex-row">
					<div className="font-bold text-xl tracking-tight">
						SPEEDY<span className="text-[#4ADE80]">.</span>FIT
					</div>
					<div className="flex gap-8 font-semibold text-[var(--pt-text-muted-dark)] text-sm uppercase tracking-wider">
						<a href="#" className="transition-colors hover:text-white">
							Termos
						</a>
						<a href="#" className="transition-colors hover:text-white">
							Legal
						</a>
						<a href="#" className="transition-colors hover:text-white">
							Suporte
						</a>
					</div>
					<div className="font-mono text-[var(--pt-text-muted-dark)] text-sm">
						© 2026 SPEEDY.FIT {"//"} ALL SYSTEMS GO.
					</div>
				</div>
			</footer>
		</main>
	)
}
