<template>
  <div class="select-tree">
    <el-select-tree
      v-model="value"
      filterable
      :filter-node-method="getMyFilter"
      :data="data"
      :props="defaultProps"
    />
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
  },
  methods: {
    getMyFilter(value, data, node) {
      return value ? data.label.includes(value) : true
    }
  }
}
</script>

<style scoped>
</style>
