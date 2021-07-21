引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

设置`active`属性，接受一个`Number`，表明步骤的 `index`，从 `0` 开始。此外，设置`finish-status`属性可以改变已经完成的步骤的状态。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/normal.vue

### 自定义步骤间距

需要定宽的步骤条时，设置`space`属性即可，它接受`Number`,单位为`px`，或者接受`String`,可为`px`或者`百分比`。如果不设置，则为自适应。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-space />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/space.vue{6}

### 有描述的步骤条

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-description />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/description.vue

### 居中的步骤条

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-center />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/center.vue{5}

### 带图标的步骤条

通过`icon`属性来设置图标，图标的类型可以参考 [Icon](/componentDocs/basic/icon) 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-icon />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/icon.vue

### 竖式步骤条

只需要在`el-steps`元素中设置`direction`属性为`vertical`即可

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-vertical />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/vertical.vue{4}

### 简洁风格

设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-steps-simple />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/steps/simple.vue{4}

### steps Attributes

<div class="attribute-wrapper mg-16">
  <basic-steps-attributes />
</div>

### step Attributes

<div class="attribute-wrapper mg-16">
  <basic-steps-step-attributes />
</div>

### step  Slot

<div class="attribute-wrapper mg-16">
  <basic-steps-step-slots />
</div>