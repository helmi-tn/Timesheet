package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.Daysheet;

@Repository
public interface DaysheetRepository extends CrudRepository<Daysheet,Long>{

}
