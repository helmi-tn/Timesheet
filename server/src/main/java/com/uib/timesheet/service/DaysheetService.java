package com.uib.timesheet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Daysheet;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.repository.DaysheetRepository;

@Service
public class DaysheetService {
	
	@Autowired
	private EntityManager entityManager;
	@Autowired
	private DaysheetRepository daysheetRepository;
	
	public Daysheet findById(Long id) {
		return daysheetRepository.findById(id).get();
	}
	public List<Daysheet> findAll(){
		return (List<Daysheet>) daysheetRepository.findAll();
	}
	public void deleteById(Long id) {
		daysheetRepository.deleteById(id);
	}
	public void add(Daysheet daysheet) {
		daysheetRepository.save(daysheet);
	}
	public void update(Long id_day,int order,String input) {
		Daysheet day = findById(id_day);
		String[] inputs =day.getInputcolab();
		inputs[order]= input;
		
		double total= 0;
		for(int i=0; i<inputs.length;i++) {
			double inputvalue = Double.parseDouble(inputs[i]);
			total +=inputvalue;
		}
		day.setTotalperday(String.valueOf(total));
		day.setInputcolab(inputs);
		
		daysheetRepository.save(day);
	}
}
