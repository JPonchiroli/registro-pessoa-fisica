import Box from '@mui/material/Box';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const FormContainer = styled.form`
    flex: 1;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
`

export default function Form() {
    return (
        <Box sx={{ margin: '2rem' }}>
            <FormContainer>
                <Input
                    label='Nome'
                    style={{width:'20%'}}
                />
                <Input 
                    label='Telefone'
                />
                <Input 
                    label='CPF'
                />
                <br />
                <Input 
                    label='Informe o CEP'
                />
                <Input 
                    label='Bairro'
                />
                <Input 
                    label='Número'
                />
                <Input 
                    label='Complemento'
                />
                <Input 
                    label='Nome do Município'
                />
                <Input 
                    label='Nome do Estado'
                />
                <Button />
            </FormContainer>
        </Box>
    )
}