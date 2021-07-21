
通过鼠标或键盘输入字符

### 基础用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/normal.vue

### 带icon的输入框

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-icon />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/icon.vue

### 复合型输入框

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-diyInput />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/diyInput.vue


### 禁用状态

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-disabled />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/disabled.vue{5}

### 可清空

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-clearable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/clearable.vue{5}

### 密码框

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-password />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/password.vue{5}

### 文本域

文本域高度可通过 `rows` 属性控制

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-textarea />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/textarea.vue{4,5}

### 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-autosize />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/autosize.vue{6,13}

### 输入长度限制

`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-input-length />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/input/length.vue{7,8}

### Input Attributes

<div class="attribute-wrapper mg-16">
  <basic-input-attributes />
</div>

### Input Events

<div class="attribute-wrapper mg-16">
  <basic-input-events />
</div>

### Input Methods

<div class="attribute-wrapper mg-16">
  <basic-input-methods />
</div>