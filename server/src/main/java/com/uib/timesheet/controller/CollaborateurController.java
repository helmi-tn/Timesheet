package com.uib.timesheet.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
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

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.model.Tache;
import com.uib.timesheet.service.CollaborateurService;
import com.uib.timesheet.service.DaysheetService;
import com.uib.timesheet.service.MonthsheetService;

@RestController
@CrossOrigin("*")
public class CollaborateurController {
	
	@Autowired
	private MonthsheetService monthsheetService;
	
	@Autowired
	private DaysheetService daysheetService;
	
	@Autowired
	private CollaborateurService collaborateurService;
	
	//@Autowired
	//private PasswordEncoder passwordEncoder;
	
	////ADMIN SIDE
	
	@GetMapping("/admin/collaborateurs/{id}")
	public Collaborateur findById(@PathVariable Long id) {
		return collaborateurService.findById(id);
	}
	@GetMapping("/admin/collaborateurs")
	public List<Collaborateur> getAll(){
		return collaborateurService.findAll();
	}
	
	@PostMapping("/admin/collaborateurs")
	public void addCollaborateur(@RequestBody Collaborateur cb){
		//cb.setMotdepasse(passwordEncoder.encode(cb.getMotdepasse()));
		collaborateurService.addCollaborateur(cb);
	}
	
	@RequestMapping(value="/admin/collaborateurs/{id}", produces= "application/json", method= {RequestMethod.PATCH})
	public void updateCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.updateCollab(cb);
	}
	
	
	@DeleteMapping("/admin/collaborateurs/{id}")
	public void deleteCollaborateur(@PathVariable Long id) {
		collaborateurService.deleteCollaborateur(id);
	}
	
	@GetMapping("/admin/collaborateurs/byequipe/{equipeId}")
	public List<Collaborateur> findByIdEquipe(@PathVariable Long equipeId){
		return collaborateurService.findByIdEquipe(equipeId);
	}
	@GetMapping("/admin/collaborateurs/bytache/{tacheId}")
	public List<Collaborateur> findByIdTache(@PathVariable long tacheId){
		return collaborateurService.findByIdTache(tacheId);
	}
	@GetMapping("admin/collaborateurs/byprojet/{projetId}")
	public Set<Collaborateur> findByIdProjet(@PathVariable long projetId){
		return collaborateurService.findByIdProjet(projetId);
	}
	
	
	/////USER SIDE
	@GetMapping("/collaborateur/{id}/monthsheet")
	public Monthsheet getMonthsheet(@PathVariable Long id) {
		return collaborateurService.getMonthsheet(id);
	}
	
	@RequestMapping(value="/collaborateur/monthsheet/{id_day}/{order}", produces = "application/json", method= {RequestMethod.PATCH})
	public void updateDaysheet(@PathVariable long id_day,@PathVariable int order, @RequestBody String input) {
		daysheetService.update(id_day,order,input);    
	}
	@RequestMapping(value="/admin/collaborateur/{equipe_id}", produces="application/json", method= {RequestMethod.PATCH})
	public void updateCollaborateursEquipe(@PathVariable long equipe_id,@RequestBody List<Long> collabs_id) {
		collaborateurService.updateCollaborateursEquipe(equipe_id, collabs_id);
	}
	@RequestMapping(value="/admin/collaborateur/settaches/{id}", produces="application/json", method= {RequestMethod.PATCH})
	public void updateCollaborateurTaches(@PathVariable Long id,@RequestBody List<Tache> taches) {
		collaborateurService.updateCollaborateurTaches(id, taches);
	}

	
	
}
