import styled from 'styled-components'

type ImageProps = {
  name: string
  alt?: string
  src?: string
  width?: number
  height?: number
}

const Figure = styled.figure`
  width: 100px;
  height: 100px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Image = ({ alt, src, name }: ImageProps) => {
  return (
    <Figure>
      <Img name={name} src={src} alt={alt} />
    </Figure>
  )
}

export default Image
