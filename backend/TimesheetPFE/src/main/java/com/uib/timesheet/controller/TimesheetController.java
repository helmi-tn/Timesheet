package com.uib.timesheet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uib.timesheet.model.Timesheet;
import com.uib.timesheet.service.TimesheetService;

@RestController
@RequestMapping("/admin/timesheets")
@CrossOrigin
public class TimesheetController {

	@Autowired
	private TimesheetService timesheetService;
	
	@GetMapping("/{id}")
	public Timesheet getById(@PathVariable Long id) {
		return timesheetService.findById(id);
	}
	@GetMapping("/all")
	public List<Timesheet> getAll(){
		return timesheetService.findAll();
	}
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id) {
		timesheetService.deleteById(id);
	}
	@PostMapping("")
	public void Add(@RequestBody Timesheet timesheet) {
		timesheetService.addOrUpdate(timesheet);
	}
	@PutMapping("/{id}")
	public void update(@RequestBody Timesheet timesheet) {
		timesheetService.addOrUpdate(timesheet);
	}

}
