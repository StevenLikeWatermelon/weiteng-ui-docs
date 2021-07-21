常用于展示较为复杂的提示框。如只需展示文本提示，可参考[Tooltip](/componentDocs/basic/tooltip) 气泡框

### 基础用法

`trigger`属性用于设置何时触发 `Popover`，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 `Popover` 的元素，有两种写法：使用 `slot="reference"` 的具名插槽，或使用自定义指令`v-popover`指向 `Popover` 的索引`ref`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-popover-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/popover/normal.vue

### 自定义content

利用分发取代`content`属性,可以实现更为复杂的内容

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-popover-content />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/popover/content.vue

### Popover Attributes

<div class="attribute-wrapper mg-16">
  <basic-popover-attributes />
</div>

### Popover Slot

<div class="attribute-wrapper mg-16">
  <basic-popover-slots />
</div>