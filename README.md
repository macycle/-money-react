## 自动导入制定目录下的svg

#### 1.安装依赖

```js
   yarn add svg-sprite-loader
   yarn add svgo-loader
```

#### 2.封装成为一个组件
新建一个Icons组件

```js
import React from 'react';
import x from '../icons/home.svg'
console.log(x)

type Props = {
    name: string
  }

function Icon(props: Props){
    return(
        <svg className="icon">
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
}

export default Icon;
```

需要手动导入icons的所有资源，那么可以使用自动导入的方法：

```js
---Icons.js--
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}
```

如果以上__WebpackModuleApi报错，那么得手动再安装一个包：

```js
    yarn add @types/webpack-env --dev
```

配置如上，那么就可以自动导入了。我们只要在icons目录下添加新的svg，就可以在组件中使用了。