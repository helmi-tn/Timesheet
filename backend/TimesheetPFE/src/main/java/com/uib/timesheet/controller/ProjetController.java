package com.uib.timesheet.controller;

import java.util.List;
import java.util.Optional;

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

import com.uib.timesheet.model.Projet;
import com.uib.timesheet.service.ProjetService;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin/projets")
public class ProjetController {

	@Autowired
	ProjetService projetService;
	
	@GetMapping("/{id}")
	public Projet getProjet(@PathVariable Long id) {
		return projetService.findById(id);
	}
	@GetMapping("")
	public List<Projet> getAll(){
		return projetService.findAll();
	}
	@DeleteMapping("/{id}")
	public void deleteProjet(@PathVariable Long id) {
		projetService.deleteById(id);
	}
	@PostMapping("")
	public void addProjet(@RequestBody Projet pt) {
		projetService.addOrUpdateProjet(pt);
	}
	@PutMapping("/{id}")
	public void UpdateProjet(@RequestBody Projet pt) {
		projetService.addOrUpdateProjet(pt);
	}
	@GetMapping("/{id}/total")
	public Float getTotal(@PathVariable Long id) {
		return projetService.getTotal(id);
	}
	@GetMapping("/totals")
	public List<Float> getTotals(){
		return projetService.getTotalAll();
	}

	
}
