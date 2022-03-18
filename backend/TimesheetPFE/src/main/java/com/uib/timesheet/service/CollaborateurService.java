package com.uib.timesheet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Timesheet;
import com.uib.timesheet.repository.CollaborateurRepository;

@Service
public class CollaborateurService {
	
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	/*public List<Collaborateur> findByChef(boolean Chef){
		return collaborateurRepository.findByIdChef(Chef);
	}*/
	public Collaborateur findById(Long id) {
		return collaborateurRepository.findById(id).get();
	}
	public void addOrUpdateCollaborateur(Collaborateur cb) {
		collaborateurRepository.save(cb);
	}
	public List<Collaborateur> findAll(){
		return (List<Collaborateur>) collaborateurRepository.findAll();
	}
	
	public void deleteCollaborateur(Long id) {
		collaborateurRepository.deleteById(id);
	}
	
	public Timesheet getTimesheet(Long id) {
		Query query = entityManager.createQuery("SELECT timesheet FROM Collaborateur C WHERE C.id = : CollaborateurId");
		query.setParameter("CollaborateurId", id);
		return (Timesheet) query.getSingleResult();
	}
	
	
	
	public List<Collaborateur> findByIdEquipe(Long equipeId){
		Query query = entityManager.createQuery("FROM Collaborateur C WHERE C.equipe.id = :EquipeId");
    	query.setParameter("EquipeId", equipeId);
    	return  query.getResultList();
	}
	
	public List<Collaborateur> findByIdTache(Long tacheId){
		Query query = entityManager.createQuery("FROM Collaborateur C "
    			+ "JOIN C.taches CT "
    			+ "WHERE CT.id = :TacheId");
    	query.setParameter("TacheId", tacheId);
    	return  query.getResultList();
	}
	
	
	
	
}
