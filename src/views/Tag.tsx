import React from 'react';
import {useTags} from '../useTags'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Icon from '../components/Icons'
import {Center} from '../components/Center'
import {Space} from '../components/Space'
import {Input} from '../components/Input'

const Button=styled.button`
    font-size: 18px; border: none; padding: 8px 12px;
    background: red; border-radius: 4px;
    color: white;
`

const Topbar=styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    line-height:20px;
    padding:14px;
    background:#9563f1;
    >.icon{
        fill:white;
    }
    > span{
        color:white;
    }
`

const InputWrapper= styled.div`
background:white;
padding: 0 16px;
margin-top: 8px;
`;


type Params={
    id:string
}


const Tag:React.FC=(props)=>{

    const {findTag}=useTags();
    let {id}=useParams<Params>()
    const tag=findTag(parseInt(id))

    
    const tagContent=(tag:{id:number;name:string})=>(
        <div>
            <InputWrapper>
                <Input label="标签名" type='text'  placeholder="标签名" value={tag.name} />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </div>
    )
    
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <span></span>
            </Topbar>

            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
            
        </Layout>
    )
}

export {Tag}