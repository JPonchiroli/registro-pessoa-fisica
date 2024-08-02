import Stack from '@mui/material/Stack';
import ButtonSubmit from '@mui/material/Button';

export default function Button({type}){
    return(
        <Stack>
            <ButtonSubmit type={type} variant='contained' color='success'>Enviar</ButtonSubmit>
        </Stack>
    )
}