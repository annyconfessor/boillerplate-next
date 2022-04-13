import styled from 'styled-components'

import { Image } from 'components/Image'

const Background = styled.div`
  background-color: #d4d4d4;
  height: 100vh;
  color: #030517;
`

const Label = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.h1`
  color: #030517;
`

const Login = () => {
  return (
    <>
      <Background>
        <Image
          name="logo"
          src="https://www.logo.wine/a/logo/Vogue_Poland/Vogue_Poland-Logo.wine.svg"
          alt="teste"
        />
        <Label>
          <div>oi</div>
          <Text>Sign In</Text>
        </Label>
      </Background>
    </>
  )
}

export default Login
