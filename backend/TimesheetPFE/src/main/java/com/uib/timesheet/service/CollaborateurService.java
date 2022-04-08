package com.uib.timesheet.service;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.Daysheet;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.model.Tache;
import com.uib.timesheet.repository.CollaborateurRepository;
import com.uib.timesheet.repository.DaysheetRepository;
import com.uib.timesheet.repository.MonthsheetRepository;


@Service
public class CollaborateurService {
	
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	@Autowired
	private MonthsheetRepository monthsheetRepository;
	
	@Autowired
	private DaysheetRepository daysheetRepository;
	
	/*public List<Collaborateur> findByChef(boolean Chef){
		return collaborateurRepository.findByIdChef(Chef);
	}*/
	
	
	////////ADMIN SIDE
	public Collaborateur findById(Long id) {
		return collaborateurRepository.findById(id).get();
	}
	public void updateCollab(Collaborateur cb) {
		collaborateurRepository.save(cb);
	}
	

	
	
	@SuppressWarnings("deprecation")
	public int getDayOfTheWeek(int month,int day) {
		Calendar cal = Calendar.getInstance();
		cal.set(2022,month,day);
		return cal.getTime().getDay();
	}
	
	public int getCurrentMonth() {
		  int month;
	        GregorianCalendar date = new GregorianCalendar();      
	        month = date.get(Calendar.MONTH);
	        return month = month+1;
	}

	/*
		for(Tache t: taches) { 				//How many projects does a collab have
			if(t.getProjet()!=null) {
				taches.add(t.getProjet().getId());  //Set of non duplicate projects
			}
		}
		String[] inputs = new String[taches.size()];
		System.out.println("number of projets = "+ taches.size());*/
	
	public void addCollaborateur(Collaborateur cb) {
		
		
		Set<Tache> taches = new HashSet<Tache>();
		taches = cb.getTaches();
		String[] inputs= new String[taches.size()];
		for(int i=0;i<taches.size();i++) {
			inputs[i]="";
		}

		
		List<Monthsheet> arrayOfMonths = new ArrayList<Monthsheet>();				/////////////////////////1
		
	
		for(int i= getCurrentMonth()-1;i<12;i++) {
			
			System.out.println(i);
			Monthsheet ms= new Monthsheet();							//////////////////////////2
			Daysheet[] setOfDays = new Daysheet[31];
			switch(i) {
			case 0: 
			ms.setName("Janvier");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[inputs.length];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);
					
				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}			
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
			break;
			case 1: 
			ms.setName("Fevrier");
			for(int j=1;j<=28;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);
				
				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
			break;
			case 2: 
				ms.setName("Mars");
				for(int j=1;j<=31;j++) {
					String[] sameCollectionOfInputs = new String[taches.size()];
					sameCollectionOfInputs = inputs.clone();
					Daysheet ds = new Daysheet();	
					
					ds.setInputcolab(sameCollectionOfInputs);
					ds.setDaynumber(j);
					
					if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
						ds.setWeekend(true);
					}
					
					daysheetRepository.save(ds);
					setOfDays[j-1]=ds;
					sameCollectionOfInputs = null;
					}
				break;
			case 3: 
				ms.setName("Avril");
				for(int j=1;j<=30;j++) {
					String[] sameCollectionOfInputs = new String[taches.size()];
					sameCollectionOfInputs = inputs.clone();
					Daysheet ds = new Daysheet();	
					
					ds.setInputcolab(sameCollectionOfInputs);
					ds.setDaynumber(j);
					
					if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
						ds.setWeekend(true);
					}
					
					daysheetRepository.save(ds);
					setOfDays[j-1]=ds;
					sameCollectionOfInputs = null;
					}
			break;
		case 4: 
			ms.setName("Mai");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);
		
	
				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		
		
		case 5 : 
			ms.setName("Juin");
			for(int j=1;j<=30;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);
				
				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
							
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 6: 
			ms.setName("Juillet");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 7: 
			ms.setName("Aout");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 8: 
			ms.setName("Septembre");
			for(int j=1;j<=30;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}

				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 9: 
			ms.setName("Octobre");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 10: 
			ms.setName("Novembre");
			for(int j=1;j<=30;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
		case 11: 
			ms.setName("Decembre");
			for(int j=1;j<=31;j++) {
				String[] sameCollectionOfInputs = new String[taches.size()];
				sameCollectionOfInputs = inputs.clone();
				Daysheet ds = new Daysheet();	
				
				ds.setInputcolab(sameCollectionOfInputs);
				ds.setDaynumber(j);

				if(getDayOfTheWeek(i,j)==0 || getDayOfTheWeek(i,j)==6) {
					ds.setWeekend(true);
				}
				
				daysheetRepository.save(ds);
				setOfDays[j-1]=ds;
				sameCollectionOfInputs = null;
				}
		break;
			}
			
			ms.setDaysheets(setOfDays);
			monthsheetRepository.save(ms);			//////////////////////3
			arrayOfMonths.add(ms); 	//////////////////////4
			
			}
		cb.setMonthsheets(arrayOfMonths);		///////////////////////////5
		collaborateurRepository.save(cb);
			
		}
	
	
	
	
	public List<Collaborateur> findAll(){
		return (List<Collaborateur>) collaborateurRepository.findAll();
	}
	
	public void deleteCollaborateur(Long id) {
		collaborateurRepository.deleteById(id);
	}
	
	public List<Collaborateur> findByIdEquipe(Long equipeId){
		Query query = entityManager.createQuery("FROM Collaborateur C WHERE C.equipe.id = :EquipeId");
    	query.setParameter("EquipeId", equipeId);
    	return  query.getResultList();
	}
	
	public List<Collaborateur> findByIdTache(Long tacheId){
		Query query = entityManager.createQuery("FROM Collaborateur C "
    			+ "JOIN C.taches CT "
    			+ "WHERE CT.id = :TacheId");
    	query.setParameter("TacheId", tacheId);
    	return  query.getResultList();
	}
	
	//////USER SIDE
	public Monthsheet getMonthsheet(Long id) {
		LocalDate currentdate = LocalDate.now();
		Month currentMonth = currentdate.getMonth();
		String month= "";
		switch(currentMonth){
			case JANUARY:
				month="Janvier";				
				break;
			case FEBRUARY:
				month="Fevrier";
				break;
			case MARCH:
				month="Mars";
				break;
			case APRIL:
				month="Avril";
				break;
			case MAY:
				month="Mai";
				break;
			case JUNE:
				month="Juin";
				break;
			case JULY:
				month="Juillet";
				break;
			case AUGUST:
				month="Aout";
				break;
			case SEPTEMBER:
				month="Septembre";
				break;
			case OCTOBER:
				month="Octobre";
				break;
			case NOVEMBER:
				month="Novembre";
				break;
			case DECEMBER:
				month="Decembre";
				break;
		}
		
		Query query = entityManager.createQuery("SELECT C.monthsheets FROM Collaborateur C "
				+ "JOIN C.monthsheets CM "
				+ "WHERE ( CM.name = : MonthName AND C.id = : CollaborateurId)");	
		query.setParameter("MonthName", month);
		query.setParameter("CollaborateurId", id);
		
		
		List<Monthsheet> ms = query.getResultList();
		
		for(Monthsheet m : ms) {
			if(m.getName().equals(month)) {
				return m;
			}
		}
		return null;
		
	}
	
	
	
	
}
