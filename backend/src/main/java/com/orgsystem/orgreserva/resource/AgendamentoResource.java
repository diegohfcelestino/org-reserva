package com.orgsystem.orgreserva.resource;

import com.orgsystem.orgreserva.entities.Agendamento;
import com.orgsystem.orgreserva.entities.Objeto;
import com.orgsystem.orgreserva.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/agendamentos")
public class AgendamentoResource {

    @Autowired
    private AgendamentoService agendamentoService;

    @GetMapping
    public ResponseEntity<List<Agendamento>> findAll() {
        List<Agendamento> list = agendamentoService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Agendamento> insert(@RequestBody Agendamento agendamento) {
        Agendamento response = agendamentoService.insert(agendamento);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Agendamento> update(@PathVariable Long id, @RequestBody Agendamento obj){
        obj = agendamentoService.update(id,obj);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        agendamentoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
