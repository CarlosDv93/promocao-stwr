package com.carlosdv93.siteware.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
	
}
