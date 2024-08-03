package src.registroPessoaFisica.controller;

import com.opencsv.CSVWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import src.registroPessoaFisica.model.PessoaFisica;
import src.registroPessoaFisica.repository.PessoaFisicaRepository;

import java.io.StringWriter;
import java.util.List;

@RestController
@RequestMapping("/api/pessoaFisica")
public class PessoaFisicaController {

    @Autowired
    private PessoaFisicaRepository repository;

    @PostMapping()
    public ResponseEntity<PessoaFisica> cadastrarPessoaFisica(@RequestBody PessoaFisica pessoaFisica){
        PessoaFisica pessoaFisicaSalva = repository.save(pessoaFisica);
        System.out.println("Recebido: " + pessoaFisica);
        return ResponseEntity.ok(pessoaFisicaSalva);
    }

    @GetMapping("/qtdPessoasCadastradas")
    public long numeroPessoasCadastradas(){
        long numPessoaFisica = repository.count();
        return numPessoaFisica;
    }

    @GetMapping("/relatorio")
    public ResponseEntity<String> gerarRelatorioCSV() {
        List<PessoaFisica> pessoas = repository.findAll();

        StringWriter writer = new StringWriter();
        CSVWriter csvWriter = new CSVWriter(writer);

        // Cabeçalhos do CSV
        String[] cabecalho = { "CPF", "Nome", "Telefone", "CEP", "Bairro", "Número", "Complemento", "Município", "Estado" };
        csvWriter.writeNext(cabecalho);

        // Dados do CSV
        for (PessoaFisica pessoa : pessoas) {
            String[] dados = {
                    pessoa.getCpf(),
                    pessoa.getNome(),
                    pessoa.getTelefone(),
                    pessoa.getCep(),
                    pessoa.getBairro(),
                    pessoa.getNumero(),
                    pessoa.getComplemento(),
                    pessoa.getMunicipio(),
                    pessoa.getEstado()
            };
            csvWriter.writeNext(dados);
        }

        // Fecha o CSVWriter
        try {
            csvWriter.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Configura o ResponseEntity para retornar o arquivo CSV
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=relatorio_pessoas.csv");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.TEXT_PLAIN)
                .body(writer.toString());
    }

}
