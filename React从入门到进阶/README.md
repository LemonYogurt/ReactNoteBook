reactjs.cn：中文文档

React Native和React Canvas也是基于React衍生出来的
它是专注于UI这一层

React通过自己实现的DOM Diff算法，计算出虚拟页面当前版本和新版本之间的差异，
最小化重绘，避免不必要的DOM操作，解决了这两个公认的前端性能瓶颈，实现高效的DOM渲染。

React Diff算法说明：
segmentfault.com/a/1190000000606216

guoyongfeng.github.io/idoc/html/技术分享/React技术分享.html

react-with-addons.js：内部封装了React的一些组件

在React 0.13版本的时候，只有三个文件：
react.js
react-with-addons.js
JSXTransformer.js

在React 0.14版本的时候，将react.js文件一分为3：
react.js react-dom.js react-dom-server.js

react.js是react核心库

react-with-addons.js：也拆分出了很多的包

bowser.js的作用是将JSX语法转为JS语法：
JSX语法，和JS不兼容，凡是使用JSX的地方，都要加上type="text/babel"
在0.13版本的时候，是type="text/jsx"

