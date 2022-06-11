import axios from 'axios';


const url = 'http://localhost:8080';

export const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('profile')}`;
  }

  return req;
});



export const login = (formData) => API.post('/login',formData); 
export const fetchUser = (email) => API.get(`/collaborateur/${email}`);

export const fetchMonthsheet = (id) => API.get(`/collaborateur/${id}/monthsheet`);
export const confirmerMonthsheet = (id) => API.patch(`/admin/timesheets/confirmer/${id}`,id);
export const updateTotalMonthsheet = (id) => API.patch(`/admin/timesheets/total/${id}`,id)

export const addCompte =(compte) => API.post(`/admin/collaborateurs`,compte);
export const fetchAllComptes = () => API.get(`/admin/collaborateurs`);
export const fetchCompte = (id) => API.get(`/admin/collaborateurs/${id}`);
export const deleteCompte = (id) => API.get(`/admin/collaborateurs/${id}`);
export const updateCompte = (id,compte) => API.patch(`/admin/collaborateurs/${id}`,compte);
export const updateCollaborateursEquipe = (id,collabs_id) => API.patch(`/admin/collaborateur/${id}`,collabs_id);

export const addProjet = (projet) => API.post(`/admin/projets`,projet);
export const fetchAllProjets = () => API.get(`admin/projets`);
export const fetchProjet = (id) => API.get(`/admin/projets/${id}`);
export const deleteProjet = (id) => API.delete(`/admin/projets/${id}`);
export const fetchProjetsByCollab = (id) => API.get(`/admin/projets/percollaborateur/${id}`);

export const fetchAllEquipes = () => API.get(`admin/equipes`);
export const fetchEquipe = (id) => API.get(`/admin/equipes/${id}`);
export const deleteEquipe = (id) => API.delete(`/admin/equipes/${id}`);
export const addEquipe = (equipe) => API.post(`/admin/equipes`,equipe);
export const updateEquipe = (id,updatedEquipe) => API.patch(`/admin/equipes/${id}`,updatedEquipe);

export const fetchAllTaches = () => API.get(`/admin/taches`);
export const addTache = (tache) => API.post(`/admin/taches`,tache);
export const updateTotalTache = (id_collab,id_tache,total) => API.patch(`/admin/taches/${id_collab}/updatetotal/${id_tache}`,total);
export const fetchTachesByCollab = (id) => API.get(`/admin/taches/collaborateur/${id}`);
export const fetchTachesOfProjet = (id) => API.get(`/admin/taches/byprojet/${id}`);
export const addTacheCollaborateurs = (nom_tache,list_ids) => API.patch(`/admin/taches/addcollabs/${nom_tache}`,list_ids)  //add tache
export const addTachesProjet = (projetnom,taches_ids) => API.patch(`/admin/taches/addprojet/${projetnom}`,taches_ids)

export const fetchTacheEtTotales = (id) => API.get(`/admin/collaborateur/tachestotal/${id}`,id); //table intermédiare

export const fetchCollabsEtTaches = () => API.get(`/collaborateurtache`); //table intermédiare


export const fetchCollabsOfEquipe = (id) => API.get(`/admin/collaborateurs/byequipe/${id}`)
export const updateDaysheet = (id_month,id_day,input,order) => API.patch(`/collaborateur/monthsheet/${id_month}/${id_day}/${order}`,input);
export const fetchTotalProjet = (id) => API.get(`admin/projets/${id}/total`);
export const fetchTotalsOfProjets = () => API.get(`admin/projets/totals`);

