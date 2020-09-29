import React,{useState} from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection'; 
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout=styled(Layout)`
    display:flex;
    flex-direction:column;
`

type Category='-' | '+'

function Money() {
    const [selected,setSelected]=useState({
        tagIds:[] as number[],
        note:'',
        category:'-' as Category,
        amount:'0'
    })

    const onChange=(obj: Partial<typeof selected>)=>{
        setSelected({...selected,...obj});
    }
    return (
        <MyLayout>
            <CategorySection value={selected.category}
             onChange={category=>onChange({category})}
            />

            <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})} />

            <NotesSection value={selected.note}
             onChange={note=>onChange({note})}
            />

            <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={()=>{}} />

        </MyLayout>
    )
  }

  export default Money