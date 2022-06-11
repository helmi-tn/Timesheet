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
import { updateTotalTache, getTachesEtTotalParCollab,getTachesByCollab } from '../actions/collab/taches';
import { updateConfirmerMonthsheet } from '../actions/collab/monthsheet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton'
import { getProjetsByCollab } from '../actions/collab/projets';
import { useNavigate } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import Alert from '@mui/material/Alert';




export default function MonthsheetTest() {
  let timeout;
  document.title="Timesheet";
  const dispatch = useDispatch();
  const [confirmer,setConfirmer] = useState(false);
  const [warningInput,setWarningInput] = useState(false);
  const [warningInputJour,setWarningInputJour] = useState(false);

  const user = useSelector((state) => state.user); 
  const monthsheetFromDB = useSelector((state) => state.monthsheet);
  const tachesFromDB = useSelector((state) => state.tachesByCollab);  
  const projetsFromDB = useSelector((state) => state.projets);
  const navigate = useNavigate();
  console.log('Month de collab = ',monthsheetFromDB);
  console.log('Taches de collab =',tachesFromDB);
  console.log('Projets de collab = ' ,projetsFromDB);
  
  
  
  const inputcell = {
    width:"30px",padding: "3px 0px",margin:"-20rem",textAlign:'center',border:"1",fontSize:'12px'
  };
  const inputcellConfirmed = {
    width:"30px",padding: "3px 0px",margin:"-20rem",textAlign:'center',border:"1",fontSize:'12px',
    backgroundColor:'gray'
  }
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white, fontSize:9
    },
    [`&.${tableCellClasses.body}`]: {
      border:'0.5px solid black', fontSize:12
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
  
  
 
const [checkedTache, setCheckedTache] = useState(new Array(tachesFromDB.length).fill(false)); 

const handleChangeTache = (index1,event) => {
  var checkedArray = [...checkedTache];
  checkedArray[index1]=event.target.checked;
  event.target.checked=true;
  setCheckedTache(checkedArray); 
};



var [total, setTotal] = useState(new Array(tachesFromDB.length).fill(parseFloat(0)));


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
  
  const [isExpanded, setIsExpanded] = React.useState(new Array(projetsFromDB.length).fill(false));
  
  const tachesTotalFromDB = useSelector(state => state.tachestotal);
  console.log('NEW TACHES = ',tachesTotalFromDB);

  useEffect(() => {
    dispatch(getMonthsheet(user.id));
    dispatch(getTachesByCollab(user.id));
    dispatch(getProjetsByCollab(user.id));
    dispatch(getTachesEtTotalParCollab(user.id));
  },[dispatch,confirmer])
  
  
  return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{maxWidth:"100%", height:"auto",minHeight:'81vh', margin:'0', padding:'0',
        backgroundImage: `url(https://i.imgur.com/6norrZF.jpg)`, backgroundRepeat:'repeat',backgroundSize: 'cover'
        ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
          
          <center>
          <Container maxWidth='false' style={{display:'flex',alignItems:'center',width:'102%',minHeight:'100%'}}  
          >
          <br/>
          <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '22ch',bgcolor: 'grey' }, zIndex:1 , bgcolor: 'white',m:'auto',mt:2 , display:'flex',borderRadius: '5px', boxShadow: 10, flexDirection: 'column', alignItems:'center', overflow:'hidden', minHeight:'100%', width:'95rem', mb:2,ml:-2
        }}
        
        noValidate
        autoComplete="off"
       >
        <Button variant="contained"  onClick={() => navigate('/collaborateur/acceuil')}  sx={{bgcolor:'black', borderRadius :1, boxShadow:'0 3px 5px 2px grey',  '&:hover':{background: 'grey'} ,color:'white' ,height:45, position:'absolute', mt:0.6,mb:200,ml:-160}}><MdIcons.MdOutlineKeyboardReturn style={{fontSize:'2rem'}} /></Button>  

      <br/>

       <div style={{ backgroundColor: '#BABABA', marginTop:'2rem', width:'100%', textAlign:'center', padding:'15px' }}><b>Réalisé en {monthsheetFromDB.name}</b></div>
  
       <TableContainer component={Paper} sx={{mt:3, overflow:"hidden"}}>
        <Table size="small" sx={{ minWidth: 640, maxWidth:'false',width:'fit-content' }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="right" style={{backgroundColor:'white',width:'100%',border:'0'}}></StyledTableCell>
            {monthsheetFromDB.daysheets.map((daysheet) => ( 
              <>
              { daysheet.weekend ?  <StyledTableCell width="10" align="right" style={{backgroundColor:'black',maxWidth:'6px',border:"0.1px solid black"}}>{daysheet.daynumber}</StyledTableCell> : <StyledTableCell align="right" style={{backgroundColor:'grey', border:'0.1px solid black',maxWidth:"10px"}}><b>{daysheet.daynumber}</b></StyledTableCell>}
              </>
              ))}
  
              <StyledTableCell width="33" align="right" style={{backgroundColor:'red',fontSize:'12px',border:'0.1px solid black'}}><b>TOTAL</b></StyledTableCell>  
              
  
              
            </TableRow>
            <br/>
          </TableHead>
          <TableBody>
                      {projetsFromDB.map((projet,index) => (
                        
                          <><StyledTableRow height="55">
                          <StyledTableCell padding="checkbox" colSpan={monthsheetFromDB.daysheets.length + 2} sx={{ background:"linear-gradient(to right, black,#dedede)", color: "white" }} scope="row" style={{ width: "130px", borderTop: '2px solid black',borderBottom:'2px solid grey' }}>
                          <IconButton onClick={() => {
                              var isExpandedClone = [...isExpanded];
                              isExpandedClone[index]=!isExpanded[index];
                              setIsExpanded(isExpandedClone)
                              }}>
                              {isExpanded[index] ? <KeyboardArrowUpIcon sx={{ color: 'white',fontSize:'35px' }} /> : <KeyboardArrowDownIcon sx={{ color: 'white',fontSize:'35px' }} />}
                            </IconButton>
                            <span style={{ fontSize: '20px' }}><b>{projet.nom}</b></span>
                           
                            <span style={{marginLeft:'200px',fontSize:'15px'}}>Total : <b>{projet.total}</b></span>
                          </StyledTableCell>
                        </StyledTableRow><>
                            {isExpanded[index] &&

                              tachesFromDB.map((tache, index1) => (
                                tache.projet.id == projet.id ?
                                <StyledTableRow
                                  key={tache.nom}
                                  sx={{ height: '6px',m:0,p:0 }}
                                >
                                  <StyledTableCell component="th" scope="row" style={{ backgroundColor: "grey", color: "white" }}>

                                    <FormGroup>
                                      <FormControlLabel style={{ maxWidth: "170px", margin: "-13px" }} labelPlacement="start" control={<Checkbox color="default" onClick={(e) => handleChangeTache(index1, e)} checked={checkedTache[index1]} />} label={tache.nom} />
                                    </FormGroup>
                                  </StyledTableCell>




                                  {monthsheetFromDB.daysheets.map((daysheet, index) => (
                                    <>
                                      {checkedTache[index1] ? (daysheet.weekend ? <StyledTableCell align="center" style={{ backgroundColor: 'black', borderTop: '2px solid black' }}></StyledTableCell> :
                                        <StyledTableCell align="center">
                                          <input readOnly={monthsheetFromDB.confirmer} defaultValue={daysheet.inputcollab[index1]} type="text" style={monthsheetFromDB.confirmer ? inputcellConfirmed : inputcell} onBlur={(e) => {
                                            if(e.target.value > 1) {
                                              setWarningInput(true);
                                              e.target.focus();
                                              timeout = setTimeout(() => {
                                                setWarningInput(false);
                                              }, 5000);
                                            }else{
                                              let totalday = 0;
                                              for (let i = 0; i < daysheet.inputcollab.length; i++) {
                                                  totalday+=parseFloat(daysheet.inputcollab[i]);
                                              }
                                              totalday+=parseFloat(e.target.value);
                                              console.log(totalday);
                                              if(totalday>1){
                                                setWarningInputJour(true);
                                                e.target.focus();
                                                timeout = setTimeout(() => {
                                                setWarningInputJour(false);
                                                }, 5000);

                                              }else{
                                                dispatch(updateDaysheet(monthsheetFromDB.id,daysheet.id, e.target.value, index1));
                                                dispatch(updateTotalTache(user.id,tache.id,e.target.value));

                                              }
                                            }
                                          }} />
                                        </StyledTableCell>) : <></>}

                                    </>

                                  ))}

                                  {checkedTache[index1] ? <StyledTableCell width="35" align="center" style={{ backgroundColor: 'red', color: 'white' }}>
                                  <b>{ tachesTotalFromDB.map((tt) => (tt.tache.id==tache.id ? <>{tt.totalparcollab}</> : null) )}</b>
                                  </StyledTableCell> : <></>}

                                </StyledTableRow>
                                  : 
                                  null
                              )
                
                                
                              )}

                          </></>
                       
                      ))}
                           
                              
                            
           
                <br></br>
            <StyledTableRow
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                   <StyledTableCell width="35" align="center" style={{ backgroundColor: 'red', color:"white",border:'0.1px solid black',fontSize:'15px'}}><b>TOTAL</b></StyledTableCell>
                    {monthsheetFromDB.daysheets.map((daysheet,index) => (
                    <>
                    {daysheet.weekend ? <StyledTableCell style={{ backgroundColor: 'black', border:'0.1px solid black' }}></StyledTableCell> : <StyledTableCell   style={{backgroundColor : 'red', color:'white',height:'40px',maxWidth: "45px",border:'0.1px solid black'}}>{Number(daysheet.totalperday).toFixed(2)}</StyledTableCell>}
                    </>
                  ))}
                  <StyledTableCell style={{backgroundColor :'red', color:'white',fontSize:'14px',border:'0.1px solid black'}}>
                    <b>{Number(monthsheetFromDB.totalpermonth).toFixed(2)}</b>
                  </StyledTableCell>
                  
                </StyledTableRow>
            
          </TableBody>
        </Table>
        <Container sx={{display:'flex',alignContent:'center'}}>
                {
                  warningInput &&
                  <center>
                <Alert style={{margin:'15px',width:'330px',left:'38%',position:'absolute'}} severity="warning">
                  <b>Veuillez entrer un nombre entre 0 et 1 ! </b> 
                </Alert>
                </center>
     
                }
                {
                  warningInputJour &&
                  <center>
                <Alert style={{margin:'15px',width:'330px',left:'38%',position:'absolute'}} severity="warning">
                  <b>Le total du jour ne peut pas dépasser 1 !</b>
                </Alert>
                </center>
     
                }

                {
                  (monthsheetFromDB.confirmer || confirmer) &&
                  <center>
                <Alert style={{margin:'15px',width:'330px',left:'38%',position:'absolute'}} severity="success">
                  <b>Cette monthsheet a été confirmée !</b>
                </Alert>
                </center>
     
                }
  
  
        
                <Button variant="contained"  
                onClick={() =>
                  {if (monthsheetFromDB.totalpermonth>= 21){
                  setConfirmer(true);
                  dispatch(updateConfirmerMonthsheet(monthsheetFromDB.id));

                   }
                  } 
                 }  
                 sx={{bgcolor:'black', borderRadius :1, boxShadow:'0 3px 5px 2px grey',  '&:hover':{background: "linear-gradient(to right, black,#dedede)"} ,color:'white' ,height:45,mt:2,mb:2,left:1100}}>Confirmer<AiIcons.AiOutlineCheck style={{fontSize:'20px'}} /></Button>  
          </Container>
      </TableContainer>
           </Box>
      </Container> 
           </center>
      </Container>
      </React.Fragment>
    )
  }
