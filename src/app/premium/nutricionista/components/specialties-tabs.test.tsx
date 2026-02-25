import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { SpecialtiesTabs } from "./specialties-tabs"

describe("SpecialtiesTabs", () => {
	it("renders the initial state correctly", () => {
		render(<SpecialtiesTabs />)

		// Verify that the first tab is active (Emagrecimento Saudável)
		// We can check if the description for the first tab is visible
		expect(
			screen.getByText(
				"Estratégia para perda de gordura com manutenção de massa magra, sem cardápio impossível de seguir.",
			),
		).toBeInTheDocument()

		// Verify that the sub-description for the first tab is visible
		expect(
			screen.getByText("Meta definida por fase, retorno em 30 dias e ajustes quinzenais."),
		).toBeInTheDocument()

		// Verify that the description for the second tab is NOT visible
		expect(
			screen.queryByText(
				"Protocolo para gases, estufamento, constipação e desconforto abdominal com foco em rotina alimentar.",
			),
		).not.toBeInTheDocument()
	})

	it("updates content when a tab is clicked", async () => {
		const user = userEvent.setup()
		render(<SpecialtiesTabs />)

		// Find the button for the second tab (Saúde Intestinal (Disbiose))
		const secondTabButton = screen.getByText("Saúde Intestinal (Disbiose)")

		// Click the button
		await user.click(secondTabButton)

		// Verify that the description for the second tab is now visible
		expect(
			await screen.findByText(
				"Protocolo para gases, estufamento, constipação e desconforto abdominal com foco em rotina alimentar.",
			),
		).toBeInTheDocument()

		// Verify that the sub-description for the second tab is visible
		expect(
			screen.getByText(
				"Conduta individual para disbiose e SII, com evolução acompanhada por sintomas.",
			),
		).toBeInTheDocument()

		// Verify that the description for the first tab is NO LONGER visible
		expect(
			screen.queryByText(
				"Estratégia para perda de gordura com manutenção de massa magra, sem cardápio impossível de seguir.",
			),
		).not.toBeInTheDocument()
	})
})
