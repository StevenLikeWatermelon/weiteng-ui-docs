<template>
  <el-table
    :data="tableData"
    stripe
    border
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
      show-overflow-tooltip
      label="运维公司"
    />
    <el-table-column
      prop="industry"
      :filters="filterArr"
      :filter-method="filterHandler"
      :filter-multiple="false"
      :filtered-value="[1]"
      label="行业"
      width="120"
    />
    <el-table-column
      prop="abnormalTimes"
      width="120"
      sortable
      label="异常次数"
    />
    <el-table-column
      prop="checkTimes"
      width="120"
      label="现场检查次数"
    />
    <el-table-column
      prop="penaltiesTimes"
      width="150"
      sortable
      label="立案处罚次数"
    />
    <el-table-column
      prop="penaltiesAmount"
      width="160"
      label="处罚金额（万元）"
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      filterArr: [{
        text: '橡塑',
        value: 0
      }, {
        text: '木材',
        value: 1
      }, {
        text: '石砖',
        value: 2
      }, {
        text: '陶瓷',
        value: 3
      }, {
        text: '石油',
        value: 4
      }, {
        text: '水泥',
        value: 5
      }],
      tableData: [{
        unit: '经济开发区',
        name: '江苏杰盛手套有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        industryId: 0,
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '溧水区',
        name: '溧水天山水泥有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '水泥',
        industryId: 5,
        abnormalTimes: '2',
        checkTimes: '2',
        penaltiesTimes: '3',
        penaltiesAmount: '22'
      }, {
        unit: '泗阳县',
        name: '南京岩真旺包装材料有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '木材',
        industryId: 1,
        abnormalTimes: '3',
        checkTimes: '2',
        penaltiesTimes: '4',
        penaltiesAmount: '22'
      }, {
        unit: '开发区',
        name: '江苏昇茂木业有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '石砖',
        industryId: 2,
        abnormalTimes: '4',
        checkTimes: '2',
        penaltiesTimes: '5',
        penaltiesAmount: '22'
      }, {
        unit: '经济开发区',
        name: '江苏豪森药业集团有限公司',
        maintenance: '南京维智泰信息技术有限公司',
        industry: '陶瓷',
        industryId: 3,
        abnormalTimes: '5',
        checkTimes: '2',
        penaltiesTimes: '6',
        penaltiesAmount: '-'
      }, {
        unit: '经济开发区',
        name: '江苏易华人造草坪有限公司',
        maintenance: '南京维智泰信息技术有限公司',
        industry: '橡塑',
        industryId: 0,
        abnormalTimes: '6',
        checkTimes: '2',
        penaltiesTimes: '7',
        penaltiesAmount: '22'
      }]
    }
  },
  methods: {
    filterHandler(value, row, column) {
      return value === row['industryId']
    }
  }
}
</script>
