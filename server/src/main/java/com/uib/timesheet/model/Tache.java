package com.uib.timesheet.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name ="tache")
public class Tache {
	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String description;
	private float total=0;
	
	
/*
	@ManyToMany
	@JoinColumn(name="Collaborateurs", nullable=true)
	private Set<Collaborateur> collaborateurs;
*/


	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="projet_id", nullable=true)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Projet projet;


public Tache(Long id, String nom, String description, float total, Projet projet) {
	super();
	this.id = id;
	this.nom = nom;
	this.description = description;
	this.total = total;
	this.projet = projet;
}


public Tache() {
}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getNom() {
	return nom;
}


public void setNom(String nom) {
	this.nom = nom;
}


public String getDescription() {
	return description;
}


public void setDescription(String description) {
	this.description = description;
}


public float getTotal() {
	return total;
}


public void setTotal(float total) {
	this.total += total;
}


public Projet getProjet() {
	return projet;
}


public void setProjet(Projet projet) {
	this.projet = projet;
}

	

	
}
