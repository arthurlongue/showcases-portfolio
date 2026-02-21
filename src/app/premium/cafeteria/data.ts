export const auraData = {
	hero: {
		headline: ["A Essência do", "Grão."],
		subheadline:
			"Cada detalhe, intencional. Cada xícara, uma revelação. O novo padrão do café especial.",
		cta: "Descobrir a Safra",
		video: "/showcases/cafeteria/hero.mp4",
		poster: "/showcases/cafeteria/hero-poster.jpeg",
	},
	features: {
		origins: [
			{
				region: "Mantiqueira",
				notes: "Chocolate // Avelã // Doce de Leite",
				image: "/showcases/cafeteria/mantiqueira.jpeg",
			},
			{
				region: "Cerrado",
				notes: "Caramelo // Frutas Amarelas // Mel",
				image: "/showcases/cafeteria/cerrado.jpeg",
			},
			{
				region: "Caparaó",
				notes: "Melaço // Rapadura // Frutas Vermelhas",
				image: "/showcases/cafeteria/caparao.jpeg",
			},
		],
		sensorial: [
			"Extraindo notas: Jasmim...",
			"Extraindo notas: Chocolate Amargo...",
			"Extraindo notas: Acidez Cítrica...",
			"Perfil de torra: Finalizado.",
		],
	},
	philosophy: {
		prefix: "Café não é apenas uma bebida.",
		highlight: "É um momento de",
		serif: "clareza.",
		image: "/showcases/cafeteria/filosofia.jpeg",
	},
	protocol: [
		{
			title: "Curadoria de Origem.",
			description:
				"Rastreabilidade completa, do microlote à sua xícara. Relações diretas com quem planta e colhe com respeito.",
			media: "/showcases/cafeteria/protocolo-1.mp4",
			poster: "/showcases/cafeteria/protocolo-1-poster.jpeg",
			type: "video" as const,
		},
		{
			title: "Alquimia da Torra.",
			description:
				"Curvas de torra milimetricamente desenhadas. Não escondemos o grão atrás da queima; revelamos seu verdadeiro potencial.",
			media: "/showcases/cafeteria/protocolo-2.mp4",
			poster: "/showcases/cafeteria/protocolo-2-poster.jpeg",
			type: "video" as const,
		},
		{
			title: "Ritual de Frescor.",
			description:
				"Enviado horas após a torra. Sem estoques abandonados. O pico do frescor garantido em cada assinatura.",
			media: "/showcases/cafeteria/protocolo-3.jpeg",
			type: "image" as const,
		},
	],
}
