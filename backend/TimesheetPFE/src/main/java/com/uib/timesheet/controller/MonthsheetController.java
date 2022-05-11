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

import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.service.MonthsheetService;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/timesheets")
public class MonthsheetController {

	@Autowired
	private MonthsheetService monthsheetService;
	
	@GetMapping("/{id}")
	public Monthsheet getById(@PathVariable Long id) {
		return monthsheetService.findById(id);
	}
	@GetMapping("/all")
	public List<Monthsheet> getAll(){
		return monthsheetService.findAll();
	}
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id) {
		monthsheetService.deleteById(id);
	}
	@PostMapping("")
	public void Add(@RequestBody Monthsheet monthsheet) {
		monthsheetService.addOrUpdate(monthsheet);
	}
	@PutMapping("/{id}")
	public void update(@RequestBody Monthsheet monthsheet) {
		monthsheetService.addOrUpdate(monthsheet);
	}

}
