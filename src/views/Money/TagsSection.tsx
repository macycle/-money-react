import styled from 'styled-components';
import React,{useState} from 'react';

const Wrapper = styled.section`
    flex-grow:1;
    background:#fff;
    padding:12px 16px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items:flex-start;
    > ol {
        margin:0 -12px;
        display:flex;
        flex-wrap:wrap;
        >li {
            background: #f5f5f5;
            min-width:48px;
            min-height:48px;
            border-radius: 50%;
            display:block; 
            padding:17px;
            font-size: 14px; 
            margin: 8px 12px;

            &.selected{
                background:#b08fee;
                color:white;
            }
            
        }
    }

    > button{
        background:none; border: none; padding: 2px 4px;
        border-bottom: 1px solid #333; color: #666;
        margin-top: 8px;
    }
`

type Props={
    value: string[]; 
    onChange:(selected: string[])=>void;
}

const TagsSection: React.FC<Props>=(props)=>{
    const [tags,setTags]=useState<string[]>(['衣','食','住','行','吃','喝','拉','撒']);
    const selectedItems=props.value;
    const addTag=()=>{
        const tagName=window.prompt('请输入东西:');
        if(tagName){
            setTags([...tags,tagName])
        }
    }

    const onToggleTag=(item: string)=>{
        const index=selectedItems.indexOf(item);
        if(index>=0){
            props.onChange(selectedItems.filter(t=>t!==item))
        }else{
            props.onChange([...selectedItems,item])
        }
    }

    const getClass=(item: string)=>selectedItems.indexOf(item)>0?"selected":'';

    return (
        <Wrapper>
            <ol>
                {
                    tags.map(item=>{
                        return (<li key={item} onClick={()=>{onToggleTag(item)}} className={getClass(item)}>{item}</li>)
                    })
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}



export {TagsSection}