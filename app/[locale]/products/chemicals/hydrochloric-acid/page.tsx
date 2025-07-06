import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/products'
import { ProductDetail } from '@/components/products/ProductDetail'
import type { Metadata } from 'next'

interface Props {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById('chemicals', 'hydrochloric-acid')
  
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

export default function HydrochloricAcidPage({ params }: Props) {
  const product = getProductById('chemicals', 'hydrochloric-acid')
  
  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
