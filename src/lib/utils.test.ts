import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    expect(cn('class1', true && 'class2', false && 'class3')).toBe('class1 class2')
    expect(cn('class1', null, undefined, 'class2')).toBe('class1 class2')
  })

  it('merges tailwind classes correctly', () => {
    // p-4 should override p-2
    expect(cn('p-2', 'p-4')).toBe('p-4')
    // text-red-500 should override text-blue-500
    expect(cn('text-blue-500', 'text-red-500')).toBe('text-red-500')
  })

  it('handles mixed inputs (arrays, objects)', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2')
    expect(cn({ class1: true, class2: false, class3: true })).toBe('class1 class3')
    expect(cn('class1', ['class2', { class3: true }])).toBe('class1 class2 class3')
  })

  it('handles empty inputs', () => {
    expect(cn()).toBe('')
    expect(cn(null)).toBe('')
    expect(cn(undefined)).toBe('')
  })
})
