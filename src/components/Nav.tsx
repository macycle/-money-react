import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from './Icons';




const NavWrapper=styled.nav`
   line-height:24px;
   font-size: 14px;
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
            width:24px;
            height: 24px;
        }
       }
       
     }
   }
`;

const Nav=(props: any)=>{
    return (
        <NavWrapper>
            <ul>
                <li>  
                    <NavLink exact to="/tags" activeClassName="selected">
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