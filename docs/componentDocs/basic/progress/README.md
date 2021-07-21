### 基础用法

设置`percentage`属性即可，表示进度条对应的百分比，必填，必须在 `0-100`。通过 `format` 属性来指定进度条文字内容。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-progress-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/progress/normal.vue

### 百分比内显

可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-progress-inner />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/progress/inner.vue

### 自定义颜色

可通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-progress-color />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/progress/color.vue


### 环形进度条

可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-progress-circle />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/progress/circle.vue{6}

### Progress Attributes

<div class="attribute-wrapper mg-16">
  <basic-progress-attributes />
</div>