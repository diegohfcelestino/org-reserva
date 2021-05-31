package com.orgsystem.orgreserva.repository;

import com.orgsystem.orgreserva.entities.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;


public interface PessoaRepository extends JpaRepository<Pessoa,Long> {

    @Transactional(readOnly = true)
    Pessoa findByEmail(String email);
}
