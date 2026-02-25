import { render, screen, fireEvent } from "@testing-library/react"
import { createRef } from "react"
import { Button } from "./button"

describe("Button", () => {
	it("renders correctly with default props", () => {
		render(<Button>Default Button</Button>)
		const button = screen.getByRole("button", { name: /default button/i })
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass("bg-primary text-primary-foreground")
	})

	it("renders correctly with destructive variant", () => {
		render(<Button variant="destructive">Destructive</Button>)
		const button = screen.getByRole("button", { name: /destructive/i })
		expect(button).toHaveClass("bg-destructive text-white")
	})

	it("renders correctly with outline variant", () => {
		render(<Button variant="outline">Outline</Button>)
		const button = screen.getByRole("button", { name: /outline/i })
		expect(button).toHaveClass("border bg-background")
	})

	it("renders correctly with secondary variant", () => {
		render(<Button variant="secondary">Secondary</Button>)
		const button = screen.getByRole("button", { name: /secondary/i })
		expect(button).toHaveClass("bg-secondary text-secondary-foreground")
	})

	it("renders correctly with ghost variant", () => {
		render(<Button variant="ghost">Ghost</Button>)
		const button = screen.getByRole("button", { name: /ghost/i })
		expect(button).toHaveClass("hover:bg-accent hover:text-accent-foreground")
	})

	it("renders correctly with link variant", () => {
		render(<Button variant="link">Link</Button>)
		const button = screen.getByRole("button", { name: /link/i })
		expect(button).toHaveClass("text-primary underline-offset-4 hover:underline")
	})

	it("renders correctly with sm size", () => {
		render(<Button size="sm">Small</Button>)
		const button = screen.getByRole("button", { name: /small/i })
		expect(button).toHaveClass("h-8 gap-1.5 rounded-md px-3")
	})

	it("renders correctly with lg size", () => {
		render(<Button size="lg">Large</Button>)
		const button = screen.getByRole("button", { name: /large/i })
		expect(button).toHaveClass("h-10 rounded-md px-6")
	})

	it("renders correctly with icon size", () => {
		render(<Button size="icon">Icon</Button>)
		const button = screen.getByRole("button", { name: /icon/i })
		expect(button).toHaveClass("size-9")
	})

	it("handles disabled state", () => {
		render(<Button disabled>Disabled</Button>)
		const button = screen.getByRole("button", { name: /disabled/i })
		expect(button).toBeDisabled()
	})

	it("calls onClick handler when clicked", () => {
		const handleClick = vi.fn()
		render(<Button onClick={handleClick}>Click Me</Button>)
		const button = screen.getByRole("button", { name: /click me/i })
		fireEvent.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it("forwards ref correctly", () => {
		const ref = createRef<HTMLButtonElement>()
		render(<Button ref={ref}>Ref Button</Button>)
		expect(ref.current).toBeInstanceOf(HTMLButtonElement)
	})

	it("renders as a child component when asChild is true", () => {
		render(
			<Button asChild>
				<a href="/test">Link Button</a>
			</Button>
		)
		const link = screen.getByRole("link", { name: /link button/i })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/test")
		expect(link).toHaveClass("bg-primary text-primary-foreground") // Should still have button classes
	})
})
