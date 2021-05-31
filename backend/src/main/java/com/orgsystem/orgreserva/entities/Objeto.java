package com.orgsystem.orgreserva.entities;

import com.orgsystem.orgreserva.entities.enums.TipoCadastro;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Objeto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer tipo;


    public Objeto(){

    }

    public Objeto(Long id, String nome,TipoCadastro tipo) {
        this.id = id;
        this.nome = nome;
        this.tipo = (tipo==null) ? null : tipo.getCod();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TipoCadastro getTipo() {
        return TipoCadastro.toEnum(tipo);
    }

    public void setTipo(TipoCadastro tipo) {
        this.tipo = tipo.getCod();
    }
}
