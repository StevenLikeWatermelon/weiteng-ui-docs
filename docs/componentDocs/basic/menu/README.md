### 垂直菜单栏

导航菜单默认为`垂直模式`，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。`Menu` 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的`背景色`、菜单的`文字颜色`和当前`激活菜单的文字颜色`。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-menu-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/menu/normal.vue

### 水平菜单栏

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-menu-horizontal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/menu/horizontal.vue{5}

### 自定义背景色/文字颜色/激活文字颜色

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-menu-color />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/menu/color.vue{6-8}

### 菜单分组

通过`el-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 `slot` 来设定。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-menu-group />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/menu/group.vue

### 折叠

通过`collapse`属性可实现水平折叠收起菜单（仅在 `mode` 为 `vertical` 时可用）

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-menu-collapse />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/menu/collapse.vue


### Menu Attributes

<div class="attribute-wrapper mg-16">
  <basic-menu-attributes />
</div>

### Menu Methods

<div class="attribute-wrapper mg-16">
  <basic-menu-methods />
</div>

### Menu Events

<div class="attribute-wrapper mg-16">
  <basic-menu-events />
</div>

### SubMenu Attribute

<div class="attribute-wrapper mg-16">
  <basic-menu-submenu-attributes />
</div>

### Menu-Item Attribute

<div class="attribute-wrapper mg-16">
  <basic-menu-item-attributes />
</div>

### Menu-Group Attribute

<div class="attribute-wrapper mg-16">
  <basic-menu-group-attributes />
</div>