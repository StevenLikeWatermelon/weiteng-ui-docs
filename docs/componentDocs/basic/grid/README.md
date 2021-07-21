为了规范化页面自适应布局，weiteng-ui参考bootstrap栅格系统，通过基础的 24 分栏，迅速简便地创建自适应布局。

### 基础布局

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/normal.vue


### 分栏间隔

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-gutter />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/gutter.vue{3}

### 混合布局

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-mixed />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/mixed.vue

### 分栏偏移

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-offset />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/offset.vue

### 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-flex />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/flex.vue
### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-grid-bootstrap />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/grid/bootstrap.vue
### 基于断点的隐藏类

组件额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：

``` js
import 'weiteng-ui/lib/theme-chalk/display.css';
```

包含的类名及其含义为：

*1.* `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏

*2*. `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏

*3*. `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏

*4*. `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏

*5*. `hidden-md-only` - 当视口在 `md` 尺寸时隐藏

*6*. `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏

*7*. `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏

*8*. `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏

*9*. `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏

*10*. `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏

*11*. `hidden-el-only` - 当视口在 `xl` 尺寸时隐藏

### Row Attributes

<div class="attribute-wrapper mg-16">
  <basic-grid-row-attributes />
</div>

### Col Attributes

<div class="attribute-wrapper mg-16">
  <basic-grid-col-attributes />
</div>
