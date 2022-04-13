import styled from 'styled-components'

import { Image } from 'components/Image'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  height: 100vh;
`

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
`

const Input = styled.div`
  color: white;
  display: flex;
  align-items: center;
`

const Login = () => {
  return (
    <Background>
      <Wrapper>
        <Image name="logox" alt="testeee" />
        <Input>Inputs</Input>
      </Wrapper>
    </Background>
  )
}

export default Login
