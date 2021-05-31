package com.orgsystem.orgreserva.service;


import com.orgsystem.orgreserva.entities.Pessoa;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;


import java.util.Date;

public abstract class AbstractEmailService implements EmailService {

    @Value("${default.sender}")
    private String sender;



    @Override
    public void sendNewPasswordEmail(Pessoa pessoa, String newPass){
        SimpleMailMessage sm = prepareNewPasswordEmail(pessoa,newPass);
        sendEmail(sm);
    }

    protected SimpleMailMessage prepareNewPasswordEmail(Pessoa pessoa, String newPass){
        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(pessoa.getEmail());
        sm.setFrom(sender);
        sm.setSubject("Solicitacao de nova senha");
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText("Nova senha : " + newPass);
        return sm;
    }


}
