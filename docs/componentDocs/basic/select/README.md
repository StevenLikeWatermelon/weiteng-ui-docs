
当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/normal.vue

### 有禁用选项

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-disabled />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/disabled.vue{8,23}

### 禁用状态

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-alldisabled />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/alldisabled.vue{4}

### 可清空单选

`multiple属性仅适用于单选。`

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-clearable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/clearable.vue{4}

### 基础多选

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-multiple />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/multiple.vue{5}
### 远程搜索

`为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。`

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-select-remote />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/select/remote.vue{5}

### Select Attributes

<div class="attribute-wrapper mg-16">
  <basic-select-attributes />
</div>

### Select Events

<div class="attribute-wrapper mg-16">
  <basic-select-events />
</div>

### Select Slots

<div class="attribute-wrapper mg-16">
  <basic-select-slots />
</div>

### Select Methods

<div class="attribute-wrapper mg-16">
  <basic-select-methods />
</div>

### Option Attributes

<div class="attribute-wrapper mg-16">
  <basic-select-option-attributes />
</div>