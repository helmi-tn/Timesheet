package com.uib.timesheet.model;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name ="projet")
public class Projet {

	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private LocalDateTime datededbut;
	private LocalDateTime datedefin;
	
	private String chef;

	
	
	public Projet() {
	}


	@OneToMany(mappedBy="projet")
	private Set<Tache> taches;

	public Projet(Long id, String nom, LocalDateTime datededbut, LocalDateTime datedefin, String chef,
			Set<Tache> taches) {
		super();
		this.id = id;
		this.nom = nom;
		this.datededbut = datededbut;
		this.datedefin = datedefin;
		this.chef = chef;
		this.taches = taches;
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



	public LocalDateTime getDatededbut() {
		return datededbut;
	}



	public void setDatededbut(LocalDateTime datededbut) {
		this.datededbut = datededbut;
	}



	public LocalDateTime getDatedefin() {
		return datedefin;
	}



	public void setDatedefin(LocalDateTime datedefin) {
		this.datedefin = datedefin;
	}



	public String isChef() {
		return chef;
	}



	public void setChef(String chef) {
		this.chef = chef;
	}



	public Set<Tache> getTaches() {
		return taches;
	}



	public void setTaches(Set<Tache> taches) {
		this.taches = taches;
	}
	
	
	
	
	
	
	

	
	
	
	
	
	
}

