<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="格式"
      width="120"
    />
    <el-table-column
      prop="mean"
      label="含义"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="备注"
    />
    <el-table-column
      prop="example"
      label="举例"
      width="140"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'yyyy',
          mean: '年',
          desc: '',
          example: '2017'
        },
        {
          prop: 'M',
          mean: '月',
          desc: '不补0',
          example: '1'
        },
        {
          prop: 'MM',
          mean: '月',
          desc: '',
          example: '01'
        },
        {
          prop: 'W',
          mean: '周',
          desc: '仅周选择器的 format 可用；不补0',
          example: '1'
        },
        {
          prop: 'WW',
          mean: '周',
          desc: '仅周选择器的 format 可用',
          example: '01'
        },
        {
          prop: 'd',
          mean: '日',
          desc: '不补0',
          example: '2'
        },
        {
          prop: 'dd',
          mean: '日',
          desc: '',
          example: '02'
        },
        {
          prop: 'H',
          mean: '小时',
          desc: '24小时制；不补0',
          example: '3'
        },
        {
          prop: 'HH',
          mean: '小时',
          desc: '24小时制',
          example: '03'
        },
        {
          prop: 'h',
          mean: '小时',
          desc: '12小时制，须和 A 或 a 使用；不补0',
          example: '3'
        },
        {
          prop: 'hh',
          mean: '小时',
          desc: '12小时制，须和 A 或 a 使用',
          example: '03'
        },
        {
          prop: 'm',
          mean: '分钟',
          desc: '不补0',
          example: '4'
        },
        {
          prop: 'mm',
          mean: '分钟',
          desc: '',
          example: '04'
        },
        {
          prop: 's',
          mean: '秒',
          desc: '不补0',
          example: '5'
        },
        {
          prop: 'ss',
          mean: '秒',
          desc: '',
          example: '05'
        },
        {
          prop: 'A',
          mean: 'AM/PM',
          desc: '仅 format 可用，大写',
          example: 'AM'
        },
        {
          prop: 'a',
          mean: 'am/pm',
          desc: '仅 format 可用，小写',
          example: 'am'
        },
        {
          prop: 'timestamp',
          mean: 'JS时间戳',
          desc: '仅 value-format 可用；组件绑定值为number类型',
          example: '1483326245000'
        },
        {
          prop: '[MM]',
          mean: '不需要格式化字符',
          desc: '使用方括号标识不需要格式化的字符 (如 [A] [MM])',
          example: 'MM'
        }
      ]
    }
  }
}
</script>

<style>

</style>
