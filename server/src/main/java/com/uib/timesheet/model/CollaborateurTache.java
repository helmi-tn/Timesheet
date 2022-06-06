package com.uib.timesheet.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CollaborateurTache {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "collaborateur_id")
	private Collaborateur collaborateur;

	@ManyToOne
	@JoinColumn(name = "tache_id")
	private Tache tache;
	
	private Float totalparcollab;
	
	

	public CollaborateurTache() {
	}

	public CollaborateurTache(Long id, Collaborateur collaborateur, Tache tache, Float totalparcollab) {

		this.id = id;
		this.collaborateur = collaborateur;
		this.tache = tache;
		this.totalparcollab = totalparcollab;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Collaborateur getCollaborateur() {
		return collaborateur;
	}

	public void setCollaborateur(Collaborateur collaborateur) {
		this.collaborateur = collaborateur;
	}

	public Tache getTache() {
		return tache;
	}

	public void setTache(Tache tache) {
		this.tache = tache;
	}

	public Float getTotalparcollab() {
		return totalparcollab;
	}

	public void setTotalparcollab(Float totalparcollab) {
		this.totalparcollab = totalparcollab;
	}
	
	
	

}
