package com.carlosdv93.siteware.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.carlosdv93.siteware.model.Produto;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, Long> {

}
