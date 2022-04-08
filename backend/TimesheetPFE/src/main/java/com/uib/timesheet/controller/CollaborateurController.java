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
import org.springframework.web.bind.annotation.RestController;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.service.CollaborateurService;
import com.uib.timesheet.service.DaysheetService;
import com.uib.timesheet.service.MonthsheetService;

@RestController
@CrossOrigin
public class CollaborateurController {
	
	@Autowired
	private MonthsheetService monthsheetService;
	
	@Autowired
	private DaysheetService daysheetService;
	
	@Autowired
	private CollaborateurService collaborateurService;
	
	////ADMIN SIDE
	
	@GetMapping("/admin/collaborateurs/{id}")
	public Collaborateur findById(@PathVariable Long id) {
		return collaborateurService.findById(id);
	}
	@GetMapping("/admin/collaborateurs/all")
	public List<Collaborateur> getAll(){
		return collaborateurService.findAll();
	}
	
	@PostMapping("/admin/collaborateurs")
	public void addCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.addCollaborateur(cb);
	}
	@PutMapping("/admin/collaborateurs/{id}")
	public void updateCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.updateCollab(cb);
	}
	
	
	@DeleteMapping("/admin/collaborateurs/{id}")
	public void deleteCollaborateur(@PathVariable Long id) {
		collaborateurService.deleteCollaborateur(id);
	}
	
	@GetMapping("/admin/collaborateurs/byequipe/{equipeId}")
	public List<Collaborateur> findByIdEquipe(@PathVariable long equipeId){
		return collaborateurService.findByIdEquipe(equipeId);
	}
	@GetMapping("/admin/collaborateurs/bytache/{tacheId}")
	public List<Collaborateur> findByIdTache(@PathVariable long tacheId){
		return collaborateurService.findByIdTache(tacheId);
	}
	
	
	/////USER SIDE
	@GetMapping("/collaborateur/{id}/monthsheet")
	public Monthsheet getMonthsheet(@PathVariable long id) {
		return collaborateurService.getMonthsheet(id);
	}
	
	@PutMapping("/collaborateur/monthsheet/{id_day}/{order}")
	public void updateDaysheet(@PathVariable long id_day,@PathVariable int order, @RequestBody String input) {
		daysheetService.update(id_day,order,input);    
	}
	
}
