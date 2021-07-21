
### 基础用法

`weiteng-ui` 注册了一个`$message`方法用于调用，方法接受的参数详见下面api

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-message-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/message/normal.vue

### 不同状态

当需要自定义更多属性时，`Message` 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`message`的值传入。同时，我们也为 `Message` 的各种 `type` 注册了方法，可以在不传入`type`字段的情况下像示例中那样直接调用。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-message-status />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/message/status.vue

### 可关闭

默认的 `Message` 是不可以被人工关闭的，如果需要可手动关闭的 `Message`，可以使用`showClose`字段。此外，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 `3000` 毫秒。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-message-closeable />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/message/closeable.vue

### 文字居中

使用 `center` 属性让文字水平居中。(如无特殊场景，请按照标准格式使用message)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-message-center />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/message/center.vue

### 使用 HTML 片段

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-message-html />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/message/html.vue

::: danger
`message` 属性虽然支持传入 `HTML` 片段，但是在网站上动态渲染任意 `HTML` 是非常危险的，因为容易导致 `XSS` 攻击。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，永远不要将用户提交的内容赋值给 `message` 属性
:::

### options Attributes

<div class="attribute-wrapper mg-16">
  <basic-message-attributes />
</div>

### message Methods

调用 `Message` 或 `this.$message` 会返回当前 `Message` 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

<div class="attribute-wrapper mg-16">
  <basic-message-methods />
</div>