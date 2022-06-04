import { combineReducers } from 'redux';
import monthsheet from './collab/monthsheet';
import daysheets from './collab/daysheets';
import comptes from './admin/comptes';
import projets from './collab/projets';
import equipes from './collab/equipes';
import taches from './collab/taches';
import totalsProjets from './admin/totalsProjets';
import tachesOfProjet from './admin/projetsByTache';
import projet from './collab/projet';
import colabsByEquipe from './admin/colabsByEquipe';
import equipe from './collab/equipe';
import compte from './admin/compte';
import tachesByCollab from './admin/tachesByCollab';
import auth from './auth';

export default combineReducers({
    monthsheet,daysheets,comptes,projets,equipes,taches,totalsProjets,tachesOfProjet,projet,colabsByEquipe,equipe,compte,tachesByCollab,auth
})