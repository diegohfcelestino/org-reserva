package com.orgsystem.orgreserva.dto;

import com.orgsystem.orgreserva.entities.Pessoa;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class ClienteDTO {

    private Long id;
    @NotEmpty(message = "Preenchimento Obrigatorio")
    @Length(min = 5,max = 120,message = "O tamanho deve ser entre 5 e 120 caracteres")
    private String nome;
    @NotEmpty(message = "Preenchimento Obrigatorio")
    @Email
    private String email;

    public ClienteDTO(){}

    public ClienteDTO(Pessoa obj){
        id = obj.getId();
        nome = obj.getNome();
        email = obj.getEmail();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
}
