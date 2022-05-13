import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Sidebar from '../../Sidebar.js/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import { getAllEquipes,getEquipe,deleteEquipe,updateEquipe } from '../../../actions/collab/equipes';
import { getAllComptes } from '../../../actions/admin/comptes';
import equipe from '../../../reducers/collab/equipe';
import { Table,Modal,Form } from 'react-bootstrap';
import { updateCollaborateursEquipe } from '../../../api';





function ListEquipes() {
  let timeout;

  

  const [options,setOptions] = useState([]);

  const handleChangeSelect = ((e) => {
    let value = Array.from(e.target.selectedOptions,(option) => option.value)
    setOptions(value);
  })
  const [showModifier, setShowModifier] = useState(false);
  const handleCloseModifier = () => setShowModifier(false);

  const [showDelete,setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = ((id) => {
    dispatch(getEquipe(id));
    setShowDelete(true);

  })
  const handleShowModifier = ((id) => {
    dispatch(getEquipe(id));
    timeout = setTimeout(() => {
      setShowModifier(true);
      setPostDataEquipe({id:equipe.id,nom:equipe.nom})
      console.log(equipe.nom);
      console.log(postDataEquipe);
    }, 1000);
 

  });

  const handleSubmit = (e) =>{  
    postDataEquipe.id=equipe.id;
    console.log(postDataEquipe);
    dispatch(updateEquipe(equipe.id,postDataEquipe));
    dispatch(updateCollaborateursEquipe(equipe.id,options));
  }
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEquipes());
    dispatch(getAllComptes());
  }, [dispatch])

  const equipes = useSelector((state) => state.equipes);
  const collaborateurs = useSelector((state) => state.comptes);
  const equipe = useSelector((state) => state.equipe);

  const [postDataEquipe,setPostDataEquipe] = useState({
    id:equipe.id,nom:equipe.nom
})


  
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
    <div style={{fontSize:'20px'}}><b>Les équipes disponibles.</b></div>
    <hr/>
    <Table striped bordered hover>
  <thead className="thead-dark" style={{borderBottom:'5px solid black'}}>
    <tr style={{fontWeight:'700'}}>
      <th><b>#</b></th>
      <th><b>Nom</b></th>
      <th><b>Collaborateurs</b></th>
      <th><b>Actions</b></th>
    </tr>
  </thead>
  <tbody>
  {equipes.map((equipe) => (

    <tr>
      <td><b>{equipe.id}</b></td>
      <td>{equipe.nom}</td>
      <td>
      {collaborateurs.map((collab) => (
         collab.equipe!=null ? collab.equipe.id==equipe.id ? (<>{collab.nom} {collab.prenom} <br/> </>) : (<></>) : (<></>)
      ))}
      </td>
      
      <td style={{width:'260px'}}>
      <Button variant="info" size="sm" onClick={()=> {handleShowModifier(equipe.id)}}>Modifier</Button>{''}<Button variant="danger" size="sm" onClick={()=> {handleShowDelete(equipe.id);}} >Supprimer</Button>
      </td>
    </tr>
  ))}
    
  </tbody>
</Table>

    </Container>
  
    </Container>


    <Modal show={showModifier} size="lg" onHide={handleCloseModifier}>
        <form onSubmit={handleSubmit}>
        <Modal.Header closeButton style={{backgroundColor:'#33b5e5'}}>
          <Modal.Title style={{color:'white'}}>{equipe.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form-group row">
           <label className="col-form-label col-lg-4">Nom :</label>
            <div className="col-lg-4">
            <input className="form-control" type="text" required Value={equipe.nom} onChange={(e) =>setPostDataEquipe({...postDataEquipe, nom: e.target.value})} />
           </div>
          </div>

            <div className="form-group row">
           <label className="col-form-label col-lg-4">Collaborateurs :</label>
            <div className="col-lg-5">
            <select multiple className="form-control" value={options} onChange={handleChangeSelect}>
            {collaborateurs.map((collab) => (
              <>
              <option value={collab.id} selected>{collab.nom} {collab.prenom}</option> 
              </>
            ))}
            </select>
              </div>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
        <Button variant="info" type="submit" onClick={handleCloseModifier}>
            Sauvegarder
          </Button>
          <Button variant="dark" onClick={handleCloseModifier}>
            Fermer
          </Button>
        </Modal.Footer>
            </form>
        </Modal>


    <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton style={{backgroundColor:'red'}}>
          <Modal.Title style={{color:'white'}}>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer '{equipe.nom}' ?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseDelete}>
            Fermer
          </Button>
          <Button variant="danger"  onClick={(event) => {handleCloseDelete();dispatch(deleteEquipe(equipe.id));}}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    
    </React.Fragment>
  )
}

export default ListEquipes