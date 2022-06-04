import React,{useEffect,useState} from 'react'
import { getAllComptes } from '../../../actions/admin/comptes';
import { useDispatch,useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../Sidebar.js/Sidebar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { addEquipe } from '../../../actions/collab/equipes';
import { useNavigate } from 'react-router-dom';
import { updateCollabsEquipe } from '../../../actions/admin/comptes';

function AddEquipe() {
  let timeout;
  const [options,setOptions] = useState([]);
  const navigate = useNavigate();

  const handleChangeSelect = ((e) => {
    let value = Array.from(e.target.selectedOptions,(option) => option.value)
    setOptions(value);
    console.log("options = " ,options);
  })
  const handleSubmit = (e) =>{ 
    e.preventDefault();
    dispatch(addEquipe(postDataEquipe));
    //dispatch(updateCollabsEquipe(equipe.id,options));

    timeout = setTimeout(() => {
      navigate('/admin/dashboard/equipes');
    }, 1000);
  }
  

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllComptes());
  }, [dispatch])

  const [postDataEquipe,setPostDataEquipe] = useState({
    id:'',nom:'',responsable:''
})
  const collaborateurs = useSelector((state) => state.comptes);
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
    <div style={{fontSize:'20px',textAlign:'center'}}><b>Ajouter une nouvelle équipe</b></div>
      <hr/>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nom</Form.Label>
            <Form.Control required type="text" placeholder="Nom d'équipe..." onChange={(e) =>setPostDataEquipe({...postDataEquipe, nom: e.target.value})} />
          </Form.Group>
          <Form.Label>Responsable</Form.Label>
          <Form.Select onChange={(e) =>setPostDataEquipe({...postDataEquipe, responsable: e.target.value})} aria-label="Default select example">
          {collaborateurs.map((collab) => (
              <option value={`${collab.nom} ${collab.prenom}`} >{collab.nom} {collab.prenom}</option> 
            ))}
          </Form.Select>
          <br/>
          <Form.Label>Collaborateurs</Form.Label>
          <Form.Select multiple="multiple" onChange={handleChangeSelect} aria-label="Default select example">
          {collaborateurs.map((collab) => (
              <option value={collab.id} >{collab.nom} {collab.prenom}</option> 
            ))}
          </Form.Select>
          <br/><br/><br/>
          <center>
          <Button variant="danger" size="m" type="submit" >
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

export default AddEquipe