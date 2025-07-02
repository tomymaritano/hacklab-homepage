import Image from 'next/image'
import { urlFor } from '../lib/sanity'

const SanityImage = ({ 
  image, 
  alt = '', 
  width = 800, 
  height = 600, 
  className = '',
  priority = false,
  quality = 85,
  ...props 
}) => {
  if (!image?.asset) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">No image</span>
      </div>
    )
  }

  const imageUrl = urlFor(image)
    .width(width)
    .height(height)
    .quality(quality)
    .auto('format')
    .url()

  const blurDataURL = image.asset.metadata?.lqip || 
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+PC9zdmc+'

  return (
    <Image
      src={imageUrl}
      alt={alt || image.alt || 'Image'}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}

export default SanityImage