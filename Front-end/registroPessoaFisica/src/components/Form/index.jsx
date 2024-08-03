import { useState } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import api from '../../axios';

const FormContainer = styled.form`
    flex: 1;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
`

export default function Form() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');   
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const pessoa = {
          cpf,
          nome,
          telefone,
          cep,
          bairro,
          numero,
          complemento,
          municipio,
          estado,
        };
    
        try {
            const response = await api.post('/pessoaFisica', pessoa)
            console.log(pessoa)
            alert("Pessoa Física criada com sucesso", response.data)
        } catch(error) {
            alert("Erro ao criar Pessoa Física, verifique o console!")
            console.error( error)
        }

        setCpf("")
        setNome("")
        setTelefone("")
        setCep("")
        setBairro("")
        setNumero("")
        setComplemento("")
        setMunicipio("")
        setEstado("")
      };

    return (
        <Box sx={{ margin: '2rem' }}>
            <FormContainer onSubmit={handleSubmit}>
                <Input 
                    label='CPF'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Input
                    label='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{width:'25%'}}
                />
                <Input 
                    label='Telefone'
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <br />
                <Input 
                    label='Informe o CEP'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <Input 
                    label='Bairro'
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                />
                <Input 
                    label='Número'
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <Input 
                    label='Complemento'
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                />
                <Input 
                    label='Nome do Município'
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                />
                <Input 
                    label='Nome do Estado'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
                <Button type='submit'/>
            </FormContainer>
        </Box>
    )
}