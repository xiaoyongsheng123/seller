# mysell

<p>这是一个基于vue.js2.0开发的外卖app商家模块，页面包括有商品列表页、商品详情页、商品评价页、商家详情页和商家优惠公告页。</p>

## 项目截图

<div align=center>
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/01.png" width="30%">
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/04.png" width="30%">
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/06.png" width="30%">
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/05.png" width="30%">
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/02.png" width="30%">
  <img src="https://github.com/xiaoyongsheng123/seller/blob/master/img/03.png" width="30%">
</div>

## 主要技术栈

【前端】

- `Vue`：用于构建构建用户界面的**渐进式框架**
- `vue-router`：构建单页面引用的路由系统
- `better-scroll`：iscroll的优化版，更加轻量且流畅的滑动插件
- `Stylus`：css预编译处理器
- `ES6`: 模块化处理、let、const等方法的使用

【后端】

- `Node.js`：利用 express 创建本地数据抓取服务器

【自动化构建及其他工具】
- `vue-cli`：Vue 脚手架工具，初始化项目代码和目录结构，以及 webpack 的配置
- `eslint`：代码风格检查工具，规范代码的书写

## 要点总结

### CSS布局与技巧
- `Stylus`：编写模块化的CSS
- `Flex`：弹性布局，实现常见的移动端设备的响应式布局
- `Sticky footer`：移动端经典布局(页面内容不够长，页脚会粘贴在底部；内容足够长时，页脚会被向下推送)

### Vue.js相关
- **左右列表联动**：

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
