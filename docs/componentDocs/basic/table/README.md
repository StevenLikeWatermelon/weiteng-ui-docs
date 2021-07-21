用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法

当`el-table`元素中注入data对象数组后，在`el-table-column`中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/normal.vue

### 带斑马纹

stripe属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-stripe />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/stripe.vue{4}

### 带边框

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-border />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/border.vue{5}

### 带状态

可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-status />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/status.vue

### 单行显示超过显示...

默认情况下若内容过多会折行显示，若需要单行显示可以使用`show-overflow-tooltip`属性，它接受一个`Boolean`，为true时多余的内容会在 hover 时以 tooltip 的形式显示出来。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-noWrap />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/noWrap.vue{20}

### 显示索引

如果需要显示索引，可以增加一列`el-table-column`，设置type属性为index即可显示从 1 开始的索引号。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-showIndex />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/showIndex.vue{8-11}

### 格式化列内容

如果格式化内容，可以sh它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-formatter />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/formatter.vue{25}

### 固定表头

纵向内容过多时，可选择固定表头。 只要在`el-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-height />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/height.vue{5}

### 固定列

横向内容过多时，可选择固定列。 固定列需要使用`fixed`属性，它接受 `Boolean` 值或者`left` `right`，表示左边固定还是右边固定。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-fixed />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/fixed.vue{5}

### 流体高度

通过设置`max-height`属性为 `Table` 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-maxheight />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/maxheight.vue{5}

### 多级表头

只需要在 `el-table-column` 里面嵌套 `el-table-column`，就可以实现多级表头。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-multiple />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/multiple.vue

### 单行选择

只需要配置`highlight-current-row`属性即可实现单选。之后由`current-change`事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-singlecheck />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/singlecheck.vue{5}

### 多选

实现多选非常简单: 手动添加一个`el-table-column`，设`type`属性为`selection`即可。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-multiCheck />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/multiCheck.vue{12-15}

### 前端排序

实现前端排序非常简单，只要在列中设置`sortable`属性即可实现以该列为基准的排序

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-frontSort />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/frontSort.vue{31,42}

### 后端排序

实现后端排序需将`sortable`设置为`custom`，同时在 `Table` 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-endSort />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/endSort.vue{7,43}

### 前端筛选

在列中设置`filters`  `filter-method`属性即可开启该列的筛选，`filters` 是一个数组，`filter-method`是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。此外如果需要自定义表头筛选的选中过滤项，可以设置`filtered-value`。默认是多选筛选，如果需要单选，可以设置filter-multiple为false。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-filterFront />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/filterFront.vue{25-28}


### 后端筛选

后台筛选可以监听`table`上的`filter-change`事件，当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 `key` 是 `column` 的 `columnKey`，对应的 `value` 为用户选择的筛选条件的数组。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-filterEnd />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/filterEnd.vue{27-28}

### 自定义列模板

通过 `Scoped slot` 可以获取到 `row`, `column`, `$index` 的数据，用法参考 demo。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-template />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/template.vue

### 自定义表头

通过设置 `Scoped slot`来自定义表头。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-diyHeader />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/diyHeader.vue

### 表尾合计

将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-merge />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/merge.vue

### 合并行或列

通过给`table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-table-tableSpan />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/table/tableSpan.vue


### Table Attributes

<div class="attribute-wrapper mg-16">
  <basic-table-attributes />
</div>


### Table Events

<div class="attribute-wrapper mg-16">
  <basic-table-events />
</div>

### Table Methods

<div class="attribute-wrapper mg-16">
  <basic-table-methods />
</div>

### Table-column Attributes

<div class="attribute-wrapper mg-16">
  <basic-table-column-attributes />
</div>

### Table-column Attributes

<div class="attribute-wrapper mg-16">
  <basic-table-column-slots />
</div>
