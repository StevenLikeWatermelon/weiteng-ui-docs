### 基础用法

通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/normal.vue

### click激活

通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-click />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/click.vue

### 按钮触发下拉菜单

按钮下拉样式有两种实现方式，一种通过内置`button`组件实现。另一种通过设置`split-button`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为true即可。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-button />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/button.vue

### 菜单隐藏方式

可以`hide-on-click`属性来配置点击后是否隐藏下拉项

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-hide />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/hide.vue

### 点击事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 `key` 进行不同的操作

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-getValue />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/getValue.vue

### 不同尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。(如无特殊场景请按照标准样式使用)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dropdown-size />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dropdown/size.vue

### Dropdown Attributes

<div class="attribute-wrapper mg-16">
  <basic-dropdown-attributes />
</div>

### Dropdown Slots

<div class="attribute-wrapper mg-16">
  <basic-dropdown-slots />
</div>

### Dropdown Events

<div class="attribute-wrapper mg-16">
  <basic-dropdown-events />
</div>

### Dropdown Menu Item Attributes

<div class="attribute-wrapper mg-16">
  <basic-dropdown-item-attributes />
</div>