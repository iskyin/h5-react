import React, { Component } from 'react';
import '@/style/index.scss'; // 初始化样式
import logo from '@/assets/svg/logo.svg';
import Me from '@/view/me';
import Login from '@/view/login';
import InitAppInfo from '@/config/app.js';
new InitAppInfo({ // 初始化APP信息
  serverName:'dev', // 开发环境
  version:'00.00.0001', // 版本信息
  docWidth:750, // 设计图宽度
});
class App extends Component {

  render() {
    console.log(' > · ');
    return (
      <div className="app">
        {/* <Me /> */}
        <Login />
      </div>
    );
  }

}

export default App;
