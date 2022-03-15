package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Collaborateur {
	
	
	@EmbeddedId
	private CollaborateurId id;
	
	@OneToOne
	@JoinColumn(name="timesheet_id", nullable=true)
	private Timesheet timesheet;
	
	
	@ManyToOne
    @JoinColumn(name="equipe_id", nullable=true)
    private Equipe equipe;
	
	@ManyToMany(mappedBy="collaborateurs")
	private Set<Tache> taches;

	public CollaborateurId getId() {
		return id;
	}

	public void setId(CollaborateurId id) {
		this.id = id;
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
