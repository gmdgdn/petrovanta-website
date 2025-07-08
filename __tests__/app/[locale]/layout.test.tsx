import { jest } from '@jest/globals'
import LocaleLayout, { generateStaticParams } from '@/app/[locale]/layout'

// Mock next-intl/routing
jest.mock('next-intl/routing', () => ({
  defineRouting: jest.fn(() => ({
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }))
}))

// Mock next-intl
jest.mock('next-intl/server', () => ({
  getMessages: jest.fn().mockResolvedValue({}),
}))

// Mock next-intl client provider
jest.mock('next-intl', () => ({
  NextIntlClientProvider: function MockNextIntlClientProvider({ children }: { children: React.ReactNode }) {
    return <div data-testid="intl-provider">{children}</div>
  }
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn()
}))

// Mock the routing module
jest.mock('@/src/i18n/routing', () => ({
  routing: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }
}))

describe('LocaleLayout', () => {
  const mockParams = Promise.resolve({ locale: 'en' })

  it('renders layout with async params', async () => {
    const children = <div>Test content</div>
    const component = await LocaleLayout({ children, params: mockParams })

    // Test that the component executes correctly
    expect(component).toBeDefined()
    expect(typeof component).toBe('object')
  })

  it('handles Arabic locale', async () => {
    const arabicParams = Promise.resolve({ locale: 'ar' })
    const children = <div>Test content</div>
    const component = await LocaleLayout({ children, params: arabicParams })

    expect(component).toBeDefined()
  })
})

describe('generateStaticParams', () => {
  it('returns all supported locales', () => {
    const params = generateStaticParams()

    expect(Array.isArray(params)).toBe(true)
    expect(params).toEqual([
      { locale: 'en' },
      { locale: 'ar' }
    ])
  })

  it('returns correct parameter structure', () => {
    const params = generateStaticParams()

    params.forEach(param => {
      expect(param).toHaveProperty('locale')
      expect(typeof param.locale).toBe('string')
    })
  })
})
