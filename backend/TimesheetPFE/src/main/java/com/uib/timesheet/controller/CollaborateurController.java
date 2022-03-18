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

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Timesheet;
import com.uib.timesheet.service.CollaborateurService;

@RestController
@RequestMapping("/admin/collaborateurs")
@CrossOrigin
public class CollaborateurController {
	
	@Autowired
	private CollaborateurService collaborateurService;
	
	
	@GetMapping("/{id}")
	public Collaborateur findById(@PathVariable Long id) {
		return collaborateurService.findById(id);
	}
	@GetMapping("/all")
	public List<Collaborateur> getAll(){
		return collaborateurService.findAll();
	}
	
	@PostMapping("/")
	public void addCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.addOrUpdateCollaborateur(cb);
	}
	@PutMapping("/{id}")
	public void updateCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.addOrUpdateCollaborateur(cb);
	}
	
	@DeleteMapping("/{id}")
	public void deleteCollaborateur(@PathVariable Long id) {
		collaborateurService.deleteCollaborateur(id);
	}
	
	@GetMapping("/{id}/timesheet")
	public Timesheet getTimesheet(@PathVariable Long id) {
		return collaborateurService.getTimesheet(id);
	}
	
	@GetMapping("/byequipe/{equipeId}")
	public List<Collaborateur> findByIdEquipe(@PathVariable long equipeId){
		return collaborateurService.findByIdEquipe(equipeId);
	}
	@GetMapping("/bytache/{tacheId}")
	public List<Collaborateur> findByIdTache(@PathVariable long tacheId){
		return collaborateurService.findByIdTache(tacheId);
	}
	
}
