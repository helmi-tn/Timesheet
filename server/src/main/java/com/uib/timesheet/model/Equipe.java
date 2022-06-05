package com.uib.timesheet.model;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.context.annotation.Import;


@Entity
@Table(name ="equipe")
public class Equipe {

	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String responsable;
	
	
	

	public Equipe() {
		// TODO Auto-generated constructor stub
	}


	public Equipe(Long id, String nom, String responsable) {
		super();
		this.id = id;
		this.nom = nom;
		this.responsable = responsable;
	}


	//@OneToMany(mappedBy="equipe")
	//private Set<Collaborateur> collaborateurs;


	public String getResponsable() {
		return responsable;
	}


	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	/*public Set<Collaborateur> getCollaborateurs() {
		return collaborateurs;
	}


	public void setCollaborateurs(Set<Collaborateur> collaborateurs) {
		this.collaborateurs = collaborateurs;
	}*/
	

	
	
	
	
}
