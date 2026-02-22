import { Activity, Clock, HeartPulse, Instagram, Leaf, Linkedin, ShieldCheck } from "lucide-react"
import { AnimatedCheck, MotionDiv, MotionH1, StatCounter } from "./components/client"
import { SpecialtiesTabs } from "./components/specialties-tabs"

export default function NutricionistaPremiumPage() {
	const btnClass =
		"px-8 py-4 text-white bg-(--nutri-forest) rounded-full font-medium hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(45,106,79,0.2)] transition-all duration-300 inline-block text-center"

	return (
		<div className="min-h-screen bg-white font-sans text-(--nutri-text-main) selection:bg-(--nutri-forest) selection:text-white">
			{/* Navbar */}
			<nav className="flex items-center justify-between px-8 py-6 bg-(--nutri-warm) relative z-50">
				<div className="text-2xl font-bold text-(--nutri-text-main) tracking-tight flex items-center gap-2">
					<Leaf className="w-6 h-6 text-(--nutri-forest)" />
					Dra. Elena Costa
				</div>
				<div className="hidden md:flex space-x-8 text-sm font-medium text-(--nutri-text-main)">
					<a href="#sobre" className="hover:text-(--nutri-forest) transition-colors">
						Sobre mim
					</a>
					<a href="#metodo" className="hover:text-(--nutri-forest) transition-colors">
						O Método
					</a>
					<a href="#servicos" className="hover:text-(--nutri-forest) transition-colors">
						Serviços
					</a>
					<a href="#depoimentos" className="hover:text-(--nutri-forest) transition-colors">
						Depoimentos
					</a>
				</div>
				<div className="flex items-center space-x-6">
					<button
						type="button"
						className="hidden md:block px-6 py-2.5 text-sm font-medium text-white bg-(--nutri-forest) rounded-full hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(45,106,79,0.2)] transition-all duration-300"
					>
						Agendar Consulta
					</button>
				</div>
			</nav>

			{/* Hero */}
			<section className="relative bg-(--nutri-warm) pt-12 pb-32 px-8 overflow-hidden">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div className="z-10 relative">
						<MotionH1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-(--nutri-text-main) leading-[1.05] mb-8 tracking-tight"
						>
							Nutrição funcional para uma vida com mais energia.
						</MotionH1>
						<MotionDiv
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<p className="text-lg text-(--nutri-text-muted) mb-10 font-medium leading-relaxed max-w-lg">
								Descubra como a alimentação inteligente pode transformar sua saúde, sem dietas
								restritivas e com foco na raiz do problema.
							</p>
							<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
								<button type="button" className={btnClass}>
									Agendar minha avaliação
								</button>
							</div>
						</MotionDiv>
					</div>
					<div className="relative z-10">
						<MotionDiv
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<img
								src="/showcases/nutricionista/nutricionista-na-cozinha.webp"
								alt="Nutricionista"
								className="rounded-4xl shadow-[0_20px_40px_rgba(45,106,79,0.12)] object-cover w-full h-150"
							/>

							{/* Trust Badge */}
							<MotionDiv
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1, duration: 0.5 }}
								className="absolute -left-6 top-1/4 bg-white px-5 py-3 rounded-full shadow-[0_12px_24px_rgba(45,106,79,0.15)] flex items-center space-x-3 z-20"
							>
								<ShieldCheck className="w-5 h-5 text-(--nutri-forest)" />
								<span className="text-sm font-bold text-(--nutri-text-main)">CRN-3: 45892</span>
							</MotionDiv>

							<MotionDiv
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2, duration: 0.5 }}
								className="absolute -right-6 bottom-1/4 bg-white px-5 py-3 rounded-full shadow-[0_12px_24px_rgba(45,106,79,0.15)] flex items-center space-x-3 z-20"
							>
								<HeartPulse className="w-5 h-5 text-(--nutri-forest)" />
								<span className="text-sm font-bold text-(--nutri-text-main)">
									Plano 100% Personalizado
								</span>
							</MotionDiv>
						</MotionDiv>
					</div>
				</div>
			</section>

			{/* Floating Bar */}
			<div className="max-w-6xl mx-auto -mt-16 relative z-20 px-4 sm:px-8">
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_12px_40px_rgba(45,106,79,0.08)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
				>
					<div className="flex items-start space-x-5 flex-1">
						<div className="p-3 bg-(--nutri-warm) rounded-full text-(--nutri-forest) shrink-0">
							<Activity className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-bold text-(--nutri-text-main) mb-2 text-lg">
								Abordagem Funcional
							</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Tratamos a causa raiz dos seus sintomas, não apenas mascaramos o problema.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-5 flex-1">
						<AnimatedCheck />
						<div>
							<h3 className="font-bold text-(--nutri-text-main) mb-2 text-lg">
								Sem Restrições Severas
							</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Uma relação saudável com a comida, focada em nutrir o corpo e a mente.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-5 flex-1">
						<div className="p-3 bg-(--nutri-warm) rounded-full text-(--nutri-forest) shrink-0">
							<Clock className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-bold text-(--nutri-text-main) mb-2 text-lg">Suporte Contínuo</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Acompanhamento de perto via aplicativo para garantir a sua evolução.
							</p>
						</div>
					</div>
				</MotionDiv>
			</div>

			{/* About Section */}
			<section id="sobre" className="py-32 px-8 bg-white">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<div>
						<div className="text-xs font-bold text-(--nutri-text-muted) uppercase tracking-[0.15em] mb-6">
							Sobre Mim
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-(--nutri-text-main) leading-[1.1] mb-8 tracking-tight">
							Acredito que a saúde começa de dentro para fora.
						</h2>
						<p className="text-lg text-(--nutri-text-muted) mb-6 leading-relaxed">
							Com mais de 10 anos de experiência em nutrição clínica e funcional, meu objetivo é
							ajudar você a reconquistar sua vitalidade através da alimentação.
						</p>
						<p className="text-lg text-(--nutri-text-muted) mb-10 leading-relaxed">
							Não prescrevo dietas de gaveta. Cada corpo é único, e seu plano alimentar deve
							respeitar sua biologia, sua rotina e suas preferências. Vamos juntos construir um
							estilo de vida sustentável e prazeroso.
						</p>
						<a
							href="#"
							className="inline-flex items-center text-(--nutri-forest) font-bold border-b-2 border-(--nutri-forest) pb-1 hover:text-(--nutri-text-main) hover:border-(--nutri-text-main) transition-colors"
						>
							Conheça minha formação
						</a>
					</div>
					<div className="grid grid-cols-2 gap-6">
						<img
							src="/showcases/nutricionista/espinafre-abacate-sementes.webp"
							alt="Ingredientes frescos"
							className="rounded-4xl shadow-[0_20px_40px_rgba(45,106,79,0.08)] w-full h-full object-cover"
						/>
						<img
							src="/showcases/nutricionista/preparando-salada.webp"
							alt="Preparo de refeição"
							className="rounded-4xl shadow-[0_20px_40px_rgba(45,106,79,0.08)] w-full h-full object-cover mt-12"
						/>
					</div>
				</div>
			</section>

			{/* Stats / The Method */}
			<section id="metodo" className="py-32 px-8 bg-(--nutri-warm)">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<div className="text-xs font-bold text-(--nutri-text-muted) uppercase tracking-[0.15em] mb-6">
							O Método
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-(--nutri-text-main) leading-[1.1] tracking-tight max-w-3xl mx-auto">
							Um processo desenhado para resultados definitivos.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
						<div className="bg-white p-10 rounded-4xl shadow-[0_8px_30px_rgba(45,106,79,0.05)] relative overflow-hidden group">
							<div className="text-6xl font-bold text-(--nutri-sage) mb-6 tracking-tighter group-hover:text-(--nutri-forest) transition-colors duration-500">
								01
							</div>
							<h3 className="text-xl font-bold text-(--nutri-text-main) mb-4">
								Avaliação Profunda
							</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Análise detalhada do seu histórico, exames laboratoriais, rotina e sinais clínicos.
							</p>
						</div>
						<div className="bg-white p-10 rounded-4xl shadow-[0_8px_30px_rgba(45,106,79,0.05)] relative overflow-hidden group">
							<div className="text-6xl font-bold text-(--nutri-sage) mb-6 tracking-tighter group-hover:text-(--nutri-forest) transition-colors duration-500">
								02
							</div>
							<h3 className="text-xl font-bold text-(--nutri-text-main) mb-4">Plano Estratégico</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Criação de um cardápio viável, focado em nutrientes específicos para o seu objetivo.
							</p>
						</div>
						<div className="bg-white p-10 rounded-4xl shadow-[0_8px_30px_rgba(45,106,79,0.05)] relative overflow-hidden group">
							<div className="text-6xl font-bold text-(--nutri-sage) mb-6 tracking-tighter group-hover:text-(--nutri-forest) transition-colors duration-500">
								03
							</div>
							<h3 className="text-xl font-bold text-(--nutri-text-main) mb-4">Suplementação</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Prescrição de vitaminas e fitoterápicos apenas quando necessário, com base
								científica.
							</p>
						</div>
						<div className="bg-white p-10 rounded-4xl shadow-[0_8px_30px_rgba(45,106,79,0.05)] relative overflow-hidden group">
							<div className="text-6xl font-bold text-(--nutri-sage) mb-6 tracking-tighter group-hover:text-(--nutri-forest) transition-colors duration-500">
								04
							</div>
							<h3 className="text-xl font-bold text-(--nutri-text-main) mb-4">
								Ajustes Constantes
							</h3>
							<p className="text-sm text-(--nutri-text-muted) leading-relaxed">
								Acompanhamento da sua evolução e adaptação do plano para garantir a adesão.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-20">
						<div className="text-center">
							<div className="text-6xl md:text-7xl font-bold text-(--nutri-forest) mb-4 tracking-tighter">
								<StatCounter value="2000" suffix="+" />
							</div>
							<p className="text-sm font-bold text-(--nutri-text-main) uppercase tracking-wider">
								Pacientes Atendidos
							</p>
						</div>
						<div className="text-center">
							<div className="text-6xl md:text-7xl font-bold text-(--nutri-forest) mb-4 tracking-tighter">
								<StatCounter value="100" suffix="%" />
							</div>
							<p className="text-sm font-bold text-(--nutri-text-main) uppercase tracking-wider">
								Planos Exclusivos
							</p>
						</div>
						<div className="text-center">
							<div className="text-6xl md:text-7xl font-bold text-(--nutri-forest) mb-4 tracking-tighter">
								<StatCounter value="0" />
							</div>
							<p className="text-sm font-bold text-(--nutri-text-main) uppercase tracking-wider">
								Dietas Genéricas
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<SpecialtiesTabs />

			{/* Testimonials */}
			<section id="depoimentos" className="py-32 px-8 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<div className="text-xs font-bold text-(--nutri-text-muted) uppercase tracking-[0.15em] mb-6">
							Depoimentos
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-(--nutri-text-main) leading-[1.1] tracking-tight">
							Histórias reais de transformação.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
						<div className="bg-(--nutri-warm) p-10 rounded-4xl shadow-[0_12px_30px_rgba(45,106,79,0.05)] relative z-10 md:translate-y-8">
							<div className="flex space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-(--nutri-forest)">
										★
									</span>
								))}
							</div>
							<p className="text-lg text-(--nutri-text-main) font-medium leading-relaxed mb-8">
								"Nunca achei que conseguiria emagrecer comendo o que gosto. A Dra. Elena mudou minha
								relação com a comida. Minha energia hoje é outra!"
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-(--nutri-sage) rounded-full flex items-center justify-center text-(--nutri-forest) font-bold">
									MC
								</div>
								<div>
									<div className="font-bold text-(--nutri-text-main)">Mariana C.</div>
									<div className="text-xs text-(--nutri-text-muted) uppercase tracking-wider">
										Paciente há 6 meses
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-10 rounded-4xl shadow-[0_20px_50px_rgba(45,106,79,0.08)] relative z-20">
							<div className="flex space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-(--nutri-forest)">
										★
									</span>
								))}
							</div>
							<p className="text-lg text-(--nutri-text-main) font-medium leading-relaxed mb-8">
								"Sofria com inchaço e dores abdominais há anos. Com o protocolo intestinal, em
								poucas semanas me senti uma nova pessoa. Atendimento impecável."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-(--nutri-sage) rounded-full flex items-center justify-center text-(--nutri-forest) font-bold">
									RP
								</div>
								<div>
									<div className="font-bold text-(--nutri-text-main)">Rafael P.</div>
									<div className="text-xs text-(--nutri-text-muted) uppercase tracking-wider">
										Paciente há 1 ano
									</div>
								</div>
							</div>
						</div>

						<div className="bg-(--nutri-warm) p-10 rounded-4xl shadow-[0_12px_30px_rgba(45,106,79,0.05)] relative z-10 md:translate-y-16">
							<div className="flex space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-(--nutri-forest)">
										★
									</span>
								))}
							</div>
							<p className="text-lg text-(--nutri-text-main) font-medium leading-relaxed mb-8">
								"A abordagem funcional faz toda a diferença. Meus exames melhoraram absurdamente e
								finalmente consegui regular meu sono e ansiedade."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-(--nutri-sage) rounded-full flex items-center justify-center text-(--nutri-forest) font-bold">
									LS
								</div>
								<div>
									<div className="font-bold text-(--nutri-text-main)">Laura S.</div>
									<div className="text-xs text-(--nutri-text-muted) uppercase tracking-wider">
										Paciente há 8 meses
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="flex flex-col lg:flex-row mt-20">
				<div className="flex-1">
					<img
						src="/showcases/nutricionista/nutricionista-na-cozinha.webp"
						alt="Consulta"
						className="w-full h-full object-cover min-h-125"
					/>
				</div>
				<div className="flex-1 bg-(--nutri-warm) py-32 px-8 lg:px-24 flex flex-col justify-center">
					<div className="max-w-xl">
						<h2 className="text-4xl md:text-5xl font-bold text-(--nutri-text-main) leading-[1.1] mb-8 tracking-tight">
							Pronta para dar o primeiro passo rumo à sua melhor versão?
						</h2>
						<p className="text-lg text-(--nutri-text-muted) mb-12 leading-relaxed">
							Agende sua consulta e vamos juntas construir um plano alimentar que funciona para a
							sua vida.
						</p>
						<button type="button" className={btnClass}>
							Agendar Consulta via WhatsApp
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-(--nutri-text-main) text-white py-20 px-8">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
					<div className="lg:col-span-2">
						<div className="text-3xl font-bold mb-6 tracking-tight flex items-center gap-2">
							<Leaf className="w-8 h-8 text-(--nutri-sage)" />
							Dra. Elena Costa
						</div>
						<p className="text-white/70 max-w-sm leading-relaxed mb-8">
							Nutrição Clínica e Funcional. Transformando vidas através da alimentação consciente e
							baseada em evidências.
						</p>
						<div className="flex space-x-6">
							<a href="#" className="text-white/50 hover:text-white transition-colors">
								<Instagram className="w-6 h-6" />
							</a>
							<a href="#" className="text-white/50 hover:text-white transition-colors">
								<Linkedin className="w-6 h-6" />
							</a>
						</div>
					</div>
					<div>
						<div className="text-xs font-bold uppercase tracking-[0.15em] mb-8 text-white/50">
							Navegação
						</div>
						<ul className="space-y-5 text-sm font-medium">
							<li>
								<a href="#sobre" className="hover:text-(--nutri-sage) transition-colors">
									Sobre mim
								</a>
							</li>
							<li>
								<a href="#metodo" className="hover:text-(--nutri-sage) transition-colors">
									O Método
								</a>
							</li>
							<li>
								<a href="#servicos" className="hover:text-(--nutri-sage) transition-colors">
									Serviços
								</a>
							</li>
							<li>
								<a href="#depoimentos" className="hover:text-(--nutri-sage) transition-colors">
									Depoimentos
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="text-xs font-bold uppercase tracking-[0.15em] mb-8 text-white/50">
							Contato
						</div>
						<ul className="space-y-5 text-sm font-medium text-white/80">
							<li>contato@draelena.com.br</li>
							<li>(11) 99999-9999</li>
							<li className="pt-4">
								Av. Paulista, 1000 - Bela Vista
								<br />
								São Paulo, SP
							</li>
						</ul>
					</div>
				</div>
				<div className="max-w-7xl mx-auto border-t border-white/10 pt-10 text-xs text-white/50 space-y-6 leading-relaxed flex flex-col sm:flex-row justify-between items-start sm:items-center">
					<p>© 2024 Dra. Elena Costa. CRN-3: 45892. Todos os direitos reservados.</p>
					<div className="flex space-x-6">
						<a href="#" className="hover:text-white transition-colors">
							Política de Privacidade
						</a>
						<span className="text-white/30">|</span>
						<a href="#" className="hover:text-white transition-colors">
							Termos de Uso
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
