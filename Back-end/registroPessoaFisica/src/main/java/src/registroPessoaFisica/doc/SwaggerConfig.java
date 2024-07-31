package src.registroPessoaFisica.doc;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    //Acessar documentação http://localhost:8080/swagger-ui/index.html#/

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Processo Seletivo: Registro de Pessoa Física")
                        .version("1.0")
                        .description("Registro de Pessoa Física")
                        .contact(new Contact()
                                .name("João Ponchiroli")
                                .url("http://www.github.com/JPonchiroli.com.br")
                                .email("joaopedroponqueroli@gmail.com.br")));
    }
}