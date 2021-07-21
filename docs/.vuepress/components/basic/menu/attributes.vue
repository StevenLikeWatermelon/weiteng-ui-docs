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
          prop: 'mode',
          desc: '模式',
          type: 'string',
          check: 'horizontal / vertical',
          default: 'vertical'
        },
        {
          prop: 'collapse',
          desc: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'background-color',
          desc: '菜单的背景色（仅支持 hex 格式）',
          type: 'string',
          check: '—',
          default: '#ffffff'
        },
        {
          prop: 'text-color',
          desc: '菜单的文字颜色（仅支持 hex 格式）',
          type: 'string',
          check: '—',
          default: '#303133'
        },
        {
          prop: 'active-text-color',
          desc: '当前激活菜单的文字颜色（仅支持 hex 格式）',
          type: 'string',
          check: '—',
          default: '#409EFF'
        },
        {
          prop: 'default-active',
          desc: '当前激活菜单的 index',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'default-openeds',
          desc: '当前打开的 sub-menu 的 index 的数组',
          type: 'Array',
          check: '—',
          default: '—'
        },
        {
          prop: 'unique-opened',
          desc: '是否只保持一个子菜单的展开',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'menu-trigger',
          desc: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
          type: 'string',
          check: 'hover / click',
          default: 'hover'
        },
        {
          prop: 'router',
          desc:
            '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'collapse-transition',
          desc: '是否开启折叠动画',
          type: 'boolean',
          check: '—',
          default: 'true'
        }
      ]
    }
  }
}
</script>

<style>
</style>
