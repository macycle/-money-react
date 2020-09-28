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
        tags:[] as string[],
        note:'',
        category:'-' as Category,
        amount:0
    })

    const onChange=(obj: Partial<typeof selected>)=>{
        setSelected({...selected,...obj});
    }
    return (
        <MyLayout>
            <CategorySection />

            <TagsSection value={selected.tags} onChange={tags => onChange({tags})} />

            <NotesSection />

            <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={()=>{}} />

        </MyLayout>
    )
  }

  export default Money