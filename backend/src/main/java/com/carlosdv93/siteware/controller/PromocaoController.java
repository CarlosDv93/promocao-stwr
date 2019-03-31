package com.carlosdv93.siteware.controller;

import java.net.URI;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carlosdv93.siteware.model.Promocao;
import com.carlosdv93.siteware.repositories.PromocaoRepository;

@RestController
@RequestMapping(value="/promocao")
public class PromocaoController {
	
	@Autowired
	private PromocaoRepository promoRP;
	
	@GetMapping(path="")
	public Iterable<Promocao> getAll(){
		return promoRP.findAll();
	}
	
	@PostMapping(path="")
	public ResponseEntity<String> insert(@Valid @RequestBody Promocao promocao){
		promocao = promoRP.save(promocao);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(promocao.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Optional<Promocao>> getById(@PathVariable Long id){
		Optional<Promocao> promocao = promoRP.findById(id);
		return ResponseEntity.ok(promocao);
	}
	
}
