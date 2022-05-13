import React,{useEffect} from 'react'
import { getAllComptes } from '../../../actions/admin/comptes';
import { useDispatch,useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../Sidebar.js/Sidebar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { getAllTaches } from '../../../actions/collab/taches';
import { getAllEquipes } from '../../../actions/collab/equipes';

function AddCompte() {
    document.body.style.overflowY= 'scroll';
    document.body.style.overflowX= 'hidden';
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTaches());
        dispatch(getAllEquipes());
      }, [dispatch])

      const taches = useSelector((state) => state.taches);
      const equipes = useSelector((state) => state.equipes)
  return (
    <React.Fragment>

    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'79vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>
    <br/>
    <Container  sx={{
         zIndex:1, bgcolor: 'white',ml:66,pt:2 ,borderRadius: '5px', boxShadow: 10, minHeight:"520px", width:'50%',alignItems:'center'
      }}>
    <div style={{fontSize:'20px',textAlign:'center'}}><b>Ajouter un nouveau compte</b></div>
      <hr/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom du collaborateur..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="text" placeholder="Prenom du collaborateur..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div key={`default`} className="mb-3">
            <Form.Check 
                type="checkbox"
                label="Chef de projet"
            /></div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail du collaborateur..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Matricule</Form.Label>
            <Form.Control type="text" placeholder="Matricule du collaborateur..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Equipe</Form.Label>
          <Form.Select aria-label="Default select example">
          {equipes.map((equipe) => (
              <>
              <option>{equipe.nom} 
              </option>
              </>
            ))}
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tâches</Form.Label>
          <Form.Select multiple="multiple" aria-label="Default select example">
          {taches.map((tache) => (
              <>
              <option>{tache.nom} 
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