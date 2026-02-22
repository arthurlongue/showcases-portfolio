import { Heart, Package, Wheat } from "lucide-react"
import { Accordion, ChatBubbles, HeroImage, RecipeCard, RevealSection } from "./components/client"
import { padariaData } from "./data"

export default function PadariaEssencialPage() {
	return (
		<main className="min-h-screen bg-background pb-20 text-foreground">
			{/* Navbar */}
			<nav className="fixed top-0 z-50 flex w-full items-center justify-between border-padaria-tan/20 border-b bg-background/80 px-6 py-4 backdrop-blur-md">
				<div className="font-bold font-serif text-2xl text-padaria-brown">A Padoca</div>
				<button
					type="button"
					className="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-[#4A7A3A]"
				>
					Começar
				</button>
			</nav>

			{/* Hero */}
			<section className="mx-auto flex min-h-[90vh] max-w-[1100px] items-center px-6 pt-32 pb-20">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
					<div className="pr-4">
						<h1 className="mb-6 font-medium font-serif text-[clamp(32px,4vw,48px)] text-padaria-brown leading-[1.2]">
							{padariaData.hero.headline}
						</h1>
						<p className="mb-8 max-w-md text-lg text-muted-foreground leading-relaxed">
							{padariaData.hero.subheadline}
						</p>
						<button
							type="button"
							className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 font-medium text-lg text-primary-foreground shadow-md transition-colors hover:bg-[#4A7A3A]"
						>
							{padariaData.hero.cta}
						</button>
					</div>
					<div className="aspect-square h-full overflow-hidden rounded-[16px] shadow-xl md:aspect-auto">
						<HeroImage src={padariaData.hero.image} />
					</div>
				</div>
			</section>

			{/* Trust Section */}
			<section className="bg-padaria-cream px-6 py-20">
				<div className="mx-auto max-w-[1100px]">
					<div className="mb-16 text-center">
						<p className="mb-4 font-bold text-[11px] text-primary uppercase tracking-[0.1em]">
							NOSSA RECEITA DE SUCESSO
						</p>
						<h2 className="font-medium font-serif text-[clamp(24px,3vw,36px)] text-padaria-brown">
							O segredo é amor. E bom trigo.
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
						<RevealSection delay={0.1} className="flex flex-col items-center">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-padaria-tan/30 text-padaria-brown">
								<Wheat className="h-8 w-8" />
							</div>
							<h3 className="mb-3 font-medium font-serif text-padaria-brown text-xl">
								{padariaData.trust[0].title}
							</h3>
							<p className="text-muted-foreground">{padariaData.trust[0].description}</p>
						</RevealSection>
						<RevealSection delay={0.2} className="flex flex-col items-center">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-padaria-tan/30 text-padaria-brown">
								<Heart className="h-8 w-8" />
							</div>
							<h3 className="mb-3 font-medium font-serif text-padaria-brown text-xl">
								{padariaData.trust[1].title}
							</h3>
							<p className="text-muted-foreground">{padariaData.trust[1].description}</p>
						</RevealSection>
						<RevealSection delay={0.3} className="flex flex-col items-center">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-padaria-tan/30 text-padaria-brown">
								<Package className="h-8 w-8" />
							</div>
							<h3 className="mb-3 font-medium font-serif text-padaria-brown text-xl">
								{padariaData.trust[2].title}
							</h3>
							<p className="text-muted-foreground">{padariaData.trust[2].description}</p>
						</RevealSection>
					</div>
				</div>
			</section>

			{/* Chat / Personalization */}
			<section className="mx-auto max-w-[1100px] px-6 py-24">
				<div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
					<div>
						<p className="mb-4 font-bold text-[11px] text-primary uppercase tracking-[0.1em]">
							A SUA CESTA
						</p>
						<h2 className="mb-6 font-medium font-serif text-[clamp(24px,3vw,36px)] text-padaria-brown">
							Feito para você, <br />
							entregue para você.
						</h2>
						<p className="mb-8 text-muted-foreground leading-relaxed">
							Nós sabemos que cada família tem um tamanho de fome diferente. Conte-nos o que você
							gosta e nós cuidamos do resto. Pão quentinho garantido todo dia de manhã, sem você
							precisar sair de pijama.
						</p>
						<button
							type="button"
							className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
						>
							Fazer o Quiz
						</button>
					</div>
					<div>
						<ChatBubbles chat={padariaData.chat} />
					</div>
				</div>
			</section>

			{/* Recipes */}
			<section className="bg-[var(--padaria-terracotta)] px-6 py-24">
				<div className="mx-auto max-w-[1100px]">
					<div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
						<div>
							<p className="mb-4 font-bold text-[#F5EDE3]/80 text-[11px] uppercase tracking-[0.1em]">
								NOSSOS CLÁSSICOS
							</p>
							<h2 className="font-medium font-serif text-[clamp(24px,3vw,36px)] text-white">
								Fornada fresca do dia.
							</h2>
						</div>
						<button
							type="button"
							className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-[var(--padaria-terracotta)]"
						>
							Ver todo o menu
						</button>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{padariaData.recipes.map((recipe, i) => (
							<RecipeCard
								key={i}
								index={i}
								title={recipe.title}
								description={recipe.description}
								image={recipe.image}
								ingredients={recipe.ingredients}
							/>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-padaria-cream px-6 py-24">
				<div className="mx-auto max-w-[1100px] text-center">
					<h2 className="mb-12 font-medium font-serif text-[clamp(24px,3vw,36px)] text-padaria-brown">
						Como ajudamos.
					</h2>
					<Accordion items={padariaData.faqs} />
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[var(--padaria-brown)] px-6 py-20 text-[#F5EDE3]">
				<div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-4">
					<div className="col-span-1 md:col-span-2">
						<div className="mb-6 font-bold font-serif text-3xl">A Padoca</div>
						<p className="max-w-xs text-[#F5EDE3]/70 leading-relaxed">
							Levando o cheirinho de pão quente para milhares de lares todas as manhãs.
						</p>
					</div>
					<div>
						<h4 className="mb-6 font-bold text-sm tracking-wider">PRODUTOS</h4>
						<ul className="space-y-4 text-[#F5EDE3]/70">
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Pães
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Doces
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Cestas
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-6 font-bold text-sm tracking-wider">A PADOCA</h4>
						<ul className="space-y-4 text-[#F5EDE3]/70">
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Nossa História
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Sustentabilidade
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-white">
									Contato
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</main>
	)
}
