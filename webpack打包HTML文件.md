**webpack 实现 HTML文件的打包与压缩**    

* 1.1 安装插件 html-webpack-plugin 
        在当前项目的根目录下安装html处理的插件 
        插件用来实现HTML文件的打包与压缩（压缩方式需要进行具体配置） 
```js
cnpm install -D html-webpack-plugin 
```

* 1.2 修改webpack.config.js文件，引入html插件包 
```js
const htmlWpPlug = require("html-webpack-plugin"); 
```

* 1.3 配置插件信息  
   
在plugins当中追加如下信息： 

```js
plugins: [     
    new htmlWpPlug({        
            filename: './cn/index.html',  // 相对于 out 文件夹的路径   
            template: "./src/index.html",      
            chunks: ['common', 'index'],         
            minify: {             
                        collapseWhitespace: true,           
                        removeComments: true       
                    },    
                }) 
        ] 

 ```     
              
    插件信息相关说明：  

* 每一个页面对应一个实例化对象，实例化中的内容需要传参，参数是一个对象 
* 参数控制  

    *  title : 生成的html文件的标题 
    *  filename : 生成的html文件的文件名，默认是index.html，此处需要书写路径 
    *  template : 指定生成的文件所依赖哪一个html文件模板（即：用哪个HTML文件生成要的 HTML文件），模板类型可以是html、jade、ejs等。 
    *  inject : inject有四个值： true body head false 用于控制script文件位置 
    *  chunks : 用于多入口文件，当拥有多个入口JS文件时，同一个HTML文件可能需要打包多 个不同的JS文件，此时借助chunks，使用数组，选择需要使用的相应JS文件即可，如上代 码当中表示index.html文件需要引入common.js 和index.js这两种入口JS文件 
    *  minify : 该 属 性 用 于 控 制 文 件 的 压 缩 ， collapseWhitespace 表 示 合 并 空 格 ， removeComments 表示去 掉注释 ，其 他的 相关 压 缩方法 可详 见此 链接 —— https://github.com/kangax/html-minifier#options-quick-reference
  
         
* 在修改完成配置文件之后，运行打包命令。 
 