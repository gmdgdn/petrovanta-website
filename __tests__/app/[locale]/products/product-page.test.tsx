import { render, screen } from '@testing-library/react'
import { jest } from '@jest/globals'
import JetA1Page, { generateMetadata } from '@/app/[locale]/products/petroleum/jet-a1/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn()
}))

describe('JetA1Page', () => {
  const mockParams = Promise.resolve({ locale: 'en' })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders product page with async params', async () => {
    const component = await JetA1Page({ params: mockParams })
    render(component)

    // Check for the actual product name in the rendered content
    expect(screen.getByText('Jet A1 Aviation Fuel')).toBeInTheDocument()
  })

  it('works with different locales', async () => {
    const arabicParams = Promise.resolve({ locale: 'ar' })
    const component = await JetA1Page({ params: arabicParams })
    render(component)

    // Check for the actual product name in the rendered content
    expect(screen.getByText('Jet A1 Aviation Fuel')).toBeInTheDocument()
  })
})

describe('generateMetadata for JetA1Page', () => {
  const mockParams = Promise.resolve({ locale: 'en' })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('generates metadata with async params', async () => {
    const metadata = await generateMetadata({ params: mockParams })

    // Test that metadata is generated (the actual structure will depend on implementation)
    expect(metadata).toBeDefined()
    expect(typeof metadata.title).toBe('string')
    expect(typeof metadata.description).toBe('string')
  })
})
