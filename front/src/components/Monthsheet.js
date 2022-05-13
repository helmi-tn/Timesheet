import React from 'react';
import { useState,useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {useDispatch,useSelector } from 'react-redux';
import { getMonthsheet } from '../actions/collab/monthsheet';
import { updateDaysheet } from '../actions/collab/daysheet';
import { getTachesByCollab } from '../actions/collab/taches';
import { updateTotalTache } from '../actions/collab/taches';


function Monthsheet() {

  const dispatch = useDispatch();
  const monthsheetFromDB = useSelector((state) => state.monthsheet);
  const tachesFromDB = useSelector((state) => state.taches);  
  console.log(monthsheetFromDB);
  console.log(tachesFromDB);
  
  const inputcell = {
    width:"30px",padding: "3px 0px",margin:"-20rem",textAlign:'center',border:"1",fontSize:'12px'
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white, fontSize:9
    },
    [`&.${tableCellClasses.body}`]: {
      border:'1px solid black', fontSize:12
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,border:1
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
  function createData(name, taches = []) {
    return { name, taches };
  }
  
  const rows = [
    createData('Projet 1',["tache n1","tache n2","tache n3"]),
    createData('Projet 2',["tache n1","tache n2","tache n3"]),
    createData('Projet 3',["tache n1","tache n2","tache n3"]),
    createData('Projet 4',["tache n1","tache n2","tache n3"]),
    createData('Projet 5',["tache n1","tache n2","tache n3"]),
    createData('Projet 6',["tache n1","tache n2","tache n3"]),
  ];
  
  
  const monthsheet ={name :"Mai",
  daysheets :[ { daynumber :"1",weekend: false,inputs : ["0.2","0.3","0.4"]},
  { daynumber :"2",weekend: true,inputs : []},
  { daynumber :"3",weekend: true,inputs : []},
  { daynumber :"4",weekend: false,inputs : ["0.8","0.9","0.1"]},
  { daynumber :"5",weekend: false,inputs : ["0.11","0.12","0.13"]},
  { daynumber :"6",weekend: false,inputs : ["0.13","0.14","0.5"]},
  { daynumber :"7",weekend: false,inputs : ["0.15","0.16","0.17"]},
  { daynumber :"8",weekend: false,inputs : ["0.17","0.18","0.19"]},
  { daynumber :"9",weekend: false,inputs : ["0.19","0.21","0.22"]},
  { daynumber :"10",weekend: true,inputs : []},
  { daynumber :"11",weekend: true,inputs : []},
  { daynumber :"12",weekend: false,inputs : ["0.26","0.27","0.28"]},
  { daynumber :"13",weekend: false,inputs : ["0.28","0.29","0.56"]},
  { daynumber :"14",weekend: false,inputs : ["0.30","0.31","0.18"]},
  { daynumber :"15",weekend: false,inputs : ["0.32","0.33","0.3"]},
  { daynumber :"16",weekend: false,inputs : ["0.34","0.35","0.6"]},
  { daynumber :"17",weekend: false,inputs : ["0.36","0.37","0.8"]},
  { daynumber :"18",weekend: true,inputs : []},
  { daynumber :"19",weekend: true,inputs : []},
  { daynumber :"20",weekend: false,inputs : ["0.2","0.3","0.8"]},
  { daynumber :"21",weekend: false,inputs : ["0.2","0.3","0.5"]},
  { daynumber :"22",weekend: false,inputs : ["0.2","0.3","0.4"]},
  { daynumber :"23",weekend: false,inputs : ["0.2","0.3","0.3"]},
{ daynumber :"24",weekend: false,inputs : ["0.2","0.3","0.8"]},
{ daynumber :"25",weekend: false,inputs : ["0.2","0.3","0.7"]},
{ daynumber :"26",weekend: true,inputs : []},
{ daynumber :"27",weekend: true,inputs : []},
{ daynumber :"28",weekend: false,inputs : ["0.2","0.3","0.5"]},
{ daynumber :"29",weekend: false,inputs : ["0.2","0.3","0.4"]},
{ daynumber :"30",weekend: false,inputs : ["0.9","0.9","0.9"]} ]
};

const taches = [
  {
    nom: "tache n1",
    projet: {
      nom: "projet n1",
      datededbut: "2022-04-04T17:57:45",
      datedefin: "2022-04-04T17:57:45"
    }
  },
  {
    nom: "tache n2",
    projet: {
      nom: "projet n2",
      datededbut: "2022-04-04T17:58:15",
      datedefin: "2022-04-04T17:58:15"
    }
  },
  {
    nom: "tache n3",
    projet: {
      nom: "projet n1",
      datededbut: "2022-04-04T17:57:45",
      datedefin: "2022-04-04T17:57:45"
    }
  }
];

const [checkedTache, setCheckedTache] = useState(new Array(tachesFromDB.length).fill(false)); 

const handleChangeTache = (index1,event) => {
  var checkedArray = [...checkedTache];
  checkedArray[index1]=event.target.checked;
  event.target.checked=true;
  setCheckedTache(checkedArray); 
}; 


var [total, setTotal] = useState(new Array(tachesFromDB.length).fill(parseFloat(0)));


//console.log("TOTAL = ",total);

const handleTotal = (value,index) => {
  let newTotal = [...total]
  newTotal[index]=(parseFloat(newTotal[index]) + parseFloat(value));
  total=newTotal;
  if(total[index]!=parseFloat(0)){
    tachesFromDB.map((tache,index) => (
      dispatch(updateTotalTache(tache.id,total[index]))
      ))
    }
  }
  
  

  useEffect(() => {
    dispatch(getMonthsheet('254'));
    dispatch(getTachesByCollab('254'));
  },[dispatch])
    
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'79vh', margin:'0', padding:'0',
        backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
        ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
          
          <Container maxWidth='false' style={{display:'flex',alignItems:'center',width:'102%',minHeight:'100%'}}  
          >
          <br/>
          <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '22ch',bgcolor: 'grey' }, zIndex:1 , bgcolor: 'white',m:'auto',mt:2 , display:'flex',borderRadius: '5px', boxShadow: 10, flexDirection: 'column', alignItems:'center', overflow:'hidden', minHeight:'100%', width:'100rem', mb:2,ml:-2.7
        }}
        
        noValidate
        autoComplete="off"
       >
        <Button variant="contained"    sx={{bgcolor:'black', borderRadius :1, boxShadow:'0 3px 5px 2px grey',  '&:hover':{background: 'grey'} ,color:'white' ,height:45, position:'absolute', mt:0.6,mb:200,ml:-160}}>Retourner</Button>  

      <br/>

       <div style={{ backgroundColor: '#BABABA', marginTop:'2rem', width:'100%', textAlign:'center', padding:'15px' }}><b>Réalisé en {monthsheetFromDB.name}</b></div>
  
       <TableContainer component={Paper} sx={{mt:3, overflow:"hidden"}}>
        <Table sx={{ minWidth: 640, maxWidth:'false' }}  size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="right" style={{backgroundColor:'white'}}></StyledTableCell>
            {monthsheetFromDB.daysheets.map((daysheet) => ( 
              <>
              { daysheet.weekend ?  <StyledTableCell align="right" style={{backgroundColor:'black'}}>{daysheet.daynumber}</StyledTableCell> : <StyledTableCell align="right" style={{backgroundColor:'grey', border:'1px solid black'}}>{daysheet.daynumber}</StyledTableCell>}
              </>
              ))}
  
              <StyledTableCell width="33" align="right" style={{backgroundColor:'red'}}><b>TOTAL</b></StyledTableCell>  
              
  
              
            </TableRow>
          </TableHead>
          <TableBody>
            {tachesFromDB.map((tache,index1) => (
              <StyledTableRow
                key={tache.nom}
                sx={{ '&:last-child td, &:last-child th': { border: 1 }, fontSize:5 }}
              >
                <StyledTableCell component="th" scope="row" style={{backgroundColor:"grey",color:"white"}}>
             
                
               <FormGroup>
                  <FormControlLabel  style={{width:"130px", margin:"-12px",textAlign:'left'}} labelPlacement="start" control={<Checkbox color="default"   onClick={(e)=>handleChangeTache(index1,e)} checked={checkedTache[index1]}/>} label={tache.nom} />
              </FormGroup>
                </StyledTableCell>
                  
                
  
                {monthsheetFromDB.daysheets.map((daysheet,index) => (
                  <>
                    {checkedTache[index1] ?  (daysheet.weekend ? <StyledTableCell align="center" style={{ backgroundColor: 'black', borderTop: '2px solid black' }}></StyledTableCell> : 
                    <StyledTableCell align="center">
                    <input defaultValue={daysheet.inputcolab[index1]} type="text" style={inputcell} onBlur={(e) => (dispatch(updateDaysheet(daysheet.id,e.target.value,index1)))} onLoad={handleTotal(daysheet.inputcolab[index1],index1)} />
                    </StyledTableCell>) : <></> }
                   
                  </>
  
                ))}
  
                {checkedTache[index1] ? <StyledTableCell width="35" align="center" style={{ backgroundColor: 'red', color: 'white' }}  ><b>{total[index1]}</b></StyledTableCell> : <></> }
  
              </StyledTableRow>
            ))}
                <br></br>
            <StyledTableRow
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                   <StyledTableCell width="35" align="center" style={{ backgroundColor: 'red', color:"white",}}>TOTAL</StyledTableCell>
                    {monthsheetFromDB.daysheets.map((daysheet,index) => (
                    <>
                    {daysheet.weekend ? <StyledTableCell align="center" width="1" style={{ backgroundColor: 'black', borderTop: '2px solid black' }}></StyledTableCell> : <StyledTableCell  align="center" style={{backgroundColor : 'red', color:'white'}}>{daysheet.totalperday}</StyledTableCell>}
                    </>
                  ))}
                  
                </StyledTableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      
      
      
      
  
  
           </Box>
      </Container> 
      </Container>
      </React.Fragment>
    )
  }
export default Monthsheet;