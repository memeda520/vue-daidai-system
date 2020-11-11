# vue-daidai-system
<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.13.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="http://momentjs.cn/">
    <img src="https://img.shields.io/badge/moment-2.28.0-green" alt="moment">
  </a>
  <a href="https://cli.vuejs.org/config/">
    <img src="https://img.shields.io/badge/vuecli-4-green" alt="vuecli">
  </a>
  <a href="https://www.npmjs.com/package/vue-cropperjs">
    <img src="https://img.shields.io/badge/vue--cropperjs-4.1.0-brightgreen">
  </a>


基于 Vue + Element UI 的后台管理系统解决方案。[线上地址](http://www.daidaibg.com/vue-daidai-system)


## 项目截图

###  登录

![image-20200915101630140](http://www.daidaibg.com/imgs/login.png)



### 切换主题 默认与暗色

![image-20200915101724869](http://www.daidaibg.com/imgs/defaut.png)

![image-20200915102708467](http://www.daidaibg.com/imgs/black.png)

## 功能

-   [x] Element UI
-   [x] 登录/注销
-   [x] 支持切换主题色
-   [x] 时间与日期格式 moment
-   [x] 裁剪上传
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡
-   [x] 表单
-   [x] 列表拖拽排序
-   [x] 404 / 403
-   [x] 三级菜单
-   [x] 自定义图标
-   [x] 可拖拽弹窗

# 开始
## 安装依赖
```
npm install
```

### 运行
```
npm run serve
npm start 
```

### 打包
```
npm run build
```


### 更换主题

![](http://www.daidaibg.com/imgs/dark.png)



```
theme-config/_config-theme.scss   //主题颜色配置（更改里面的颜色，key值最好不要动，颜色随意配置）
theme-config/_chandle.scss   //一些获取主题样式通用scss方法
theme-element  //element 如果不需要element主题根据我们自己颜色改变可以去掉
_themes.scss  //这里我配置的是 一些地方的样式根据主题改变
```



#### main.js  如果想要element根据哦我们配色改变和不需要根据我们主题改变注释与解开就可以

![image-20200915095345762](C:\Users\刘小呆\AppData\Roaming\Typora\typora-user-images\image-20200915095345762.png)







