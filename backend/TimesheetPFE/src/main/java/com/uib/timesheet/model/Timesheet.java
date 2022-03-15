package com.uib.timesheet.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name ="timesheet")
public class Timesheet {

	@Id
	@GeneratedValue
	private String id;
	private Date mois;
	private Date semaine;
	
	
	@OneToOne(mappedBy ="timesheet")
	@JoinColumns({
		  @JoinColumn(name = "nom", insertable = false, updatable = false),
		  @JoinColumn(name = "prenom", insertable = false, updatable = false),
		  @JoinColumn(name = "matricule", insertable = false, updatable = false),
		  @JoinColumn(name = "chef_de_projet", insertable = false, updatable = false),
		})
	private Collaborateur collaborateur;


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public Date getMois() {
		return mois;
	}


	public void setMois(Date mois) {
		this.mois = mois;
	}


	public Date getSemaine() {
		return semaine;
	}


	public void setSemaine(Date semaine) {
		this.semaine = semaine;
	}


	public Collaborateur getCollaborateur() {
		return collaborateur;
	}


	public void setCollaborateur(Admin collaborateur) {
		this.collaborateur = collaborateur;
	}
	
	
	
	
	
	
}
