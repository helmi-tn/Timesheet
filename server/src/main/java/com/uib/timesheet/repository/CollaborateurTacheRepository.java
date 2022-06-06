package com.uib.timesheet.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.CollaborateurTache;

@Repository
public interface CollaborateurTacheRepository extends CrudRepository<CollaborateurTache,Long>{
	
}
