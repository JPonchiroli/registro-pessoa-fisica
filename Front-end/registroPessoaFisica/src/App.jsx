import styled from 'styled-components'
import Form from '../src/components/Form'
import Title from '../src/components/Title'
import DownloadCSV from './components/Button/DownloadCSV'
import { useEffect, useState } from 'react'
import api from './axios'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {

  const [numPessoasCadastradas, setNumPessoasCadastradas] = useState()
  const [conferePessoasCadastradas, setConferePessoasCadastradas] = useState(false)

  useEffect(() => {
    api.get('pessoaFisica/qtdPessoasCadastradas').then(response => {
      setNumPessoasCadastradas(response.data); 
      setConferePessoasCadastradas(response.data > 0);
    }).catch(error => {
      console.error("Erro ao Executar Requisiçaõ!", error);
    })
  }, [])

  return (
  <>
    <StyledDiv>
      <Title>
        Registro Pessoa Física
      </Title>
    </StyledDiv>
    <Form />
    {conferePessoasCadastradas ? <DownloadCSV />: null}
  </>
  )
}
