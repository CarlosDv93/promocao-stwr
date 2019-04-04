package com.carlosdv93.siteware.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="produto")
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String nome;
	private int valor;
	
	@ManyToOne
	private Promocao promocao;
	
	public Produto() {
		
	}
	
	public Produto(String nome, int valor, Promocao promocao) {
		this.nome = nome;
		this.valor = valor;
		this.promocao = promocao;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getValor() {
		return valor;
	}

	public void setValor(int valor) {
		this.valor = valor;
	}

	public Promocao getPromocao() {
		return promocao;
	}

	public void setPromocao(Promocao promocao) {
		this.promocao = promocao;
	}

	@Override
	public String toString() {
		return "Produto: \n"
				+ "Nome: " + getNome() + "\n"
				+ "Valor: " + getValor() + "\n";
	}
	
	
	
}
