package com.orgsystem.orgreserva.dto;

import com.orgsystem.orgreserva.validation.ClienteInsert;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@ClienteInsert
public class ClienteNewDto implements Serializable{

        @NotEmpty(message = "Preenchimento Obrigatorio")
        @Length(min = 5,max = 120,message = "O tamanho deve ser entre 5 e 120 caracteres")
        private String nome;
        @NotEmpty(message = "Preenchimento Obrigatorio")
        @Email
        private String email;
        @NotEmpty
        private String senha;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
