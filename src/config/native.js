/**

********** native与js相互协作 原理 **********

----- 安卓 -----
native 调用 js 原理
  原生端
    -> 通过实例化的webview加载js：
      someWebview.loaderUrl('javascript:jsFun()')
  H5端
    -> 定义原生端需要调用的方法：
      function jsFun(){ js 逻辑 }

js 调用 原生端
  原生端
    -> 通过实例化的webview用addJavascriptInterface向js注入java方法：
      someWebview.addJavascriptInterface(mJsCallbackToNative, "NativeService");
      说明：mJsCallbackToNative这个对象里面定义好给js调用的方法，例如openScanner
  H5端
    -> 调用原生端注入的方法
      openScanner(需要传递的参数)

----- IOS -----
native 调用 js
  原生端
    -> 抓取页面中js对象，并获取js方法
      JSValue *jsValue = self.jsContext[@"jsfun"];
  H5端
    -> 定义原生端需要调用的方法：
      function jsFun(){ js 逻辑 }

js 调用 原生端
  原生端
    -> 在原生端window中定义一个方法，并约定参数
    window.location='openScanner://'+ 需要传递的参数
  H5端
    -> 调用原生端注入的方法
      openScanner(需要传递的参数)

**/
