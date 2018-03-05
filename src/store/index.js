import {createStore} from 'redux';

import login from './storehouse/login/login'
import me from './storehouse/me/me'

// 整个应用只能有一个Store, 用于保存数据
const store=createStore(function(){

  // storehouse:{
  //   login:login,
  //   me:me,
  // }

});

// 当前时刻的 State，可以通过store.getState()拿到。
// 一个State对应一个View。只要State相同View就相同




















export default store
