import styled from 'styled-components'
import * as images from 'assets/images'

type ImageProps = {
  name: string
  alt?: string
  src?: string
  width?: number
  height?: number
}

const Figure = styled.figure`
  background-color: red;
  width: 200px;
  height: 60px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`
const Image = images as unknown as Record<string, never>

const ImageComponent = ({ alt, src, name }: ImageProps) => {
  return (
    <Figure>
      <Img src={name ? Image[name] : src} alt={alt} />
    </Figure>
  )
}

export default ImageComponent
