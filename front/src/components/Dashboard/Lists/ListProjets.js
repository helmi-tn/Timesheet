import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Sidebar from '../../Sidebar.js/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProjets,getTachesOfProjet,getProjet, deleteProjet } from '../../../actions/collab/projets';
import { Table,Modal,Form } from 'react-bootstrap';
import taches from '../../../reducers/collab/taches';
import { getAllTaches } from '../../../actions/collab/taches';
import Moment from 'react-moment';
import { getAllComptes } from '../../../actions/admin/comptes';



const modalClass = {
  borderBottom:'1px solid black'
};
function ListProjets() {
  let timeout;
  
  const dispatch = useDispatch();

  const [showModifier, setShowModifier] = useState(false);
  const handleCloseModifier = () => setShowModifier(false);

  const [showAfficher, setShowAfficher] = useState(false);
  const [showDelete,setShowDelete] = useState(false);

  const handleCloseAfficher = () => setShowAfficher(false);
  const handleCloseDelete = () => setShowDelete(false);

  const handleShowModifier = ((id) => {
    dispatch(getProjet(id));
    dispatch(getTachesOfProjet(id));
    dispatch(getAllTaches());
    timeout = setTimeout(() => {setShowModifier(true)}, 1000);

  });

  const handleShowAfficher = ((id) => {
    dispatch(getProjet(id));
    dispatch(getTachesOfProjet(id))
    timeout = setTimeout(() => {setShowAfficher(true)}, 1000);
  });

  const handleShowDelete = ((id) => {
    dispatch(getProjet(id));
    setShowDelete(true);
  })

  


  useEffect(() => {
    dispatch(getAllProjets());
    dispatch(getAllComptes());
    //dispatch(getTachesOfProjet(700));
  }, [dispatch])
  const collaborateurs = useSelector((state) => state.comptes);

  const projets = useSelector((state) => state.projets);
  const projet = useSelector((state) => state.projet);
  const tachesOfProjet = useSelector((state) => state.tachesOfProjet);
  const taches = useSelector((state) => state.taches);
  console.log('tachesOf projet  =',tachesOfProjet);
  console.log('projets = ',projets);
  console.log('un seul projet = ',projet);
  console.log('All taches = ', taches);
  


  
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:36,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'100%',height:'auto'
      }}>
    <div style={{fontSize:'20px'}}><b>Les projets disponibles.</b></div>
    <hr/>
    <Table striped bordered hover>
  <thead className="thead-dark" style={{borderBottom:'5px solid black'}}>
    <tr style={{fontWeight:'700'}}>
      <th><b>#</b></th>
      <th><b>Nom</b></th>
      <th><b>Chef</b></th>
      <th><b>Date de début</b></th>
      <th><b>Date de fin</b></th>
      <th><b>Actions</b></th>
    </tr>
  </thead>
  <tbody>
  {projets.map((unprojet) => (

    <tr>
      <td><b>{unprojet.id}</b></td>
      <td>{unprojet.nom}</td>
      <td>{unprojet.chef}</td>
      <td><Moment format="DD/MM/YYYY">{unprojet.datededbut}</Moment></td>
      <td><Moment format="DD/MM/YYYY">{unprojet.datedefin}</Moment></td>
      <td style={{width:'370px'}}>
      <Button variant="dark" size="sm"  onClick={() => handleShowAfficher(unprojet.id)}>Afficher</Button>{''}<Button variant="info" size="sm" onClick={()=> {handleShowModifier(unprojet.id)}}>Modifier</Button>{''}<Button variant="danger" size="sm" onClick={()=> {handleShowDelete(unprojet.id);}}>Supprimer</Button>
      </td>
    </tr>
  ))}
    
  </tbody>
</Table>

    </Container>
   
    </Container>
    

    <Modal show={showAfficher} size="lg" onHide={handleCloseAfficher}>
        <Modal.Header closeButton style={{backgroundColor:'black'}}>
          <Modal.Title style={{color:'white'}}>{projet.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={projet.nom} readonly="readonly" />
           
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Chef :</label>
            <div className="col-lg-5">
            <input class="form-control" type="text" defaultValue={projet.chef} readonly="readonly" />
            
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Description :</label>
            <div className="col-lg-6">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" readonly="readonly" defaultValue={projet.description}></textarea>
            
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Date de début :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={projet.datededbut} readonly="readonly" /></div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Date de fin :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={projet.datedefin} readonly="readonly" /></div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Tâches :</label>
            <div className="col-lg-5">
            <select multiple className="form-control" readonly="readonly" id="exampleFormControlSelect2">
            {tachesOfProjet.map((tache,index) => (
              <>
              <option>{tache[0].nom}
              </option>
              </>
            ))}
            </select>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseAfficher}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton style={{backgroundColor:'red'}}>
          <Modal.Title style={{color:'white'}}>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer '{projet.nom}' ?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseDelete}>
            Fermer
          </Button>
          <Button variant="danger" onClick={() => {handleCloseDelete();dispatch(deleteProjet(projet.id));window.location.reload(false);}}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModifier} size="lg" onHide={handleCloseModifier}>
        <Modal.Header closeButton style={{backgroundColor:'#33b5e5'}}>
          <Modal.Title style={{color:'white'}}>{projet.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={projet.nom}  />
           
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Chef :</label>
            <div className="col-lg-3">
            <Form.Select>
              {collaborateurs.map((collab) =>
                 (<option value={`${collab.nom} ${collab.prenom}`}>{collab.nom} {collab.prenom}</option>)
              )}
            </Form.Select>
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Description :</label>
            <div className="col-lg-6">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" readonly defaultValue={projet.description}></textarea>
            
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Date de début :</label>
            <div className="col-lg-4">
            <input className="form-control" type="date" defaultValue={projet.datededbut} /></div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Date de fin :</label>
            <div className="col-lg-4">
            <input className="form-control" type="date" defaultValue={projet.datedefin} /></div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Tâches :</label>
            <div className="col-lg-5">
            <select multiple className="form-control" id="exampleFormControlSelect2">
              {taches.map((tache) =>
                 (<option >{tache.nom}</option>)
              )}
            </select>
              </div>
            </div>
            </form>
         
        </Modal.Body>
        <Modal.Footer>
        <Button variant="info" onClick={handleCloseModifier}>
            Sauvegarder
          </Button>
          <Button variant="dark" onClick={handleCloseModifier}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>



    </React.Fragment>



  )
}

export default ListProjets