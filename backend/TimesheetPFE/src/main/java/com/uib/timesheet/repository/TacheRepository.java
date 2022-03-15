package com.uib.timesheet.repository;


import java.util.Optional;
import java.util.Set;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Tache;


public interface TacheRepository extends CrudRepository<Tache,Long>{

	Optional<Tache> findById(Long id);
	
}
