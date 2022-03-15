package com.uib.timesheet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.repository.CollaborateurRepository;

@Service
public class CollaborateurService {
	
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	public List<Collaborateur> findByNom(String nom) {
		return collaborateurRepository.findByIdNom(nom);
	}
	
	public List<Collaborateur> findByPrenom(String prenom){
		return collaborateurRepository.findByIdPrenom(prenom);
	}
	
	public List<Collaborateur> findByChef(boolean Chef){
		return collaborateurRepository.findByIdChef(Chef);
	}
	public Collaborateur findBymatricule(int matr) {
		return collaborateurRepository.findByIdMatricule(matr);
	}
	
	public void addOrUpdateCollaborateur(Collaborateur cb) {
		collaborateurRepository.save(cb);
	}
	public List<Collaborateur> findAll(){
		return (List<Collaborateur>) collaborateurRepository.findAll();
	}
	@Transactional
	public void deleteCollaborateur(int matr) {
		Query query = entityManager.createQuery("DELETE FROM Collaborateur C WHERE C.id.matricule = : CollaborateurMatr");
		query.setParameter("CollaborateurMatr", matr).executeUpdate();
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
