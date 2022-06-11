package com.uib.timesheet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uib.timesheet.model.Collaborateur;
import com.uib.timesheet.model.CollaborateurTache;
import com.uib.timesheet.model.Daysheet;
import com.uib.timesheet.model.Monthsheet;
import com.uib.timesheet.model.Projet;
//import com.uib.timesheet.HibernateUtil;
import com.uib.timesheet.model.Tache;
import com.uib.timesheet.repository.CollaborateurRepository;
import com.uib.timesheet.repository.CollaborateurTacheRepository;
import com.uib.timesheet.repository.DaysheetRepository;
import com.uib.timesheet.repository.MonthsheetRepository;
import com.uib.timesheet.repository.ProjetRepository;
import com.uib.timesheet.repository.TacheRepository;





@Service
public class TacheService {
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private TacheRepository tacheRepository;
	
	@Autowired
	private ProjetRepository projetRepository;
	
	@Autowired
	private MonthsheetRepository monthsheetRepository;
	
	@Autowired
	private DaysheetRepository daysheetRepository;
	
	@Autowired
	private CollaborateurRepository collaborateurRepository;
	
	@Autowired
	private CollaborateurTacheRepository collaborateurTacheRepository;
	
	@Autowired
	private ProjetService projetService;
	
	

	
	
	public void addOrUpdateTache(Tache tache) {
		tache.setTotal(0);
		Tache t = tacheRepository.save(tache);
	}
	
	//public void addTacheProjet()
	
	
	@Transactional
	public void deleteTache(Long id) {
		Query query = entityManager.createQuery("DELETE FROM Tache T WHERE T.id = :TacheId");
		query.setParameter("TacheId", id).executeUpdate();
	}

    public List <Tache> GetAll() {
            return ((org.hibernate.query.Query) entityManager.createQuery("FROM Tache", Tache.class)).list();
    }
    
    
    public Tache getById(Long id) {
        	Tache Tache = null;
            String hql = "FROM Tache T WHERE T.id = :TacheId";
            Query query = entityManager.createQuery(hql);
            query.setParameter("TacheId", id);
            List results = query.getResultList();

            if (results != null && !results.isEmpty()) {
                Tache = (Tache) results.get(0);
            }
        return Tache;
    }
    
    
    
    public List<Tache> findByProjetId(Long projetId){
    	
    	Query query = entityManager.createQuery("FROM Tache T "
    			+ "JOIN T.projet TP "
    			+ "WHERE TP.id = :ProjetId");
    	query.setParameter("ProjetId", projetId);
    	return  query.getResultList();
    }
    
    
    /////////////////////
    public List<Tache> findByCollaborateurId(Long CollabId){
    	Query query = entityManager.createQuery("SELECT C.taches FROM Collaborateur C "
    			+ "WHERE C.id = :Id");
    	query.setParameter("Id", CollabId);
    	return  query.getResultList();
    }
    
    public void updatetTotal(Long id_collab,Long id_tache,String total) {
    	List<CollaborateurTache> ct = (List<CollaborateurTache>) collaborateurTacheRepository.findAll();
    	for(CollaborateurTache tt:ct) {
    			Long collabid = tt.getCollaborateur().getId().longValue();
    			Long tacheid = tt.getTache().getId().longValue();
    		if(collabid==id_collab.longValue() && tacheid==id_tache.longValue()) {
    			Float newtotal = tt.getTotalparcollab()+ Float.parseFloat(total);
    			tt.setTotalparcollab(newtotal);
    			collaborateurTacheRepository.save(tt);
    			break;
    		}
    	}

    	Tache tache = getById(id_tache);
    	Projet p = tache.getProjet();
    	Float totalp = p.getTotal();
    	totalp += Float.parseFloat(total);
    	p.setTotal(totalp);
		tache.setTotal(Float.parseFloat(total));
		
		projetRepository.save(p);
		tacheRepository.save(tache);
    }
    
    
    public Tache getTacheByNom(String nomtache) {
    	Query query = entityManager.createQuery("FROM Tache T WHERE T.nom = :nomtache");
    	query.setParameter("nomtache", nomtache);
    	return  (Tache) query.getSingleResult();
    }

	public void addTacheCollaborateurs(String nom_tache, List<Long> collabs_id) {
		Tache t = getTacheByNom(nom_tache);
		for(Long id:collabs_id) {
			Collaborateur collab = collaborateurRepository.findById(id).get();
			List<Monthsheet> ms = collab.getMonthsheets();
			for(Monthsheet m: ms) {
				Daysheet[] ds = m.getDaysheets();
				for(Daysheet d: ds) {
					String[] inputs = d.getInputcollab();
					String[] newinputs = new String[inputs.length+1];
					for(int i=0; i<inputs.length;i++) {
						newinputs[i]=inputs[i];
					}
					newinputs[newinputs.length-1]="0";
					d.setInputcollab(newinputs);
					daysheetRepository.save(d);
				}
				m.setDaysheets(ds);
				monthsheetRepository.save(m);
			}
			List<Tache> taches = collab.getTaches();
			taches.add(t);
			collab.setTaches(taches);
			collaborateurRepository.save(collab);
			
			CollaborateurTache ct = new CollaborateurTache();
			ct.setTache(t);
			ct.setCollaborateur(collab);
			ct.setTotalparcollab(Float.parseFloat("0"));
			collaborateurTacheRepository.save(ct);
			System.out.println("Kamalna !");
			
		}
		
	}

	public void addTachesProjet(String projet_nom, List<Long> taches_id) {
		Projet p = projetService.getProjetByNom(projet_nom);
		for(Long id:taches_id) {
			Tache t= tacheRepository.findById(id).get();
			t.setProjet(p);
			tacheRepository.save(t);
		}
		
	}
    
}

