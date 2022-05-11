/*package com.uib.timesheet.auth;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.security.ApplicationUserRole;


public class ApplicationUser implements UserDetails{
	
	private Collaborateur collaborateur;
	
	

	public ApplicationUser(Collaborateur collaborateur) {
		super();
		this.collaborateur = collaborateur;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return ApplicationUserRole.COLLABORATEUR.getGrantedAuthorities();
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return collaborateur.getMotdepasse();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return collaborateur.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
}*/
