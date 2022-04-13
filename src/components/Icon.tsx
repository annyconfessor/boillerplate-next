import React from 'react'
import styled from 'styled-components'
import {
  layout,
  space,
  border,
  SpaceProps,
  LayoutProps,
  BorderProps
} from 'styled-system'

import * as icons from 'assets/icons'

interface ImageProps extends SpaceProps, LayoutProps, BorderProps {
  name: string
  src?: string
  alt?: string
  objectFit: string
  onClick?: () => void
  color?: string
}
const Figure = styled.figure`
  ${layout}
  ${space}
  ${border}
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')}
  overflow: hidden;
`

const Img = styled.img<{ objectFit: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`

const Icon = icons as unknown as Record<string, never>

const Image = ({ name, src, alt, objectFit }: ImageProps) => (
  <Figure>
    <Img src={name ? Icon[name] : src} alt={alt} objectFit={objectFit} />
  </Figure>
)

export default Image
