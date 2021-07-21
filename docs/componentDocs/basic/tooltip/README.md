常用于展示鼠标 hover 时的简短文字提示信息。如需要展示更多内容，可参考[Popover](/componentDocs/basic/popover) 弹出框

### 基础用法

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：方向-对齐位置；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，`空`。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tooltip-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tooltip/normal.vue

### 主题

`Tooltip` 组件提供了两个不同的主题：`dark`和`light`。通过设置`effect`属性来改变主题，默认为`dark`。（无特殊场景统一使用默认主题）

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tooltip-theme />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tooltip/theme.vue

### 自定义content

用具名 `slot` 分发`content`，替代`tooltip`中的`content`属性。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tooltip-content />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tooltip/content.vue

### 禁用

通过设置`disabled`属性来改变禁用状态，默认为`false`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tooltip-disabled />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tooltip/disabled.vue

### tooltip Attributes

<div class="attribute-wrapper mg-16">
  <basic-tooltip-attributes />
</div>

### tooltip Slot

<div class="attribute-wrapper mg-16">
  <basic-tooltip-slots />
</div>