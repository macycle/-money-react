import styled from 'styled-components';
import React,{useState,useRef} from 'react'
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

const NotesSection:React.FC=(props)=>{

  const [note,setNote]=useState('');
  const InputValue=useRef<HTMLInputElement>(null)
  const noteChange=()=>{
    if(InputValue.current!==null){
      setNote(InputValue.current.value)
    }
  }

  return (
    <Wrapper>
      <label>
      <Icon name="mark"/> &nbsp;
      <span>备注：</span>
      <input type="text" ref={InputValue} placeholder="写一点备注呀~" defaultValue={note} onBlur={noteChange}/>
      </label>
    </Wrapper>
  )
}

export {NotesSection}