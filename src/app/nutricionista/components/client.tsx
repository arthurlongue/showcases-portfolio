"use client"
import { motion, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

export const MotionDiv = motion.div
export const MotionH1 = motion.h1
export const MotionPath = motion.path
export const MotionSvg = motion.svg

export function StatCounter({
	value,
	suffix = "",
	duration = 2,
}: {
	value: string
	suffix?: string
	duration?: number
}) {
	const [count, setCount] = useState(0)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			let startTime: number
			const end = parseInt(value.replace(/,/g, ""), 10)

			const step = (timestamp: number) => {
				if (!startTime) startTime = timestamp
				const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
				setCount(Math.floor(progress * end))
				if (progress < 1) {
					window.requestAnimationFrame(step)
				}
			}
			window.requestAnimationFrame(step)
		}
	}, [isInView, value, duration])

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	)
}

export const AnimatedCheck = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div ref={ref} className="p-3 bg-(--nutri-warm) rounded-full text-(--nutri-forest) shrink-0">
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<motion.path
					d="M20 6 9 17l-5-5"
					initial={{ pathLength: 0 }}
					animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				/>
			</motion.svg>
		</div>
	)
}
