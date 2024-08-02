import { useState } from 'react'
import Form from '../src/components/Form'
import Title from '../src/components/Title'

export default function App() {
  const [listaPessoas, setListaPessoas] = useState([])

  const novaPessoaAdicionada = (pessoa) => {
    setListaPessoas([...listaPessoas, pessoa])
  }

  console.log(listaPessoas)

  return (
  <>
    <Title style={{ display: "flex", justifyContent: "center"}}>
      Registro Pessoa Física
    </Title>
    <Form pessoaRegistrada={(pessoa) => novaPessoaAdicionada(pessoa)} />
    </>
  )
}
