### 基础用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-selectTree-basic />
    </div>
</div>

<<< @/docs/.vuepress/components/business/selectTree/basic.vue

### 可搜索 筛选树节点

在需要对节点进行过滤时，设置`filterable`属性。需要注意的是，此时需要设置`filter-node-method`，值为过滤函数。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-selectTree-filterable />
    </div>
</div>

<<< @/docs/.vuepress/components/business/selectTree/filterable.vue

### 多选

设置组件的`multiple`属性，需要注意的是，此时需要设置`node-key`

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-selectTree-multiple />
    </div>
</div>

<<< @/docs/.vuepress/components/business/selectTree/multiple.vue

### attributes

<div class="attribute-wrapper mg-16">
    <business-selectTree-attributes />
</div>

### props

<div class="attribute-wrapper mg-16">
    <business-selectTree-props />
</div>

### Events

<div class="attribute-wrapper mg-16">
    <business-selectTree-events />
</div>

::: tip
选择树组件所用到的`tree`的API均与[tree树形控件](/componentDocs/basic/tree/)相同，
访问其中的`tree`组件即`this.$refs.$treeSelect.$refs.tree`, 其中`$treeSelect`是自己定义的
:::
