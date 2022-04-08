package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Daysheet;

public interface DaysheetRepository extends CrudRepository<Daysheet,Long>{

}
