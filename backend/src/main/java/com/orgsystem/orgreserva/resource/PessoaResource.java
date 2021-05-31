package com.orgsystem.orgreserva.resource;



import com.orgsystem.orgreserva.dto.ClienteDTO;
import com.orgsystem.orgreserva.dto.ClienteNewDto;
import com.orgsystem.orgreserva.entities.Pessoa;
import com.orgsystem.orgreserva.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value= "/clientes")
public class PessoaResource {

    @Autowired
    private PessoaService pessoaService;

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<ClienteDTO>> fildAll(){
        List<Pessoa> list = pessoaService.findAll();
        List<ClienteDTO> listDto = list.stream().map(obj -> new ClienteDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }


    @GetMapping(value="{id}")
    public ResponseEntity<Pessoa> findById(@PathVariable Long id){
        Pessoa obj = pessoaService.find(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Pessoa> insert(@Valid @RequestBody ClienteNewDto objDto){
        Pessoa obj = pessoaService.fromDTO(objDto);
        obj =  pessoaService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<Pessoa> update(@PathVariable Long id, @Valid @RequestBody ClienteDTO objDto){
        Pessoa obj = pessoaService.fromDTO(objDto);
        obj = pessoaService.update(id,obj);
        return ResponseEntity.ok().body(obj);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        pessoaService.delete(id);
        return ResponseEntity.noContent().build();
    }




}
