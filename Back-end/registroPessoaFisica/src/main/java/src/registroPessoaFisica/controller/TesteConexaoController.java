package src.registroPessoaFisica.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/teste")
public class TesteConexaoController {

    @GetMapping
    public String boasVindas(){
        return "Bem vindo Conexão bem Sucedida";
    }

}
