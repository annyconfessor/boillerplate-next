import { Icons } from './../Icons'

type ImageProps = {
  name?: string
  alt?: string
  source?: string
}

const Image = ({ alt, source }: ImageProps) => {
  return <Icons alt={alt} src={source}></Icons>
}

export default Image
