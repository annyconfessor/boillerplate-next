import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #d4d4d4;
  height: 1000vh;
`

const Text = styled.div`
  color: #06092b;
`

const Shell = () => {
  return (
    <Background>
      <Text>
        BOILERPLATE WITH: NEXTJS, TYPESCRIPT, JEST AND REACT TESTING LIBRARY,
        STYLED COMPONENTS AND STORYBOOK.
      </Text>
    </Background>
  )
}

export default Shell
