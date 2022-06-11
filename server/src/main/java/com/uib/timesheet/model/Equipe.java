package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name ="equipe")
public class Equipe {

	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String responsable;
	
	


	@JsonBackReference
	@OneToMany(mappedBy="equipe")
	private Set<Collaborateur> collaborateurs;




	public Equipe(Long id, String nom, String responsable, Set<Collaborateur> collaborateurs) {
		super();
		this.id = id;
		this.nom = nom;
		this.responsable = responsable;
		this.collaborateurs = collaborateurs;
	}




	public Equipe() {
		super();
		// TODO Auto-generated constructor stub
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




	public String getResponsable() {
		return responsable;
	}




	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}




	public Set<Collaborateur> getCollaborateurs() {
		return collaborateurs;
	}




	public void setCollaborateurs(Set<Collaborateur> collaborateurs) {
		this.collaborateurs = collaborateurs;
	}


	/*public Set<Collaborateur> getCollaborateurs() {
		return collaborateurs;
	}*/


	

	
	
	
	
}
