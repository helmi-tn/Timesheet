package com.uib.timesheet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="admin")
public class Admin extends Collaborateur{

	
	private String attribut;

	public String getAttribut() {
		return attribut;
	}

	public void setAttribut(String attribut) {
		this.attribut = attribut;
	}
	
	
}
