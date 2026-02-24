import { InteractiveMenuItem, Reveal } from "./components/client"

export default function PadariaPremiumPage() {
	return (
		<div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#F4F3F0] text-[#000000] selection:bg-black selection:text-[#F4F3F0]">
			{/* Header */}
			<header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
				<div className="text-xs font-bold tracking-[0.2em] uppercase">Guarapari, ES</div>
				<nav className="hidden md:flex flex-col items-end gap-1 text-xs font-medium tracking-widest pointer-events-auto">
					<a href="#" className="hover:line-through decoration-1 transition-all">
						CARDÁPIO
					</a>
					<a href="#" className="hover:line-through decoration-1 transition-all">
						PROCESSO
					</a>
					<a href="#" className="hover:line-through decoration-1 transition-all">
						PEDIDOS
					</a>
				</nav>
			</header>

			<main className="flex flex-col w-full">
				{/* Hero Section */}
				<section className="relative min-h-[90vh] md:h-screen w-full flex flex-col md:flex-row">
					<div className="md:h-full flex items-start md:items-end justify-center px-6 md:px-12 md:pb-12 pt-24 md:pt-0 z-10">
						<Reveal direction="left">
							<h1
								className="font-serif text-[15vw] leading-none text-black md:[writing-mode:vertical-lr] transform md:rotate-180 opacity-90 mix-blend-multiply whitespace-nowrap"
								style={{ textOrientation: "mixed" }}
							>
								O RIGOR
							</h1>
						</Reveal>
					</div>
					<div className="flex-1 relative h-[60vh] md:h-full mt-8 md:mt-0 md:pl-20 md:pr-0 bg-neutral-900">
						<div className="absolute inset-0 w-full h-full">
							<div
								className="w-full h-full bg-cover bg-center md:bg-left opacity-80"
								style={{
									backgroundImage: "url('/showcases/padaria/bg-hero.webp')",
								}}
							/>
							<div className="absolute inset-0 bg-black/20" />
						</div>
						<Reveal
							direction="up"
							delay={0.4}
							className="absolute bottom-10 right-10 md:bottom-20 md:right-20"
						>
							<button
								type="button"
								className="bg-black text-[#F4F3F0] rounded-full size-32 md:size-40 flex items-center justify-center text-xs font-bold tracking-widest hover:scale-105 transition-transform duration-500 uppercase text-center p-4 cursor-pointer"
							>
								Receber
								<br />
								Amanhã
							</button>
						</Reveal>
					</div>
				</section>

				{/* Manifesto Section */}
				<section className="py-32 px-6 md:px-0 w-full flex justify-center bg-[#F4F3F0]">
					<Reveal className="max-w-105 flex flex-col gap-12 text-center md:text-left">
						<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
							O Manifesto
						</span>
						<h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-black">
							Pão sério de bairro, com hora marcada para sair do forno.
						</h2>
						<div className="w-12 h-px bg-black mx-auto md:mx-0" />
						<p className="text-sm md:text-base leading-relaxed text-neutral-600 font-light">
							Toda madrugada abrimos a massa que descansou por 36 a 48 horas e assamos em fornadas
							pequenas. O que você recebe: pães de fermentação natural do dia, etiqueta com validade
							e orientação de armazenamento e atendimento no WhatsApp para ajustar pedido. Entrega
							em Guarapari entre 6h e 8h.
						</p>
					</Reveal>
				</section>

				{/* Process Section */}
				<section className="w-full py-20 px-6 md:px-12">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
						<Reveal
							direction="right"
							className="col-span-1 md:col-span-8 relative aspect-4/3 md:aspect-video overflow-hidden group"
						>
							<div
								className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
								style={{
									backgroundImage: "url('/showcases/padaria/bg-recipes.webp')",
								}}
							/>
							<div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase mix-blend-difference">
								Fig. 01 - Dobra e descanso
							</div>
						</Reveal>
						<Reveal
							direction="left"
							delay={0.2}
							className="col-span-1 md:col-span-3 md:col-start-10 flex flex-col gap-8 pb-4"
						>
							<div className="flex flex-col gap-2">
								<h3 className="text-2xl font-serif text-black">Fermentação Controlada</h3>
								<p className="text-xs leading-loose text-neutral-500 uppercase tracking-wide">
									Levedura alimentada 2x ao dia.
									<br />
									Massa entre 24 C e 26 C.
									<br />
									Rastreio por lote e horário.
								</p>
							</div>
							<a
								href="#"
								className="inline-flex items-center gap-2 text-xs font-bold tracking-widest border-b border-black pb-1 w-fit hover:opacity-50 transition-opacity"
							>
								VER COMO ASSAMOS <span className="text-sm">→</span>
							</a>
						</Reveal>
					</div>
				</section>

				{/* Menu Section */}
				<section className="py-40 px-6 md:px-12 bg-white text-black">
					<div className="max-w-6xl mx-auto">
						<Reveal>
							<h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-24 text-center md:text-left">
								Cardápio da Semana
							</h2>
						</Reveal>
						<div className="flex flex-col">
							<Reveal delay={0.1}>
								<InteractiveMenuItem
									title="Levain da Casa"
									price="R$ 29"
									ingredients="Trigo Integral / Mix de Centeio"
									description="900 g. Fermentação natural longa, casca crocante e miolo macio. Entregue no mesmo dia da fornada."
								/>
							</Reveal>
							<Reveal delay={0.2}>
								<InteractiveMenuItem
									title="Integral de Sementes"
									price="R$ 34"
									ingredients="Girassol / Linhaça / Gergelim"
									description="750 g. Blend integral com sementes tostadas na casa. Ideal para lanche e café da manhã da semana."
								/>
							</Reveal>
							<Reveal delay={0.3}>
								<InteractiveMenuItem
									title="Brioche de Chocolate 70%"
									price="R$ 38"
									ingredients="Cacau de Origem / Flor de Sal"
									description="Massa amanteigada de longa fermentação com gotas de chocolate meio amargo. Sai quente na sexta e no sábado."
								/>
							</Reveal>
							<Reveal delay={0.4}>
								<InteractiveMenuItem
									title="Focaccia Alecrim"
									price="R$ 24"
									ingredients="Azeite Extra Virgem / Alecrim Fresco"
									description="Assada em tabuleiro alto, finalizada com flor de sal e azeite. Opção para receber inteira ou em fatias."
								/>
							</Reveal>
						</div>
						<Reveal delay={0.5} className="mt-24 text-center">
							<button
								type="button"
								className="text-xs font-bold tracking-[0.2em] uppercase border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer"
							>
								Reservar Minha Fornada
							</button>
						</Reveal>
					</div>
				</section>

				{/* Editorial Feature */}
				<section className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh] border-y border-black">
					<div className="col-span-12 md:col-span-6 bg-black text-[#F4F3F0] p-12 lg:p-24 flex flex-col justify-between">
						<Reveal>
							<h3 className="font-serif text-5xl md:text-7xl mb-8 leading-none">
								Compromisso
								<br />
								Real.
							</h3>
							<p className="font-sans text-sm leading-relaxed max-w-sm opacity-80">
								Se o lote não atinge nosso padrão, ele não vai para entrega. Mais de 1.200 famílias
								atendidas no último ano e recompra média acima de 70% nos planos semanais.
							</p>
						</Reveal>
						<Reveal delay={0.2} className="mt-12">
							<a
								href="#"
								className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity"
							>
								Ver Política de Qualidade
								<span className="text-sm">→</span>
							</a>
						</Reveal>
					</div>
					<div className="col-span-12 md:col-span-6 relative h-96 md:h-auto border-l border-black">
						<div
							className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
							style={{
								backgroundImage: "url('/showcases/padaria/bg-chat.webp')",
							}}
						/>
					</div>
				</section>

				{/* Visual Grid */}
				<section className="grid grid-cols-2 md:grid-cols-4 min-h-[50vh]">
					<div
						className="aspect-square bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
						style={{
							backgroundImage: "url('/showcases/padaria/gallery-1.webp')",
						}}
					/>
					<div
						className="aspect-square bg-cover bg-center"
						style={{
							backgroundImage: "url('/showcases/padaria/gallery-2.webp')",
						}}
					/>
					<div
						className="aspect-square bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
						style={{
							backgroundImage: "url('/showcases/padaria/gallery-3.webp')",
						}}
					/>
					<div className="aspect-square bg-neutral-200 flex items-center justify-center p-8">
						<p className="font-serif text-2xl md:text-3xl text-center leading-tight">
							"Da massa ao pacote em até 4 horas."
						</p>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-black text-[#F4F3F0] pt-24 pb-12 px-6 md:px-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 mb-24">
						<div className="flex flex-col gap-4">
							<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
								Localização
							</span>
							<address className="not-italic text-sm leading-relaxed text-neutral-300">
								Rua do Campo, 42 - Muquicaba
								<br />
								Guarapari, ES
								<br />
								Brasil
							</address>
							<div
								className="w-full h-24 bg-neutral-800 mt-2 bg-cover bg-center opacity-50 grayscale"
								style={{
									backgroundImage: "url('/showcases/padaria/bg-faq.webp')",
								}}
							/>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
								Horários
							</span>
							<ul className="text-sm leading-relaxed text-neutral-300">
								<li>Loja: ter a sex, 7h às 19h</li>
								<li>Sábado e domingo, 7h às 13h</li>
								<li className="text-neutral-500 mt-2">Entrega: 6h às 8h (com reserva)</li>
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
								Social
							</span>
							<div className="flex flex-col gap-2 text-sm">
								<a href="#" className="hover:text-white text-neutral-300 transition-colors">
									Instagram
								</a>
								<a href="#" className="hover:text-white text-neutral-300 transition-colors">
									WhatsApp Comercial
								</a>
							</div>
						</div>
						<div className="flex flex-col justify-end">
							<h2 className="font-serif text-4xl md:text-6xl leading-none tracking-tight">
								O RIGOR
							</h2>
						</div>
					</div>
					<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-600">
						<span>© 2024 O Rigor Padaria Artesanal. Todos os direitos reservados.</span>
						<span>Pedidos de assinatura com 24h de antecedência.</span>
					</div>
				</footer>
			</main>
		</div>
	)
}
