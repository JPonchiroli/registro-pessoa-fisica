package src.registroPessoaFisica.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteConexaoController {

    @GetMapping
    public String boasVindas(){
        return "Bem vindo Conexão bem Sucedida";
    }

}
