package src.registroPessoaFisica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import src.registroPessoaFisica.model.PessoaFisica;
import src.registroPessoaFisica.repository.PessoaFisicaRepository;

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

}
