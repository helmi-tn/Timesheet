import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../Sidebar.js/Sidebar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { getAllTaches } from '../../../actions/collab/taches';
import { useDispatch,useSelector } from 'react-redux';


function AddProjet() {
  document.body.style.overflowY= 'scroll';
  document.body.style.overflowX= 'hidden';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTaches());
  }, [dispatch])
  const taches = useSelector((state) => state.taches);


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
    <div style={{fontSize:'20px',textAlign:'center'}}><b>Ajouter un nouveau projet</b></div>
      <hr/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom du projet..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Chef</Form.Label>
            <Form.Control type="text" placeholder="Chef du projet..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date de début</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date de fin</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Label>Tâches</Form.Label>
          <Form.Select multiple="multiple" aria-label="Default select example">
          {taches.map((tache) => (
              <>
              <option>{tache.nom}
              </option>
              </>
            ))}
          </Form.Select>
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

export default AddProjet