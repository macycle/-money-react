import React,{useState} from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection'; 
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hook/useRecord'

const MyLayout=styled(Layout)`
    display:flex;
    flex-direction:column;
`

type Category='-' | '+'

const defaultFormData={
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:'0'
}
function Money() {
    const {addRecord}=useRecords()

    const [selected,setSelected]=useState(defaultFormData)

    const onChange=(obj: Partial<typeof selected>)=>{
        setSelected({...selected,...obj});
    }

    const submit=()=>{
        if(addRecord(selected)){
            alert('保存成功')
            setSelected(defaultFormData)
        }
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

            <NumberPadSection value={selected.amount.toString()} onChange={amount=>onChange({amount})} onOk={submit} />

        </MyLayout>
    )
  }

  export default Money