package com.uib.timesheet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Timesheet;
import com.uib.timesheet.repository.TimesheetRepository;

@Service
public class TimesheetService {

	@Autowired
	private TimesheetRepository timesheetRepository;
	
	public Timesheet findById(Long id) {
		return timesheetRepository.findById(id).get();
	}
	public List<Timesheet> findAll(){
		return (List<Timesheet>) timesheetRepository.findAll();
	}
	public void deleteById(Long id) {
		timesheetRepository.deleteById(id);
	}
	public void addOrUpdate(Timesheet timesheet) {
		timesheetRepository.save(timesheet);
	}

}
