##   How to set webpack project  
在确保装了node的情况下
1. webpack的基本配置  
    * 新建项目 demo
    * npm init
    * 本地局部安装webpack  
        * npm install webpack --save-dev
    * 安装webpack-dev-server  
        * npm install webpack-dev-server --save-dev  
        * 此时 package 的配置文件中将有webpack和webpack-dev-server的版本名称
    * 在package.json 的scripts中增加一个快速启动webpack-dev-server服务
        * "dev": "webpack-dev-server --open --config webpack.config.js"
        * 这个时候执行 npm run dev 将会在浏览器上默认打开 127.0.0.1:8080
        * 如果想修改地址和端口
        *  "dev": "webpack-dev-server --host 188.188.188.1 --port 8888 --open --config webpack.config.js"

    ```js
        //此时的 webpack.config.js :
        var path=require("path");
        var config={
            entry:{
                main:'.main'
            },
            output:{
                path:path.join(__dirname,'./dist'),
                publicPath:'/dist',
                filename:'main.js'
            }
        };
        module.exports=config;
    ```
    ```html
        // 新建index.html
        <body>
            <div id="app">
                Hello webpack
            </div>
            <script src="/dist/main.js"></script>
        </body>
    ```

    * npm run dev    
        * 经过上面的配置，任意修改html中的内容，可以实现热更新  


2.实现css 的模块化加载   
    * css 的模块化主要安装 style-loader 和 css-loader
    * npm install css-loader --save-dev
    * npm install style-loader --save-dev
```js
    var config ={
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:[
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]            
        }
    }

    module.exports=config;
```
```css
/* style.css */

#app{
    font-size:30px;
    color:red;
}
```

```js
/* main.js */

import './style.css'

```   


* 执行 npm run dev  即可看到样式的效果
* 如果样式太多，希望单独定制打包需要安装  extract-text-webpack-plugin
* npm install extract-text-webpack-plugin --save-dev

```js
var ExtractTextPlugin=require ('extract-text-webpack-plugin');
var config={
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('main.css')
    ]
};
module.exports=config;
```
```html
// index.html

<link rel="stylesheet" type="text/css" href="/dist/main.css">
```

* .vue 文件需要 的vue-loader
    * npm install --save-dev vue
    * npm install --save-dev vue-loader
    * npm install --save-dev vue-style-loader
    * npm install --save-dev vue-template-compiler
    * npm install --save-dev vue-hot-reload-api
    * npm install --save-dev babel
    * npm install --save-dev babel-loader
    * npm install --save-dev babel-core
    * npm install --save-dev babel-plugin-transform-runtime
    * npm install --save-dev babel-preset-es2015
    * npm install --save-dev babel-runtime


```js
// webpack.config.js
var path=require("path");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var config={
    entry:{
        main:'./main'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('main.css')
    ]
};
module.exports=config;

```
* 由于用到es6 的语法， babel 需要配置文件 .babelrc
```
    {
        "presets":["es2015"],
        "plugins":["transform-runtime"],
        "comments":false
    }
```

```vue
    <template>
        <div>hello {{name}}  </div>
    </template>
    <script>
        export default{
            data(){
                return {
                    name:'superhan'
                }
            }
        }
    </script>

    <style scoped>
        div{
            color:blue;
            font-size:40px;
        }
    </style>
```
