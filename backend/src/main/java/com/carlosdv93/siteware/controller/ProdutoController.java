package com.carlosdv93.siteware.controller;

import java.net.URI;
import java.util.Optional;

import javax.validation.Valid;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carlosdv93.siteware.model.Produto;
import com.carlosdv93.siteware.model.Promocao;
import com.carlosdv93.siteware.repositories.ProdutoRepository;

@RestController
@RequestMapping(value="/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@GetMapping(path="")
	public Iterable<Produto> getAll(){
		return repository.findAll();
	}
	
	@PostMapping(path="")
	public ResponseEntity<String> insert(@Valid @RequestBody Produto produto){
		produto = repository.save(produto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(produto.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Optional<Produto>> getById(@PathVariable Long id){
		Optional<Produto> produto = repository.findById(id);
		return ResponseEntity.ok(produto);
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(path="/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Produto> atualizaPromocaoById(@PathVariable Long id, @RequestBody Produto produto){
		Optional<Produto> produto1 = repository.findById(id);
		if(produto1 != null) {
			System.out.println(produto);
			Produto prod = produto1.get();
			prod.setPromocao(produto.getPromocao());
			repository.save(prod);
			return ResponseEntity.ok(produto);
		} else {
			return (ResponseEntity<Produto>) ResponseEntity.badRequest();
		}
	}
	
}
