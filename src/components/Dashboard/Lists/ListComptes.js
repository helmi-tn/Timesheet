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






function ListComptes() {
  let timeout;

  const [tache,setTaches] = useState([]);

  const [postData,setPostData] = useState({
    id:'',nom:'',prenom:'',email:'',matricule:'',chef:'',equipe:'',taches:'',motdepasse:'',monthseets:''
  })
  const [showAfficher, setShowAfficher] = useState(false);
  const [showDelete,setShowDelete] = useState(false);

  const [showModifier, setShowModifier] = useState(false);
  const handleCloseModifier = () => setShowModifier(false);

  const handleCloseAfficher = () => setShowAfficher(false);
  const handleCloseDelete = () => setShowDelete(false);

  
  const handleChangeSelect = ((e) => {
    let value = Array.from(e.target.selectedOptions,(tache) => tache.value)
    setTaches(value);
    console.log(taches);
  })

  const handleShowModifier = ((id) => {
    dispatch(getCompte(id));
    dispatch(getTachesByCollab(id))
    dispatch(getAllTaches());
    timeout = setTimeout(() => {
      setShowModifier(true);
      console.log(compte)
//postData.nom=compte.nom;
      //postData.prenom=compte.prenom;
    }, 1000);

  });

  const handleShowDelete = ((id) => {
    dispatch(getCompte(id));
    setShowDelete(true);

  })

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllComptes());
  }, [dispatch])

  const handleSubmit = (e) =>{  
    postData.id=compte.id;
    postData.motdepasse=compte.motdepasse;
    postData.taches=compte.taches;
    postData.equipe=compte.equipe;
    postData.monthseets=compte.monthseets;
    console.log(postData);
    dispatch(updateCompte(compte.id,postData));
  }
  
  
  const handleShowAfficher = ((id) => {
    dispatch(getCompte(id));
    dispatch(getTachesByCollab(id))
    timeout = setTimeout(() => {
      setShowAfficher(true);
    }, 1000);

  });
  const compte = useSelector((state) => state.compte)
  const comptes = useSelector((state) => state.comptes);
  const tachesByCollab = useSelector((state) => state.tachesByCollab); 
  const taches = useSelector((state) => state.taches);
 // console.log('all taches = ! ', taches);
 // console.log('taches by collab = !', tachesByCollab)
  //console.log(comptes);
  console.log(compte);

  
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'79vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:36,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'100%'
      }}>
    <div style={{fontSize:'20px'}}><b>Les comptes disponibles.</b></div>
    <hr/>
    <Table striped bordered hover>
  <thead className="thead-dark" style={{borderBottom:'5px solid black'}}>
    <tr style={{fontWeight:'700'}}>
      <th><b>#</b></th>
      <th><b>Nom</b></th>
      <th><b>Prenom</b></th>
      <th><b>E-mail</b></th>
      <th><b>Matricule</b></th>

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
            <div className="col-lg-4">
            <input className="form-control" type="text" defaultValue={compte.chef} readOnly="readonly" />
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
           <label className="col-form-label col-lg-4">Tâches :</label>
            <div className="col-lg-4">
            <select multiple className="form-control" readOnly="readonly" id="exampleFormControlSelect2">
            
            {tachesByCollab.map((tacheOfCollab) => (
              <>
              <option>{tacheOfCollab.nom}
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
            <input className="form-control" type="text" defaultValue={compte.nom} onLoad={() => setPostData({...postData, nom: compte.nom})} onChange={(e) =>setPostData({...postData, nom: e.target.value})} />
           
            </div>
          </div>
          <div className="form-group row">
           <label className="col-form-label col-lg-4">Prenom :</label>
            <div className="col-lg-3">
            <input required className="form-control" type="text" defaultValue={compte.prenom} onLoad={(e) =>setPostData({...postData, nom: e.target.value})} onChange={(e) =>setPostData({...postData, prenom: e.target.value})}/>
            
            </div>
          </div>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Chef de projet :</label>
            <div className="col-lg-4">
            <Form.Check type="checkbox" defaultChecked={compte.chef}  label={'Cliquez pour confimer'}  onChange={(e) =>setPostData({...postData, chef: e.target.checked})}/>
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
           <label className="col-form-label col-lg-4">Tâches :</label>
            <div className="col-lg-5">
            <select multiple className="form-control" id="exampleFormControlSelect2" value={taches} onChange={handleChangeSelect}>
            {taches.map((tache) =>
                tachesByCollab.indexOf(tache)!=-1 ? (<option value={tache} selected>{tache.nom}</option>) : (<option calue={tache}>{tache.nom}</option>)
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