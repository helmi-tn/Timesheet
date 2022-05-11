package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Timesheet;

public interface TimesheetRepository extends CrudRepository<Timesheet,Long>{

}
