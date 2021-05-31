package com.orgsystem.orgreserva.resource;

import com.orgsystem.orgreserva.entities.Agendamento;
import com.orgsystem.orgreserva.entities.Objeto;
import com.orgsystem.orgreserva.service.AgendamentoService;
import com.orgsystem.orgreserva.service.ObjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/cadastros")
public class ObjetoResource {

    @Autowired
    private ObjetoService objetoService;

    @GetMapping(value="{id}")
    public ResponseEntity<Objeto> findById(@PathVariable Long id){
        Objeto obj = objetoService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Objeto> insert(@RequestBody Objeto objeto) {
        Objeto response = objetoService.insert(objeto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Objeto> update(@PathVariable Long id,@RequestBody Objeto obj){
        obj = objetoService.update(id,obj);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        objetoService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
