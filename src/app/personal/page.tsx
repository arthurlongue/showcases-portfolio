import { ArrowRight } from "lucide-react"
import Image from "next/image"
import {
	MarqueeTicker,
	NewsprintNav,
	NewsprintReveal,
	OrnamentalDivider,
	ParallaxImage,
	ProcessStep,
	ProgramCard,
	StaggerCounter,
	TestimonialCard,
} from "./components/client"
import { personalData } from "./data"

export default function PersonalPage() {
	const {
		brand,
		nav,
		hero,
		marquee,
		stats,
		philosophy,
		programs,
		method,
		testimonials,
		cta,
		footer,
	} = personalData

	return (
		<main className="relative min-h-screen">
			{/* Cinematic grain + texture overlays */}
			<div className="noise-overlay" />

			<NewsprintNav brand={brand.name} edition={brand.edition} links={nav.links} />

			{/* ▬▬▬ HERO ▬▬▬ */}
			<header
				className="relative overflow-hidden border-b"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<div className="mx-auto grid max-w-screen-xl grid-cols-12 gap-0">
					{/* Left column — 8 cols */}
					<div className="col-span-12 flex flex-col justify-end p-6 pb-12 md:p-12 md:pb-20 lg:col-span-8 lg:p-16 lg:pb-24">
						<NewsprintReveal>
							<div
								className="mb-4"
								style={{
									fontFamily: "var(--font-data)",
									fontSize: "10px",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: "var(--np-neutral-500)",
								}}
							>
								{brand.tagline}
							</div>
						</NewsprintReveal>

						<NewsprintReveal delay={0.1}>
							<h1 className="hero-headline" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
								{hero.headline.split(" ").map((word, i) => (
									<span key={word}>
										{i === hero.headline.split(" ").length - 1 ? (
											<span style={{ color: "var(--np-accent)" }}>{word}</span>
										) : (
											word
										)}
										{i < hero.headline.split(" ").length - 1 && <br className="hidden lg:block" />}
										{i < hero.headline.split(" ").length - 1 && " "}
									</span>
								))}
							</h1>
						</NewsprintReveal>

						<NewsprintReveal delay={0.2}>
							<p
								className="mt-8 max-w-lg"
								style={{
									fontFamily: "var(--font-body)",
									fontSize: "1rem",
									lineHeight: 1.7,
									color: "var(--np-neutral-600)",
								}}
							>
								{hero.subheadline}
							</p>
						</NewsprintReveal>

						<NewsprintReveal delay={0.3}>
							<a
								href="#contato"
								className="mt-10 inline-flex w-fit cursor-pointer items-center gap-3 border px-8 py-4 transition-all duration-200 hover:bg-[var(--np-ink)] hover:text-[var(--np-bg)]"
								style={{
									borderColor: "var(--np-ink)",
									borderWidth: "var(--np-border-width)",
									fontFamily: "var(--font-ui)",
									fontSize: "11px",
									letterSpacing: "0.15em",
									textTransform: "uppercase",
									fontWeight: 600,
								}}
							>
								{hero.cta}
								<ArrowRight size={14} />
							</a>
						</NewsprintReveal>
					</div>

					{/* Right column — 4 cols, image */}
					<div
						className="relative col-span-12 min-h-[50vh] border-t lg:col-span-4 lg:min-h-0 lg:border-t-0 lg:border-l"
						style={{ borderColor: "var(--np-ink)", borderWidth: "var(--np-border-width) 0 0 0" }}
					>
						<Image
							src="/showcases/personal/hero-coaching.png"
							alt="Personal trainer orientando aluno durante agachamento"
							fill
							className="grayscale-photo object-cover"
							sizes="(max-width: 1024px) 100vw, 33vw"
							priority
						/>
						{/* Figure caption */}
						<div
							className="absolute bottom-0 left-0 bg-[var(--np-bg)]/90 px-4 py-2"
							style={{
								fontFamily: "var(--font-data)",
								fontSize: "9px",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "var(--np-neutral-500)",
							}}
						>
							{hero.figure}
						</div>
					</div>
				</div>
			</header>

			{/* ▬▬▬ MARQUEE TICKER ▬▬▬ */}
			<section
				className="border-b py-4"
				style={{
					borderColor: "var(--np-accent)",
					borderWidth: "0 0 var(--np-border-width) 0",
					backgroundColor: "var(--np-accent)",
					color: "var(--np-bg)",
				}}
			>
				<MarqueeTicker speed={25}>
					<span
						className="flex items-center gap-8 pr-8"
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "clamp(1.25rem, 3vw, 2rem)",
							textTransform: "uppercase",
							letterSpacing: "0.02em",
						}}
					>
						{marquee.map((item) => (
							<span key={item} className="flex items-center gap-8">
								<span>{item}</span>
								<span style={{ color: "var(--np-accent)" }}>■</span>
							</span>
						))}
					</span>
				</MarqueeTicker>
			</section>

			{/* ▬▬▬ STATS ▬▬▬ */}
			<section
				className="border-b px-6 py-16 md:px-12 md:py-20"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
					{stats.map((stat, i) => (
						<NewsprintReveal key={stat.label} delay={i * 0.1}>
							<StaggerCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
						</NewsprintReveal>
					))}
				</div>
			</section>

			{/* ▬▬▬ FILOSOFIA ▬▬▬ */}
			<section
				id="metodo"
				className="flex flex-col border-b md:flex-row"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				{/* Text side */}
				<div
					className="flex flex-col justify-center border-b p-8 md:w-7/12 md:border-b-0 md:border-r md:p-16 lg:p-24"
					style={{
						borderColor: "var(--np-ink)",
						borderWidth: "0 var(--np-border-width) var(--np-border-width) 0",
					}}
				>
					<NewsprintReveal>
						<h2
							style={{
								fontFamily: "var(--font-headline)",
								fontSize: "clamp(2.5rem, 6vw, 4rem)",
								fontWeight: 900,
								lineHeight: 1,
							}}
						>
							{philosophy.headline}
						</h2>
					</NewsprintReveal>

					<NewsprintReveal delay={0.1}>
						<p
							className="drop-cap mt-8"
							style={{
								fontFamily: "var(--font-body)",
								fontSize: "1.0625rem",
								lineHeight: 1.8,
								textAlign: "justify",
								color: "var(--np-neutral-700)",
							}}
						>
							{philosophy.lead}
						</p>
					</NewsprintReveal>

					{philosophy.body.map((paragraph) => (
						<NewsprintReveal key={paragraph.slice(0, 20)} delay={0.2}>
							<p
								className="mt-4"
								style={{
									fontFamily: "var(--font-body)",
									fontSize: "0.9375rem",
									lineHeight: 1.8,
									textAlign: "justify",
									color: "var(--np-neutral-600)",
								}}
							>
								{paragraph}
							</p>
						</NewsprintReveal>
					))}

					<NewsprintReveal delay={0.3}>
						<a
							href="#"
							className="mt-10 inline-flex items-center gap-2 border-b-2 pb-1 transition-colors duration-200 hover:border-[var(--np-accent)] hover:text-[var(--np-accent)]"
							style={{
								borderColor: "var(--np-ink)",
								fontFamily: "var(--font-ui)",
								fontSize: "11px",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								fontWeight: 600,
							}}
						>
							{philosophy.cta}
							<ArrowRight size={12} />
						</a>
					</NewsprintReveal>
				</div>

				{/* Image side */}
				<div className="relative min-h-[50vh] md:w-5/12 md:min-h-0">
					<Image
						src="/showcases/personal/trainer-assessment.png"
						alt="Personal trainer realizando avaliação de movimento"
						fill
						className="grayscale-photo object-cover"
						sizes="(max-width: 768px) 100vw, 42vw"
					/>
				</div>
			</section>

			{/* ▬▬▬ ORNAMENTAL DIVIDER ▬▬▬ */}
			<OrnamentalDivider />

			{/* ▬▬▬ PROGRAMAS ▬▬▬ */}
			<section
				id="programas"
				className="border-b"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				{/* Section header */}
				<div
					className="border-b p-8 md:p-16"
					style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
				>
					<NewsprintReveal>
						<div className="mx-auto max-w-screen-xl">
							<div
								className="mb-4"
								style={{
									fontFamily: "var(--font-data)",
									fontSize: "10px",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: "var(--np-neutral-500)",
								}}
							>
								Programas de Treinamento
							</div>
							<h2
								style={{
									fontFamily: "var(--font-headline)",
									fontSize: "clamp(2rem, 5vw, 3.5rem)",
									fontWeight: 900,
									lineHeight: 1.1,
								}}
							>
								Treinamento que <span style={{ color: "var(--np-accent)" }}>Funciona</span>
							</h2>
						</div>
					</NewsprintReveal>
				</div>

				{/* Program grid */}
				<div className="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-2">
					{programs.map((program, i) => (
						<div
							key={program.id}
							className={`${i < programs.length - 1 ? "border-b" : ""} ${
								(i + 1) % 2 !== 0 ? "lg:border-r" : ""
							} ${i < programs.length - 2 ? "lg:border-b" : ""} ${i === programs.length - 2 ? "lg:border-b-0" : ""}`}
							style={{ borderColor: "var(--np-ink)", borderWidth: "var(--np-border-width)" }}
						>
							<ProgramCard
								id={program.id}
								title={program.title}
								description={program.description}
								tag={program.tag}
								index={i}
								total={programs.length}
							/>
						</div>
					))}
				</div>
			</section>

			{/* ▬▬▬ PARALLAX DIVIDER ▬▬▬ */}
			<section
				className="border-b"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<ParallaxImage className="relative h-[40vh] md:h-[50vh]">
					<Image
						src="/showcases/personal/training-session.png"
						alt="Sessão de treinamento com personal trainer"
						fill
						className="object-cover brightness-[0.3]"
						sizes="100vw"
					/>
					<div className="absolute inset-0 z-10 flex items-center justify-center">
						<h2
							className="px-6 text-center"
							style={{
								fontFamily: "var(--font-headline)",
								fontSize: "clamp(2rem, 8vw, 6rem)",
								fontWeight: 900,
								lineHeight: 0.9,
								color: "var(--np-bg)",
								textTransform: "uppercase",
								letterSpacing: "-0.02em",
							}}
						>
							Disciplina é
							<br />
							<span style={{ color: "var(--np-accent)" }}>Liberdade.</span>
						</h2>
					</div>
				</ParallaxImage>
			</section>

			{/* ▬▬▬ O MÉTODO — CONTRAST SECTION ▬▬▬ */}
			<section
				className="border-b"
				style={{
					borderColor: "var(--np-accent)",
					borderWidth: "0 0 var(--np-border-width) 0",
					backgroundColor: "var(--np-muted)",
					color: "var(--np-ink)",
				}}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
					<div className="flex flex-col gap-12 md:flex-row md:gap-20">
						{/* Left — title */}
						<div className="md:w-1/3">
							<NewsprintReveal>
								<div
									className="mb-4"
									style={{
										fontFamily: "var(--font-data)",
										fontSize: "10px",
										letterSpacing: "0.2em",
										textTransform: "uppercase",
										color: "var(--np-neutral-400)",
									}}
								>
									Metodologia
								</div>
								<h2
									style={{
										fontFamily: "var(--font-headline)",
										fontSize: "clamp(2.5rem, 6vw, 4rem)",
										fontWeight: 900,
										lineHeight: 1,
									}}
								>
									O <span style={{ color: "var(--np-accent)" }}>Método</span>
								</h2>
								<p
									className="mt-6"
									style={{
										fontFamily: "var(--font-body)",
										fontSize: "0.875rem",
										lineHeight: 1.7,
										color: "var(--np-neutral-400)",
									}}
								>
									Do primeiro contato ao resultado mensurável, cada etapa é documentada e ajustada.
								</p>
							</NewsprintReveal>
						</div>

						{/* Right — steps */}
						<div className="md:w-2/3">
							{method.map((step, i) => (
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
			<section
				className="border-b py-3"
				style={{
					borderColor: "var(--np-ink)",
					borderWidth: "0 0 var(--np-border-width) 0",
					backgroundColor: "var(--np-accent)",
					color: "var(--np-bg)",
				}}
			>
				<MarqueeTicker speed={20}>
					<span
						className="flex items-center gap-6 pr-6"
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
							textTransform: "uppercase",
							letterSpacing: "0.1em",
						}}
					>
						<span>Avaliação Gratuita</span>
						<span>◆</span>
						<span>Vagas Limitadas</span>
						<span>◆</span>
						<span>Periodização Individual</span>
						<span>◆</span>
						<span>Resultados Documentados</span>
						<span>◆</span>
					</span>
				</MarqueeTicker>
			</section>

			{/* ▬▬▬ DEPOIMENTOS ▬▬▬ */}
			<section
				id="resultados"
				className="border-b px-6 py-16 md:px-12 md:py-24"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<div className="mx-auto max-w-screen-xl">
					<NewsprintReveal>
						<div
							className="mb-4"
							style={{
								fontFamily: "var(--font-data)",
								fontSize: "10px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								color: "var(--np-neutral-500)",
							}}
						>
							Depoimentos
						</div>
						<h2
							style={{
								fontFamily: "var(--font-headline)",
								fontSize: "clamp(2rem, 5vw, 3.5rem)",
								fontWeight: 900,
								lineHeight: 1.1,
							}}
						>
							Quem Treina, <span style={{ color: "var(--np-accent)" }}>Recomenda.</span>
						</h2>
					</NewsprintReveal>

					<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{testimonials.map((t, i) => (
							<TestimonialCard
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

			{/* ▬▬▬ TRANSFORMAÇÕES (ANTES & DEPOIS) ▬▬▬ */}
			<section
				className="border-b"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<div
					className="border-b p-8 md:p-16"
					style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
				>
					<NewsprintReveal>
						<div className="mx-auto max-w-screen-xl">
							<div
								className="mb-4"
								style={{
									fontFamily: "var(--font-data)",
									fontSize: "10px",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: "var(--np-neutral-500)",
								}}
							>
								Resultados Documentados
							</div>
							<h2
								style={{
									fontFamily: "var(--font-headline)",
									fontSize: "clamp(2rem, 5vw, 3.5rem)",
									fontWeight: 900,
									lineHeight: 1.1,
								}}
							>
								Antes & <span style={{ color: "var(--np-accent)" }}>Depois</span>
							</h2>
						</div>
					</NewsprintReveal>
				</div>

				<div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">
					{[
						{
							src: "/showcases/personal/Whisk_84032f75e90686cbfac458127c368267dr.jpeg",
							alt: "Transformação corporal masculina — antes e depois",
							name: "Rafael M.",
							result: "+4kg massa magra · -8% gordura · 6 meses",
						},
						{
							src: "/showcases/personal/Whisk_4db8ea7cf4558bc8a534e73a0ec4376edr.jpeg",
							alt: "Transformação corporal feminina — antes e depois",
							name: "Camila D.",
							result: "-12kg · +força · 8 meses",
						},
					].map((item, idx) => (
						<NewsprintReveal key={item.name} delay={idx * 0.15}>
							<div
								className={`group overflow-hidden ${idx === 0 ? "border-b md:border-b-0 md:border-r" : ""}`}
								style={{ borderColor: "var(--np-ink)", borderWidth: "var(--np-border-width)" }}
							>
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={item.src}
										alt={item.alt}
										fill
										className="object-contain transition-transform duration-700 group-hover:scale-105"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
								<div className="p-6">
									<div
										style={{
											fontFamily: "var(--font-ui)",
											fontSize: "0.8125rem",
											fontWeight: 600,
											textTransform: "uppercase",
											letterSpacing: "0.05em",
										}}
									>
										{item.name}
									</div>
									<div
										className="mt-1"
										style={{
											fontFamily: "var(--font-data)",
											fontSize: "10px",
											letterSpacing: "0.1em",
											textTransform: "uppercase",
											color: "var(--np-accent)",
										}}
									>
										{item.result}
									</div>
								</div>
							</div>
						</NewsprintReveal>
					))}
				</div>
			</section>

			{/* ▬▬▬ GALERIA (PESSOAS) ▬▬▬ */}
			<section
				className="grid grid-cols-1 border-b md:grid-cols-3"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				{[
					{ src: "/showcases/personal/hero-coaching.png", alt: "Treinamento personalizado" },
					{ src: "/showcases/personal/client-stretching.png", alt: "Recuperação pós-treino" },
					{ src: "/showcases/personal/training-session.png", alt: "Sessão de força" },
				].map((img, idx) => (
					<div
						key={img.alt}
						className={`group relative aspect-video overflow-hidden ${
							idx < 2 ? "border-b md:border-b-0 md:border-r" : ""
						}`}
						style={{ borderColor: "var(--np-ink)", borderWidth: "var(--np-border-width)" }}
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							className="grayscale-photo object-cover transition-transform duration-1000 group-hover:scale-110"
							sizes="(max-width: 768px) 100vw, 33vw"
						/>
					</div>
				))}
			</section>

			{/* ▬▬▬ CTA ▬▬▬ */}
			<section
				id="contato"
				className="flex flex-col items-center justify-center border-b px-6 py-24 text-center md:py-32"
				style={{ borderColor: "var(--np-ink)", borderWidth: "0 0 var(--np-border-width) 0" }}
			>
				<NewsprintReveal>
					<OrnamentalDivider />
					<h2
						className="hero-headline"
						style={{
							fontSize: "clamp(2.5rem, 10vw, 7rem)",
						}}
					>
						{cta.headline.split(" ").slice(0, -1).join(" ")}
						<br />
						<span style={{ color: "var(--np-accent)" }}>{cta.headline.split(" ").slice(-1)}</span>
					</h2>
				</NewsprintReveal>

				<NewsprintReveal delay={0.15}>
					<p
						className="mt-8 max-w-md"
						style={{
							fontFamily: "var(--font-body)",
							fontSize: "0.9375rem",
							lineHeight: 1.7,
							color: "var(--np-neutral-600)",
						}}
					>
						{cta.subtext}
					</p>
				</NewsprintReveal>

				<NewsprintReveal delay={0.25}>
					<a
						href="#"
						className="mt-10 inline-flex cursor-pointer items-center gap-3 border px-10 py-5 transition-all duration-200 hover:bg-[var(--np-ink)] hover:text-[var(--np-bg)]"
						style={{
							borderColor: "var(--np-ink)",
							borderWidth: "var(--np-border-width)",
							fontFamily: "var(--font-ui)",
							fontSize: "12px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							fontWeight: 600,
						}}
					>
						{cta.button}
						<ArrowRight size={16} />
					</a>
				</NewsprintReveal>

				<NewsprintReveal delay={0.35}>
					<p
						className="mt-6"
						style={{
							fontFamily: "var(--font-data)",
							fontSize: "10px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "var(--np-neutral-500)",
						}}
					>
						{cta.note}
					</p>
				</NewsprintReveal>
			</section>

			{/* ▬▬▬ FOOTER ▬▬▬ */}
			<footer className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-16">
				<div>
					<div
						style={{
							fontFamily: "var(--font-headline)",
							fontSize: "clamp(2.5rem, 6vw, 4rem)",
							fontWeight: 900,
							textTransform: "uppercase",
							letterSpacing: "0.05em",
						}}
					>
						{brand.name}
					</div>
					<div
						className="mt-1"
						style={{
							fontFamily: "var(--font-data)",
							fontSize: "10px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "var(--np-neutral-500)",
						}}
					>
						{footer.cref}
					</div>
				</div>

				<div
					className="text-center md:text-right"
					style={{
						fontFamily: "var(--font-data)",
						fontSize: "10px",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
						lineHeight: 2,
						color: "var(--np-neutral-500)",
					}}
				>
					<p>{footer.copyright}</p>
				</div>
			</footer>
		</main>
	)
}
