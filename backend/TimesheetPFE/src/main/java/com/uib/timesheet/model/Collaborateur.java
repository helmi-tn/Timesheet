package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Collaborateur {
	
	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String prenom;
	private int matricule;
	private boolean chef;
	
	@OneToOne
	@JoinColumn(name="timesheet_id", nullable=true)
	private Timesheet timesheet;
	
	
	@ManyToOne
    @JoinColumn(name="equipe_id", nullable=true)
    private Equipe equipe;
	
	@ManyToMany
	private Set<Tache> taches;

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

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public int getMatricule() {
		return matricule;
	}

	public void setMatricule(int matricule) {
		this.matricule = matricule;
	}

	public boolean isChef() {
		return chef;
	}

	public void setChef(boolean chef) {
		this.chef = chef;
	}

	public Timesheet getTimesheet() {
		return timesheet;
	}

	public void setTimesheet(Timesheet timesheet) {
		this.timesheet = timesheet;
	}

	public Equipe getEquipe() {
		return equipe;
	}

	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}

	public Set<Tache> getTaches() {
		return taches;
	}

	public void setTaches(Set<Tache> taches) {
		this.taches = taches;
	}


		
	

	
	
	
	
	
	
}
