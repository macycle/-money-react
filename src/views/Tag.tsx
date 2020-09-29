import React from 'react';
import {useTags} from '../useTags'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Button=styled.button`
    font-size: 18px; border: none; padding: 8px 12px;
    background: red; border-radius: 4px;
    color: white;
`

type Params={
    id:string
}
const Tag:React.FC=(props)=>{
    const {findTag}=useTags();
    let {id}=useParams<Params>()
    const tag=findTag(parseInt(id))
    
    return (
        <Layout>
            <div>{tag.name}</div>
            <Button>删除标签</Button>
        </Layout>
    )
}

export {Tag}