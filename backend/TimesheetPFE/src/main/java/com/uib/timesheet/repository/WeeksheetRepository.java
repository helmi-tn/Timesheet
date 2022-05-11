package com.uib.timesheet.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uib.timesheet.model.Weeksheet;

@Repository
public interface WeeksheetRepository extends CrudRepository<Weeksheet,Long> {

}
