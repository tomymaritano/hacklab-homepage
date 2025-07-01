import Image from 'next/image'
import { urlFor } from '../lib/sanity'

const SanityImage = ({ 
  image, 
  alt = '', 
  width = 800, 
  height = 600, 
  className = '',
  priority = false,
  ...props 
}) => {
  if (!image) return null

  const imageUrl = urlFor(image)
    .width(width)
    .height(height)
    .quality(90)
    .format('webp')
    .url()

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      {...props}
    />
  )
}

export default SanityImage