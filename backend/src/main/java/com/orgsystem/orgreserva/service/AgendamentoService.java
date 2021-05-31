package com.orgsystem.orgreserva.service;

import com.orgsystem.orgreserva.entities.Agendamento;
import com.orgsystem.orgreserva.entities.Objeto;
import com.orgsystem.orgreserva.repository.AgendamentoRepository;
import com.orgsystem.orgreserva.repository.ObjetoRepository;
import com.orgsystem.orgreserva.service.exception.DatabaseExceptions;
import com.orgsystem.orgreserva.service.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class AgendamentoService {

    @Autowired
    private AgendamentoRepository agendamentoRepository;
    @Autowired
    private ObjetoRepository objetoRepository;
    @Autowired
    private ObjetoService objetoService;


    public List<Agendamento> findAll() {
        return agendamentoRepository.findAll();
    }

    public Agendamento findById(Long id) {
        Optional<Agendamento> obj = agendamentoRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Pauta não encontrado! Id: " + id + ", Tipo: " + Agendamento.class.getName()));
    }

    public Agendamento insert(Agendamento obj) {
        obj.setId(null);
        obj.setObjeto(objetoService.findById(obj.getObjeto().getId()));
        agendamentoRepository.save(obj);
        return obj;
    }

    public Agendamento update(Long id, Agendamento obj) {
        try {
            Agendamento entity = agendamentoRepository.getOne(id);
            updateData(entity, obj);
            return agendamentoRepository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ObjectNotFoundException(
                    "Agendamento não encontrado! Id: " + id + ", Tipo: " + Agendamento.class.getName());
        }
    }

    private void updateData(Agendamento entity, Agendamento obj) {
        entity.setDataInicial(obj.getDataInicial());
        entity.setDataFinal(obj.getDataFinal());
        entity.setObjeto(objetoService.findById(obj.getObjeto().getId()));
    }

    public void delete(Long id) {
        try {
            agendamentoRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ObjectNotFoundException("Agendamento não encontrado! Id: " + id + ", Tipo: " + Agendamento.class.getName());

        }
    }
}
