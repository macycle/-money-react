import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';
require('../icons/money.svg');
require('../icons/tag.svg');
require('../icons/statistic.svg');



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
                    <svg className="icon">
                        <use xlinkHref="#tag"/>
                    </svg>
                    <Link to="/tag">标签</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#statistic"/>
                    </svg>
                    <Link to="/statistic">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;