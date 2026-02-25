"use client"

import { motion } from "motion/react"
import Image from "next/image"

const vectors = [
	{
		src: "/showcases/tarologa/vectors/crystal-ball.svg",
		alt: "Crystal Ball",
		className: "top-[15%] left-[5%] w-32 md:w-48 opacity-20 rotate-[-15deg]",
	},
	{
		src: "/showcases/tarologa/vectors/hamsa.svg",
		alt: "Hamsa",
		className: "top-[45%] right-[8%] w-24 md:w-40 opacity-20 rotate-[10deg]",
	},
	{
		src: "/showcases/tarologa/vectors/moon-phases.svg",
		alt: "Moon Phases",
		className: "top-[75%] left-[10%] w-40 md:w-64 opacity-20 rotate-[-5deg]",
	},
	{
		src: "/showcases/tarologa/vectors/mystic-moon.svg",
		alt: "Mystic Moon",
		className: "top-[25%] right-[15%] w-28 md:w-44 opacity-20 rotate-[20deg]",
	},
	{
		src: "/showcases/tarologa/vectors/mystic-sun.svg",
		alt: "Mystic Sun",
		className: "top-[60%] left-[15%] w-36 md:w-56 opacity-20 rotate-[-10deg]",
	},
	{
		src: "/showcases/tarologa/vectors/sparkles.svg",
		alt: "Sparkles",
		className: "top-[85%] right-[20%] w-20 md:w-32 opacity-20 rotate-[15deg]",
	},
	{
		src: "/showcases/tarologa/vectors/star-eight.svg",
		alt: "Eight Pointed Star",
		className: "top-[35%] left-[20%] w-16 md:w-24 opacity-20 rotate-[-25deg]",
	},
	{
		src: "/showcases/tarologa/vectors/tarot-card-back.svg",
		alt: "Tarot Card",
		className: "top-[55%] right-[25%] w-24 md:w-36 opacity-20 rotate-[30deg]",
	},
	{
		src: "/showcases/tarologa/vectors/third-eye.svg",
		alt: "Third Eye",
		className: "top-[10%] right-[30%] w-20 md:w-32 opacity-20 rotate-[-10deg]",
	},
	{
		src: "/showcases/tarologa/vectors/zodiac-wheel.svg",
		alt: "Zodiac Wheel",
		className: "top-[80%] left-[30%] w-48 md:w-72 opacity-20 rotate-[5deg]",
	},
]

export function TarotVectors() {
	return (
		<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
			{vectors.map((vector, i) => (
				<motion.div
					key={vector.src}
					className={`absolute ${vector.className}`}
					initial={{ y: 0 }}
					animate={{ y: [0, -20, 0] }}
					transition={{
						duration: 6 + (i % 4) * 2,
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * 0.5,
					}}
				>
					<Image
						src={vector.src}
						alt={vector.alt}
						width={300}
						height={300}
						className="h-auto w-full drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
					/>
				</motion.div>
			))}
		</div>
	)
}
