::: tip
`messageBox` 适合展示较为简单的弹框内容。如果需要弹出较为复杂的内容，请使用 `Dialog。`
:::

### 基础用法

调用$alert方法即可打开消息提示

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/normal.vue

### 确认消息

调用$confirm方法即可打开消息提示

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-confirm />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/confirm.vue

### 自定义

以上2个方法都是对`$msgbox`方法的再包装。本例直接调用`$msgbox`方法，使用了`showCancelButton`字段，用于显示取消按钮。另外可使用`cancelButtonClass`为其添加自定义样式，使用`cancelButtonText`来自定义按钮文本（Confirm 按钮也具有相同的字段，详见api）。此例还使用了`beforeClose`属性，它的值是一个方法，会在 `MessageBox` 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：`action`、`instance`和`done`方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加`loading`状态等；此时若需要关闭实例，可以调用`done`方法（若在`beforeClose`中没有调用`done`，则实例不会关闭）

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/diy.vue

::: tip
弹出层的内容可以是 `VNode`，所以我们能把一些自定义组件传入其中。每次弹出层打开后，`Vue` 会对新老 `VNode` 节点进行比对，然后将根据比较结果进行最小单位地修改视图。请注意这也许会造成弹出层内容区域的组件没有重新渲染，需要给组件加上不同的`key`
:::

### 使用 HTML 片段

使用 `center` 属性让文字水平居中。(如无特殊场景，请按照标准格式使用messageBox)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-html />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/html.vue

::: danger
`messageBox` 属性虽然支持传入 `HTML` 片段，但是在网站上动态渲染任意 `HTML` 是非常危险的，因为容易导致 `XSS` 攻击。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，永远不要将用户提交的内容赋值给 `message` 属性
:::

### 区分取消与关闭

默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和callback回调的参数均为 `cancel`。如果将`distinguishCancelAndClose`属性设置为 `true`，则上述两种行为的参数分别为 `cancel` 和 `close`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-distinguish />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/distinguish.vue

### 居中布局

将 `center` 设置为 `true` 即可开启居中布局 (如无特殊场景，请尽量使用标准布局样式)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-messageBox-center />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/messageBox/center.vue

### 全局方法

* `$alert(message, title, options)` 或 `$alert(message, options)`
* `$confirm(message, title, options)` 或 `$confirm(message, options)`
* `$msgbox(options)`

### options Attributes

<div class="attribute-wrapper mg-16">
  <basic-messageBox-attributes />
</div>