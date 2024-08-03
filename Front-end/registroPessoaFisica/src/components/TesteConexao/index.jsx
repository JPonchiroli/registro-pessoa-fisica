import { useEffect, useState } from "react"
import api from "../../axios"
import styled from "styled-components"

const StyledCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "${(props) => props.hoverMessage}";
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.hoverColor};
    padding: 5px;
    border-radius: 5px;
    opacity: 0.8;
  }
`

export default function TesteConexao(){

  const [mensagem, setMensagem] = useState('')
  const [cor, setCor] = useState('')
  
  useEffect(() => {
    api.get('/teste').then(response => {
      setMensagem("Sucesso ao Conectar!")
      setCor('008000 ')
    }).catch(error => {
      console.error('Erro ao testar conexão!', error);
      setMensagem("Erro ao Conectar!")
      setCor('FF0000')
    })
  }, [])

  return(
    <div>
      <StyledCircle 
        style={{ backgroundColor: `#${cor}`}} 
        hoverMessage={mensagem} 
        hoverColor={cor}>
      </StyledCircle>
    </div>
  )
}