import styled from 'styled-components'

type IconsProps = {
  name?: string
  src?: string
  alt?: string
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Icons = ({ alt, src }: IconsProps) => {
  return <Img alt={alt} src={src} />
}

export default Icons
