### 基础用法

Transfer 的数据通过 `data` 属性传入。数据需要是一个对象数组，每个对象有以下属性：`key` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项的 `key` 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 `v-model` 绑定的变量赋予一个初始值。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-transfer-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/transfer/normal.vue

### 可搜索

设置 `filterable` 为 `true` 即可开启搜索模式。默认情况下，若数据项的 `label` 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 `filter-method` 定义自己的搜索逻辑。filter-method 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 `true`，则会在搜索结果中显示对应的数据项。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-transfer-filter />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/transfer/filter.vue


### 可自定义

可以使用 `titles`、`button-texts`、`render-content` 和 `format` 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 `scoped-slot` 进行自定义。对于列表底部的内容区，提供了两个具名 `slot：left-footer` 和 `right-footer`。此外，如果希望某些数据项在初始化时就被勾选，可以使用 `left-default-checked` 和 `right-default-checked` 属性。最后，本例还展示了 `change` 事件的用法。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-transfer-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/transfer/diy.vue

### 数据项属性别名

本例中的数据源没有 `key` 和 `label` 字段，在功能上与它们相同的字段名为 `value` 和 `desc`。因此可以使用 `props` 属性为 `key` 和 `label` 设置别名。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-transfer-props />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/transfer/props.vue

### transfer Attributes

<div class="attribute-wrapper mg-16">
  <basic-transfer-attributes />
</div>

### transfer Slot

<div class="attribute-wrapper mg-16">
  <basic-transfer-slots />
</div>

### transfer Scoped Slot

<div class="attribute-wrapper mg-16">
  <basic-transfer-scopedslot />
</div>


### transfer Methods

<div class="attribute-wrapper mg-16">
  <basic-transfer-methods />
</div>

### transfer Events

<div class="attribute-wrapper mg-16">
  <basic-transfer-events />
</div>