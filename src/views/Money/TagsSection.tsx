import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hook/useTags'
import {createId} from '../../lib/createId'
 
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
            height:48px;
            border-radius: 24px;
            display:block; 
            padding:17px 20px;
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
    value: number[]; 
    onChange:(selected: number[])=>void;
}

const TagsSection: React.FC<Props>=(props)=>{
    const {tags, addTag} = useTags();
    const selectedTagIds=props.value;
    //const {addTag}=useTags()
    
    // const addTag=()=>{
    //     const tagName=window.prompt('请输入新的标签名:');
    //     if(tagName!==null){
    //         setTags([...tags,{id:createId(),name:tagName}])
    //     }
    // }

    const onToggleTag=(tagId: number)=>{
        const index=selectedTagIds.indexOf(tagId);
        if(index>=0){
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        }else{
            props.onChange([...selectedTagIds, tagId])
        }
    }

    const getClass=(tagId: number)=>selectedTagIds.indexOf(tagId)>=0?"selected":'';

    return (
        <Wrapper>
            <ol>
                {
                    tags.map(tag=>{
                        return (<li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={getClass(tag.id)}>{tag.name}</li>)
                    })
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}



export {TagsSection}