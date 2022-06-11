import React,{useEffect,useState} from 'react'
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
import { getMonthsheet, updateTotalMonthsheet } from '../actions/collab/monthsheet';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/auth';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';




export default function Acceuil() {
  document.body.style.overflow= 'hidden';
  document.title="Acceuil";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  
  const user = useSelector(state => state.user);
  const monthsheet = useSelector((state) =>state.monthsheet);
  console.log(monthsheet);
  
  const logout = () => {
    dispatch({type : 'LOGOUT'});

    navigate('/');

  }
  useEffect(() => {
    dispatch(getMonthsheet(localStorage.getItem('id user')));
    dispatch(updateTotalMonthsheet(monthsheet.id));
    dispatch(getUser(localStorage.getItem('email')));
  }, [dispatch])
  
  
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
        backgroundImage: `url(https://i.imgur.com/E4j2EG2.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
        ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <Box sx={{ flexGrow: 2 }}>
              <AppBar position="static" sx={{p:1.5, bgcolor:'black'}}>
                <Toolbar>
                  <Typography variant="h6" component="div"  sx={{ flexGrow: 1,ml:3 }}>
                  <MdIcons.MdAccountCircle  style={{marginRight:'1rem'}}/>  Bonjour {user.prenom}
                  </Typography>
                  <form method="get" action="/logout">
                  <Button 
              sx={{ background: '#e60027',border: 0,
                  borderRadius: 1,
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  color: 'white',
                  height: 45,
                  padding: '0 28px',
                  '&:hover':{
                    background: '#9c021c' 
    }}} onClick={logout} >Se déconnecter</Button>
                  </form>
                </Toolbar>
              </AppBar>
            </Box>

            <Container maxWidth="lg" style={{display:'flex',alignItems:'center',display:'flex',marginTop:'8rem',justifyContent:'space-between'}}  
        >
        
      <Button  variant="contained" sx={{backgroundColor : 'white',color:'black',padding:'2.5rem',fontSize :'2rem',opacity:'0.95',marginLeft:'9rem',borderRadius:'6%',"&:hover": {background:"linear-gradient(to right, black,#dedede)",color:'white',opacity:'1'}}} onClick={() => (navigate('/monthsheetTest'))}><div><b>Timesheet {'\u00A0'}<br/></b>  <BsIcons.BsFileEarmarkSpreadsheetFill size={40}/> </div></Button>
   
     
     <Button size="large" variant="contained" sx={{backgroundColor : 'white',color:'black',padding:'2.5rem 1.6rem',fontSize :'2rem',opacity:'0.95',marginRight:'9rem',borderRadius:'6%',"&:hover": {background :"linear-gradient(to right, black,#dedede)",color:'white',opacity:'1'}}} onClick={() => (navigate('/statistiques'))}><div><b>Statistiques {'\u00A0'}<br/></b><ImIcons.ImStatsBars size={40}/></div></Button>
 
        </Container>
     
     
  
        </Container>
    </React.Fragment>
  )
}
