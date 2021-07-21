<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="140" />
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
          prop: 'type',
          desc:
            '菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'size',
          desc: '菜单尺寸，在split-button为 true 的情况下也对触发按钮生效',
          type: 'string',
          check: 'large / small / mini',
          default: '—'
        },
        {
          prop: 'split-button',
          desc: '下拉触发元素呈现为按钮组',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'placement',
          desc: '菜单弹出位置',
          type: 'string',
          check: 'top/top-start/top-end/bottom/bottom-start/bottom-end',
          default: 'bottom'
        },
        {
          prop: 'trigger',
          desc: '触发下拉的行为',
          type: 'string',
          check: 'hover, click',
          default: 'hover'
        },
        {
          prop: 'hide-on-click',
          desc: '是否在点击菜单项后隐藏菜单',
          type: 'boolean',
          check: '—',
          default: 'true'
        },
        {
          prop: 'show-timeout',
          desc: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
          type: 'number',
          check: '—',
          default: '250'
        },
        {
          prop: 'hide-timeout',
          desc: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
          type: 'number',
          check: '—',
          default: '150'
        },
        {
          prop: 'tabindex',
          desc: 'Dropdown 组件的 tabindex',
          type: 'number',
          check: '—',
          default: '0'
        }
      ]
    }
  }
}
</script>

<style>
</style>
