const { performance } = require("perf_hooks")

const ITERATIONS = 10000000

function benchmark() {
	// Baseline: Allocation inside loop
	const startInside = performance.now()
	for (let i = 0; i < ITERATIONS; i++) {
		const _statementItems = [
			{
				title: "Plano Fechado na 1ª Consulta",
				desc: "Você sai com diagnóstico, etapas do tratamento, investimento e cronograma por fase.",
			},
			{
				title: "Prazos Reais",
				desc: "Procedimentos estéticos simples podem começar em até 7 dias após a avaliação.",
			},
			{
				title: "Entregáveis Concretos",
				desc: "Documentação fotográfica, escaneamento 3D e simulação do sorriso antes de iniciar.",
			},
			{
				title: "Acompanhamento Contínuo",
				desc: "Retornos programados e orientações pós-procedimento com canal direto da equipe.",
			},
		]
	}
	const endInside = performance.now()
	const durationInside = endInside - startInside

	// Optimization: Allocation outside loop
	const staticStatementItems = [
		{
			title: "Plano Fechado na 1ª Consulta",
			desc: "Você sai com diagnóstico, etapas do tratamento, investimento e cronograma por fase.",
		},
		{
			title: "Prazos Reais",
			desc: "Procedimentos estéticos simples podem começar em até 7 dias após a avaliação.",
		},
		{
			title: "Entregáveis Concretos",
			desc: "Documentação fotográfica, escaneamento 3D e simulação do sorriso antes de iniciar.",
		},
		{
			title: "Acompanhamento Contínuo",
			desc: "Retornos programados e orientações pós-procedimento com canal direto da equipe.",
		},
	]

	const startOutside = performance.now()
	for (let i = 0; i < ITERATIONS; i++) {
		const _items = staticStatementItems
	}
	const endOutside = performance.now()
	const durationOutside = endOutside - startOutside

	const _improvement = ((durationInside - durationOutside) / durationInside) * 100
}

benchmark()
