### 基础用法

在`el-breadcrumb`中使用`el-breadcrumb-item``标签表示从首页开始的每一级。Element` 提供了一个`separator`属性，在`el-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-breadcrumb-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/breadcrumb/normal.vue

### 自定义图标分隔符

通过设置 `separator-class` 可使用相应的 [iconfont](/componentDocs/basic/icon) 作为分隔符，注意这将使 `separator` 设置失效

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-breadcrumb-icon />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/breadcrumb/icon.vue

### Breadcrumb Attributes

<div class="attribute-wrapper mg-16">
  <basic-breadcrumb-attributes />
</div>

### Breadcrumb Item Attributes

<div class="attribute-wrapper mg-16">
  <basic-breadcrumb-item-attributes />
</div>