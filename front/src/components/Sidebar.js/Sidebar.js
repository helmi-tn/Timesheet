import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SubMenu';
import {SidebarData} from './SidebarData';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background :black;
    height: 80px;
    width:6%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;
const NavIcon = styled(Link)`
margin-left:2rem;
font-size: 2rem;
margin-top:2rem;
height: 80px;
display:flex;
justify-content: flex-start;
align-item: center;
color:red;
&:hover{
    color:white;
}
`;
const SidebarNav = styled.nav`
background : white;
width: 250px;
height: 98vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
z-index:0;
left: ${({ sidebar }) => (sidebar ? '0': '-100%')};
transition:350ms;
`;

const SidebarWrap = styled.div`
width: 100%;
margin-top:3rem;
`;

document.body.style.overflow= 'hidden';
function Sidebar() {
  
    const navigate = useNavigate();
    const [sidebar,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
            <p style={{color:'black',marginLeft:'1.1rem', fontSize:'1.4rem'}}><b>ADMIN DASHBOARD</b></p>
            {SidebarData.map((item,index) => {
                return <SubMenu item={item} key={index} />
            })}
            <Button onClick={() => navigate('/admin/acceuil')}  sx={{ background: '#e60027',border: 0,top:500,left:20,
    borderRadius: 1,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 45,
    padding: '0 28px', position:'absolute',
    '&:hover':{
      background: '#9c021c'
    }}} >Retourner</Button>
            </SidebarWrap>
        </SidebarNav>
    </>
  )
}

export default Sidebar