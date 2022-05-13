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




function Dashboard() {
  const dispatch = useDispatch();
  const projets = useSelector((state) => state.projets);
  const totalsProjets = useSelector((state) => state.totalsProjets);
  const NameProjets = [];
  projets.map((projet) => (
    NameProjets.push(projet.nom)
    ));


//dispatch(getTotalProjet(700));
const stateProjets = {
        labels:NameProjets,
        datasets:[{
          label: 'Total',
          backgroundColor:'red',
          borderColor:'black',
          borderWidth: 2,
          data: totalsProjets
        }
      ]
    }
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
    
    
    
    useEffect(() => {
      dispatch(getAllProjets());
      dispatch(getTotalsProjets());
    }, [dispatch])
  
  return (
    <React.Fragment>
    
    <CssBaseline />
    <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'79vh', margin:'0', padding:'0',paddingTop:'1rem',
    backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
    ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
    <Sidebar/>

    <Container maxWidth="lg" style={{display:'flex',alignItems:'center',justifyContent:'space-between', flexWrap :'wrap',marginLeft:'14rem'}} >

    <Box  sx={{
         zIndex:1, bgcolor: 'white',ml:20 ,borderRadius: '5px', boxShadow: 10, height:"auto", opacity : '0.94', width:'500px'
      }}>
       <Bar
          data={stateProjets}
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
              color:'black',
                font:{
                  size:13,
                }
              },
            }
          }
          }}
        />
      </Box>
      <Box  sx={{
         zIndex:1, bgcolor: 'white' ,borderRadius: '5px', boxShadow: 10, height:"250px", opacity : '0.94', width:'250px'
      }}>
      <Pie
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
              color:'black',
                font:{
                  size:13,
                }
              },
            }
          }
          }}
        />
        </Box>
      
        <Box  sx={{
         zIndex:1,mt:3, bgcolor: 'white',ml:20 ,borderRadius: '5px', boxShadow: 10, height:"auto", opacity : '0.94', width:'250px'
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
              color:'black',
                font:{
                  size:13,
                }
              },
            }
          }
          }}

          />

        </Box>

        <Box  sx={{
         zIndex:1,mt:3, bgcolor: 'white',ml:20 ,borderRadius: '5px', boxShadow: 10, height:"auto", opacity : '0.94', width:'500px'
      }}>
          <Line 
data={stateProjets}
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
              color:'black',
                font:{
                  size:13,
                }
              },
            }
          }
          }}

          />

        </Box>


      </Container>
    </Container>
    
    </React.Fragment>
  )
}

export default Dashboard