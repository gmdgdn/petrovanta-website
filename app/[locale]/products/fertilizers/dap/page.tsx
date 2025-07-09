import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/products'
import { ProductDetail } from '@/components/products/ProductDetail'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const product = getProductById('fertilizers', 'dap')
  
  if (!product) {
    return {}
  }

  return {
    title: product.seo?.title || `${product.name} | Petrovanta`,
    description: product.seo?.description || product.description,
    keywords: product.seo?.keywords?.join(', '),
    openGraph: {
      title: product.seo?.title || product.name,
      description: product.seo?.description || product.description,
      images: [
        {
          url: product.images?.main || product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function DAPPage({ params }: Props) {
  const { locale } = await params
  const product = getProductById('fertilizers', 'dap')
  
  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
