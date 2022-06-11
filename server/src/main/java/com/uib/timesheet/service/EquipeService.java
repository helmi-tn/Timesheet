package com.uib.timesheet.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Equipe;
import com.uib.timesheet.repository.CollaborateurRepository;
import com.uib.timesheet.repository.EquipeRepository;

@Service
public class EquipeService {

	@Autowired
	private EquipeRepository equipeRepository;
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	public Equipe findById(Long id) {
		return equipeRepository.findById(id).get();
	}
	public List<Equipe> findAll(){
		return (List<Equipe>) equipeRepository.findAll();
	}
	public void deleteById(Long id) {
		equipeRepository.deleteById(id);
	}
	public void addOrUpdate(Equipe equipe) {
		
		Equipe newe = equipeRepository.save(equipe);
		Set<Collaborateur> collabs = equipe.getCollaborateurs();
		for(Collaborateur collab:collabs) {
			collab.setEquipe(newe);
			collaborateurRepository.save(collab);
		}
	}
	
}
