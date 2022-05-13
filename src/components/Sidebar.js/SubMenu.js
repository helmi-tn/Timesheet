import React, {useState} from 'react'
import { NavItem } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled.div`
display:flex;
color:white;
justify-content: space-between;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration: none;
font-size: 18px;
&:hover{
    background:white;
    color:black;
    border-left: 4px solid red;
    cursor: pointer;
}
`;

const SidebarLabel = styled.span`
    margin-left:16px;
`;

const DropdownLink = styled(Link)`
    background : #363636;
    height: 50px;
    padding-left:3rem;
    display:flex;
    align-items:center;
    text-decoration: none;
    color: white;
    font-size:16px;

    &:hover{
        background: red;
        color:white;
        cursor:pointer;
    }
`

const SubMenu = ({ item }) => {
    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
          <SidebarLink onClick={item.subNav && showSubnav}>
            <div>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </SidebarLink>
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              );
            })}
        </>
      );
    };
export default SubMenu