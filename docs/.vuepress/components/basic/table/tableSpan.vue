<template>
  <div class="full-width">
    <div class="first">
      <el-table
        :data="tableData"
        stripe
        border
        :span-method="arraySpanMethod"
        style="width: 100%"
      >
        <el-table-column
          prop="unit"
          label="单位"
          width="120"
        />
        <el-table-column
          prop="name"
          label="企业名称"
          width="180"
        />
        <el-table-column
          prop="maintenance"
          label="运维公司"
        />
        <el-table-column
          prop="industry"
          label="行业"
          width="120"
        />
        <el-table-column
          prop="abnormalTimes"
          width="120"
          label="异常次数"
        />
        <el-table-column
          prop="checkTimes"
          width="120"
          label="现场检查次数"
        />
        <el-table-column
          prop="penaltiesTimes"
          width="120"
          label="立案处罚次数"
        />
        <el-table-column
          prop="penaltiesAmount"
          width="160"
          label="处罚金额（万元）"
        />
      </el-table>
    </div>
    <div class="second" style="margin-top: 60px;">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        :span-method="objectSpanMethod"
      >
        <el-table-column
          prop="unit"
          label="单位"
          width="120"
        />
        <el-table-column
          prop="name"
          label="企业名称"
          width="180"
        />
        <el-table-column
          prop="maintenance"
          label="运维公司"
        />
        <el-table-column
          prop="industry"
          label="行业"
          width="120"
        />
        <el-table-column
          prop="abnormalTimes"
          width="120"
          label="异常次数"
        />
        <el-table-column
          prop="checkTimes"
          width="120"
          label="现场检查次数"
        />
        <el-table-column
          prop="penaltiesTimes"
          width="120"
          label="立案处罚次数"
        />
        <el-table-column
          prop="penaltiesAmount"
          width="160"
          label="处罚金额（万元）"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        unit: '经济开发区',
        name: '江苏杰盛手套有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '溧水区',
        name: '溧水天山水泥有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '-',
        penaltiesAmount: '22'
      }, {
        unit: '泗阳县',
        name: '南京岩真旺包装材料有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '开发区',
        name: '江苏昇茂木业有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '经济开发区',
        name: '江苏豪森药业集团有限公司',
        maintenance: '南京维智泰信息技术有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '-',
        penaltiesAmount: '-'
      }, {
        unit: '经济开发区',
        name: '江苏易华人造草坪有限公司',
        maintenance: '南京维智泰信息技术有限公司',
        industry: '橡塑',
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }]
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
