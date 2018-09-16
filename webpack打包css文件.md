**webpack 实现 CSS文件的打包与压缩**
      
1.1 基本打包 （CSS文件会和JS文件合并进行打包）    
    1. 安装 css-loader 和 style-loader  
    css-loader 和 style-loader 做两件完全不同的事情。css-loader 会遍历 CSS 文件，然后找到 url() 表 达式然后处理他们；style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。 
```js
cnpm install -D style-loader css-loader 
```
1. 修改webpack.config.js文件   

    在文件当中的module.exports 之下增加如下配置（如下代码中的module和entry等同级） 

```js
module: {     
    rules: [{           
                test: /\.css$/,           
                use: ['style-loader', 'css-loader']        
            }]  
        } 
```

代码说明：

* rules表示模块的规则，如上代码创建了这样的规则 —— 检测文件是否是css文件，如果是，则应用 use属性对应的“style-loader”和“css-loader” 

* 此处的test为正则的方法，用于匹配所有的.css文件 
1. 修改相应的JS文件（index.js、common.js等），在JS文件中引入CSS文件    

```js
import "../css/reset.css"; import "../css/index.css";
```

在修改完成配置文件之后，运行打包命令。 
    1.2 CSS文件单独打包 
    当针对JS文件进行修改时，CSS文件可能并没有发生变化，如果将CSS与JS合并在一起进行打包，也就意味着没有合理的利用浏览器的缓存（CSS 文件可以充分利用浏览器缓存），此时就会产生“将 CSS 文件 单独打包”的需求。CSS文件单独打包，需要基于CSS基本打包基础之上进行操作 

1. 安装实现CSS文件单独打包的插件   
 
```js
npm install -D mini-css-extract-plugin 
```

2. 修改配置文件，增加plugins当中的配置信息 
```js
plugins: [     
    new MiniCssExtractPlugin({         
            filename: "[name].[chunkhash:8].css",      
            chunkFilename: "[id].css"     
            }) 
        ] 
        
```        
        
在修改完成配置文件之后，运行打包命令。 