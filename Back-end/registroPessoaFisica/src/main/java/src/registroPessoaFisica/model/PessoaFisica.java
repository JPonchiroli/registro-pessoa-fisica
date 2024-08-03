package src.registroPessoaFisica.model;

import jakarta.persistence.*;

@Entity
public class PessoaFisica {

    @Id
    @Column(unique = true)
    private String cpf;
    private String nome;
    private String telefone;
    private String cep;
    private String municipio;
    private String estado;
    private String bairro;
    private String numero;
    private String complemento;

    public PessoaFisica(){}

    public PessoaFisica(String cpf, String nome, String telefone, String cep, String municipio, String estado, String bairro, String numero, String complemento) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
        this.bairro = bairro;
        this.numero = numero;
        this.complemento = complemento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    @Override
    public String toString() {
        return "PessoaFisica{" +
                "cpf='" + cpf + '\'' +
                ", nome='" + nome + '\'' +
                ", telefone=" + telefone +
                ", cep=" + cep +
                ", municipio='" + municipio + '\'' +
                ", estado='" + estado + '\'' +
                ", bairro='" + bairro + '\'' +
                ", numero=" + numero +
                ", complemento='" + complemento + '\'' +
                '}';
    }
}
