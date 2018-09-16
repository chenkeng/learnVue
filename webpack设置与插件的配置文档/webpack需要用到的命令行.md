**webpack 涉及的核心命令**

cmd窗口操作

    d: // 切换至 D 盘 
    cd 具体文件路径  // 进入具体文件夹 
       

npm的淘宝镜像 
```js 

npm install -g cnpm --registry=https://registry.npm.taobao.org   

``` 

项目初始化（生成package.json文件）
```js 
npm init -y 
``` 

npm安装webpack
```js 
npm install -D webpack npm install -D webpack-cli npm install webpack -save-dev
```  

webpack版本检测 
```js   
webpack -v 
webpack -version 
```

通过webpack 实现文件打包 

```js     
webpack --config config/webpack.config.js
```

安装webpack 某插件（clean-webpack-plugin为插件名）
```js 
npm install -D clean-webpack-plugin 
```