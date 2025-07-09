import { jest } from '@jest/globals'
import HomePage, { generateMetadata } from '@/app/[locale]/page'

describe('HomePage', () => {
  const mockParams = Promise.resolve({ locale: 'en' })

  it('executes correctly with async params', async () => {
    const component = await HomePage({ params: mockParams })

    // Just test that the component function executes and returns JSX
    expect(component).toBeDefined()
    expect(typeof component).toBe('object')
  })
})

describe('generateMetadata', () => {
  const mockParams = Promise.resolve({ locale: 'en' })

  it('generates metadata', async () => {
    const metadata = await generateMetadata({ params: mockParams })

    // Test that metadata is defined
    expect(metadata).toBeDefined()
  })
})
