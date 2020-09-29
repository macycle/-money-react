import React from 'react'


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
    name: string
  } & React.SVGAttributes<SVGElement>

const Icon: React.FC<Props>=(props)=>{
    const {name,children,className, ...rest}=props
    return(
        <svg className="icon" {...rest} >
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
}

export default Icon;
