### 基础用法

设置 `value` 来指定当前显示的月份。如果 `value` 未指定，则显示当月。`value` 支持 `v-model` 双向绑定。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-calendar-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/calendar/normal.vue

### 自定义内容

通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。在 `scoped-slot` 可以获取到 `date`（当前单元格的日期）, `data`（包括 `type`，`isSelected`，`day` 属性）。详情解释参考下方的 `API` 文档。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-calendar-content />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/calendar/content.vue

::: tip
具名作用域插槽推荐使用2.6+新语法
:::

### calendar Attributes

<div class="attribute-wrapper mg-16">
  <basic-calendar-attributes />
</div>

### calendar Slot

<div class="attribute-wrapper mg-16">
  <basic-calendar-slots />
</div>
