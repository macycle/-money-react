import React,{useState} from 'react';
import Layout from '../components/Layout'
function Tag() {
    const [tags,setTags]=useState<string[]>(['1','2','3','4','5','6','7','8']);
    return (
        <Layout>
            <h2>标签页</h2>
        </Layout>
    )
  }

  export default Tag;