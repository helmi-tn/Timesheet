package com.uib.timesheet.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.CollaborateurId;

public interface CollaborateurRepository extends CrudRepository<Collaborateur,CollaborateurId>{
	
	List<Collaborateur> findByIdNom(String nom);
	
	List<Collaborateur> findByIdPrenom(String prenom);
	
	List<Collaborateur> findByIdChef(boolean chef);
	
	Collaborateur findByIdMatricule(int matr);
	
	//void deleteByIdMatricule(int mat);
	
	

}
