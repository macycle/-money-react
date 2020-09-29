import React,{useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection'; 
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hook/useRecord'
import {MyMain} from '../components/MyMain'
import {MyWrapper} from '../components/MyWrapper'
import Nav from '../components/Nav'


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
        <MyWrapper>
            <MyMain>
                <CategorySection value={selected.category}
                onChange={category=>onChange({category})}
                />
                <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})} />

                <NotesSection value={selected.note}
                    onChange={note=>onChange({note})}
                />

                <NumberPadSection value={selected.amount.toString()} onChange={amount=>onChange({amount})} onOk={submit} />
            </MyMain>
            <Nav />
            
        </MyWrapper>
    )
  }

  export default Money