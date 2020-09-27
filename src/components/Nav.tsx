import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from './Icons';




const NavWrapper=styled.nav`
   line-height:24px;
   box-shadow:0 0 3px rgba(0,0,0,0.25);
   > ul{
     display:flex;
     justify-content:center;
     
     > li{
       flex:1;
       a {
        align-items:center;
           display:flex;
           flex-direction:column;
        &.selected{
           color:#7c48db; 
           .icon{
               fill:#7c48db;
           } 
        }


        .icon{
            width:28px;
            height: 28px;
        }
       }
       
     }
   }
`;

const Nav=()=>{
    return (
        <NavWrapper>
            <ul>
                <li>  
                    <NavLink to="/tag" activeClassName="selected">
                        <Icon name="tag" />
                        标签
                    </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/money" activeClassName="selected">
                    <Icon name="money" />
                    记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" activeClassName="selected">
                    <Icon name="statistic" />
                    图表
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;