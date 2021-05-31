package com.orgsystem.orgreserva.config;

import com.orgsystem.orgreserva.entities.Agendamento;
import com.orgsystem.orgreserva.entities.Objeto;
import com.orgsystem.orgreserva.entities.Pessoa;
import com.orgsystem.orgreserva.entities.enums.Perfil;
import com.orgsystem.orgreserva.entities.enums.TipoCadastro;
import com.orgsystem.orgreserva.repository.AgendamentoRepository;
import com.orgsystem.orgreserva.repository.ObjetoRepository;
import com.orgsystem.orgreserva.repository.PessoaRepository;
import com.orgsystem.orgreserva.service.EmailService;
import com.orgsystem.orgreserva.service.MockEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Arrays;


@Configuration
@Profile("test")
public class TesteConfig implements CommandLineRunner {


    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private ObjetoRepository objetoRepository;

    @Autowired
    PessoaRepository pessoaRepository;

    @Autowired
    private BCryptPasswordEncoder pe;



    @Override
    public void run(String... args) throws Exception {

        Objeto c1 = new Objeto(null,"Ford Ka", TipoCadastro.CARRO);

        objetoRepository.saveAll(Arrays.asList(c1));


        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");

        Agendamento a1 = new Agendamento(null,sdf.parse("26/05/2021 09:00"),sdf.parse("26/05/2021 09:00"),
                sdf.parse("26/05/2021 11:00"),c1);

        agendamentoRepository.saveAll(Arrays.asList(a1));


        Pessoa pessoa = new Pessoa(null, "Maria Silva", "paulomiron16@gmail.com", pe.encode("123"));
        Pessoa pessoa1 = new Pessoa(null, "Maria Silva", "paulomiron@gmail.com", pe.encode("123"));
        pessoa1.addPerfil(Perfil.ADMIN);

        pessoaRepository.saveAll(Arrays.asList(pessoa,pessoa1));




    }

    @Bean
    public EmailService emailService(){
        return new MockEmailService();
    }


}
