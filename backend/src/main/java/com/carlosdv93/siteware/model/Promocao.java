package com.carlosdv93.siteware.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.carlosdv93.siteware.utils.TipoPromocao;

@Entity
@Table(name="promocao")
public class Promocao implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String nome;
	private TipoPromocao tipo;
	private int qtde;
	private double pagar;
	
	public Promocao(String nome, TipoPromocao tipo, int qtde, double pagar) {
		this.nome = nome;
		this.tipo = tipo;
		this.qtde = qtde;
		this.pagar = pagar;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public TipoPromocao getTipo() {
		return tipo;
	}

	public void setTipo(TipoPromocao tipo) {
		this.tipo = tipo;
	}

	public int getQtde() {
		return qtde;
	}

	public void setQtde(int qtde) {
		this.qtde = qtde;
	}

	public double getPagar() {
		return pagar;
	}

	public void setPagar(double pagar) {
		this.pagar = pagar;
	}
	
}
