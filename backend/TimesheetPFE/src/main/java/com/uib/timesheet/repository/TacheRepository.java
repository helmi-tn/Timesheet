package com.uib.timesheet.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.Tache;

@Repository
public interface TacheRepository extends CrudRepository<Tache,Long>{

	Optional<Tache> findById(Long id);
	
}
