import {createStore} from 'redux';

// 整个应用只能有一个Store, 用于保存数据
const store=createStore(function(){

});

// 当前时刻的 State，可以通过store.getState()拿到。
// 一个State对应一个View。只要State相同View就相同
