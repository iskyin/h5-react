# h5-react
> HTML5 网站

## Install Scaffolding tools
> npm install -g create-react-app

## Create project
```
$ create-react-app 项目名称
$ cd 项目名称/
$ npm start
```

## Build Setup
```
$ npm start
  Starts the development server.

$ npm build
  Bundles the app into static files for production.

$ npm test
  Starts the test runner.

$ npm eject
  Removes this tool and copies build dependencies, configuration files and scripts into the app directory.
  If you do this, you can’t go back!

```

## 修改端口号
```
  -> react-scripts
    -> scripts
      -> start.js
        -> DEFAULT_PORT

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
