package com.orgsystem.orgreserva.service;


import com.orgsystem.orgreserva.entities.Pessoa;
import org.springframework.mail.SimpleMailMessage;


public interface EmailService {


    void sendEmail(SimpleMailMessage msg);

    void sendNewPasswordEmail(Pessoa pessoa, String newPass);
}
