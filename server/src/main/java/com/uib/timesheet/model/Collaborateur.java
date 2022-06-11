package com.uib.timesheet.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Collaborateur {
	
	@Id
	@GeneratedValue
	private Long id;
	private String email;
	private String motdepasse;
	private String nom;
	private String prenom;
	private int matricule;
	private boolean chef;
	
	
	/* gx
	@OneToOne
	@JoinColumn(name="timesheet_id", nullable=true)
	private Monthsheet monthsheet;
	*/
	

	@ManyToOne
    @JoinColumn(name="equipe_id", nullable=true)
    private Equipe equipe;
	

	@ManyToMany //
	private List<Tache> taches;
	
	@JsonIgnore
	@OneToMany(mappedBy = "collaborateur")
	Set<CollaborateurTache> tachesIndiv;
	
	
	
	@OneToMany(cascade = CascadeType.ALL)
	@OrderColumn
	private List<Monthsheet> monthsheets;


	

	public Collaborateur(Long id, String email, String motdepasse, String nom, String prenom, int matricule,
			boolean chef, Equipe equipe, List<Tache> taches, Set<CollaborateurTache> tachesIndiv,
			List<Monthsheet> monthsheets) {
		super();
		this.id = id;
		this.email = email;
		this.motdepasse = motdepasse;
		this.nom = nom;
		this.prenom = prenom;
		this.matricule = matricule;
		this.chef = chef;
		this.equipe = equipe;
		this.taches = taches;
		this.tachesIndiv = tachesIndiv;
		this.monthsheets = monthsheets;
	}



	public Collaborateur() {
		// TODO Auto-generated constructor stub
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMotdepasse() {
		return motdepasse;
	}



	public void setMotdepasse(String motdepasse) {
		this.motdepasse = motdepasse;
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



	public Equipe getEquipe() {
		return equipe;
	}



	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}



	public List<Tache> getTaches() {
		return taches;
	}



	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}



	public Set<CollaborateurTache> getTachesIndiv() {
		return tachesIndiv;
	}



	public void setTachesIndiv(Set<CollaborateurTache> tachesIndiv) {
		this.tachesIndiv = tachesIndiv;
	}



	public List<Monthsheet> getMonthsheets() {
		return monthsheets;
	}



	public void setMonthsheets(List<Monthsheet> monthsheets) {
		this.monthsheets = monthsheets;
	}
	

	
	
}
