"use client"

import { motion } from "motion/react"
import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type Letter = {
	char: string
	x: number
	y: number
}

interface HolographicWallProps extends React.HTMLAttributes<HTMLDivElement> {
	intensity?: number
	radius?: number
	gridSize?: number
}

const GLYPHS = [
	"☽",
	"★",
	"✦",
	"☀",
	"♈",
	"♉",
	"♊",
	"♋",
	"♌",
	"♍",
	"♎",
	"♏",
	"♐",
	"♑",
	"♒",
	"♓",
	"☿",
	"♃",
	"♄",
	"⊛",
] as const

function buildLetters(width: number, height: number, gridSize: number): Letter[] {
	const safeGridSize = Math.max(8, gridSize)
	const spacingX = width / safeGridSize
	const spacingY = height / safeGridSize
	const letters: Letter[] = []

	for (let row = 0; row < safeGridSize; row++) {
		for (let col = 0; col < safeGridSize; col++) {
			letters.push({
				char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
				x: col * spacingX + spacingX * 0.5,
				y: row * spacingY + spacingY * 0.5,
			})
		}
	}

	return letters
}

export function HolographicWall({
	className,
	intensity = 0.8,
	radius = 200,
	gridSize = 20,
	...props
}: HolographicWallProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
	const [letters, setLetters] = useState<Letter[]>([])

	const generateLetters = useCallback(() => {
		if (!containerRef.current) return
		const { width, height } = containerRef.current.getBoundingClientRect()
		setLetters(buildLetters(width, height, gridSize))
	}, [gridSize])

	useEffect(() => {
		generateLetters()

		if (!containerRef.current) return

		const observer = new ResizeObserver(() => generateLetters())
		observer.observe(containerRef.current)

		return () => observer.disconnect()
	}, [generateLetters])

	const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect()
		setMousePosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		})
	}

	return (
		<div
			ref={containerRef}
			onPointerMove={handlePointerMove}
			onPointerLeave={() => setMousePosition(null)}
			className={cn(
				"relative h-96 w-full overflow-hidden rounded-2xl border border-border bg-black",
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0">
				{letters.map((letter, index) => {
					const distance = mousePosition
						? Math.hypot(letter.x - mousePosition.x, letter.y - mousePosition.y)
						: Number.POSITIVE_INFINITY
					const isHighlighted = mousePosition && distance < radius
					const letterIntensity = isHighlighted ? Math.max(0, 1 - distance / radius) * intensity : 0

					return (
						<motion.span
							key={`${index}-${letter.char}`}
							initial={{ opacity: 0.15 }}
							animate={{
								opacity: isHighlighted ? 0.15 + letterIntensity : 0.15,
								scale: isHighlighted ? 1.2 : 1,
								color: isHighlighted
									? `rgba(255, 215, 0, ${0.3 + letterIntensity})`
									: "rgba(200, 200, 200, 0.15)",
							}}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 30,
							}}
							className="pointer-events-none absolute select-none text-sm"
							style={{
								left: letter.x,
								top: letter.y,
								transform: "translate(-50%, -50%)",
								textShadow: isHighlighted
									? `0 0 ${letterIntensity * 25}px rgba(255, 215, 0, ${letterIntensity})`
									: "none",
							}}
						>
							{letter.char}
						</motion.span>
					)
				})}
			</div>

			{mousePosition ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: intensity }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="pointer-events-none absolute inset-0"
				>
					<div
						className="absolute"
						style={{
							left: mousePosition.x,
							top: mousePosition.y,
							width: `${radius * 2}px`,
							height: `${radius * 2}px`,
							transform: "translate(-50%, -50%)",
							background:
								"radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.3) 30%, transparent 70%)",
							filter: "blur(40px)",
						}}
					/>
				</motion.div>
			) : null}
		</div>
	)
}
