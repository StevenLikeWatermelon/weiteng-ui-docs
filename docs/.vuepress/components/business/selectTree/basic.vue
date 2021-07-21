<template>
  <div class="select-tree">
    <div class="block">
      基础单选：
      <el-select-tree v-model="value" :data="data" :props="defaultProps" />
    </div>
    <div class="block">
      禁用状态：
      <el-select-tree v-model="value" disabled :data="data" :props="defaultProps" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style scoped>
.select-tree {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>
