import styled from 'styled-components'
import React,{useState,useEffect} from 'react'
const Wrapper=styled.section`
    >ul{
        display:flex;
        justify-content: center;
        align-items: center;
        min-height:60px;
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

const CategorySection:React.FC=()=>{
    const [category,setCategory]=useState('-');

    const subChange=()=>{
        setCategory('-')
    }

    const addChange=()=>{
        setCategory('+')
    }

    useEffect(()=>{console.log(category)},[category])

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