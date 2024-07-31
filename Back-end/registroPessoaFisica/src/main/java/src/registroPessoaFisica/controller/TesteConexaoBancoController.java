package src.registroPessoaFisica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
public class TesteConexaoBancoController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/health")
    public String healthCheck() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return "Conexão com Banco de Dados bem Sucedida";
        } catch (Exception e) {
            return "Conexão com Banco de Dados Falhou: " + e.getMessage();
        }
    }
}
