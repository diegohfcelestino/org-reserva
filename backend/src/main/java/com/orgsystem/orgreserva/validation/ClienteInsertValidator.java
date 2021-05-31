package com.orgsystem.orgreserva.validation;


import com.orgsystem.orgreserva.dto.ClienteNewDto;
import com.orgsystem.orgreserva.entities.Pessoa;
import com.orgsystem.orgreserva.repository.PessoaRepository;
import com.orgsystem.orgreserva.resource.exception.FieldMessage;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.List;

public class ClienteInsertValidator implements ConstraintValidator<ClienteInsert, ClienteNewDto> {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Override public void initialize(ClienteInsert ann) {
    }
    @Override
    public boolean isValid(ClienteNewDto objDto, ConstraintValidatorContext context) {

        List<FieldMessage> list = new ArrayList<>();


        Pessoa aux = pessoaRepository.findByEmail(objDto.getEmail());
        if(aux != null){
            list.add(new FieldMessage("email","Email já existente"));
        }
        for (FieldMessage e : list) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage())
                    .addPropertyNode(e.getFieldName()).addConstraintViolation();
        }
        return list.isEmpty();
    }
}
