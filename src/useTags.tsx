import {useState} from 'react'
import {createId} from './lib/createId'

const defaultTags=[
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    
]

const useTags=()=>{
    const [tags,setTags]=useState<{ id: number; name: string }[]>(defaultTags)
    const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0];
    const findTagIndex=(id:number)=>{
        let result=-1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                result=i;
                break;
            }
        }
        return result;
    };

    const updateTag=(id: number,obj: {name:string})=>{
        const index=findTagIndex(id);    //获取想要修改的tag的下标；
        const tagsClone=JSON.parse(JSON.stringify(tags)); //深拷贝
        tagsClone.splice(index,1,{id:id,name:obj.name})    //拿出想要删除的，并新增进去
        setTags(tagsClone)  //直接将新的值覆盖旧的值
    }

    const deleteTag=(id:number)=>{
        const index=findTagIndex(id);
        const tagsClone=JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index,1);    //直接删除
        setTags(tagsClone)
    }

    return {tags,setTags,findTag,findTagIndex,updateTag, deleteTag}
}

export {useTags}