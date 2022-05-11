package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.Monthsheet;

@Repository
public interface MonthsheetRepository extends CrudRepository<Monthsheet,Long>{

}
