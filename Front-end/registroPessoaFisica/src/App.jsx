import styled from 'styled-components'
import Form from '../src/components/Form'
import Title from '../src/components/Title'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {

  return (
  <>
    <StyledDiv>
      <Title>
        Registro Pessoa Física
      </Title>
    </StyledDiv>
    <Form />  
  </>
  )
}
