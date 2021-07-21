<template>
  <div class="select-tree">
    <div class="block">
      基础多选：
      <el-select-tree v-model="value" multiple node-key="id" :data="data" :props="defaultProps" />
    </div>
    <div class="block">
      用 Tag 展示已选项：
      <el-select-tree
        v-model="value"
        multiple
        node-key="id"
        :data="data"
        collapse-tags
        :props="defaultProps"
      />
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
        id: 1111111,
        children: [{
          id: 12,
          label: '二级 1-1',
          children: [{
            id: 1223,
            label: '三级 1-1-1'
          }, {
            id: 1223111,
            label: '三级 1-1-21221一级 1221一级'
          }]
        }]
      }, {
        label: '一级 2',
        id: 13,
        children: [{
          id: 12235,
          label: '二级 2-1',
          children: [{
            id: 12234,
            label: '三级 2-1-1'
          }]
        }, {
          id: 122345,
          label: '二级 2-2',
          children: [{
            id: 12237,
            label: '三级 2-2-1'
          }]
        }]
      }, {
        id: 12238,
        label: '一级 3',
        children: [{
          id: 12239,
          label: '二级 3-1',
          children: [{
            id: 122310,
            label: '三级 3-1-1'
          }]
        }, {
          id: 122311,
          label: '二级 3-2',
          children: [{
            id: 122312,
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
  justify-content: space-between;
}
.block {
  width: 48%;
}
</style>
