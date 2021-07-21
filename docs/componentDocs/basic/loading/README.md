weiteng-ui 提供了两种调用 `Loading` 的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，`Loading` 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 `DOM` 中的 `body` 上。（如无特殊场景，单元素尽量使用标准化的指令方式，全局尽量采用标准化的服务用法）

### 单元素用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-loading-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/loading/normal.vue

### 自定义

可自定义加载文案、图标和背景色。在绑定了`v-loading`指令的元素上添加`element-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`element-loading-spinner`和`element-loading-background`属性分别用来设定图标类名和背景色值。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-loading-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/loading/diy.vue{4-6}

### 整页加载

当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-loading-full />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/loading/full.vue

::: warning
以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：
``` js
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
所以此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。
:::

### loading Attributes

<div class="attribute-wrapper mg-16">
  <basic-loading-attributes />
</div>