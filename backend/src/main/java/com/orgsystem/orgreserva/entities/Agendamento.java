package com.orgsystem.orgreserva.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Agendamento implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dataAgendamento;
    private Date dataInicial;
    private Date dataFinal;

    @OneToOne
    private Objeto objeto;

    public Agendamento() {
    }

    public Agendamento(Long id, Date dataAgendamento, Date dataInicial, Date dataFinal, Objeto objeto) {
        this.id = id;
        this.dataAgendamento = dataAgendamento;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.objeto = objeto;
    }

    public Date getDataAgendamento() {
        return dataAgendamento;
    }

    public void setDataAgendamento(Date dataAgendamento) {
        this.dataAgendamento = dataAgendamento;
    }

    public Date getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(Date dataInicial) {
        this.dataInicial = dataInicial;
    }

    public Date getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(Date dataFinal) {
        this.dataFinal = dataFinal;
    }

    public Objeto getObjeto() {
        return objeto;
    }

    public void setObjeto(Objeto objeto) {
        this.objeto = objeto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

