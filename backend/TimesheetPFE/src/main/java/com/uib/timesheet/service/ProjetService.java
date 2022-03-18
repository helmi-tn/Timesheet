package com.uib.timesheet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Projet;
import com.uib.timesheet.repository.ProjetRepository;

@Service
public class ProjetService {
	@Autowired
	ProjetRepository projetRepository;
	
	
	public Optional<Projet> findById(Long id) {
		return projetRepository.findById(id);
	}
	public List<Projet> findAll(){
		return (List<Projet>) projetRepository.findAll();
	}
	
	public void deleteById(Long id) {
		projetRepository.deleteById(id);
	}
	public void addOrUpdateProjet(Projet pt) {
		projetRepository.save(pt);
	}

}
