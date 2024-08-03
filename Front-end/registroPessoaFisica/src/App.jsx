import { useState } from 'react'
import Form from '../src/components/Form'
import Title from '../src/components/Title'
import TesteConexao from './components/TesteConexao'

export default function App() {

  return (
  <>
    <Title style={{ display: "flex", justifyContent: "center"}}>
      Registro Pessoa Física
    </Title>
    <Form />
    <TesteConexao />
    </>
  )
}
