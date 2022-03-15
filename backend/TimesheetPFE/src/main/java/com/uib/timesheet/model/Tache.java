package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="tache")
public class Tache {
	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String description;
	
	

	@ManyToMany
	@JoinColumn(name="Collaborateurs", nullable=true)
	private Set<Collaborateur> collaborateurs;


	
	@ManyToOne
	@JoinColumn(name="projet_id", nullable=true)
	private Projet projet;

	

	public Tache() {
	}
	



	public Tache(Long id, String nom, String description, Set<Collaborateur> collaborateurs, Projet projet) {
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.collaborateurs = collaborateurs;
		this.projet = projet;
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



	public Set<Collaborateur> getCollaborateurs() {
		return collaborateurs;
	}



	public void setCollaborateurs(Set<Collaborateur> collaborateurs) {
		this.collaborateurs = collaborateurs;
	}



	public Projet getProjet() {
		return projet;
	}



	public void setProjet(Projet projet) {
		this.projet = projet;
	}

	
	
	

	
	
	
	
	
}
