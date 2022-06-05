package com.uib.timesheet.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.repository.CollaborateurRepository;

@Service
public class ApplicationUserService implements UserDetailsService{
	
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Collaborateur collaborateur = collaborateurRepository.findByEmail(username);
		if(collaborateur == null ) {
			throw new UsernameNotFoundException("Utilisateur non trouvé");
		}
		
		return new ApplicationUser(collaborateur);
	}

}
