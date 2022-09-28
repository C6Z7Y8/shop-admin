/* 
npx create-react-app admin-react
创建react项目 admin-react为项目名

先删除初始化文件
logo 
app.js
app.css
app.test.js
index.css 全局样式


运行 npm run start 确认项目无问题
npm i axios -D


src #项目业务逻辑目录
  api
    api.js  #抽取出API请求
  assets  #静态文件存放目录，主要是图片
  components  #自定义组件存放目录
    list  #以一个目录形存放一个组件
  pages #页面组件存放目录
  style #全局样式目录
    _variable.scss  #全局样式变量文件
    _basecolor.scss #全局颜色变量存放文件
    global.scss #全局样式存放目录
  index.js #入口文件
  router #路由配置目录
  util #工具目录,一般存放项目常用文件 
    request.js # 请求封装
    tool.js #工具类
  store #redux的配置
    index.js #我们组装模块并导出store state
    user.js #user reducer
    products.js #产品reducer
  vite.config.js #配置文件,主要配置跨域代理


github 上传
  echo "# vue-shop" >> README.md 
  git init 
  git add README.md 
  git commit -m "first commit" 
  git branch -M main 
  git remote add origin git@github.com:C6Z7Y8/vue-shop.git
  git推 -u 原点主

或从命令行推送现有存储库
  git remote add origin git@github.com:C6Z7Y8/vue-shop.git
  git branch -M main 
  git push -u origin master
*/
