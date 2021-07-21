
自带分页的table组件，table部分使用方法等同于el-table

### 基础用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-tablePageable-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/business/tablePageable/normal.vue


### 显示可设置的每页条数

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-tablePageable-sizes />
    </div>
</div>

<<< @/docs/.vuepress/components/business/tablePageable/sizes.vue{6}

### 显示直接前往

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-tablePageable-jumper />
    </div>
</div>

<<< @/docs/.vuepress/components/business/tablePageable/jumper.vue{6}

### 自定义分页展示内容

只需要在组件中传入`name`为`page`的`slot`即可实现自定义的分页内容。如不传则展示默认分页信息。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <business-tablePageable-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/business/tablePageable/diy.vue{14-19}


### tablePageable Attributes

(table部分其他Attributes等同于el-table)

<div class="attribute-wrapper">
  <business-tablePageable-attributes />
</div>

### tablePageable Events

<div class="attribute-wrapper mg-16">
  <business-tablePageable-events />
</div>

### tablePageable Methods

<div class="attribute-wrapper mg-16">
  <business-tablePageable-methods />
</div>