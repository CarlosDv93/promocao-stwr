package com.carlosdv93.siteware.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carlosdv93.siteware.model.Produto;
import com.carlosdv93.siteware.repositories.ProdutoRepository;

@RestController
@RequestMapping(value="/produto", method=RequestMethod.GET)
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@GetMapping(path="/")
	public Iterable<Produto> getAll(){
		return repository.findAll();
	}
	
	@PostMapping(path="/")
	public ResponseEntity<Void> insert(@Valid @RequestBody Produto obj){
		obj = repository.save(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
}
