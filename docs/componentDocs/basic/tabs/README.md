### 基础用法

Tabs 组件默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/normal.vue

### 卡片化选项卡

只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-cradHeader />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/cradHeader.vue{4}

### 卡片化标签页

只需要设置 `type` 属性为 `border-card` 就可以使选项卡改变为标签风格。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-card />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/card.vue{4}

### 标签位置

可以通过 `tab-position` 设置标签的位置

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-position />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/position.vue{11}

### 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-slot />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/slot.vue
### 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-editable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/editable.vue
### 自定义增加标签页触发器

可以通过设置 `closeable` 实现自定义增加触发器

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-tabs-closeable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/tabs/closeable.vue

### tabs Attributes

<div class="attribute-wrapper mg-16">
  <basic-tabs-attributes />
</div>

### tabs Events

<div class="attribute-wrapper mg-16">
  <basic-tabs-events />
</div>

### Tab-pane Attributes

<div class="attribute-wrapper mg-16">
  <basic-tabs-pane-attributes />
</div>