import React, {useEffect} from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar.js/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProjets } from '../../actions/collab/projets';
import {getTotalsProjets} from '../../actions/admin/totalsProjets';
import {Bar,Pie,Line,Radar,Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import totalsProjets from '../../reducers/admin/totalsProjets';
import { getAllComptes } from '../../actions/admin/comptes';
import { getAllTaches } from '../../actions/collab/taches';
import { getCollabsEtTaches } from '../../actions/collab/taches';
import { getAllEquipes } from '../../actions/collab/equipes';


function Dashboard() {
  const dispatch = useDispatch();
  const projets = useSelector((state) => state.projets);
  const totalsProjets = useSelector((state) => state.totalsProjets);
  const collabs = useSelector(state => state.comptes);
  const taches = useSelector(state => state.taches);
  const equipes = useSelector(state => state.equipes)
  const collabsEtTaches = useSelector(state => state.collabsEtTaches);


  const state = useSelector(state  => state);
  console.log(state);

  const NameProjets = [];
  projets.map((projet) => (
    NameProjets.push(projet.nom)
    ));

  console.log(totalsProjets);

  const NameEquipes = [];
  equipes.map((equipe) => (
    NameEquipes.push(equipe.nom)
    ));

  console.log(totalsProjets);


//dispatch(getTotalProjet(700));
const stateProjets = {
        labels:NameProjets,

        datasets:[{
          label: 'Projet 1',
          backgroundColor:'red',
          borderColor:'black',
          borderWidth: 2,
          data: totalsProjets
        },
      ]
    }

const arrayofdata = [];

collabs.map((c,index) => {
  arrayofdata.push([]);
  NameProjets.map((p,index1) => 
    {let total=0;
    collabsEtTaches.map((ct,index2) => 
      ct.collaborateur.id==c.id && ct.tache.projet.nom==p ?
        total+=(ct.totalparcollab)
      : null
    )
    arrayofdata[index].push(total)
  })
})
console.log('Array of data = ',arrayofdata );

  
    const stateProjets2 = {
      labels: NameProjets,
      datasets: [
        {
          label: 'Total',
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
          data: totalsProjets
        }
      ]
    }
  let total =0;

  const totalEquipes = [];

  equipes.map((e) => {
      total=0;
      {collabs.map(c => (
        c.equipe.id==e.id ? collabsEtTaches.map((ct) => (
          ct.collaborateur.id==c.id ? 
          total+=ct.totalparcollab
          : null
        ))
         : null
      ))}
        totalEquipes.push(total) 
      }
    )


    console.log(' TOTAL EQUIPES =',totalEquipes)


    const stateEquipe = {
      labels: NameEquipes,
      datasets:[
        {
          label: 'Equipe',
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
          data: totalEquipes
        }
      ]
    }
    
 
    
    useEffect(() => {
      dispatch(getAllProjets());
      dispatch(getCollabsEtTaches());
      dispatch(getAllComptes());
      dispatch(getTotalsProjets());
      dispatch(getAllTaches());
      dispatch(getAllEquipes());
    }, [dispatch])
  
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',paddingTop:'1rem',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>

    <Box  sx={{
         zIndex:1, bgcolor: 'white',ml:10 ,borderRadius: '5px', boxShadow: 10, height:"530px", opacity : '0.94', width:'750px', position:'absolute', top:'6%',left:'15%'
      }}>
       <Bar
          data= {{
            labels:NameProjets,
            datasets:[
            {
            label: collabs ? collabs[0].nom +" "+ collabs[0].prenom : null ,
            backgroundColor:'#2FDE00',
            hoverBackgroundColor: '#175000',
            borderColor:'black',
            borderWidth: 1,
            data: arrayofdata[0]
            
          },
          {
            label: collabs ? collabs[1].nom +" "+ collabs[1].prenom : null,
            backgroundColor:'#C9DE00',
            hoverBackgroundColor:'#4B5000',
            borderColor:'black',
            borderWidth: 1,
            data: arrayofdata[1]
          }
        ]
      }}
          options={{
            maintainAspectRatio:false,
            scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 20,
                                    weight:'bold'
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 18,
                                    weight:'bold'
                                }
                            }
                        }
                        },
            plugins:{
            title:{
              fullSize:true,
              display:true,
              text:"Total de contribution de chaque collaborateur par projet",
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
         zIndex:1, bgcolor: 'white',ml:10 ,borderRadius: '5px', boxShadow: 10, height:"auto", opacity : '0.94', width:'250px',position:'absolute',left:'70%',top:'6%'
      }}>
          <Doughnut 
data={stateProjets2}
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
        <Box  sx={{
         zIndex:1, bgcolor: 'white' ,borderRadius: '5px', boxShadow: 10, height:"250px", opacity : '0.94', width:'250px',position:'absolute',top:'43%',left:'75%'
      }}>
     <Pie
          data={stateEquipe}
          options={{
            plugins:{
            title:{
              fullSize:true,
              display:true,
              text:"Total par équipe",
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
                  weight:'bold'
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

export default Dashboard