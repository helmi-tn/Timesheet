import React,{useEffect,useState} from 'react'
import { addCompte } from '../../../actions/admin/comptes';
import { useDispatch,useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../Sidebar.js/Sidebar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { getAllTaches } from '../../../actions/collab/taches';
import { getAllEquipes } from '../../../actions/collab/equipes';
import { useNavigate } from 'react-router-dom';

function AddCompte() {
  let timeout;
    document.body.style.overflowY= 'scroll';
    document.body.style.overflowX= 'hidden';

    let [tache,setTache] = useState([]);
    let [postData,setPostData] = useState({
      id:'',nom:'',prenom:'',email:'',matricule:'',chef:false,equipe:{},taches:[],motdepasse:'',monthsheets:[]
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeSelect = ((e) => {
      let value = Array.from(e.target.selectedOptions,(tache) =>  JSON.parse(tache.value))
      tache=value;
      postData.taches=tache;
      console.log(postData);
    })

    const handleSubmit = (e) =>{  
      dispatch(addCompte(postData));
      e.preventDefault();
      timeout = setTimeout(() => {
        navigate('/admin/dashboard/comptes');
      }, 1000);
    }
    
    
    useEffect(() => {
        dispatch(getAllTaches());
        dispatch(getAllEquipes());
      }, [dispatch])
      

      const taches = useSelector((state) => state.taches);
      const equipes = useSelector((state) => state.equipes)
  return (
    <React.Fragment>

    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:64,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'50%',alignItems:'center'
      }}>
    <div style={{fontSize:'20px',textAlign:'center'}}><b>Ajouter un nouveau collaborateur</b></div>
      <hr/>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control required type="text" placeholder="Nom du collaborateur..." onChange={(e) =>setPostData({...postData, nom: e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prenom</Form.Label>
            <Form.Control required type="text" placeholder="Prenom du collaborateur..." onChange={(e) =>setPostData({...postData, prenom: e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="email" placeholder="E-mail du collaborateur..." onChange={(e) =>setPostData({...postData, email: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control required type="text" placeholder="Mdp du collaborateur..." onChange={(e) =>setPostData({...postData, motdepasse: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Matricule</Form.Label>
            <Form.Control required type="text" placeholder="Matricule du collaborateur..."  onChange={(e) =>setPostData({...postData, matricule: e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Equipe</Form.Label>
          <Form.Select required onClick={(e) =>setPostData({...postData, equipe: JSON.parse(e.target.value)})}>
          {equipes.map((equipe) => (
              <>
              <option value={JSON.stringify(equipe)}>{equipe.nom} 
              </option>
              </>
            ))}
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Tâches</Form.Label>
          <Form.Select  multiple="multiple" onChange={handleChangeSelect}>
          {taches.map((tache) => (
              <>
              <option value={JSON.stringify(tache)}>{tache.nom} 
              </option>
              </>
            ))}
          </Form.Select>
          </Form.Group>
          
          <center>
          <Button variant="danger" size="m" type="submit">
            Confirmer
          </Button>
          </center>
        </Form>
    </Container>
        <br/>
    </Container>
    </React.Fragment>
  )
}

export default AddCompte