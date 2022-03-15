package com.uib.timesheet.model;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CollaborateurId implements Serializable{
	
	private String nom;
	private String prenom;
	private int matricule;
	private boolean chef;
}
