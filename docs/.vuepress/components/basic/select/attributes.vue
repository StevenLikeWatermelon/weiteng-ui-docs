<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="prop" label="参数" width="120" />
    <el-table-column prop="desc" label="说明" />
    <el-table-column prop="type" width="120" label="类型" />
    <el-table-column prop="check" label="可选值" />
    <el-table-column prop="default" width="100" label="默认值" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'value / v-model',
          desc: '绑定值',
          type: 'boolean / string / number',
          check: '—',
          default: '—'
        },
        {
          prop: 'multiple',
          desc: '是否多选',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'value-key',
          desc: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
          type: 'string',
          check: '—',
          default: 'value'
        },
        {
          prop: 'size',
          desc: '输入框尺寸',
          type: 'string',
          check: 'medium/small/mini',
          default: '—'
        },
        {
          prop: 'clearable',
          desc: '是否可以清空选项',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'collapse-tags',
          desc: '多选时是否将选中值按文字的形式展示',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'multiple-limit',
          desc: '多选时用户最多可以选择的项目数，为 0 则不限制',
          type: 'number',
          check: '—',
          default: '0'
        },
        {
          prop: 'name',
          desc: 'select input 的 name 属性',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'autocomplete',
          desc: 'select input 的 autocomplete 属性',
          type: 'string',
          check: '—',
          default: 'off'
        },
        {
          prop: 'placeholder',
          desc: '占位符',
          type: 'string',
          check: '—',
          default: '请选择'
        },
        {
          prop: 'filterable',
          desc: '是否可搜索',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        // {
        //   prop: 'allow-create',
        //   desc: '是否允许用户创建新条目，需配合 filterable 使用',
        //   type: 'boolean',
        //   check: '—',
        //   default: 'false'
        // },
        {
          prop: 'filter-method',
          desc: '自定义搜索方法',
          type: 'function',
          check: '—',
          default: '—'
        },
        {
          prop: 'remote',
          desc: '是否为远程搜索',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'remote-method',
          desc: '远程搜索方法',
          type: 'function',
          check: '—',
          default: '—'
        },
        {
          prop: 'loading',
          desc: '是否正在从远程获取数据',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'loading-text',
          desc: '远程加载时显示的文字',
          type: 'string',
          check: '—',
          default: '加载中'
        },
        {
          prop: 'no-match-text',
          desc: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
          type: 'string',
          check: '—',
          default: '无匹配数据'
        },
        {
          prop: 'no-data-text',
          desc: '选项为空时显示的文字，也可以使用slot="empty"设置',
          type: 'string',
          check: '—',
          default: '无数据'
        },
        {
          prop: 'popper-class',
          desc: 'Select 下拉框的类名',
          type: 'string',
          check: '—',
          default: '—'
        },
        {
          prop: 'reserve-keyword',
          desc: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
          type: 'boolean',
          check: '—',
          default: 'false'
        },
        {
          prop: 'default-first-option',
          desc:
            '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
          type: 'boolean',
          check: '-',
          default: 'false'
        },
        {
          prop: 'popper-append-to-body',
          desc:
            '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
          type: 'boolean',
          check: '-',
          default: 'true'
        },
        {
          prop: 'automatic-dropdown',
          desc: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
          type: 'boolean',
          check: '-',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style>
</style>
