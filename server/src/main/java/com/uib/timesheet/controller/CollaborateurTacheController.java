package com.uib.timesheet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uib.timesheet.model.CollaborateurTache;
import com.uib.timesheet.service.CollaborateurTacheService;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class CollaborateurTacheController {

	@Autowired
	CollaborateurTacheService collaborateurTacheService;
	
	@GetMapping("/collaborateurtache")
	public List<CollaborateurTache> getAll(){
		return collaborateurTacheService.findAll();
	}
}
