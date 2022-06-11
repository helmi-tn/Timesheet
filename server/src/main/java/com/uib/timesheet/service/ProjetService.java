package com.uib.timesheet.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Projet;
import com.uib.timesheet.model.Tache;
import com.uib.timesheet.repository.CollaborateurRepository;
import com.uib.timesheet.repository.ProjetRepository;
import com.uib.timesheet.repository.TacheRepository;

@Service
public class ProjetService {
	@Autowired
	ProjetRepository projetRepository;
	
	@Autowired
	TacheRepository tacheRepository;
	@Autowired
	CollaborateurRepository collaborateurRepository;
	@Autowired
	private EntityManager entityManager;
	
	
	public Projet findById(Long id) {
		return projetRepository.findById(id).get();
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
	public Projet getProjetByNom(String nomprojet) {
    	Query query = entityManager.createQuery("FROM Projet P WHERE P.nom = :nomprojet");
    	query.setParameter("nomprojet", nomprojet);
    	return  (Projet) query.getSingleResult();
    }

	public Float getTotal(Long id) {
		Projet projet = findById(id);
		Float total=(float) 0;
    	List<Tache> taches = (List<Tache>) tacheRepository.findAll();
    	for(int i=0; i<taches.size() ; i++) {
    		if(taches.get(i).getProjet()==projet) {
    			total+=taches.get(i).getTotal();
    		}
    	}
    	return  total;
	}
	public List<Float> getTotalAll(){
		List<Projet> projets = findAll();
		List<Float> totals = new ArrayList<Float>(projets.size()+1);
    	for(int i=0;i<projets.size();i++) {
    		Projet projet = projets.get(i);
    		Float total= projet.getTotal();
    		
    		totals.add(total);
    	}
    	return totals;
	}
	
	public Set<Projet> getProjetsByCollab(Long id){
		Collaborateur colab = collaborateurRepository.findById(id).get();
		List<Tache> taches = colab.getTaches();
		Set<Projet> projets = new HashSet<Projet> (); 
		for(Tache t : taches) {
			projets.add(t.getProjet());
		}
		return projets;
	}
}
