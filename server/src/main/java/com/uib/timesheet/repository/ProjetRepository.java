package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.Projet;

@Repository
public interface ProjetRepository extends CrudRepository<Projet,Long>{

}
