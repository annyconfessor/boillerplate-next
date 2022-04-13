import styled from 'styled-components'

export interface InputProps {
  name: string
  placeholder: string
  icon: string
}

const Input = styled.input`
  width: 300px;
  height: 40px;
  background-color: #eaeaea;
  border-radius: 2px;
`

const InputComponent = ({ name, placeholder }: InputProps) => {
  return (
    <>
      <Input name={name} placeholder={placeholder} type="text" />
    </>
  )
}

export default InputComponent
