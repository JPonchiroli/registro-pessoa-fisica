import api from "../../../axios"
import ButtonCSV from '@mui/material/Button';

export default function DownloadCSV(){
  const handleDownload = async () => {
    try {
        const response = await api.get('/pessoaFisica/relatorio', {
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'relatorio_pessoas.csv');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        console.error('Erro ao fazer download do CSV', error);
    }
  }
  return(
    <ButtonCSV onClick={handleDownload}>Download Relatório CSV</ButtonCSV>
  )
}