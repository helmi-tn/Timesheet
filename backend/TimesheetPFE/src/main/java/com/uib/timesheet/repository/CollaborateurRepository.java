package com.uib.timesheet.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.uib.timesheet.model.Collaborateur;

public interface CollaborateurRepository extends CrudRepository<Collaborateur,Long>{
	
	//Collaborateur findByIdMatricule(int matr);
	
	//void deleteByIdMatricule(int mat);
	
	@Query("select c from Collaborateur c where c.nom = :nom")
    Set<Collaborateur> findByNom(@Param("nom") String nom);
	
	

}
