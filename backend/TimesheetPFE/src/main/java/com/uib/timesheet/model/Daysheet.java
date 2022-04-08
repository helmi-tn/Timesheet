package com.uib.timesheet.model;



import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

@Entity
@Table(name ="daysheet")
public class Daysheet {
	@Id
	@GeneratedValue
	private Long id;
	
	
	@ElementCollection
	@OrderColumn
	private String[] inputcolab;
	private int daynumber;
	
	private String totalperday;

	private boolean weekend = false;

	/*
	@ManyToOne
    @JoinColumn
    private Weeksheet weeksheet;*/
	
	
	
	

	public Daysheet(Long id, String[] inputcolab, int daynumber, String totalperday, boolean weekend) {
		super();
		this.id = id;
		this.inputcolab = inputcolab;
		this.daynumber = daynumber;
		this.totalperday = totalperday;
		this.weekend = weekend;
	}
	public Daysheet() {
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String[] getInputcolab() {
		return inputcolab;
	}

	public void setInputcolab(String[] inputcolab) {
		this.inputcolab = inputcolab;
	}

	public int getDaynumber() {
		return daynumber;
	}

	public void setDaynumber(int daynumber) {
		this.daynumber = daynumber;
	}

	public String getTotalperday() {
		return totalperday;
	}

	public void setTotalperday(String totalperday) {
		this.totalperday = totalperday;
	}

	public boolean isWeekend() {
		return weekend;
	}

	public void setWeekend(boolean weekend) {
		this.weekend = weekend;
	}
	
	
	
	
}
