## 规范

本文档列出的规范继承了VUE官方的风格指南规范文档，在项目应严格遵守列出的相关规范，包含项目结构规范、命名规范、注释规范、编码规范、样式规范等。

## 目录结构

``` js
├── public                         # 纯静态资源以及index入口目录
│    ├── favicon.ico               # 项目icon
│    ├── index.html                # index.html入口文件
├── src                            # 项目代码目录
│    ├── api                       # api接口目录
│    ├── assets                    # 静态资源目录
│    │    ├── css                  # css资源
│    │    ├── images               # 图片资源
│    │    ├── js                   # 静态脚本资源
│    │    └── video                # 视频资源
│    ├── components                # 全局组件目录
│    ├── icons                     # 自动渲染svg目录。详见注释
│    ├── router                    # vue-router及相关权限配置目录
│    ├── store                     # vuex目录
│    ├── views                     # 视图文件目录
│    │    ├── error                # 错误处理页面
│    │    ├── login                # 登陆处理页面
│    │    ├── Frame.vue            # 项目布局文件
│    │    └── steps.js             # 引导页配置项
│    ├── App.vue                   # Vue根实例文件
│    └── main.js                   # 项目入口文件
├── .editorconfig                  # 编辑器书写规范配置文件
├── .env.development               # env环境变量
├── .env.production                # production环境变量
├── .eslintrc.js                   # eslint规范配置项
├── babel.config.js                # babel配置文件
├── jsconfig.json                  # vscode兼容vue-cli所需配置文件
├── package.json                   # 项目配置文件
├── README.md                      # 项目markdown文档
└── vue.config.js                  # vue-cli配置文件

```
## vue文件规范

### 基本结构

``` html
<template>
  <div>template</div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
    }
  },
  mounted: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
```

### 方法声明顺序

``` js
export default {
  name: '',
  components: {
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created: {},
  activated: {},
  updated: {},
  mounted: {},
  methods: {},
  beforeRouteUpdate: {}
}
```

### 标签属性自动换行
``` html
<!-- 推荐 -->
<a
    :href="item.url"
    target="_blank"
    @click="download"
>
    <img
    src="../image"
    alt="img"
    >
</a>
```
``` html
<!-- 不推荐 -->
<a :href="item.url" target="_blank" @click="download">
    <img src="../image" alt="img">
</a>
```

## 命名规范

### views文件夹命名规范

在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

### js文件命名规范

所有的.js文件都遵循横线连接 (kebab-case)
``` js
import sendMessage from '@/utils/post-message'
```

### 组件命名规范

组件名应该始终是多个单词的，根组件 App 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外，命名遵PascalCase(单词首字母大写命名) 约定。
``` js
export default {
  // 好例子
  name: 'SchemeDetail',
  components: {
  }
}
```
``` js
export default {
  // 反例
  name: 'Detail',
  components: {
  }
}
```

### props命名规范

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。
``` js
// 好例子
props: {
greetingText: {
    type: String,
    required: true,
    validator: function(value) {
    return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
    ].indexOf(value) !== -1
    }
}
},
```
``` js
// 例子
props: {
greetingText: String
},
```
``` js
// 反例
props: ['greetingText']
```
## 注释规范

代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。  

以下情况，务必添加注释: 
* 公共组件使用说明  
* 各组件中重要函数或者类说明    
* 复杂的业务逻辑处理说明    
* 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述     
* 注释块必须以`/**（至少两个星号）开头*/`   
* 单行注释使用//    
* 多重 if 判断语句  

## 编码规范

使用ES6风格编码

### 变量定义

* 定义变量使用 `let`
* 定义常量使用 `const`

### 字符串定义

静态字符串一律使用单引号或反引号，动态字符串使用反引号
``` js
// 好例子
const a = 'foobar'
const b = `foo${a}bar`
const c = 'foobar'
```
``` js
// 反例
const a = 'foobar'
const b = 'foo'+ a +'bar'
```

### 解构赋值

数组的解构赋值
``` js
// 好例子
const arr = [1, 2, 3, 4]
const [first, second] = arr
```
``` js
// 反例
const arr = [1, 2, 3, 4]
const first = arr[0]
const second = arr[1]
```

方法传参的解构赋值
``` js
// 好例子
getFullName({ firstName, lastName }) {}
```
``` js
// 反例
getFullName(user) {
    const firstName = user.firstName
    const secondName = user.secondName
}
```

### 拷贝数组

使用扩展运算符（...）拷贝数组
``` js
// 好例子
const items = [1, 2, 3, 4, 5]
const itemsCopy = [...items]
```
``` js
// 反例
const items = [1, 2, 3, 4, 5]
const itemsCopy = items
```

### 箭头函数

``` js
render: (h, row, index) => {
    return  <a
              onClick={() => {this.toDetail}}
            >
              {row.name}
            </a>
}
```

### 模块

如果模块只有一个输出值，就使用 export default，如果模块有多个输出值，就不使用 export default，export default 与普通的 export 不要同时使用
``` js
// 好例子
import moment from "moment";
```
``` js
// 反例
import * as moment from "moment";
```

如果模块默认输出一个函数，函数名的首字母应该小写
``` js
function makeStyle() {}

export default makeStyle
```

如果模块默认输出一个对象，对象名的首字母应该大写
``` js
const StyleGuide = {
  es6: {}
}
export default StyleGuide
```

## vue编码规范

### 指令规范

指令有缩写一律采用缩写形式
``` html
<!-- 推荐 -->
<div
:class="{'show-left': true}"
@click="getData"
/>
```
``` html
<!-- 不推荐 -->
<div
v-bind:class="{'show-left': true}"
v-on:click="getData"
/>
```
### v-for

v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
``` html
<!-- 推荐 -->
<ul>
    <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
    </li>
</ul>
```
``` html
<!-- 不推荐 -->
<ul>
    <li v-for="todo in todos">
    {{ todo.text }}
    </li>
</ul>
```

### 避免v-if和v-for同时使用

* 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。
* 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)

### 计算属性

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。
``` js
<!-- 反例 -->
<span>
    {{
    fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
    }}
</span>
```
``` html
<template>
  <div>
    <span>
      {{
        normalizedFullName
      }}
    </span>
  </div>
</template>

<script>
export default {
  // 好例子
  name: 'Detail',
  data() {
    return {
      fullName: ''
    }
  },
  computed: {
    normalizedFullName: function() {
      return this.fullName.split(' ').map(function(word) {
        return word[0].toUpperCase() + word.slice(1)
      }).join(' ')
    }
  }
}
</script>
```

应该把复杂计算属性分割为尽可能多的更简单的 property
``` js
export default {
  name: 'Detail',
  data() {
    return {
      manifactureCost: 0,
      profitMargin: 0,
      discountPercent: 0
    }
  },
  computed: {
    // 反例
    price: function() {
      var basePrice = this.manifactureCost / (1 - this.profitMargin)
      return (
        basePrice - basePrice * (this.discountPercent || 0)
      )
    }
  }
}
```
``` js
computed: {
    // 好例子
    basePrice: function() {
      return this.manifactureCost / (1 - this.profitMargin)
    },
    discount: function() {
      return this.basePrice * (this.discountPercent || 0)
    },
    finalPrice: function() {
      return this.basePrice - this.discount
    }
},
```
## 样式规范

### 为样式设置作用域

对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的
``` html
// 好例子
<style lang="scss" scoped>
.container {
  padding: 15px;
}
</style>
```
``` html
// 反例
<style lang="scss">
.container {
  padding: 15px;
}
</style>
```

### 元素选择器应该避免在 scoped 中出现

在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的
``` html
<template>
  <button class="btn">按钮</button>
</template>

<script>
export default {
  name: 'Detail',
}
</script>

<style lang="scss">
/** 好例子 */
.btn {
  color: red;
}
</style>
```
``` html
<template>
  <button>按钮</button>
</template>

<script>
export default {
  name: 'Detail',
}
</script>

<style lang="scss">
/** 反例 */
button {
  color: red;
}
</style>
```