import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from '../actions/auth'
import { useDispatch } from 'react-redux';


const initialState = { email :'' , motdepasse: ''};

const Login = () =>  {
  document.title="Se connecter";
  document.body.style.overflow= 'hidden';
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData,setFormData] = useState(initialState);

  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData,navigate));
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});

  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{maxWidth:"100%", height:"81vh", margin:'0', padding:'0',
      backgroundImage: `url(https://i.imgur.com/E4j2EG2.jpg)`, backgroundRepeat:'no-repeat',backgroundSize: 'cover'
      ,backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        
        <Container maxWidth="lg" style={{display:'flex',alignItems:'center'}}  
        >
        <br/>
        <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch',bgcolor: 'grey'}, zIndex:1, bgcolor: 'white',m:'auto', mt:5, pb:20,ml:6 , borderRight: 30, borderColor: 'error.main', display:'flex', justifyContent:'space-between',borderRadius: '5px', boxShadow: 10, flexDirection: 'row', alignItems:'center', overflow:'hidden', height:"30rem", opacity : '0.94'
      }}
     >
  
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 500,
        height: 400, borderRight:1 , display:'flex', justifyContent:'space-around',alignItems: 'center', flexDirection: 'column', mt:20}}>
    <p style={{fontSize:30}}><b>Connexion</b></p>
         <TextField sx={{bgcolor:'#E8E8E8','&.Mui-focused fieldset':{borderColor:'black'} }}
          required
          name="email"
          label="E-mail"
          size="small"
          type="email"
          onChange={handleChange}
          />
        <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined" size="small" style={{backgroundColor:'#E8E8E8'}}>
          <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
          <OutlinedInput
            required
            name="motdepasse"
            type={values.showPassword ? 'text' : 'password'}
            defaultValue={values.motdepasse}
            onChange={handleChange}
           
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mot de passe"
          />
        </FormControl>
        <FormGroup>
          <FormControlLabel control={<Checkbox id="remember-me" name="remember-me" defaultChecked style={{color:'red'}}/>} label="Se souvenir de moi" />
        </FormGroup>
        <Button variant="contained" style={{ backgroundColor : 'black'}} type='submit'>Se connecter</Button>
        </Box>
        <Box 
        component="img"
        sx={{ mr:8, mt:20, ml:10,
          maxHeight: {  xs: 200, md: 500 },
          maxWidth: { xs: 200, md: 400 },
        }}
        alt="UIB Logo"
        src="https://i.imgur.com/rE74Jsm.png"                              // "https://i.imgur.com/rE74Jsm.png"
      />
      </Box>
        </Container>
      </Container>
    </React.Fragment>
  )
}
export default Login;