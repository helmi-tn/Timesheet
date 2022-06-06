package com.uib.timesheet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uib.timesheet.model.CollaborateurTache;
import com.uib.timesheet.model.Projet;
//import com.uib.timesheet.HibernateUtil;
import com.uib.timesheet.model.Tache;
import com.uib.timesheet.repository.CollaborateurTacheRepository;
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
	private CollaborateurTacheRepository collaborateurTacheRepository;
	
	

	
	
	public void addOrUpdateTache(Tache tache) {
		tache.setTotal(0);
		tacheRepository.save(tache);
	}
	
	
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
    
}

