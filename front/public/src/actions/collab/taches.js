import * as api from '../../api';

export const getTachesByCollab = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTachesByCollab(id);
        dispatch({ type : 'FETCH_TACHES_BYCOLAB', payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const getTachesEtTotalParCollab = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTacheEtTotales(id);
        dispatch({ type : 'FETCH_TACHES_TOTAL', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateTotalTache = (id_collab,id_tache,input) => async (dispatch) => {
    try {
        const { data } = await api.updateTotalTache(id_collab,id_tache,input);

        dispatch ({ type : 'UPDATE_TOTAL_TACHE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const getAllTaches = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllTaches();
        dispatch({ type : 'FETCH_ALL_TACHES', payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const addTache = (tache) => async (dispatch) => {
    try {
      const { data } = await api.addTache(tache);
  
      dispatch({ type: 'ADD_TACHE', payload: data });
    } catch (error) {
      console.log(error)
    }
  };

  export const addTacheCollaborateurs = (nom,list) => async (dispatch) => {
    try {
        const { data } = await api.addTacheCollaborateurs(nom,list);

        dispatch ({ type : 'ADD_TACHE_COLLABS', payload: data})
    } catch (error) {
        console.log(error);
    }
}
export const addTachesProjet = (projetnom,tachesids) => async (dispatch) => {
    try {
        const { data } = await api.addTachesProjet(projetnom,tachesids)

        dispatch ({ type : 'ADD_TACHES_PROJET', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const getCollabsEtTaches = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCollabsEtTaches()
        dispatch({ type : 'FETCH_COLLABS_TACHES', payload:data})
    } catch (error) {
        
    }
}
