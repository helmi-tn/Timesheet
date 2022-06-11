package com.uib.timesheet.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.CollaborateurTache;
import com.uib.timesheet.repository.CollaborateurRepository;
import com.uib.timesheet.repository.CollaborateurTacheRepository;

@Service
public class CollaborateurTacheService {
	
	@Autowired
	CollaborateurTacheRepository collaborateurTacheRepository;
	
	@Autowired
	CollaborateurRepository collaborateurRepository;
	
	public Set<CollaborateurTache> findByCollabId(Long id){
		List<CollaborateurTache> ct =  (List<CollaborateurTache>) collaborateurTacheRepository.findAll();
		Collaborateur c = collaborateurRepository.findById(id).get();
		
		Set<CollaborateurTache> newct = new HashSet<>();
		for( CollaborateurTache t : ct) {
			if (c.getId() == t.getCollaborateur().getId()){
				newct.add(t);
			}
		}
		return newct;
		
	}
	
	public List<CollaborateurTache> findAll(){
		return (List<CollaborateurTache>) collaborateurTacheRepository.findAll();
	}
}
