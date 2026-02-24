export interface PsicologaPageData {
	hero: {
		badge: string
		title: string
		emphasis: string
		description: string
		primaryAction: string
		secondaryAction: string
		image: string
	}
	stats: Array<{ value: string; label: string }>
	about: {
		overline: string
		title: string
		paragraphs: string[]
		quote: string
		signature: string
		credentials: string[]
		action: string
		image: string
	}
	treatments: Array<{
		title: string
		description: string
		icon: "brain" | "users" | "clock" | "pulse" | "plus" | "heart"
	}>
	steps: Array<{ title: string; description: string }>
	testimonial: {
		quote: string
		name: string
		role: string
		initials: string
	}
	faq: {
		overline: string
		title: string
		description: string
		items: Array<{ question: string; answer: string }>
	}
	cta: {
		title: string
		emphasis: string
		description: string
		whatsappHref: string
		whatsappLabel: string
		secondaryLabel: string
		image?: string
	}
	footer: {
		brand: string
		description: string
		whatsapp: string
		email: string
		instagram: string
		copyright: string
		crp: string
	}
}

export const psiData: PsicologaPageData = {
	hero: {
		badge: "Psicóloga Clínica — CRP 16/00000",
		title: "Você não está quebrado. Está",
		emphasis: "se descobrindo.",
		description:
			"Atendimento psicológico para adultos com foco em ansiedade, relacionamentos e crescimento pessoal. Um espaço seguro, acolhedor e sem julgamentos.",
		primaryAction: "Agende sua Primeira Consulta",
		secondaryAction: "Como funciona",
		image: "/showcases/psicologa/hero.jpg",
	},
	stats: [
		{ value: "10+", label: "Anos de experiência" },
		{ value: "1.200+", label: "Pacientes atendidos" },
		{ value: "15 min", label: "Consulta inicial grátis" },
		{ value: "Online", label: "& Presencial" },
	],
	about: {
		overline: "Sobre mim",
		title: "Olá, eu sou Helena Martins",
		paragraphs: [
			"Sou psicóloga clínica com mais de 10 anos de experiência ajudando adultos a compreenderem seus padrões emocionais e construírem uma vida com mais equilíbrio e autoconhecimento.",
			"Minha abordagem é colaborativa e baseada em evidências. Acredito que cada pessoa carrega em si os recursos necessários para a mudança, meu papel é ajudar você a encontrá-los.",
		],
		quote: "Cuidar da sua saúde mental é o ato mais corajoso que você pode ter.",
		signature: "Helena Martins",
		credentials: ["CRP Ativo", "Pós em TCC", "Atendimento Online", "Supervisão Clínica"],
		action: "Conheça Minha Abordagem",
		image: "/showcases/psicologa/about.jpg",
	},
	treatments: [
		{
			title: "Ansiedade & Estresse",
			description:
				"Aprenda a identificar gatilhos e desenvolver estratégias para lidar com pensamentos ansiosos e crises de pânico.",
			icon: "brain",
		},
		{
			title: "Relacionamentos",
			description:
				"Trabalhe padrões de vínculo, comunicação e conflitos que se repetem nas suas relações afetivas e familiares.",
			icon: "users",
		},
		{
			title: "Transições de Vida",
			description:
				"Mudanças de carreira, luto, separações. Encontre suporte para navegar momentos de incerteza e recomeço.",
			icon: "clock",
		},
		{
			title: "Burnout & Humor",
			description:
				"Esgotamento emocional, desmotivação e tristeza persistente. Trabalho com técnicas da TCC para reestabelecer energia e sentido no dia a dia.",
			icon: "pulse",
		},
		{
			title: "Autoconhecimento",
			description:
				"Desenvolva uma relação mais compassiva consigo mesmo e descubra padrões que limitam seu crescimento pessoal.",
			icon: "plus",
		},
		{
			title: "Autoestima & Segurança",
			description:
				"Fortaleça a confiança em si mesmo e aprenda a estabelecer limites saudáveis nas diversas áreas da sua vida.",
			icon: "heart",
		},
	],
	steps: [
		{
			title: "Agende uma Conversa",
			description:
				"Entre em contato pelo WhatsApp ou formulário. Vamos combinar um horário para nos conhecermos, sem compromisso.",
		},
		{
			title: "Primeira Sessão",
			description:
				"Na primeira consulta, vamos entender juntos o que te trouxe aqui e definir objetivos para a terapia.",
		},
		{
			title: "Inicie seu Processo",
			description:
				"Sessões semanais com acompanhamento contínuo. Progresso real, no seu tempo, com suporte a cada passo.",
		},
	],
	testimonial: {
		quote:
			"Helena me ajudou a enxergar padrões que eu nem sabia que existiam. Pela primeira vez, sinto que tenho ferramentas reais para lidar com a vida e não só esperança.",
		name: "Mariana S.",
		role: "Paciente há 8 meses",
		initials: "M.S.",
	},
	faq: {
		overline: "Dúvidas Frequentes",
		title: "Ainda tem alguma dúvida?",
		description:
			"É normal ter perguntas antes de iniciar a terapia. Aqui estão as mais comuns. Se a sua não estiver aqui, entre em contato.",
		items: [
			{
				question: "Quanto tempo dura cada sessão?",
				answer:
					"Cada sessão tem duração de 50 minutos. A frequência recomendada é semanal, mas ajustamos conforme sua necessidade e disponibilidade.",
			},
			{
				question: "Você atende por plano de saúde?",
				answer:
					"No momento, o atendimento é particular. Forneço recibo para reembolso em planos que oferecem essa opção. Consulte seu convênio.",
			},
			{
				question: "Como funciona a sessão online?",
				answer:
					"As sessões online acontecem por videochamada em uma plataforma segura e com criptografia. Basta ter um dispositivo com câmera e internet estável.",
			},
			{
				question: "Nunca fiz terapia, como começo?",
				answer:
					"Começamos com uma conversa inicial gratuita de 15 minutos para nos conhecermos. Sem pressão, sem compromisso. É o seu espaço.",
			},
			{
				question: "As sessões são sigilosas?",
				answer:
					"Sim. O sigilo é um princípio ético fundamental da psicologia. Tudo o que é dito em sessão é completamente confidencial, conforme o Código de Ética do CFP.",
			},
			{
				question: "Posso cancelar ou reagendar?",
				answer:
					"Sim, solicito apenas que cancelamentos sejam feitos com no mínimo 24 horas de antecedência para que possamos reorganizar a agenda.",
			},
		],
	},
	cta: {
		title: "Pronto para dar o primeiro passo?",
		emphasis: "primeiro passo?",
		description:
			"Agende uma conversa inicial gratuita de 15 minutos. Sem compromisso, sem julgamento, apenas um espaço para você ser ouvido.",
		whatsappHref:
			"https://wa.me/5527999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.",
		whatsappLabel: "Chamar no WhatsApp",
		secondaryLabel: "Quero saber mais",
		image: "/showcases/psicologa/cta.jpg",
	},
	footer: {
		brand: "Helena Martins",
		description:
			"Psicóloga clínica dedicada a ajudar adultos a construírem uma vida com mais equilíbrio, autoconhecimento e bem-estar emocional.",
		whatsapp: "https://wa.me/5527999999999",
		email: "contato@helenamartins.com.br",
		instagram: "https://instagram.com/",
		copyright: "© 2026 Helena Martins — Todos os direitos reservados.",
		crp: "CRP 16/00000 — Psicóloga Clínica",
	},
}

