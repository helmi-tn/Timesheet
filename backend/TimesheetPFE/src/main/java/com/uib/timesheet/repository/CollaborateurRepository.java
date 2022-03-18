package com.uib.timesheet.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Collaborateur;

public interface CollaborateurRepository extends CrudRepository<Collaborateur,Long>{
	
	//Collaborateur findByIdMatricule(int matr);
	
	//void deleteByIdMatricule(int mat);
	
	

}
