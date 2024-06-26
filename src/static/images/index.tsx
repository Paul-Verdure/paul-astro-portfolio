import { type FC } from 'react'
import LogoImage from './logo.webp'
import Preview from './preview.webp'
import PaulImg from './paul-img.jpg'
import Nike from './nike.webp'
import Adidas from './adidas.webp'
import Puma from './puma.webp'
import Puma2 from './puma-2.webp'
import Fieldbox from './fieldbox.png'
import RecipeFinder from './recipe-finder.png'
import Tudigo from './tudigo.png'
import Grossjungig from './grossjungig.png'

export const images = {
  logo: LogoImage,
  preview: Preview,
  paulImg: PaulImg,
  nike: Nike,
  fieldbox: Fieldbox,
  recipeFinder: RecipeFinder,
  tudigo: Tudigo,
  grossjungig: Grossjungig,
  adidas: Adidas,
  puma: Puma,
  puma2: Puma2
}

type ImageProps = {
  srcLocal?: keyof typeof images
  src?: string
  alt: string
  width?: number | string
  height?: number | string
  loading?: 'lazy' | 'eager'
}

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
  alt,
  srcLocal,
  height,
  width,
  src,
  loading,
  ...rest
}) => {
  /**
   * If srcLocal or src is not provided throw an error
   */
  if (!srcLocal && !src) {
    throw new Error('srcLocal or src is required')
  }

  /**
   * this component should be able to use local images or images from external sources
   */
  const image = srcLocal ? images[srcLocal] : { src, width, height }

  return (
    <img
      src={image.src}
      alt={alt}
      width={width ? width : image.width}
      height={height ? height : image.height}
      loading={loading}
      {...rest}
    />
  )
}

// default export of the images
export {
  Preview,
  Adidas,
  Nike,
  Puma,
  Puma2,
  Grossjungig,
  PaulImg,
  Tudigo,
  Fieldbox,
  RecipeFinder
}
