### 基础用法

通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。可通过设置`limit`和`on-exceed`来限制上传文件的个数和定义超出限制时的行为。可通过设置`before-remove`来阻止文件移除操作。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/normal.vue


### 限制单个文件格式和大小

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-limit />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/limit.vue

### 文件展现形式--照片墙

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-card />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/card.vue


### 文件展现形式--缩略图

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-zoom />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/zoom.vue

### 自定义缩略图模板

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/diy.vue

### 可拖拽上传

拖拽上传照片不支持picture-card模式

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-drag />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/drag.vue

### 手动上传

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-upload-manual />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/upload/manual.vue


### Upload Attributes

<div class="attribute-wrapper mg-16">
  <basic-upload-attributes />
</div>

### Upload Events

<div class="attribute-wrapper mg-16">
  <basic-upload-events />
</div>

### Upload Slots

<div class="attribute-wrapper mg-16">
  <basic-upload-slots />
</div>

### Upload Methods

<div class="attribute-wrapper mg-16">
  <basic-upload-methods />
</div>