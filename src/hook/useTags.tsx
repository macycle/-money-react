import {useEffect} from 'react'
import {useState} from 'react'
import {createId} from '../lib/createId'
import {useUpdate} from './useUpdate'


const useTags=()=>{
    const [tags,setTags]=useState<{ id: number; name: string }[]>([])

    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length===0){
            localTags=[
                {id: createId(), name: '购物'},
                {id: createId(), name: '出行'},
                {id: createId(), name: '工资'},
                {id: createId(), name: '住房'}, 
            ]
        }
        setTags(localTags)
    },[])    //组件挂在时


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

    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)

    const updateTag=(id: number,obj: {name:string})=>{
        const index=findTagIndex(id);    //获取想要修改的tag的下标；
        const tagsClone=JSON.parse(JSON.stringify(tags)); //深拷贝
        tagsClone.splice(index,1,{id:id,name:obj.name})    //拿出想要删除的，并新增进去
        setTags(tagsClone)  //直接将新的值覆盖旧的值
    }

    const deleteTag=(id:number)=>{
        // const index=findTagIndex(id);
        // const tagsClone=JSON.parse(JSON.stringify(tags));
        // tagsClone.splice(index,1);    //直接删除
        // setTags(tagsClone)

        setTags(tags.filter(tag=>tag.id!==id))
    }

    const addTag=()=>{
        const tagName=window.prompt('请输入新的标签名:');
        if(tagName!==null && tagName!==''){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    }

    const getName=(id: number)=>{
        const tag=tags.filter(t=>t.id===id)[0]
        return tag?tag.name:'';
    }

    return {tags,setTags,getName,addTag,findTag,findTagIndex,updateTag, deleteTag}
}

export {useTags}