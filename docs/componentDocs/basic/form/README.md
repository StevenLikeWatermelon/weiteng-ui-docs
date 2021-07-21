由输入框、选择器、单选框、多选框等控件组成，可用于生成静态/动态表单

### 基础表单

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/normal.vue


### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-line />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/line.vue{3}

### 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`right`，当设为 `top` 时标签会置于表单域的顶部

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-align />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/align.vue{10}


### 表单验证

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `Form-Item` 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-validate />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/validate.vue{4-5}

### 自定义校验规则

本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-diyValidate />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/diyValidate.vue

### 动态增减表单项和表单规则

除了在 `Form` 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-dynamic />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/dynamic.vue{18-33}

### 表单内组件尺寸控制

通过设置 `Form` 上的 `size` 属性可以使该表单内所有可调节大小的组件继承该尺寸。`Form-Item` 也具有该属性。(如无特殊情况。需采用标准大小)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-form-zoom />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/form/zoom.vue{6}


### Form Attributes

<div class="attribute-wrapper mg-16">
  <basic-form-attributes />
</div>

### Form Events

<div class="attribute-wrapper mg-16">
  <basic-form-events />
</div>

### Form Methods

<div class="attribute-wrapper mg-16">
  <basic-form-methods />
</div>

### Form-Item Attributes

<div class="attribute-wrapper mg-16">
  <basic-form-item-attributes />
</div>

### Form-Item Scoped Slot

<div class="attribute-wrapper mg-16">
  <basic-form-item-scoped />
</div>

### Form-Item Slots

<div class="attribute-wrapper mg-16">
  <basic-form-item-slots />
</div>

### Form-Item Methods

<div class="attribute-wrapper mg-16">
  <basic-form-item-methods />
</div>