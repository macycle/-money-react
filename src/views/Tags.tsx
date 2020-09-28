import React,{useState} from 'react';
import Icon from '../components/Icons'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'


const TagList=styled.ol`
    font-size:16px;
    background:white;
    > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const Button=styled.button`
    font-size: 18px; border: none; padding: 8px 12px;
    background: #7c48db; border-radius: 4px;
    color: white;
`

const Center=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Space = styled.div`
  height: 16px;
`;



function Tags() {
    const [tags,setTags]=useState<string[]>(['4','5','6','7','8']);
    return (
        <Layout>
            <TagList>
              {tags.map(tag=>
                <li key={tag}>
                    <Link to={'/tags'+tag}>
                      <span className="oneLine">{tag}</span>
                      <Icon name='right'/>
                    </Link>
                </li>
                )}
            </TagList>

            <Center>
              <Space/>
              <Space/>
              <Space/>
              <Button>新增标签</Button>
              <Space/>
              <Space/>
            </Center>
       </Layout>
       
    )
  }

  export default Tags;