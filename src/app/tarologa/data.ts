export interface TarologaFaqItem {
	question: string
	answer: string
}

export interface TarologaPageData {
	hero: {
		badge: string
		title: string
		description: string
		primaryCtaLabel: string
		primaryCtaHref: string
		secondaryCtaLabel: string
		secondaryCtaHref: string
		floatingBadge: { title: string; description: string }
	}
	stats: Array<{ value: string; label: string }>
	about: {
		overline: string
		title: string
		paragraphs: string[]
		credentials: string[]
	}
	services: {
		overline: string
		title: string
		description: string
		items: Array<{
			name: string
			duration: string
			oracle: string
			theme: string
			price: string
			description: string
			whatsappHref: string
		}>
	}
	howItWorks: {
		overline: string
		title: string
		steps: Array<{ title: string; description: string }>
		formats: string[]
		payments: string[]
	}
	benefits: {
		overline: string
		title: string
		items: string[]
	}
	testimonials: {
		overline: string
		title: string
		description: string
		items: Array<{ quote: string; name: string; detail: string }>
		whatsappMock: {
			title: string
			subtitle: string
			messages: Array<{ sender: "cliente" | "tarologa"; text: string; time: string }>
		}
	}
	faq: {
		overline: string
		title: string
		description: string
		items: TarologaFaqItem[]
	}
	finalCta: {
		title: string
		description: string
		buttonLabel: string
		buttonHref: string
	}
	footer: {
		brand: string
		description: string
		instagramLabel: string
		instagramHref: string
		whatsappLabel: string
		whatsappHref: string
		address: string
		copyright: string
		disclaimer: string
	}
}

const whatsappNumber = "5511999999999"

const buildWhatsappLink = (message: string) => {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const tarologaData: TarologaPageData = {
	hero: {
		badge: "Taróloga e Cartomante • Atendimento online para todo o Brasil",
		title: "Clareza espiritual para decisões importantes da sua vida.",
		description:
			"Leituras acolhedoras, objetivas e sem julgamento para amor, carreira e ciclos pessoais. Você sai da sessão com direcionamento prático e emocional.",
		primaryCtaLabel: "Agende sua Consulta",
		primaryCtaHref: buildWhatsappLink("Olá, quero agendar minha consulta de tarot."),
		secondaryCtaLabel: "Ver tipos de leitura",
		secondaryCtaHref: "#servicos",
		floatingBadge: {
			title: "Agenda da semana",
			description: "3 vagas para consulta de 60 min",
		},
	},
	stats: [
		{ value: "9+ anos", label: "de experiência" },
		{ value: "1.400+", label: "leituras realizadas" },
		{ value: "100% online", label: "WhatsApp e Google Meet" },
		{ value: "Pix + cartão", label: "com parcelamento" },
	],
	about: {
		overline: "Quem sou eu",
		title: "Sou Clarice Lua, taróloga com abordagem terapêutica e espiritual.",
		paragraphs: [
			"Atuo há mais de 9 anos com Tarot de Marselha e Baralho Cigano, conduzindo atendimentos para quem busca clareza sem sensacionalismo.",
			"Minha prática une escuta terapêutica, leitura simbólica e fundamentos da Umbanda, respeitando seu livre-arbítrio e seu momento emocional.",
		],
		credentials: [
			"Tarot Terapêutico",
			"Tarot Psicanalítico",
			"Médium Umbandista",
			"Cartomancia Tradicional",
		],
	},
	services: {
		overline: "Serviços e leituras",
		title: "Escolha a tiragem ideal para o momento que você está vivendo.",
		description:
			"Valores transparentes e envio de orientações antes da consulta. Todas as sessões incluem espaço para perguntas e devolutiva final.",
		items: [
			{
				name: "Leitura Expressa",
				duration: "30 minutos",
				oracle: "Tarot de Marselha",
				theme: "1 tema principal",
				price: "R$ 147",
				description:
					"Ideal para quem precisa destravar uma decisão específica com clareza objetiva.",
				whatsappHref: buildWhatsappLink(
					"Olá, quero agendar a Leitura Expressa de 30 minutos (R$ 147).",
				),
			},
			{
				name: "Consulta Profunda",
				duration: "60 minutos",
				oracle: "Tarot + Baralho Cigano",
				theme: "Amor, trabalho e energia",
				price: "R$ 247",
				description:
					"Sessão completa para analisar padrões, ciclos e próximos movimentos com segurança.",
				whatsappHref: buildWhatsappLink(
					"Olá, quero agendar a Consulta Profunda de 60 minutos (R$ 247).",
				),
			},
			{
				name: "Mandala Astrológica",
				duration: "90 minutos",
				oracle: "Tarot + Numerologia",
				theme: "Panorama dos próximos 6 meses",
				price: "R$ 327",
				description:
					"Leitura estratégica para fase de transição, com foco em direção pessoal e profissional.",
				whatsappHref: buildWhatsappLink(
					"Olá, quero agendar a Mandala Astrológica de 90 minutos (R$ 327).",
				),
			},
			{
				name: "Perguntas Avulsas",
				duration: "Pacote com 3 perguntas",
				oracle: "Baralho Cigano",
				theme: "Resposta rápida por áudio",
				price: "R$ 97",
				description: "Para dúvidas pontuais quando você precisa de orientação curta e direta.",
				whatsappHref: buildWhatsappLink("Olá, quero o pacote de Perguntas Avulsas (R$ 97)."),
			},
		],
	},
	howItWorks: {
		overline: "Como funciona",
		title: "Do primeiro contato ao fechamento da consulta, tudo é simples e rápido.",
		steps: [
			{
				title: "1. Chame no WhatsApp",
				description: "Você me conta seu objetivo e eu indico a melhor tiragem para o seu momento.",
			},
			{
				title: "2. Confirme horário e pagamento",
				description:
					"Após o pagamento, você recebe confirmação, checklist de preparação e link do atendimento.",
			},
			{
				title: "3. Faça sua leitura online",
				description:
					"A consulta acontece no formato escolhido e termina com direcionamentos claros para os próximos passos.",
			},
		],
		formats: ["Áudio no WhatsApp", "Texto no WhatsApp", "Videochamada no WhatsApp", "Google Meet"],
		payments: ["Pix", "Cartão de crédito", "Parcelamento em até 3x"],
	},
	benefits: {
		overline: "Benefícios",
		title: "O que você leva da sessão além da leitura.",
		items: [
			"Alívio da ansiedade em momentos de incerteza",
			"Direcionamento para decisões amorosas e profissionais",
			"Mais clareza sobre padrões emocionais repetitivos",
			"Sensação de acolhimento e escuta sem julgamento",
			"Plano de ação para os próximos dias após a consulta",
			"Reconexão com sua intuição e autoconhecimento",
		],
	},
	testimonials: {
		overline: "Depoimentos",
		title: "Prova social de quem já passou pela consulta.",
		description:
			"Os relatos abaixo são anonimizados para preservar privacidade, mantendo a essência da experiência de cada consulente.",
		items: [
			{
				quote:
					"Entrei na sessão travada e saí com uma visão muito clara sobre meu relacionamento. A abordagem foi humana, sem julgamento e muito assertiva.",
				name: "A. R.",
				detail: "Consulta Profunda • São Paulo",
			},
			{
				quote:
					"A leitura me ajudou a organizar minha decisão de carreira. Foi direto ao ponto e me deu segurança para agir.",
				name: "M. S.",
				detail: "Leitura Expressa • Recife",
			},
			{
				quote:
					"Senti acolhimento real. Não foi só previsão, foi orientação emocional para um momento difícil.",
				name: "C. T.",
				detail: "Mandala Astrológica • Curitiba",
			},
		],
		whatsappMock: {
			title: "Exemplo de feedback no WhatsApp",
			subtitle: "Nome oculto por privacidade",
			messages: [
				{
					sender: "cliente",
					text: "Clarice, obrigada pela consulta. Me senti muito acolhida.",
					time: "19:42",
				},
				{
					sender: "tarologa",
					text: "Fico feliz. Mantenha os passos que alinhamos para esta semana.",
					time: "19:44",
				},
				{
					sender: "cliente",
					text: "Já me sinto mais tranquila e confiante para decidir.",
					time: "19:46",
				},
			],
		},
	},
	faq: {
		overline: "Perguntas frequentes",
		title: "Tire suas dúvidas antes de agendar.",
		description:
			"Transparência faz parte do atendimento. Se surgir outra dúvida, você pode chamar direto no WhatsApp.",
		items: [
			{
				question: "O tarot prevê o futuro de forma imutável?",
				answer:
					"Não. A leitura mostra tendências e possibilidades com base no momento atual. As decisões continuam sendo suas.",
			},
			{
				question: "Como devo me preparar para a sessão?",
				answer:
					"Separe um local silencioso, internet estável e os temas que deseja abordar. Você recebe um checklist antes da consulta.",
			},
			{
				question: "Você faz amarração amorosa ou trabalhos de interferência?",
				answer:
					"Não. Meu trabalho é de orientação, autoconhecimento e clareza emocional, sempre com ética e respeito ao livre-arbítrio.",
			},
			{
				question: "Posso reagendar caso aconteça um imprevisto?",
				answer:
					"Sim. Reagendamentos podem ser feitos com até 12 horas de antecedência pelo WhatsApp.",
			},
			{
				question: "Você atende presencialmente?",
				answer:
					"A agenda principal é online. Atendimentos presenciais pontuais são avaliados por disponibilidade.",
			},
		],
	},
	finalCta: {
		title: "Quando você ganha clareza, fica mais fácil agir com segurança.",
		description:
			"Escolha sua tiragem e receba atendimento humanizado, com direcionamento prático para sua próxima decisão.",
		buttonLabel: "Falar no WhatsApp agora",
		buttonHref: buildWhatsappLink("Olá, quero agendar minha consulta com você."),
	},
	footer: {
		brand: "Clarice Lua",
		description:
			"Taróloga, cartomante e facilitadora de autoconhecimento. Atendimento online para consulentes em todo o Brasil.",
		instagramLabel: "@claricelua.tarot",
		instagramHref: "https://instagram.com/claricelua.tarot",
		whatsappLabel: "(11) 99999-9999",
		whatsappHref: buildWhatsappLink("Olá, vim pelo site e quero agendar minha consulta."),
		address: "Atendimento online • Presencial sob consulta em São Paulo - SP",
		copyright: "© 2026 Clarice Lua. Todos os direitos reservados.",
		disclaimer:
			"A leitura de tarot é uma ferramenta de orientação e autoconhecimento, sem garantia de resultados específicos.",
	},
}
