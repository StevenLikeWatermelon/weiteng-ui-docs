### 基础用法

结合使用`el-carousel`和`el-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`el-carousel-item`标签中。默认情况下，在鼠标 `hover` 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-carousel-normal />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/carousel/normal.vue

### 外部切换

`indicator-position`属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为`outside`则会显示在外部；设置为`none`则不会显示指示器。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-carousel-out />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/carousel/out.vue{3}

### 切换箭头

`arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 `hover` 到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-carousel-arrow />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/carousel/arrow.vue{3}

### 卡片化

将`type`属性设置为`card`即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-carousel-card />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/carousel/card.vue{5}

### 垂直方向

默认情况下，`direction` 为 `horizontal`。通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。

<div class="comp-wrapper mg-16 with-code">
    <div class="comp-disply-wrapper">
        <basic-carousel-vertical />
    </div>
</div>

<<< @/docs/.vuepress/components/basic/carousel/vertical.vue{5}

### Carousel Attributes

<div class="attribute-wrapper mg-16">
  <basic-carousel-attributes />
</div>

### Carousel Events

<div class="attribute-wrapper mg-16">
  <basic-carousel-events />
</div>

### Carousel Methods

<div class="attribute-wrapper mg-16">
  <basic-carousel-methods />
</div>

### Carousel-Item Attributes

<div class="attribute-wrapper mg-16">
  <basic-carousel-item-attributes />
</div>