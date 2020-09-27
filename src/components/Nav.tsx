import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';
import Icon from './Icons';




const NavWrapper=styled.nav`
   line-height:24px;
   box-shadow:0 0 3px rgba(0,0,0,0.25);
   > ul{
     display:flex;
     justify-content:center;
     
     > li{
       flex:1;
       display:flex;
       flex-direction:column;
       align-items:center;
       >.icon{
            width:28px;
            height: 28px;
        }
     }
   }
`;

const Nav=()=>{
    return (
        <NavWrapper>
            <ul>
                <li> 
                    <Icon name="tag" />
                    <Link to="/tag">标签</Link>
                </li>
                <li>
                    <Icon name="money" />
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Icon name="statistic" />
                    <Link to="/statistic">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;