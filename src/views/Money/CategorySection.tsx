import styled from 'styled-components'
import React from 'react'

const Wrapper=styled.section`
    >ul{
        display:flex;
        justify-content: center;
        align-items: center;
        height:8vh;
        background:#9563f1;
        > li {
        font-size: 20px;
        padding: 14px;
        border-bottom: 1px solid transparent;
        &.selected{
        color:white;
        font-weight: bold;
        }
        
    }
}
`

type Props={
    value:'-'|'+',
    onChange:(value:'-'|'+')=>void;
}

const CategorySection:React.FC<Props>=(props)=>{
    const category=props.value;

    const subChange=()=>{
        props.onChange('-')
    }

    const addChange=()=>{
        props.onChange('+')
    }


    return (
        <Wrapper>
            <ul>
            <li className={category==='-'?"selected":''} onClick={subChange}>支出</li>
            <li className={category==='+'?"selected":''} onClick={addChange}>收入</li>
            </ul>
        </Wrapper>
    )
}

export {CategorySection}