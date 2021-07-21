
### 基础用法

需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 `Dialog`,使用`sync`双向绑定。`Dialog `分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。此外，本例还展示了`before-close`的用法。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dialog-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dialog/normal.vue

::: tip
`before-close` 仅当用户通过点击关闭图标或遮罩关闭 `Dialog` 时起效。如果你在 `footer` 具名 `slot` 里添加了用于关闭 `Dialog` 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。
:::

### 自定义内容

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dialog-diy />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dialog/diy.vue

### 嵌套的 Dialog

正常情况下，我们不建议使用嵌套的 `Dialog`，如果需要在页面上同时显示多个 `Dialog`，可以将它们平级放置。对于实在需要嵌套 `Dialog` 的场景，我们提供了`append-to-body`属性。将内层 `Dialog` 的该属性设置为 `true`，它就会插入至 `body` 元素上，从而保证内外层 `Dialog` 和遮罩层级关系的正确。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dialog-loop />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dialog/loop.vue

### 居中布局

将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。`Dialog` 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。(如无特殊场景，请按照标准格式使用Dialog)

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-dialog-center />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/dialog/center.vue{9}

::: tip
`Dialog` 的内容是懒渲染的，即在第一次被打开之前，传入的默认 `slot` 不会被渲染到 `DOM` 上。因此，如果需要执行 `DOM` 操作，或通过 `ref` 获取相应组件，请在 `opened` 事件回调中进行。
:::

::: tip
如果 `visible` 属性绑定的变量位于 `Vuex` 的 `store` 内，那么 `.sync `不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 `Dialog` 的 `open` 和 `close` 事件，在事件回调中执行 `Vuex` 中对应的 `mutation` 更新 `visible` 属性绑定的变量的值。
:::

### Dialog Attributes

<div class="attribute-wrapper mg-16">
  <basic-dialog-attributes />
</div>

### Dialog Slot

<div class="attribute-wrapper mg-16">
  <basic-dialog-slots />
</div>

### Dialog Events

<div class="attribute-wrapper mg-16">
  <basic-dialog-events />
</div>