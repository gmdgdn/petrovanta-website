"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

interface ProductImageProps {
  product: Product
  className?: string
  priority?: boolean
  showGallery?: boolean
}

export default function ProductImage({
  product,
  className,
  priority = false,
  showGallery = false
}: ProductImageProps) {
  // Use enhanced image structure if available, fallback to legacy image field
  const mainImage = product.images?.main || product.image
  const fallbackImage = product.images?.fallback || '/placeholder.svg'
  const galleryImages = product.images?.gallery || []

  const [currentImageSrc, setCurrentImageSrc] = useState(mainImage)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (currentImageSrc !== fallbackImage) {
      setCurrentImageSrc(fallbackImage)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleThumbnailClick = (imageSrc: string) => {
    if (imageSrc !== currentImageSrc) {
      setIsLoading(true)
      setHasError(false)
      setCurrentImageSrc(imageSrc)
    }
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Image */}
      <div className={cn(
        'relative overflow-hidden bg-gray-100 rounded-lg',
        isLoading && 'animate-pulse'
      )}>
        <div className="aspect-square relative">
          <Image
            src={currentImageSrc}
            alt={product.name}
            fill
            className={cn(
              'object-cover transition-opacity duration-300',
              isLoading ? 'opacity-0' : 'opacity-100',
              hasError && 'opacity-70'
            )}
            onError={handleError}
            onLoad={handleLoad}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
          {hasError && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              Placeholder
            </div>
          )}
        </div>
      </div>
      {showGallery && galleryImages.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleThumbnailClick(mainImage)}
            className={cn(
              'aspect-square relative overflow-hidden rounded border-2 transition-colors',
              currentImageSrc === mainImage
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-gray-300'
            )}
          >
            <Image
              src={mainImage}
              alt={`${product.name} - Main`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 15vw"
            />
          </button>
          {galleryImages.slice(0, 3).map((imageSrc, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(imageSrc)}
              className={cn(
                'aspect-square relative overflow-hidden rounded border-2 transition-colors',
                currentImageSrc === imageSrc
                  ? 'border-blue-500'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              <Image
                src={imageSrc}
                alt={`${product.name} - ${index + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
