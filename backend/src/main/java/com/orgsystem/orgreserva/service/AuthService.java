package com.orgsystem.orgreserva.service;


import com.orgsystem.orgreserva.entities.Pessoa;
import com.orgsystem.orgreserva.repository.PessoaRepository;
import com.orgsystem.orgreserva.service.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AuthService {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private BCryptPasswordEncoder pe;

    @Autowired
    private EmailService emailService;


    private Random rand = new Random();

    public void sendNewPassword(String email){

        Pessoa pessoa = pessoaRepository.findByEmail(email);
        if (pessoa == null){
            throw new ObjectNotFoundException("Email nao encontrado");

        }

        String newPass = newPassword();
        pessoa.setSenha(pe.encode(newPass));

        pessoaRepository.save(pessoa);

        emailService.sendNewPasswordEmail(pessoa,newPass);


    }

    private String newPassword() {
        char[] vet = new char[10];
        for (int i=0;i<10;i++){
            vet[i] = randomChar();
        }
        return new String(vet);
    }

    private char randomChar() {// gera digito
        int opt = rand.nextInt(3);
        if (opt == 0){
            return (char) (rand.nextInt(10) + 48);

        }else if (opt == 1){// Letra Maiuscula
            return (char) (rand.nextInt(26)+65);

        }else { // Letra minuscula
            return (char) (rand.nextInt(26)+97);

        }
    }

}
