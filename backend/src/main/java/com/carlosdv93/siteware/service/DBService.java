package com.carlosdv93.siteware.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.carlosdv93.siteware.SitewarePromocaoApplication;
import com.carlosdv93.siteware.model.Produto;
import com.carlosdv93.siteware.repositories.ProdutoRepository;

@Service
public class DBService {
	
	private static final Logger log = LoggerFactory.getLogger(SitewarePromocaoApplication.class);
	
	@Autowired
	private ProdutoRepository produtoRP;
	
	@Bean
	public void instatiateDatabase() {
		Produto prod1 = new Produto("Produto", "20", 20);
		produtoRP.save(prod1);
		log.info("Salvo");
	}

}
