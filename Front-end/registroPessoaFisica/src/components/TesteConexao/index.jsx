import { useEffect, useState } from "react"
import api from "../../axios"

export default function TesteConexao(){

  const [mensagem, setMensagem] = useState('')
  
  useEffect(() => {
    api.get('/teste').then(response => {
      setMensagem(response.data)
    }).catch(error => {
      console.error('Erro ao testar conexão!', error);
      setMensagem('Erro ao testar conexão!')
    })
  }, [])

  return(
    <div>
      <h1>Teste Conexão</h1>
      <p>{mensagem}</p>
    </div>
  )
}