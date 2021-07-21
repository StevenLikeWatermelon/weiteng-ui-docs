<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="prop"
      label="参数"
      width="120"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
    <el-table-column
      prop="type"
      width="120"
      label="类型"
    />
    <el-table-column
      prop="check"
      label="可选值"
    />
    <el-table-column
      prop="default"
      width="100"
      label="默认值"
    />
  </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    prop: "value / v-model",
                    desc: "选中项绑定值",
                    type: '-',
                    check: '-',
                    default: '-'
                },
                {
                    prop: "options",
                    desc: "可选项数据源，键名可通过 Props 属性配置",
                    type: 'array',
                    check: '-',
                    default: '-'
                },
                {
                    prop: "props",
                    desc: "配置选项，具体见下表",
                    type: 'object',
                    check: '-',
                    default: '-'
                }
            ]
        }
    }
}
</script>