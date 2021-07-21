### 基础用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/normal.vue


### 可选择

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-checked />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/checked.vue{5}

### 懒加载

适合数据量很大、层级过多的情况。由于在点击节点时才进行该层数据的获取，默认情况下 `Tree` 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 `Tree` 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-lazy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/lazy.vue{4-5}


### 默认展开和默认选中

分别通过`default-expanded-keys`和`default-checked-keys`设置默认展开和默认选中的节点。需要注意的是，此时必须设置`node-key`，其值为节点数据中的一个字段名，该字段在整棵树中是`唯一`的。（推荐所有树节点均默认包含id字段）

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-default />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/default.vue{5-7}

### 禁用状态

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-disabeld />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/disabeld.vue{27,39}

### 树节点的选择

获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置node-key。（推荐用node-key获取）

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-select />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/select.vue

### 自定义节点内容

可以通过两种方法进行树节点内容的自定义：`render-content`和 `scoped slot`。使用`render-content`指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 [Vue 文档](https://cn.vuejs.org/v2/guide/render-function.html)。使用 `scoped slot` 会传入两个参数`node`和`data`，分别表示当前节点的 `Node` 对象和当前节点的数据。注意：由于 jsfiddle 不支持 JSX 语法，所以`render-content`示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。(推荐使用scoped slot，如使用render函数推荐使用jsx)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-render />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/render.vue


### 树节点的选择

在需要对节点进行过滤时，调用 `Tree` 实例的`filter`方法，参数为关键字。需要注意的是，此时需要设置`filter-node-method`，值为过滤函数。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-filter />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/filter.vue{14}

### 手风琴模式

通过accordion可设置手风琴模式，对于同一级的节点，每次只能展开一个

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tree-accordion />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tree/accordion.vue{5}

### Tree Attributes

<div class="attribute-wrapper mg-16">
  <basic-tree-attributes />
</div>

### Props Attributes

<div class="attribute-wrapper mg-16">
  <basic-tree-props />
</div>

### Tree Methods

<div class="attribute-wrapper mg-16">
  <basic-tree-methods />
</div>

### Tree Events

<div class="attribute-wrapper mg-16">
  <basic-tree-events />
</div>

### Tree Scoped Slot

<div class="attribute-wrapper mg-16">
  <basic-tree-slots />
</div>