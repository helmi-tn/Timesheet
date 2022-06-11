import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../Sidebar.js/Sidebar';
import { Modal,Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addTache, getAllTaches,addTacheCollaborateurs, addTachesProjet } from '../../../actions/collab/taches';
import { useDispatch,useSelector } from 'react-redux';
import { getAllComptes } from '../../../actions/admin/comptes';
import { addProjet } from '../../../actions/collab/projets';
import * as MdIcons from 'react-icons/md';


function AddProjet() {
  let timeout;
  document.body.style.overflowY= 'scroll';
  document.body.style.overflowX= 'hidden';
  const [tacheOptions,setTacheOptions] = useState([]);

  const [postDataProjet,setPostDataProjet] = useState({
    id:"",nom:"",description:"",datededbut:"",datedefin:"",total:0,chef:"",/*taches:null*/
})
  const [postDataTache,setPostDataTache] = useState({
    id:"",nom:"",description:"",total:0,projet:null
})

const handleChangeSelectTaches = ((e) => {
  let value = Array.from(e.target.selectedOptions,(option) => option.value)
  setTacheOptions(value);
  console.log("taches = " ,tacheOptions);
})
  const [listCollabs,setListCollabs] = useState([]);

  const [showTache,setShowTache] = useState(false);
  const handleCloseTache = () => {
    setShowTache(false)
    //window.location.reload(false);
  };
  const handleShowTache = (() => {
    setShowTache(true);

  })
  const handleChangeSelect = ((e) => {
    let value = Array.from(e.target.selectedOptions,(collab) => collab.value)
    setListCollabs(value);
  })
  const handleSubmitTache = (e) =>{ 
    e.preventDefault();
    console.log(postDataTache);
    console.log(postDataTache.nom);
    dispatch(addTache(postDataTache));
    timeout = setTimeout(() => {
      dispatch(addTacheCollaborateurs(postDataTache.nom,listCollabs));
      window.location.reload(false);
    }, 1000);
  }
  const handleSubmitProjet = (e) => {
    e.preventDefault();
    console.log("projet = ", postDataProjet)
    dispatch(addProjet(postDataProjet));
    console.log(postDataProjet);
    console.log(tacheOptions);

    timeout = setTimeout(() => {
      dispatch(addTachesProjet(postDataProjet.nom,tacheOptions));  
    }, 2000);

  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTaches());
    dispatch(getAllComptes());
  }, [dispatch])
  const collaborateurs = useSelector((state) => state.comptes)
  const taches = useSelector((state) => state.taches);



  return (
    
    <React.Fragment>

    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:63,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'50%',alignItems:'center'
      }}>
    <div style={{fontSize:'20px',textAlign:'center'}}><b>Ajouter un nouveau projet</b></div>
      <hr/>
        <Form onSubmit={handleSubmitProjet}>
          <Form.Group className="mb-3" >
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom du projet..." onChange={(e) =>setPostDataProjet({...postDataProjet, nom: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Description du projet...' onChange={(e) =>setPostDataProjet({...postDataProjet, description: e.target.value})}></textarea>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Chef</Form.Label>
            <Form.Select onClick={(e) =>setPostDataProjet({...postDataProjet, chef: e.target.value})}>
              {collaborateurs.map((collab) => (
                  <>
                  <option value={`${collab.nom} ${collab.prenom}`}>{collab.nom} {collab.prenom}
                  </option>
                  </>
                ))}
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Date de début</Form.Label>
            <Form.Control type="date" onChange={(e) =>setPostDataProjet({...postDataProjet, datededbut: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Date de fin</Form.Label>
            <Form.Control type="date" onChange={(e) =>setPostDataProjet({...postDataProjet, datedefin: e.target.value})} />
          </Form.Group>
          <Form.Label>Tâches</Form.Label>
          <Form.Select multiple="multiple" onChange={handleChangeSelectTaches}>
          { taches.map((tache) => (
              tache.projet==null ? 
              <>
              <option selected value={tache.id}>{tache.nom}
              </option>
              </> 
              : null
            ))  }
          </Form.Select>
          <Button size="sm" onClick={()=> {handleShowTache();}}>Ajouter tâche</Button>
          <center>
          <Button variant="danger" size="m" type="submit">
            Confirmer
          </Button>
          </center>
        </Form>
    </Container>
        <br/>
    </Container>


    <Modal centered show={showTache} onHide={handleCloseTache}>
        <Form onSubmit={handleSubmitTache}>
        <Modal.Header closeButton style={{backgroundColor:'#4285f4'}}>
          <Modal.Title style={{color:'white'}}>Ajouter une tâche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-6">
            <input className="form-control" type="text" required placeholder='Nom du tâche...' onChange={(e) =>setPostDataTache({...postDataTache, nom: e.target.value})}/>
           </div>
          </div>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Description :</label>
            <div className="col-lg-6">
            <textarea className="form-control" placeholder='Description du tâche...' rows="3" onChange={(e) =>setPostDataTache({...postDataTache, description: e.target.value})}></textarea>           
            </div>
          </div>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Collaborateurs :</label>
            <div className="col-lg-6">
            <select onChange={handleChangeSelect} multiple className="form-control" id="exampleFormControlSelect2">
              {collaborateurs.map((collab) =>
                 (<option value={collab.id}>{collab.nom} {collab.prenom}</option>)
              )}
            </select>
              </div>
            </div>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="sm" onClick={handleCloseTache}>
          <MdIcons.MdOutlineKeyboardReturn style={{fontSize:'20px'}} />
          </Button>
          <Button size="sm"  type="submit">
          <MdIcons.MdOutlineDone style={{fontSize:'20px'}} />
          </Button>
        </Modal.Footer>
          </Form>
      </Modal>
    </React.Fragment>
  )
}

export default AddProjet