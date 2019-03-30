package com.carlosdv93.siteware.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.carlosdv93.siteware.SitewarePromocaoApplication;
import com.carlosdv93.siteware.model.Produto;
import com.carlosdv93.siteware.model.Promocao;
import com.carlosdv93.siteware.repositories.ProdutoRepository;
import com.carlosdv93.siteware.repositories.PromocaoRepository;
import com.carlosdv93.siteware.utils.TipoPromocao;

@Service
public class DBService {
	
	private static final Logger log = LoggerFactory.getLogger(SitewarePromocaoApplication.class);
	
	@Autowired
	private ProdutoRepository produtoRP;
	
	@Autowired
	private PromocaoRepository promRP;
	
	@Bean
	public void instatiateDatabase() {
		
		Produto prod1 = new Produto("Produto 1", "5", null);
		produtoRP.save(prod1);
		
		Produto prod2 = new Produto("Produto 2", "10", null);
		produtoRP.save(prod2);
		
		Produto prod3 = new Produto("Produto 3", "10", null);
		produtoRP.save(prod3);
		
		
		Promocao tresXDez = new Promocao("3 x 10", TipoPromocao.PRECO, 3, 10);
		promRP.save(tresXDez);
		
		Promocao leve2Pg1 = new Promocao("Leve 2 Pague 1", TipoPromocao.QUANTIDADE, 2, 1);
		promRP.save(leve2Pg1);
		
		
		log.info("Salvo");
	}

}
