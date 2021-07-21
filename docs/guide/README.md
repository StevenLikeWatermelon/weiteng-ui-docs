---
basicName: 介绍8888
---

## 1. 关于 weiteng-ui

weiteng-ui项目旨在为公司前端提供一套统一风格、统一使用规范的组件库。让所有前端开发人员能够在组件库标准的约束下，形成统一风格的页面风格。同时针对公司业务做系统的页面组件化整理，解耦页面的功能逻辑和业务逻辑，使开发人员能够更加专注的开发业务代码而不用关注table分页、页面统一样式等额外的开发功能点，进一步提升开发效率。

weiteng-ui组件库由`基础组件`、`业务组件`两种类型库组成，其中`基础组件`基于开源项目[element](https://element.eleme.cn/#/zh-CN)，包括 el-input、el-select等基本表单组件；`业务组件`包括`el-table-pageable`,`el-select-tree`等针对微藤系统业务要求定制的组件;



## 2. 如何使用

首先安装 weiteng-ui库, 推荐使用npm安装

`npm i weiteng-ui -S`

然后, 在 main.js 中写入以下内容：
``` js
import Vue from 'vue';
import weitengui from 'weiteng-ui'
import 'weiteng-ui/lib/theme-chalk/index.css'
import App from './App.vue';

Vue.use(weitengui);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 基础组件的使用

`基础组件`和 `业务组件`采用全局安装方式， weiteng-ui库安装完成后，按文档规范引用即可。以el-input和el-table-pageable为例:

#### el-input


<div class="comp-wrapper with-code not-hidden" style="margin-top: 15px">
    <div class="comp-disply-wrapper">
        <basic-input-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/normal.vue

#### el-table-pageable


<div class="comp-wrapper with-code not-hidden" style="margin-top: 15px">
    <div class="comp-disply-wrapper">
        <business-tablePageable-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/business/tablePageable/normal.vue
