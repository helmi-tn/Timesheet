import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import * as MdIcons from 'react-icons/md';




export default function AcceuilAdmin() {
  document.body.style.overflow= 'hidden';
  const navigate = useNavigate();
  
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'79vh', margin:'0', padding:'0',
        backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
        ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <Box sx={{ flexGrow: 2 }}>
              <AppBar position="static" sx={{p:1.5, bgcolor:'black'}}>
                <Toolbar>
                  
                  <Typography variant="h6" component="div"  sx={{ flexGrow: 1,ml:3 }}>
                  <MdIcons.MdAccountCircle  style={{marginRight:'1rem'}}/>  Bonjour Ahmed
                  </Typography>
                  <form method="get" action="/logout">
                  <Button sx={{ background: '#e60027',border: 0,
    borderRadius: 1,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 45,
    padding: '0 28px',
    '&:hover':{
      background: '#9c021c'
    }}} >Se déconnecter</Button>
                  </form>
                </Toolbar>
              </AppBar>
            </Box>

            <Container maxWidth="lg" style={{display:'flex',alignItems:'center'}}  
        >
         <Box
      sx={{
         zIndex:1, bgcolor: 'white',m:'auto', mt:10, p:5 , display:'flex', justifyContent:'space-between',borderRadius: '5px', boxShadow: 10, flexDirection: 'column', alignItems:'center', overflow:'hidden', height:"15rem",width:'20rem', opacity : '0.94'
      }}
     ><h1><b>Timesheet</b></h1>
      <Button variant="contained" style={{ backgroundColor : 'black'}} type='submit'>Cliquez ici</Button>
     </Box>
     <Box
      sx={{
         zIndex:1, bgcolor: 'white',m:'auto', mt:10, p:5 , display:'flex', justifyContent:'space-between',borderRadius: '5px', boxShadow: 10, flexDirection: 'column', alignItems:'center', overflow:'hidden', height:"15rem",width:'20rem', opacity : '0.94'
      }}
     ><h1><b>Dashboard</b></h1>
      <Button variant="contained" onClick={() => navigate('/admin/dashboard')} style={{ backgroundColor : 'black'}} type='submit'>Cliquez ici</Button>
     </Box>
        </Container>
     
     
  
        </Container>
    </React.Fragment>
  )
}
