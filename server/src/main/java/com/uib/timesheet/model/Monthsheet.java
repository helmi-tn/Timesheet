package com.uib.timesheet.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

@Entity
@Table(name ="monthsheet")
public class Monthsheet {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private double totalpermonth;
	
	/*
	@ManyToOne
	@JoinColumn
	private Collaborateur collaborateur;
	*/
	
	@OneToMany(cascade = CascadeType.ALL)
	@OrderColumn
	private Daysheet[] daysheets;

	
	
	
	public Monthsheet() {
	}

	public Monthsheet(Long id, String name, double totalpermonth, Daysheet[] daysheets) {
		super();
		this.id = id;
		this.name = name;
		this.totalpermonth = totalpermonth;
		this.daysheets = daysheets;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getTotalpermonth() {
		return totalpermonth;
	}

	public void setTotalpermonth(double totalpermonth) {
		this.totalpermonth = totalpermonth;
	}

	public Daysheet[] getDaysheets() {
		return daysheets;
	}

	public void setDaysheets(Daysheet[] daysheets) {
		this.daysheets = daysheets;
	}

	
	
}