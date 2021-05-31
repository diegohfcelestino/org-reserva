package com.orgsystem.orgreserva.service;



import com.orgsystem.orgreserva.dto.ClienteDTO;
import com.orgsystem.orgreserva.dto.ClienteNewDto;
import com.orgsystem.orgreserva.entities.Pessoa;
import com.orgsystem.orgreserva.entities.enums.Perfil;
import com.orgsystem.orgreserva.repository.PessoaRepository;
import com.orgsystem.orgreserva.security.UserSS;
import com.orgsystem.orgreserva.service.exception.AuthorizationExceptions;
import com.orgsystem.orgreserva.service.exception.DatabaseExceptions;
import com.orgsystem.orgreserva.service.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private BCryptPasswordEncoder pe;

    @Autowired
    private PessoaRepository pessoaRepository;



    public Pessoa find(Long id){

        UserSS user = UserService.authenticated();
        if(user == null || !user.hasRole(Perfil.ADMIN) && !id.equals(user.getId())){
            throw new AuthorizationExceptions("Acesso Negado");
        }
        Optional<Pessoa> obj = pessoaRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Pessoa.class.getName()));
    }

    public List<Pessoa> findAll(){
        return pessoaRepository.findAll();
    }



    @Transactional
    public Pessoa insert(Pessoa obj){
        obj.setId(null);
        pessoaRepository.save(obj);
        return obj;
    }
    public Pessoa update(Long id,Pessoa obj){
        try {
            Pessoa entity = pessoaRepository.getOne(id);
            updateData(entity, obj);
            return pessoaRepository.save(entity);
        }catch (EntityNotFoundException e){
            throw new ObjectNotFoundException(
                    "Objeto não encontrado! Id: " + id + ", Tipo: " + Pessoa.class.getName());
        }
    }

     private void updateData(Pessoa entity, Pessoa obj) {
        entity.setNome(obj.getNome());
        entity.setEmail(obj.getEmail());
    }

    public void delete(Long id){
        try {
            pessoaRepository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo: " + Pessoa.class.getName());
        }catch (DataIntegrityViolationException e){
            throw new DatabaseExceptions("Não é possível excluir existe entidades relacionadas");
        }
    }


    public Pessoa fromDTO(ClienteDTO objDto){
         return  new Pessoa(objDto.getId(),objDto.getNome(),objDto.getEmail(),null);
    }

    public Pessoa fromDTO(ClienteNewDto objDto){
        Pessoa cliente = new Pessoa(null,objDto.getNome(),objDto.getEmail(),pe.encode(objDto.getSenha()));
        return cliente;
    }

}




