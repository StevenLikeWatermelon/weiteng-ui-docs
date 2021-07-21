<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    default-expand-all
  >
    <el-table-column
      type="expand"
    >
      <template slot-scope="props">
        <div v-if="props.$index == 0">
          <p>
            <span class="mg-left-15 font-bold">date:</span><span class="mg-left-15">单元格代表的日期</span>
          </p>
          <p>
            <span class="mg-left-15 font-bold">data:</span><span class="mg-left-15">{ type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd</span>
          </p>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="prop"
      label="名称"
      width="160"
    />
    <el-table-column
      prop="desc"
      label="说明"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          prop: 'dateCell',
          desc: '定义日历单元格中显示的内容'
        }
      ]
    }
  }
}
</script>

<style>

</style>
