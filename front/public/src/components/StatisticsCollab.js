import React, {useEffect,useState} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/auth';
import { Bar, Chart,Line, Pie } from 'react-chartjs-2';
import { getAllProjets } from '../actions/collab/projets';
import { getCollabsEtTaches } from '../actions/collab/taches';



function StatisticsCollab() {
    document.body.style.overflow= 'hidden';
    document.title="Statistiques";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch({type : 'LOGOUT'});
        navigate('/')
      }
    const user = useSelector((state) => state.user);
    const projets = useSelector(state  => state.projets);
    const collabsEtTaches = useSelector(state => state.collabsEtTaches);
    console.log(collabsEtTaches)
    console.log(user);
    let m = 0;
    let monthstotaldata = [];

    const NameProjets = [];
    projets.map((projet) => (
        NameProjets.push(projet.nom)
        ));

      if(user.monthsheets.length<12){
        for (let i = 0; i < 12-user.monthsheets.length; i++) {
            monthstotaldata.push(0);
          }
      }

    user.monthsheets.map((m) => {
        
        monthstotaldata.push(m.totalpermonth)
    })


    const projetsdata = [];
    NameProjets.map(n => {
        let total =0;
        (collabsEtTaches.map(ct => 
            (ct.collaborateur.id==user.id && ct.tache.projet.nom==n ?
                total+=ct.totalparcollab
            : null)
        ))
        projetsdata.push(total);
    })
    console.log('PROJETS DATA = ',projetsdata)

      useEffect(() => {
        dispatch(getUser(localStorage.getItem('email')));
        dispatch(getAllProjets());
        dispatch(getCollabsEtTaches());
      }, [dispatch])
      
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Box sx={{ flexGrow: 2 }}>
              <AppBar position="static" sx={{p:1.5, bgcolor:'black'}}>
                <Toolbar>
                  <Typography variant="h6" component="div"  sx={{ flexGrow: 1,ml:3 }}>
                  <MdIcons.MdAccountCircle  style={{marginRight:'1rem'}}/>  Bonjour {user.prenom}
                  </Typography>
                  <Typography variant="h6" component="div"  sx={{ flexGrow:0.05 }}>
                  <Button onClick={() => navigate('/collaborateur/acceuil')} sx={{ background:'white',color:'black','&:hover':{
                    background: '#d4d4d4' }}}><IoIcons.IoMdReturnLeft size={25}/></Button>
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

            <Box  sx={{
         zIndex:1, bgcolor: 'white',ml:10 ,borderRadius: '5px', boxShadow: 10, height:"450px", opacity : '0.94', width:'800px', position:'absolute', top:'15%',left:'1%'
      }}>
       <Line
        
          data= {{
            labels:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre'],
            datasets: [
                {
                label:'Total',
                data:monthstotaldata,
                backgroundColor: [
                    '#2FDE00',
      
          ],
                borderColor : [
                '#C9DE00',
                '#00A6B4',
                    '#6800B4'
                ]
            }]

      }}
          options={{
            maintainAspectRatio:false,
            scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 17,
                                    weight:'bold'
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 15,
                                    weight:'bold'
                                }
                            }
                        }
                        },
            plugins:{
            title:{
              fullSize:true,
              display:true,
              text:"Total de contribution par mois",
                font:{
                  size:20,
                  color:'black'
                },
              fontSize:"800",
              color:'black'
            },
            legend:{
              display:true,
              position:'top',
              labels:{
                font:{
                  size:14,
                  weight:'bold'
                }
              },
            }
          }
          }}
        />
      </Box>

      <Box  sx={{
         zIndex:1, bgcolor: 'white',ml:10 ,borderRadius: '5px', boxShadow: 10, height:"auto", opacity : '0.94', width:'300px',position:'absolute',left:'65%',top:'25%'
      }}>
          <Pie 
            data= {{
            labels:NameProjets,
            datasets: [
                    {
                    label:'Total',
                    data:monthstotaldata,
                    backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                        ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                    ],
                    data:projetsdata
                }]

      }}
          options={{
            plugins:{
            title:{
              fullSize:true,
              display:true,
              text:"Total par projet",
                font:{
                  size:20,
                  color:'black'
                },
              fontSize:"600",
              color:'black'
            },
            legend:{
              display:true,
              position:'bottom',
              labels:{
                font:{
                  size:13,
                  weight:'bold',
                }
              },
            }
          }
          }}

          />

        </Box>
      

    </Container>
    </React.Fragment>
  )
}

export default StatisticsCollab