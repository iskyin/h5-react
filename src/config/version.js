// 开发 服务器 110
var HOST_DEV = 'http://ehrdev.vanke.com';
// 测试 服务器 500
var HOST_TEST = 'http://ehrtest.vanke.com';
// 正式 服务器  800
var HOST_PROD = 'http://lms-app.vanke.com';
// 外网 服务器 用于优测 对应HOST_TEST外网  500
var HOST_TEST_OUTSIDE = 'http://120.78.55.241:8080';

// 切换接口指向地址时 修改此变量
var HOST_ADDR = HOST_PROD;

// 版本
var VERSION = '00.00.0096';

// 配置 服务器地址
var HOST = HOST_ADDR + '/lms-service';

// 登录
var LOGIN_DEV_URL = "/user/login";

// 配置 登录接口
var LOGIN_URL = LOGIN_DEV_URL;

// 系统 ios / android
var CLIENTOSTYPE = '';
