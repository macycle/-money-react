import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';
const NavWrapper=styled.nav`
   border:1px solid yellow;
   line-height:24px;
   box-shadow:0 0 3px rgba(0,0,0,0.25);
   > ul{
     display:flex;
     > li{
       flex:1;
       text-align:center;
       padding:16px 0
     }
   }
`;

const Nav=()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tag">标签</Link>
                </li>
                <li>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Link to="/statistic">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;