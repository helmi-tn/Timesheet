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

import com.uib.timesheet.model.Tache;
import com.uib.timesheet.service.TacheService;




@RestController
@CrossOrigin("*")
@RequestMapping("/admin/taches")
public class TacheController {
	
	@RequestMapping("/hello") 
	public String sayHi() {
		return "Hello";
	}
	
	@Autowired
	private TacheService tacheService;
	
	/////
	@GetMapping("/byprojet/{projetId}")  
	public List<Tache> getAllProjetTaches(@PathVariable Long projetId) {
		return tacheService.findByProjetId(projetId);
	}
	/*@GetMapping("/bycollaborateur/{collaborateurNomId}")
	public List<Tache> getAllCollaborateur(@PathVariable String collaborateurNomId){
		return tacheService.findByCollaborateurNom(collaborateurNomId);
	}*/
	
	@GetMapping("/{id}")
	public Tache getTache(@PathVariable Long id){	
		return tacheService.getById(id);
	}
	
	@GetMapping("")
	public List<Tache> getAll(){
		return tacheService.GetAll();
	}
	
	@PostMapping("/")
	public void addTache(@RequestBody Tache tache) {
		tacheService.addOrUpdateTache(tache);
	}
	@PutMapping("/{id}")
	public void updateTache(@RequestBody Tache tache) {
		tacheService.addOrUpdateTache(tache);
	}
	@DeleteMapping("/{id}")
	public void deleteTache(@PathVariable Long id) {
		tacheService.deleteTache(id);
	}
	@GetMapping("/collaborateur/{collabId}")
	public List<Tache> getByColabId(@PathVariable Long collabId){
		return tacheService.findByCollaborateurId(collabId);
	}
	@RequestMapping(value="/{id_collab}/updatetotal/{id_tache}",produces = "application/json",  method= {RequestMethod.PATCH})
	public void updateTotalTache(@PathVariable Long id_collab,@PathVariable Long id_tache,@RequestBody String total) {
		tacheService.updatetTotal(id_collab,id_tache, total);
	}
	
}
