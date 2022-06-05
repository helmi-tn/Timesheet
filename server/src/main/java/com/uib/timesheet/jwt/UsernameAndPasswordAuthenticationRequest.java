package com.uib.timesheet.jwt;

public class UsernameAndPasswordAuthenticationRequest {
	private String email;
	private String motdepasse;
	
	public UsernameAndPasswordAuthenticationRequest() {
		
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
	
}
