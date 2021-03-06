import React from 'react';
import Icon from '../components/Icons'
import {useTags} from '../hook/useTags'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Nav from '../components/Nav'
import {Center} from '../components/Center'
import {Space} from '../components/Space'
import {MyMain} from '../components/MyMain'
import {MyWrapper} from '../components/MyWrapper'

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







function Tags() {
    const {tags,addTag} =useTags(); 
    return (
        <MyWrapper >
          <MyMain >
              <TagList>
                {tags.map(tag=>
                  <li key={tag.id}>
                      <Link to={'/tags/'+tag.id}>
                        <span className="oneLine">{tag.name}</span>
                        <Icon name='right'/>
                      </Link>
                  </li>
                  )}
             </TagList>

            <Center>
              <Space/>
              <Space/>
              <Space/>
              <Button onClick={addTag}>新增标签</Button>
              <Space/>
              <Space/>
            </Center>
          </MyMain>
      
            <Nav />
        </MyWrapper>
    )
  }

  export default Tags;