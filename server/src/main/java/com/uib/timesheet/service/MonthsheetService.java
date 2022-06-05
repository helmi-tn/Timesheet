package com.uib.timesheet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Daysheet;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.repository.MonthsheetRepository;

@Service
public class MonthsheetService {

	@Autowired
	private MonthsheetRepository monthsheetRepository;
	
	public Monthsheet findById(Long id) {
		return monthsheetRepository.findById(id).get();
	}
	public List<Monthsheet> findAll(){
		return (List<Monthsheet>) monthsheetRepository.findAll();
	}
	public void deleteById(Long id) {
		monthsheetRepository.deleteById(id);
	}
	public void addOrUpdate(Monthsheet monthsheet) {
		monthsheetRepository.save(monthsheet);
	}

	public void updateTotal(Long id) {
		Monthsheet ms = monthsheetRepository.findById(id).get();
		Daysheet[] ds = ms.getDaysheets(); 
		double total =0;
		for(Daysheet d: ds) {
			total +=Double.parseDouble(d.getTotalperday());
		}
		ms.setTotalpermonth(total);
		monthsheetRepository.save(ms);
	}
	public void setConfirmer(Long id) {
		Monthsheet ms = monthsheetRepository.findById(id).get();
		ms.setConfirmer(true);
		monthsheetRepository.save(ms);
	}
}
