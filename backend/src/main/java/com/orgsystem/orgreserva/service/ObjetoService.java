package com.orgsystem.orgreserva.service;

import com.orgsystem.orgreserva.entities.Objeto;
import com.orgsystem.orgreserva.repository.ObjetoRepository;
import com.orgsystem.orgreserva.service.exception.DatabaseExceptions;
import com.orgsystem.orgreserva.service.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ObjetoService {


    @Autowired
    private ObjetoRepository objetoRepository;

    public Objeto findById(Long id){
        Optional<Objeto> obj = objetoRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Objeto.class.getName()));
    }

    public Objeto update(Long id,Objeto obj){
        try {
            Objeto entity = objetoRepository.getOne(id);
            updateData(entity, obj);
            return objetoRepository.save(entity);
        }catch (EntityNotFoundException e){
            throw new ObjectNotFoundException(
                    "Objeto não encontrado! Id: " + id + ", Tipo: " + Objeto.class.getName());
        }
    }

    private void updateData(Objeto entity, Objeto obj) {
        entity.setNome(obj.getNome());
    }

    public Objeto insert(Objeto objeto){
        objetoRepository.save(objeto);
        return objeto;
    }

    public void delete(Long id){
        try {
            objetoRepository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo: " + Objeto.class.getName());
        }catch (DataIntegrityViolationException e){
            throw new DatabaseExceptions("Não é possível excluir um Objeto que possui Agendamento");
        }
    }
}
