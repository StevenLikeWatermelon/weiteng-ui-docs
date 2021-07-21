从屏幕边缘弹出类似Dialog的弹框，适用于一些侧边全局消息等场景。

### 基础用法

需要设置 `visible` 属性，它的类型是 `boolean`,当为 `true` 时显示 `Drawer`。`Drawer` 分为两个部分：`title` 和 `body`，`title` 需要具名为 `title` 的 `slot`, 也可以通过 `title` 属性来定义，默认值为空。需要注意的是, `Drawer` 默认是从右往左打开, 当然可以设置对应的 `direction`, 详细请参考 `direction` 用法 最后，本例还展示了 `before-close` 的用法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-drawer-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/drawer/normal.vue

### 不添加 Title

当遇到不需要 `title` 的场景时, 可以通过 `withHeader` 这个属性来关闭掉 `title` 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 `title` 的值

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-drawer-hide />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/drawer/hide.vue{9}

### 自定义content

利用插槽取代`content`属性,可以实现更为复杂的内容

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-drawer-content />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/drawer/content.vue

### loop

`Drawer` 组件也拥有多层嵌套的方法

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-drawer-loop />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/drawer/loop.vue

::: tip
`Draw` 的内容是懒渲染的，即在第一次被打开之前，传入的默认 `slot` 不会被渲染到 `DOM` 上。因此，如果需要执行 `DOM` 操作，或通过 `ref` 获取相应组件，请在 `opened` 事件回调中进行。
:::

::: tip
`Drawer` 提供一个 `destroyOnClose` API, 用来在关闭 `Drawer` 时销毁子组件内容, 例如清理表单内的状态, 在必要时可以将该属性设置为 `true` 用来保证初始状态的一致性
:::

### drawer Attributes

<div class="attribute-wrapper mg-16">
  <basic-drawer-attributes />
</div>

### drawer Slot

<div class="attribute-wrapper mg-16">
  <basic-drawer-slots />
</div>

### drawer events

<div class="attribute-wrapper mg-16">
  <basic-drawer-events />
</div>