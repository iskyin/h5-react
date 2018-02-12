# h5-react
> HTML5 网站

## Create project
```
# 创建项目
$ create-react-app [project-name]  
$ cd [project-name]/

# 运行项目
$ npm start

```
## 技术栈
```
create-react-app：脚手架
react：负责页面组件构建
sass：css扩展语言
antd-mobile：移动端组件库
react-router：负责单页应用路由部分的控制
redux：负责管理整个应用的数据流
react-redux：将react与redux这两部分相结合
redux-thunk：redux的一个中间件。
  可以使action creator返回一个function（而不仅仅是object），并且使得dispatch方法可以接收一个function作为参数，通过这种改造使得action支持异步（或延迟）操作
redux-actions：针对redux的一个FSA工具箱，可以相应简化与标准化action与reducer部分
```

## 目录结构
```
|- h5-react/
  |- config/ webpack配置文件夹
  |- build/ 打包出口文件夹
  |- node_modules/ 依赖文件
  |- public/ 静态模板文件 文件夹中的内容不会被webpack编译
    |- favicon.ico 表头图片
    |- index.html 模板html
    |- manifest.json
  |- scripts/ 启动配置
  |- src/ 开发目录
    |- assets/ 图片文件
    |- components/ 公共组件
    |- config/ 配置文件
    |- service/ 数据服务
    |- utils/ 公共js方法
    |- view/ 页面
    |- App.js
    |- App.test.js
    |- index.js 编译的入口文件
    |- registerServiceWorker.js
  |- .gitignore git配置文件
  |- package-lock.json
  |- package.json
  |- README.md  

```

## 默认所有配置是隐藏起来的，下边的命令暴露出所有配置文件
```
$ npm run eject  

# 修改build后的output位置
  > js / css / img等静态资源会默认输出到 build -> static 中，在 webpack.config.prod.js 中配置
  > output

# css在开头的cssFilename变量声明

# 在react-script中修改端口号
 > node_modules
  > react-scripts
   > scripts
    > start.js
     > DEFAULT_PORT
```

## 添加全局变量
>目的：利用cdn优化页面加载速度，在页面里引用swiper或其他类似库的script标签，同时减少了js的体积。
```
修改配置文件：
  webpack.config.prod.js
  module.exports = {  
    ...  
    externals: {  
      'swiper': 'Swiper',  
      '库的名字': '全局变量的名字'  
      // 说明：全局变量的名字要与代码中import的名字一致，要保证规范。
    },  
    ...  
  }  
```
## react 说明
```
  react生命周期相关的10个钩子函数：

    getDefaultProps()
      作用于组件类，只调用一次，返回对象用于设置默认的props，对于引用值，会在实例中共享

    getInitialState()
      作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的state，此时可以访问this.props

    componentWillMount()
      在完成首次渲染之前调用，此时仍可以修改组件的state。

    render()
      必选的方法，创建虚拟DOM，该方法具有特殊的规则：
        · 只能通过this.props和this.state访问数据
        · 可以返回null、false或任何React组件
        · 只能出现一个顶级组件（不能返回数组）
        · 不能改变组件的状态
        · 不能修改DOM的输出

    componentDidMount()
      > 真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素
      > 此时已可以使用其他类库来操作这个DOM。
      > 在服务端中，该方法不会被调用

    componentWillReceiveProps()
      > 组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。

    shouldComponentUpdate()
      > 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。
      > 在出现应用的瓶颈时，可通过该方法进行适当的优化。
      > 在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用

    componentWillUpdate()
      接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

    componentDidUpdate()
      完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

    componentWillUnmount()
      组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。

```


## 引入redux
```
注意：
  "只有遇到 React 实在解决不了的问题，你才需要 Redux 。"
                      -- Dan Abramov （Redux 作者）

可以考虑用redux的情况：
  > 某个组件的状态，需要共享
  > 某个状态需要在任何地方都可以拿到
  > 一个组件需要改变全局状态
  > 一个组件需要改变另一个组件的状态

redux 核心思想:
  Web 应用是一个状态机，视图与状态是一一对应的。
  所有的状态，保存在一个对象里面。

说明：
  Store：用于保存数据，整个应用只能有一个Store
    函数createStore用来生成 Store

  State：某个时点的数据集合
    当前时刻的State，可以通过store.getState()拿到
    > Redux规定，一个State对应一个View。只要State相同View就相同

  Action：


安装：
$ npm i --save redux
$ npm i --save react-redux




```


## 引入jquery
```
$ npm install --save-dev jquery
```

## 引入组件库ant-design
```
$ npm install antd-mobile --save
$ npm install antd babel-plugin-import --save-dev
# 配置webpack
  webpack.config.dev.js
  webpack.config.prod.js

  {
    "plugins": [
      ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
    ]
  }

# 只需从 antd-mobile 引入模块即可，无需单独引入样式。
# babel-plugin-import 会帮助你加载 JS 和 CSS
$ import { DatePicker } from 'antd-mobile';

```

## 路由
```
$ npm install -S react-router

# 把jquery的变量挂载到window上
plugins:[
  new webpack.ProvidePlugin({
    $:"jquery",
    jQuery:"jquery",
    "window.jQuery":"jquery"
  })
]


```

## 配置sass
```
$ npm install sass-loader node-sass --save-dev

修改配置文件
webpack.config.dev.js
webpack.config.prod.js
{
  loader: require.resolve('file-loader'),
  exclude: [/\.js$/, /\.html$/, /\.json$/  ,/\.scss$/  ],
  options: {
       name: 'static/media/[name].[hash:8].[ext]',
  },
},
{
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
}

```

## git
```
  > 初始化这个本地的文件夹为一个Git可以管理的仓库
    $ git init
  > 把文件添加到本地版本库
    $ git add 文件名
  > 把文件修改提交到仓库
    $ git commit -m "注释"
  > 将本地的仓库和远程的仓库进行关联
    $ git remote add origin git@github.com:lenjee/static-html.git //ssh地址
  > 更新
    $ git pull
  > 把本地库的内容推送到远程
    $ git push -u origin master

  可能会出现的错误：
    （1）本地的仓库和远程的仓库 关联命令写错
        git remote rm origin   //删除origin
        git remote add origin git@github.com/lenjee/static-html.git  //重新添加origin

    （2）没有权限更新
        在git远程上添加本地的公共秘钥
        > 生成ssh公钥
          （1）设置Git的user name和email：
            $ git config --global user.name "lenjee"$ git config --global user.email "lenjee@outlook.com"
          （2）查看是否已经有了ssh密钥：
            # cd ~/.ssh  如果没有密钥则不会有此文件夹，有则备份删除
           (3) 生成密钥
            $ ssh-keygen -t rsa -C "lenjee@outlook.com"
           (4) 按3个回车，密码为空. 最后得到了两个文件：id_rsa和id_rsa.pub , 之后打开id_rsa.pub文件将公钥复制进入github
```
