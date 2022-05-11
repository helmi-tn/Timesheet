package com.uib.timesheet.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name ="projet")
public class Projet {

	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private LocalDateTime datededbut;
	private LocalDateTime datedefin;
	private String description;
	
	private String chef;

	@OneToMany(mappedBy = "projet", orphanRemoval = true)
	private List<Tache> taches;
	
	
	public Projet() {
	}



	public Projet(Long id, String nom, LocalDateTime datededbut, LocalDateTime datedefin, String description,
			String chef) {
		super();
		this.id = id;
		this.nom = nom;
		this.datededbut = datededbut;
		this.datedefin = datedefin;
		this.description = description;
		this.chef = chef;
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



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getChef() {
		return chef;
	}



	public void setChef(String chef) {
		this.chef = chef;
	}


	/*@OneToMany(mappedBy="projet")
	private Set<Tache> taches;
*/
	
	
	
}

