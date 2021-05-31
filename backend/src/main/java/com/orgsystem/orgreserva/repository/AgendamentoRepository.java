package com.orgsystem.orgreserva.repository;

import com.orgsystem.orgreserva.entities.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AgendamentoRepository extends JpaRepository<Agendamento,Long> {
}
