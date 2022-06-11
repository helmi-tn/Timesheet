package com.uib.timesheet.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
	private LocalDate datededbut;
	private LocalDate datedefin;
	private String description;
	
	private String chef;
	private Float total;
	
	
	@JsonIgnore
	@OneToMany(mappedBy = "projet", orphanRemoval = true)
	private List<Tache> taches;
	
	
	public Projet() {
	}



	public Projet(Long id, String nom, LocalDate datededbut, LocalDate datedefin, String description,
			String chef, Float total, List<Tache> taches) {
		super();
		this.id = id;
		this.nom = nom;
		this.datededbut = datededbut;
		this.datedefin = datedefin;
		this.description = description;
		this.chef = chef;
		this.total = total;
		this.taches = taches;
	}



	public Float getTotal() {
		return total;
	}



	public void setTotal(Float total) {
		this.total = total;
	}



	public List<Tache> getTaches() {
		return taches;
	}



	public void setTaches(List<Tache> taches) {
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



	public LocalDate getDatededbut() {
		return datededbut;
	}



	public void setDatededbut(LocalDate datededbut) {
		this.datededbut = datededbut;
	}



	public LocalDate getDatedefin() {
		return datedefin;
	}



	public void setDatedefin(LocalDate datedefin) {
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

