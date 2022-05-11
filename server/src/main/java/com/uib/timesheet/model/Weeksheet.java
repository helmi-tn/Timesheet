package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name ="weeksheet")
public class Weeksheet {

	@Id
	@GeneratedValue
	private Long id;
	private double totalperweek;
	
	/*
	@ManyToOne
    @JoinColumn
    private Monthsheet monthsheet;
    */
	
	/*@OneToMany(cascade = CascadeType.ALL)
	private Set<Daysheet> daysheets;*/
	
	
	

	public Weeksheet() {
	}




	public Weeksheet(Long id, double totalperweek) {
		super();
		this.id = id;
		this.totalperweek = totalperweek;
	}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public double getTotalperweek() {
		return totalperweek;
	}




	public void setTotalperweek(double totalperweek) {
		this.totalperweek = totalperweek;
	}


	
	
}
