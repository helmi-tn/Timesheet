import axios from 'axios';

const url = 'http://localhost:8080';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const login = (formData) => API.post('/login',formData); 
export const fetchMonthsheet = (id) => API.get(`/collaborateur/${id}/monthsheet`);
export const fetchAllComptes = () => API.get(`/admin/collaborateurs`);
export const fetchCompte = (id) => API.get(`/admin/collaborateurs/${id}`);
export const deleteCompte = (id) => API.get(`/admin/collaborateurs/${id}`);
export const updateCompte = (id,compte) => API.patch(`/admin/collaborateurs/${id}`,compte);
export const updateCollaborateursEquipe = (id,collabs_id) => API.patch(`/admin/collaborateur/${id}`,collabs_id);

export const fetchAllProjets = () => API.get(`admin/projets`);
export const fetchProjet = (id) => API.get(`/admin/projets/${id}`);
export const deleteProjet = (id) => API.delete(`/admin/projets/${id}`);

export const fetchAllEquipes = () => API.get(`admin/equipes`);
export const fetchEquipe = (id) => API.get(`/admin/equipes/${id}`);
export const deleteEquipe = (id) => API.delete(`/admin/equipes/${id}`);
export const updateEquipe = (id,updatedEquipe) => API.patch(`/admin/equipes/${id}`,updatedEquipe);

export const fetchAllTaches = () => API.get(`/admin/taches`);
export const updateTotalTache = (id_tache,total) => API.patch(`/admin/taches/updatetotal/${id_tache}`,total);
export const fetchTachesByCollab = (id) => API.get(`/admin/taches/collaborateur/${id}`);
export const fetchTachesOfProjet = (id) => API.get(`/admin/taches/byprojet/${id}`);

export const fetchCollabsOfEquipe = (id) => API.get(`/admin/collaborateurs/byequipe/${id}`)
export const updateDaysheet = (id_day,input,order) => API.patch(`/collaborateur/monthsheet/${id_day}/${order}`,input);
export const fetchTotalsOfProjets = () => API.get(`admin/projets/totals`);

//export const fetchTotalProjet = (id) => API.get(`admin/projets/${id}/total`);

