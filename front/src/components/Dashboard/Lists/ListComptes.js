import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Sidebar from '../../Sidebar.js/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCompte, getAllComptes,updateCompte } from '../../../actions/admin/comptes';
import { getCompte } from '../../../actions/admin/comptes';
import { Table,Modal,Form } from 'react-bootstrap';
import { getTachesByCollab,getAllTaches } from '../../../actions/collab/taches';
import { getProjet, getProjetsByCollab, getTachesOfProjet } from '../../../actions/collab/projets';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { getAllEquipes } from '../../../actions/collab/equipes';






function ListComptes() {
  let timeout;

  let [tache,setTache] = useState([]);

  let [postData,setPostData] = useState({
    id:'',nom:'',prenom:'',email:'',matricule:'',chef:'',equipe:{},taches:[],motdepasse:'',monthsheets:''
  })
  const [showAfficher, setShowAfficher] = useState(false);
  const [showDelete,setShowDelete] = useState(false);
  const [showAfficherTache,setShowAfficherTache] = useState(false);

  const handleCloseAfficherTache = () => setShowAfficherTache(false);


  const [showModifier, setShowModifier] = useState(false);
  const handleCloseModifier = () => setShowModifier(false);

  const handleCloseAfficher = () => setShowAfficher(false);
  const handleCloseDelete = () => setShowDelete(false);

  const handleShowAfficherTache = ((id) => {
    //dispatch(getTachesOfProjet(id));
    dispatch(getProjet(id));
  
    timeout = setTimeout(() => {
      setShowAfficherTache(true);
    }, 1000);
  })
  
  const handleChangeSelect = ((e) => {
    let value = Array.from(e.target.selectedOptions,(tache) =>  JSON.parse(tache.value))
    tache=value;
    postData.taches=tache;
  })
  

  const handleShowModifier = ((id) => {
    dispatch(getAllTaches());
    
    dispatch(getCompte(id));
    dispatch(getTachesByCollab(id));
    dispatch(getProjetsByCollab(id));
    dispatch(getAllEquipes());
    timeout = setTimeout(() => {
      
      setShowModifier(true);
//postData.nom=compte.nom;
      //postData.prenom=compte.prenom;
    }, 1000);

  });

  const handleShowDelete = ((id) => {
    dispatch(getCompte(id));
    setShowDelete(true);

  })

  const dispatch = useDispatch();
  
  const handleSubmit = (e) =>{  
    dispatch(updateCompte(compte.id,postData));
  }
  
  
  const handleShowAfficher = ((id) => {
    dispatch(getCompte(id));
    dispatch(getTachesByCollab(id));
    dispatch(getProjetsByCollab(id));
    timeout = setTimeout(() => {
      setShowAfficher(true);
    }, 1000);
    
  });
  const compte = useSelector((state) => state.compte)
  const comptes = useSelector((state) => state.comptes);
  const tachesByCollab = useSelector((state) => state.tachesByCollab); 
  const taches = useSelector((state) => state.taches);
  const projets = useSelector((state) => state.projets);
  const projet = useSelector((state) => state.projet);
  const equipes = useSelector((state) => state.equipes);
  const state = useSelector((state) => state)
  
  
  useEffect(() => {
    dispatch(getAllComptes());
    if(compte)
      setPostData(compte);
  }, [dispatch,compte])

  
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:36,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'100%'
      }}>
    <div style={{fontSize:'20px'}}><b>Les collaborateurs disponibles.</b></div>
    <hr/>
    <Table striped bordered hover>
  <thead className="thead-dark" style={{borderBottom:'5px solid black'}}>
    <tr style={{fontWeight:'700'}}>
      <th><b>#</b></th>
      <th><b>Nom</b></th>
      <th><b>Prenom</b></th>
      <th><b>E-mail</b></th>
      <th><b>Matricule</b></th>
      <th><b>Equipe</b></th>
      <th><b>Actions</b></th>
    </tr>
  </thead>
  <tbody>
  {comptes.map((compte) => (

<tr>
  <td><b>{compte.id}</b></td>
  <td>{compte.nom}</td>
  <td>{compte.prenom}</td>
  <td>{compte.email}</td>
  <td>{compte.matricule}</td>
  <td></td>
  


  <td style={{width:'364px'}}>
  <Button variant="dark" size="sm"  onClick={() => handleShowAfficher(compte.id)}>Afficher</Button>{''}<Button variant="info" size="sm" onClick={()=> {handleShowModifier(compte.id)}}>Modifier</Button>{''}<Button variant="danger" size="sm" onClick={()=> {handleShowDelete(compte.id);}} >Supprimer</Button>
  </td>
</tr>
))}
</tbody>

  </Table>
  </Container>
    </Container>
    
    <Modal show={showAfficher} size="lg" onHide={handleCloseAfficher}>
        <Modal.Header closeButton style={{backgroundColor:'black'}}>
          <Modal.Title style={{color:'white'}}>{compte.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={compte.nom} readOnly="readonly" />
           
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Prenom :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={compte.prenom} readOnly="readonly" />
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Chef de projet :</label>
            <div className="col-lg-2">
            <input className="form-control" type="text" defaultValue={compte.chef==true? ('Oui') : ('Non')} readOnly="readonly" />
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">E-mail :</label>
            <div className="col-lg-5">
            <input className="form-control" type="text" defaultValue={compte.email} readOnly="readonly" />
            
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Matricule :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={compte.matricule} readOnly="readonly" /></div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Equipe :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={compte.id} readOnly="readonly" /></div>
          </div>
        
               
             <div className="form-group row">
           <label className="col-form-label col-lg-4">Projets :</label>
            <div className="col-lg-4" style={{backgroundColor:'#e9ecef',borderRadius:'2%',border:'1px solid #d6dbdf',marginLeft:'13px'}}>
         
            {projets.map((projet) => (
              <>
             {projet.nom} <a onClick={(e) =>handleShowAfficherTache(projet.id)}><AiIcons.AiFillEye/></a> <br/>
              </>
            ))}
 
              </div>
             </div>      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseAfficher}>
            Fermer
          </Button>
        </Modal.Footer>

        <Modal centered dialogClassName="modal-60w" show={showAfficherTache} onHide={handleCloseAfficherTache}>
        <Modal.Header closeButton style={{backgroundColor:'gray'}}>
          <Modal.Title style={{color:'white'}}>Tâches du projet : {projet.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <center>
          {tachesByCollab.map((tache) => (
              tache.projet.id==projet.id ? (<>{tache.nom} <br/></>) : null
          ))}
          </center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="sm" onClick={handleCloseAfficherTache}>
           <MdIcons.MdOutlineKeyboardReturn style={{fontSize:'1.5rem'}} />
          </Button>
        </Modal.Footer>
      </Modal> 





      </Modal>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton style={{backgroundColor:'red'}}>
          <Modal.Title style={{color:'white'}}>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer '{compte.nom} {compte.prenom}' ?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseDelete}>
            Fermer
          </Button>
          <Button variant="danger" onClick={(event) => {handleCloseDelete();dispatch(deleteCompte(compte.id));}}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showModifier} size="lg" onHide={handleCloseModifier}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton style={{backgroundColor:'#33b5e5'}}>
          <Modal.Title style={{color:'white'}}>{compte.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-3">
            <input className="form-control" type="text" defaultValue={compte.nom} onLoad={() => postData.nom=compte.nom} onChange={(e) =>setPostData({...postData, nom: e.target.value})} />
           
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Prenom :</label>
            <div className="col-lg-3">
            <input required className="form-control" type="text" defaultValue={compte.prenom} onLoad={(e) =>setPostData({...postData, nom: e.target.value})} onChange={(e) =>setPostData({...postData, prenom: e.target.value})}/>
            
            </div>
          </div>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">E-mail :</label>
            <div className="col-lg-5">
            <input required className="form-control" type="text" defaultValue={compte.email} onChange={(e) =>setPostData({...postData, email: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Matricule :</label>
            <div className="col-lg-5">
            <input className="form-control" type="text" defaultValue={compte.matricule} onChange={(e) =>setPostData({...postData, matricule: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Equipe :</label>
            <div className="col-lg-5">
            <Form.Select  defaultValue={compte.equipe} onChange={(e) =>setPostData({...postData, equipe: JSON.parse(e.target.value)})}>

            {equipes.map((equipe) =>
                <option value={JSON.stringify(equipe)} selected>{equipe.nom}</option>
              )}
              </Form.Select>
              </div>
            </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Tâches :</label>
            <div className="col-lg-5">
            <select multiple className="form-control" onChange={handleChangeSelect} defaultValue = { tachesByCollab}>
            {taches.map((tache) =>
               (<option value={JSON.stringify(tache)}>{tache.nom}</option>)
              )}
            </select>
              </div>
            </div>
         
        </Modal.Body>
        <Modal.Footer>
        <Button variant="info" type="submit">
            Sauvegarder
          </Button>
          <Button variant="dark" onClick={handleCloseModifier}>
            Fermer
          </Button>
        </Modal.Footer>
        </form>
      </Modal>







    </React.Fragment>
  )
}

export default ListComptes