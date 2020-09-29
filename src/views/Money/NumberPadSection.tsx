import React from 'react'
import {Wrapper} from './NumberPadSection/Wrapper'
import {generateOutput} from './NumberPadSection/generateOutput'

type Props={
    value:string;
    onChange:(value:any)=>void;
    onOk?:()=>void;
}

const NumberPadSection: React.FC<Props>=(props)=>{
    
    const output=props.value.toString();
    const setOutput=(output: string)=>{    //保存在当前组件；而且setOutput是一个普通的函数，不是useState的那个函数；
        let value;
        if(output.length>16){
            value=parseFloat(output.slice(0,16));
        }else if(output.length===0){
            value=0;
        }else{
            value=output;
        }
        props.onChange(value)  //通知父组件要修改参数。
    }
    const onClickButtonWrapper=(e: React.MouseEvent)=>{
        const text=(e.target as HTMLButtonElement).textContent ;

        if(text===null){return ;}

        if(text==='OK'){
            if(props.onOk){props.onOk()}
            return ;
        }

        if(['.','0','1','2','3','4','5','6','7','8','9','删除','清空'].indexOf(text) >= 0){
           console.log(text);
            setOutput(generateOutput(text,output))
        }
    }

    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>    
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Wrapper>
    )
}

export {NumberPadSection};