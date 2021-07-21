<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="140" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'index',
          desc: '唯一标志',
          type: 'string/null',
          check: '—',
          default: 'null'
        },
        {
          prop: 'popper-class',
          desc: '弹出菜单的自定义类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'show-timeout',
          desc: '展开 sub-menu 的延时',
          type: 'number',
          check: '—',
          default: '300'
        },
        {
          prop: 'hide-timeout',
          desc: '收起 sub-menu 的延时',
          type: 'number',
          check: '—',
          default: '300'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'popper-append-to-body',
          desc:
            '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
          type: 'boolean',
          check: '—',
          default: '一级子菜单：true / 非一级子菜单：false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
