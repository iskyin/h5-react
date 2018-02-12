import React, { Component } from 'react';
import './index.scss';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      name: '' ,
      password:'',
      tipState:false,
      tipTxt:'这里是错误提示这里是错误提示这里是错误提示这里是错误提示',
    }

  }

  handleNameChange=(e)=> {
    this.setState({
      name: e.target.value,
    });
  }

  handlePWDChange=(e)=>{
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        <div className='logo'>logo</div>
        <div className='login_div'>
            <div className='login_tit'>登录</div>
            <div className='login_list'>
              <span className='usr_name'></span>
              <input type='text' placeholder='输入你的 AD 账号' onChange={this.handleNameChange}  value={this.state.name}/>
            </div>
            <div className='login_list'>
              <span className='usr_pwd'></span>
              <input type='password' placeholder='请输入密码' onChange={this.handlePWDChange} value={this.state.password}/>
            </div>
            <div className='tip'>{this.state.tipTxt}</div>
            <div className='login_btn'>绑定并登录</div>
        </div>
      </div>
    );
  }
}

export default Login;
