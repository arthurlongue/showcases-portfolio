import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrutalButton } from './client'
import React from 'react'

describe('BrutalButton', () => {
  it('renders children correctly', () => {
    render(<BrutalButton>Click me</BrutalButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<BrutalButton>Primary</BrutalButton>)
    const button = screen.getByRole('button', { name: /primary/i })
    expect(button).toHaveClass('bg-[var(--color-brutal-accent)]')
  })

  it('applies outline variant styles', () => {
    render(<BrutalButton variant="outline">Outline</BrutalButton>)
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('bg-transparent')
  })

  it('merges custom className', () => {
    render(<BrutalButton className="custom-class">Custom</BrutalButton>)
    const button = screen.getByRole('button', { name: /custom/i })
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<BrutalButton onClick={handleClick}>Click me</BrutalButton>)

    fireEvent.click(screen.getByRole('button', { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
