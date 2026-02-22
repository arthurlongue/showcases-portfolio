import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import {
	BrutalButton,
	BrutalNav,
	BrutalReveal,
	GlitchText,
	HeroVideo,
	Marquee,
	ParallaxSection,
	ProcessStep,
	ScrollProgress,
	StaggerCounter,
	TestimonialBlock,
} from "./components/client"

const MENU_ITEMS = [
	{
		id: "01",
		name: "Vazio Negro",
		desc: "Espresso duplo. Sofrimento puro.",
		price: "R$ 12",
		image: "/showcases/cafeteria/xicara-mesa.webp",
	},
	{
		id: "02",
		name: "Ruído Branco",
		desc: "Cortado com leite de aveia. Quase tolerável.",
		price: "R$ 16",
		image: "/showcases/cafeteria/cortado.webp",
	},
	{
		id: "03",
		name: "Suor Frio",
		desc: "Cold brew de 24h. Palpitações garantidas.",
		price: "R$ 18",
		image: "/showcases/cafeteria/hibisco-gelado.webp",
	},
	{
		id: "04",
		name: "Coado",
		desc: "Single origin. Gosto de terra e frutas vermelhas.",
		price: "R$ 15",
		image: "/showcases/cafeteria/coado.webp",
	},
	{
		id: "05",
		name: "Matcha",
		desc: "Água de pântano para quem odeia café.",
		price: "R$ 22",
		image: "/showcases/cafeteria/matcha.webp",
	},
	{
		id: "06",
		name: "Massa",
		desc: "Croissant amanhecido. Você vai comprar mesmo assim.",
		price: "R$ 14",
		image: "/showcases/cafeteria/croissant.webp",
	},
]

const processSteps = [
	{
		number: "01",
		title: "Seleção Cruel",
		description:
			"Visitamos fazendas e rejeitamos 90% do que encontramos. Só grãos que nos fazem sentir algo entram.",
	},
	{
		number: "02",
		title: "Torra Sem Piedade",
		description:
			"Torramos até o grão chorar. Cada curva de torra é um ato de violência calculada contra a mediocridade.",
	},
	{
		number: "03",
		title: "Moagem na Hora",
		description:
			"Moemos no momento do pedido. Granulometria calculada ao milímetro. Café velho é café morto.",
	},
	{
		number: "04",
		title: "Extração Obsessiva",
		description:
			"93°C. 25 segundos. 9 bar. Cada variável controlada ao milissegundo. Isso não é arte — é engenharia.",
	},
]

const testimonials = [
	{
		quote:
			"Tomei o Vazio Negro e finalmente entendi o significado do sofrimento. Voltei no dia seguinte.",
		author: "Carla Mendes",
		role: "Arquiteta insone",
	},
	{
		quote:
			"O ambiente é hostil, o café é brutal, mas a experiência é absurdamente viciante. Melhor espresso da minha vida.",
		author: "Thiago Rocha",
		role: "Designer, ex-vegano",
	},
	{
		quote:
			"O Suor Frio destruiu minha relação com café de cápsula. Não tem volta. Obrigada pelo trauma.",
		author: "Fernanda Liu",
		role: "Sommelier de cafés",
	},
]

export default function CafeteriaPremiumPage() {
	return (
		<main className="relative min-h-screen">
			{/* Noise Overlay */}
			<div className="noise-overlay" />

			<ScrollProgress />
			<BrutalNav />

			{/* ▬▬▬ HERO ▬▬▬ */}
			<header className="relative flex min-h-[90vh] flex-col justify-end overflow-hidden border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] pt-20">
				{/* Parallax background image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/showcases/cafeteria/preparo.webp"
						alt="Café sendo preparado com precisão"
						fill
						className="cinematic-img scale-110"
						sizes="100vw"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-70" />
				</div>

				{/* Floating hero video */}
				<HeroVideo
					src="/showcases/cafeteria/destaque.mp4"
					className="absolute right-6 bottom-40 z-10 hidden h-[320px] w-[260px] md:right-12 md:bottom-48 md:block md:h-[400px] md:w-[320px]"
				/>

				<div className="relative z-10 p-6 pb-16 md:p-12 md:pb-24">
					<BrutalReveal>
						<h1 className="hero-text text-[var(--color-brutal-accent)]">CAFEÍNA</h1>
					</BrutalReveal>
					<BrutalReveal
						delay={0.1}
						className="flex flex-col gap-6 md:flex-row md:items-end md:gap-12"
					>
						<h1 className="hero-text">EXTREMA</h1>
						<div className="mb-4 max-w-sm font-[family-name:var(--font-mono)] text-xs uppercase leading-relaxed tracking-wide opacity-80 md:mb-10 md:text-sm">
							Torramos os grãos até chorarem. Sem xaropes. Sem descafeinado. Sem misericórdia.
							Bem-vindo ao vazio.
						</div>
					</BrutalReveal>
				</div>
			</header>

			{/* ▬▬▬ MARQUEE STRIP ▬▬▬ */}
			<section className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-accent)] py-4">
				<Marquee speed={20} className="text-[var(--color-brutal-text-light)]">
					<span className="flex items-center gap-8 pr-8 font-[family-name:var(--font-heading)] text-3xl uppercase tracking-[0.02em] md:text-5xl">
						<span>SEM DESCAFEINADO</span>
						<span>•</span>
						<span>ENERGIA PURA</span>
						<span>•</span>
						<span>TORRA ESCURA</span>
						<span>•</span>
					</span>
				</Marquee>
			</section>

			{/* ▬▬▬ STATS ▬▬▬ */}
			<section className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] px-6 py-20 md:px-12">
				<div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
					<BrutalReveal delay={0}>
						<StaggerCounter value={6} label="Grãos Rejeitados de Cada 10" />
					</BrutalReveal>
					<BrutalReveal delay={0.1}>
						<StaggerCounter value={847} label="Xícaras por Dia" />
					</BrutalReveal>
					<BrutalReveal delay={0.2}>
						<StaggerCounter value={0} label="Descafeinados Servidos" />
					</BrutalReveal>
					<BrutalReveal delay={0.3}>
						<StaggerCounter value={93} label="Temperatura Ideal" suffix="°C" />
					</BrutalReveal>
				</div>
			</section>

			{/* ▬▬▬ FILOSOFIA ▬▬▬ */}
			<section
				id="filosofia"
				className="flex flex-col border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] md:flex-row"
			>
				<div className="flex flex-col justify-center border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] p-8 md:w-1/2 md:border-r-[var(--brutal-border-width)] md:border-b-0 md:p-16 lg:p-24">
					<BrutalReveal>
						<h2 className="font-[family-name:var(--font-heading)] text-6xl uppercase md:text-8xl">
							A
							<br />
							Filosofia
						</h2>
					</BrutalReveal>
					<BrutalReveal delay={0.15}>
						<div className="mt-8 space-y-6 font-[family-name:var(--font-mono)] text-sm uppercase leading-relaxed opacity-80">
							<p>
								Acreditamos que o café não deve ser confortável. Ele deve ser um soco na cara logo
								pela manhã. Uma experiência visceral que te lembra que você está vivo.
							</p>
							<p>
								Nossa torra é meticulosamente calculada para extrair o máximo de intensidade. Não
								mascaramos o sabor com leite vaporizado ou arte em latte. Servimos a verdade, crua e
								escura.
							</p>
						</div>
					</BrutalReveal>
					<BrutalReveal delay={0.3}>
						<BrutalButton variant="outline" className="mt-12">
							Descubra o Processo
							<ArrowRight className="ml-3 inline h-4 w-4 text-[var(--color-brutal-accent)]" />
						</BrutalButton>
					</BrutalReveal>
				</div>
				<div className="relative min-h-[50vh] md:w-1/2 md:min-h-0">
					<Image
						src="/showcases/cafeteria/torra.webp"
						alt="Torrefação de café"
						fill
						className="cinematic-img"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</section>

			{/* ▬▬▬ CARDÁPIO + SIDEBAR ▬▬▬ */}
			<div className="flex flex-col lg:flex-row">
				{/* Left Column - Menu */}
				<section
					id="cardapio"
					className="flex flex-col lg:w-2/3 lg:border-r-[var(--brutal-border-width)] lg:border-[var(--color-brutal-border)]"
				>
					<div className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-accent)] p-8 text-[var(--color-brutal-text-light)] md:p-16">
						<BrutalReveal>
							<h2 className="font-[family-name:var(--font-heading)] text-6xl uppercase md:text-8xl">
								O Cardápio
							</h2>
							<p className="mt-6 font-[family-name:var(--font-mono)] text-sm font-bold uppercase tracking-widest">
								Consuma por sua conta e risco.
							</p>
						</BrutalReveal>
					</div>

					<div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{MENU_ITEMS.map((item, idx) => (
							<BrutalReveal key={item.id} delay={idx * 0.08}>
								<div
									className={`group flex cursor-pointer flex-col overflow-hidden border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] transition-colors lg:border-r-[var(--brutal-border-width)] ${
										(idx + 1) % 3 === 0 ? "lg:border-r-0" : ""
									}`}
								>
									{/* Image — clearly visible */}
									<div className="relative aspect-[4/3] overflow-hidden">
										<Image
											src={item.image}
											alt={item.name}
											fill
											className="cinematic-img scale-105 grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
										{/* Item number badge */}
										<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-bg)] font-[family-name:var(--font-heading)] text-xl text-[var(--color-brutal-accent)] shadow-[var(--brutal-shadow)]">
											{item.id}
										</div>
									</div>

									{/* Text — on solid background, always readable */}
									<div className="flex flex-1 flex-col justify-between p-6 transition-colors duration-300 group-hover:bg-[var(--color-brutal-accent)]">
										<div>
											<h3 className="font-[family-name:var(--font-heading)] text-2xl uppercase tracking-wide transition-colors group-hover:text-[var(--color-brutal-text-light)]">
												{item.name}
											</h3>
											<p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase leading-relaxed text-[var(--color-brutal-text-muted)] transition-colors group-hover:text-[var(--color-brutal-text-light)]/80">
												{item.desc}
											</p>
										</div>
										<div className="mt-6 flex items-center justify-between">
											<span className="font-[family-name:var(--font-mono)] text-xl font-bold transition-colors group-hover:text-[var(--color-brutal-text-light)]">
												{item.price}
											</span>
											<ArrowDownRight
												size={20}
												className="opacity-0 transition-all group-hover:opacity-100 group-hover:text-[var(--color-brutal-text-light)]"
											/>
										</div>
									</div>
								</div>
							</BrutalReveal>
						))}
					</div>
				</section>

				{/* Right Column - Location + Hours */}
				<aside id="visite" className="flex flex-col lg:w-1/3">
					<div className="group relative flex min-h-[50vh] flex-1 flex-col justify-center overflow-hidden border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] p-8 md:p-16">
						<Image
							src="/showcases/cafeteria/salao.webp"
							alt="Interior da cafeteria"
							fill
							className="cinematic-img scale-105 opacity-40 transition-all duration-700 group-hover:scale-100 group-hover:opacity-60"
							sizes="(max-width: 1024px) 100vw, 33vw"
						/>
						<div className="relative z-10">
							<BrutalReveal>
								<h3 className="font-[family-name:var(--font-heading)] text-5xl uppercase text-[var(--color-brutal-accent)]">
									Localização
								</h3>
							</BrutalReveal>
							<BrutalReveal delay={0.1}>
								<div className="mt-8 space-y-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide opacity-90">
									<p>Av. Distopia, 1984</p>
									<p>Setor 7G</p>
									<p>São Paulo, SP 01000-000</p>
								</div>
							</BrutalReveal>
							<BrutalReveal delay={0.2}>
								<a
									href="#"
									className="mt-10 inline-flex items-center gap-3 border-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-bg)]/50 px-6 py-4 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-colors hover:border-[var(--color-brutal-accent)] hover:bg-[var(--color-brutal-accent)]"
								>
									<MapPin size={16} /> Como Chegar
								</a>
							</BrutalReveal>
						</div>
					</div>

					<div className="flex flex-1 flex-col justify-center bg-[var(--color-brutal-text)] p-8 text-[var(--color-brutal-text-light)] md:p-16">
						<BrutalReveal>
							<h3 className="font-[family-name:var(--font-heading)] text-5xl uppercase">
								Horários
							</h3>
						</BrutalReveal>
						<BrutalReveal delay={0.1}>
							<div className="mt-8 space-y-6 font-[family-name:var(--font-mono)] text-sm font-bold uppercase tracking-wide">
								<div className="flex justify-between border-b border-[var(--color-brutal-text-light)]/20 pb-4">
									<span>Seg - Sex</span>
									<span>06:00 - 18:00</span>
								</div>
								<div className="flex justify-between border-b border-[var(--color-brutal-text-light)]/20 pb-4">
									<span>Sáb - Dom</span>
									<span>08:00 - 16:00</span>
								</div>
								<div className="flex justify-between pt-2 text-[var(--color-brutal-accent)]">
									<span>Dormir</span>
									<span>Nunca</span>
								</div>
							</div>
						</BrutalReveal>
					</div>
				</aside>
			</div>

			{/* ▬▬▬ PARALLAX DIVIDER ▬▬▬ */}
			<ParallaxSection className="relative h-[40vh] border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] md:h-[50vh]">
				<div className="relative flex h-[50vh] items-center justify-center md:h-[60vh]">
					<Image
						src="/showcases/cafeteria/graos.webp"
						alt="Grãos de café selecionados"
						fill
						className="object-cover brightness-[0.3]"
						sizes="100vw"
					/>
					<h2 className="relative z-10 px-6 text-center font-[family-name:var(--font-heading)] text-[clamp(32px,8vw,100px)] uppercase leading-[0.9] tracking-tight">
						Café é
						<br />
						<span className="text-[var(--color-brutal-accent)]">
							<GlitchText>Sofrimento.</GlitchText>
						</span>
					</h2>
				</div>
			</ParallaxSection>

			{/* ▬▬▬ NOSSO MÉTODO ▬▬▬ */}
			<section className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] px-6 py-20 md:px-12">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col gap-12 md:flex-row md:gap-20">
						<div className="md:w-1/3">
							<BrutalReveal>
								<h2 className="font-[family-name:var(--font-heading)] text-5xl uppercase tracking-tight md:text-7xl">
									O
									<br />
									<span className="text-[var(--color-brutal-accent)]">Ritual</span>
								</h2>
								<p className="mt-6 font-[family-name:var(--font-mono)] text-sm uppercase leading-relaxed text-[var(--color-brutal-text-muted)]">
									Do grão à xícara, cada etapa é um ato de brutalidade controlada. Não é artesanal —
									é obsessão em forma líquida.
								</p>
							</BrutalReveal>
						</div>

						<div className="md:w-2/3">
							{processSteps.map((step, i) => (
								<ProcessStep
									key={step.number}
									number={step.number}
									title={step.title}
									description={step.description}
									index={i}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ▬▬▬ MARQUEE STRIP 2 ▬▬▬ */}
			<section className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-text)] py-3">
				<Marquee speed={25} reverse className="text-[var(--color-brutal-bg)]">
					<span className="flex items-center gap-6 pr-6 font-[family-name:var(--font-heading)] text-xl uppercase tracking-[0.15em] md:text-2xl">
						<span>Sem Frescura</span>
						<span className="text-[var(--color-brutal-accent)]">■</span>
						<span>Zero Xarope</span>
						<span className="text-[var(--color-brutal-accent)]">■</span>
						<span>Torra Própria</span>
						<span className="text-[var(--color-brutal-accent)]">■</span>
						<span>Sem Misericórdia</span>
						<span className="text-[var(--color-brutal-accent)]">■</span>
					</span>
				</Marquee>
			</section>

			{/* ▬▬▬ GALERIA ▬▬▬ */}
			<section
				id="galeria"
				className="grid grid-cols-1 border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] md:grid-cols-3"
			>
				{[
					{
						src: "/showcases/cafeteria/cafe-concreto.webp",
						alt: "Café em superfície de concreto",
					},
					{
						src: "/showcases/cafeteria/hibisco-gelado.webp",
						alt: "Hibisco gelado artesanal",
					},
					{
						src: "/showcases/cafeteria/coado.webp",
						alt: "Café coado artesanalmente",
					},
					{
						src: "/showcases/cafeteria/xicara-mesa.webp",
						alt: "Xícara de café sobre mesa de concreto",
					},
					{
						src: "/showcases/cafeteria/graos.webp",
						alt: "Grãos de café torrados",
					},
					{
						src: "/showcases/cafeteria/torra.webp",
						alt: "Processo de torra artesanal",
					},
				].map((img, idx) => (
					<div
						key={img.alt}
						className={`group relative aspect-square overflow-hidden ${
							(idx + 1) % 3 !== 0
								? "md:border-r-[var(--brutal-border-width)] md:border-[var(--color-brutal-border)]"
								: ""
						} ${
							idx < 3
								? "border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)]"
								: ""
						}`}
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							className="cinematic-img transition-transform duration-1000 group-hover:scale-110"
							sizes="(max-width: 768px) 100vw, 33vw"
						/>
					</div>
				))}
			</section>

			{/* ▬▬▬ DEPOIMENTOS ▬▬▬ */}
			<section className="border-b-[var(--brutal-border-width)] border-[var(--color-brutal-border)] bg-[var(--color-brutal-bg-light)] px-6 py-20 md:px-12">
				<div className="mx-auto max-w-6xl">
					<BrutalReveal>
						<h2 className="font-[family-name:var(--font-heading)] text-5xl uppercase tracking-tight md:text-7xl">
							Quem Sobreviveu,
							<br />
							<span className="text-[var(--color-brutal-accent)]">Voltou.</span>
						</h2>
					</BrutalReveal>

					<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{testimonials.map((t, i) => (
							<TestimonialBlock
								key={t.author}
								quote={t.quote}
								author={t.author}
								role={t.role}
								index={i}
							/>
						))}
					</div>
				</div>
			</section>

			{/* ▬▬▬ FOOTER ▬▬▬ */}
			<footer className="relative z-10 flex flex-col items-center justify-between gap-8 border-t-[var(--brutal-border-width)] border-[var(--color-brutal-border)] p-8 md:flex-row md:p-16">
				<div className="font-[family-name:var(--font-heading)] text-6xl uppercase tracking-wider md:text-8xl">
					VOID
				</div>
				<div className="text-center font-[family-name:var(--font-mono)] text-[10px] uppercase leading-loose tracking-widest opacity-50 md:text-right md:text-xs">
					<p>© 2026 VOID COFFEE ROASTERS.</p>
					<p>TODOS OS DIREITOS RESERVADOS. NÃO NOS PROCESSE.</p>
				</div>
			</footer>
		</main>
	)
}
