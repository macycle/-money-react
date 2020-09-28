import styled from 'styled-components';
import React,{useRef} from 'react'
import Icon from '../../components/Icons';
const Wrapper = styled.section`
  background: white;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 2px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 32px;
      background: none;
      border: none;
    }
  }
`;

type Props={
  value: string;
  onChange:(value: string)=>void
}

const NotesSection:React.FC<Props>=(props)=>{
  const note =props.value;
  const noteChange=(e:any)=>{
      props.onChange(e.target.value)
  }

  return (
    <Wrapper>
      <label>
      <Icon name="mark"/> &nbsp;
      <span>备注：</span>
      <input type="text" placeholder="写一点备注呀~" value={note} onChange={noteChange}/>
      </label>
    </Wrapper>
  )
}

export {NotesSection}