package com.carlosdv93.siteware.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="produto")
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String nome;
	private String valor;
	private int qtde;
	
	public Produto() {
		
	}
	
	public Produto(String nome, String valor, int qtde) {
		this.nome = nome;
		this.valor = valor;
		this.qtde = qtde;
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

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public int getQtde() {
		return qtde;
	}

	public void setQtde(int qtde) {
		this.qtde = qtde;
	}

	@Override
	public String toString() {
		return "Produto: \n"
				+ "Nome: " + getNome() + "\n"
				+ "Valor: " + getValor() + "\n";
	}
	
	
	
}
