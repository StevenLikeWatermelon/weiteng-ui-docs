当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择

### 基础用法

只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。通过`props.expandTrigger`可以定义展开子级菜单的触发方式。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/normal.vue

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的<br>
本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-disable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/disable.vue

### 可清空

通过 clearable 设置输入框可清空

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-clearable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/clearable.vue

### 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。<br>属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-showLast />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/showLast.vue

### 多选

可通过`props.multiple = true`来开启多选模式<br>在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用`collapse-tags`来折叠Tag

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-multiple />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/multiple.vue

### 选择任意一级选项

在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。<br>可通过 `props.checkStrictly = true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-either />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/either.vue

### 动态加载

当选中某一级时，动态加载该级下的选项。<br>
通过`lazy`开启动态加载，并通过`lazyload`来设置加载数据源的方法。`lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)，否则会简单的以有无子节点来判断是否为叶子节点。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-dynamic />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/dynamic.vue

### 可搜索

可以快捷地搜索选项并选择。<br>
将`filterable`赋值为true`即可打开搜索功能，默认会匹配节点的`label`或所有父节点的`label(由`show-all-levels`决定)中包含输入值的选项。你也可以用`filter-method`自定义搜索逻辑，接受一个函数，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-search />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/search.vue

### 自定义节点内容

可以自定义备选项的节点内容<br>
可以通过`scoped slot`对级联选择器的备选项的节点内容进行自定义，scoped slot会传入两个字段 `node` 和 `data`，分别表示当前节点的 Node 对象和数据。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-cascader-custom />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/cascader/custom.vue

### Cascader Attributes

<div class="attribute-wrapper mg-16">
    <basic-cascader-attributes />
</div>

### Cascader Events

<div class="attribute-wrapper mg-16">
    <basic-cascader-events />
</div>

### Cascader Methods

<div class="attribute-wrapper mg-16">
    <basic-cascader-methods />
</div>

### Cascader Slots

<div class="attribute-wrapper mg-16">
    <basic-cascader-slots />
</div>

### Props

<div class="attribute-wrapper mg-16">
    <basic-cascader-props />
</div>