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
import com.uib.timesheet.service.CollaborateurService;

@RestController
@RequestMapping("/admin/collaborateurs")
@CrossOrigin
public class CollaborateurController {
	
	@Autowired
	private CollaborateurService collaborateurService;
	
	@GetMapping("/nom/{nom}")
	public List<Collaborateur> findByNom(@PathVariable String nom) {
		return collaborateurService.findByNom(nom);
	}
	@GetMapping("/prenom/{prenom}")
	public List<Collaborateur> findByPrenom(@PathVariable String prenom) {
		return collaborateurService.findByPrenom(prenom);
	}
	@GetMapping("/chef/{chef}")
	public List<Collaborateur> findByChef(@PathVariable boolean chef) {
		return collaborateurService.findByChef(chef);
	}
	@GetMapping("/{matr}")
	public Collaborateur findByMatr(@PathVariable int matr) {
		return collaborateurService.findBymatricule(matr);
	}
	@GetMapping("/")
	public List<Collaborateur> getAll(){
		return collaborateurService.findAll();
	}
	
	@GetMapping("/byequipe/{equipeId}")
	public List<Collaborateur> findByIdEquipe(@PathVariable long equipeId){
		return collaborateurService.findByIdEquipe(equipeId);
	}
	@GetMapping("/bytache/{tacheId}")
	public List<Collaborateur> findByIdTache(@PathVariable long tacheId){
		return collaborateurService.findByIdTache(tacheId);
	}
	
	@PostMapping("/")
	public void addCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.addOrUpdateCollaborateur(cb);
	}
	@PutMapping("/{matr}")
	public void updateCollaborateur(@RequestBody Collaborateur cb) {
		collaborateurService.addOrUpdateCollaborateur(cb);
	}
	
	@DeleteMapping("/{matr}")
	public void deleteCollaborateur(@PathVariable int matr) {
		collaborateurService.deleteCollaborateur(matr);
	}
	
	
}
