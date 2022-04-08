package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;

import com.uib.timesheet.model.Weeksheet;


public interface WeeksheetRepository extends CrudRepository<Weeksheet,Long> {

}
