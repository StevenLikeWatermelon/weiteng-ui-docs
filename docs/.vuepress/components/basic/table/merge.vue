<template>
  <div class="full-width">
    <div class="first">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        show-summary
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
        height="400"
        :summary-method="getSummaries"
        show-summary
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
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 次'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>
