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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.uib.timesheet.model.Equipe;
import com.uib.timesheet.service.EquipeService;

@CrossOrigin("*")
@RestController
@RequestMapping(value="/admin/equipes"
,produces = "application/json")
public class EquipeController {

	@Autowired
	private EquipeService equipeService;
	
	@GetMapping("/{id}")
	public Equipe getById(@PathVariable Long id) {
		return equipeService.findById(id);
	}
	@GetMapping("")
	public List<Equipe> getAll(){
		return equipeService.findAll();
	}
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id) {
		equipeService.deleteById(id);
	}
	@PostMapping("")
	public void Add(@RequestBody Equipe equipe) {
		equipeService.addOrUpdate(equipe);
	}
	@RequestMapping(value="/{id}",  produces = "application/json",  method= {RequestMethod.PATCH})
	public void update(@RequestBody Equipe equipe) {
		equipeService.addOrUpdate(equipe);
	}
}
