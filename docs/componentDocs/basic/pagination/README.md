分页组件无特殊场景，尽量使用标准化的基础用法。

### 基础用法

设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为下一页，`pager`表示页码列表，除此以外还提供了`jumper`和`total`，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示总条目数，`size`用于设置每页显示的页码数量。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/normal.vue

### 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过pager-count属性可以设置最大页码按钮数。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-max />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/max.vue{4}

### 不带背景色

设置`background`属性为`false`可以为分页按钮去掉背景色。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-noColor />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/noColor.vue{3}

### 小型分页

只需要一个`small`属性，它接受一个`Boolean`，默认为`false`，设为`true`即可启用。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-small />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/small.vue{3}

### 附加功能

此例是一个完整的用例，使用了`size-change`和`current-change`事件来处理页码大小和当前页变动时候触发的事件。`page-sizes`接受一个整型数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]`表示四个选项，每页显示 `100` `个，200` `个，300` 个或者 `400` 个。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-complete />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/complete.vue{3}

### 当只有一页时隐藏分页

当只有一页时，通过设置 `hide-on-single-page` 属性来隐藏分页。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-pagination-hide />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/pagination/hide.vue{5}

### pagination Attributes

<div class="attribute-wrapper mg-16">
  <basic-pagination-attributes />
</div>

### pagination Events

<div class="attribute-wrapper mg-16">
  <basic-pagination-events />
</div>

### pagination Slot

<div class="attribute-wrapper mg-16">
  <basic-pagination-slots />
</div>