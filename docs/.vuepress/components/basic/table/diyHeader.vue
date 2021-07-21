<template>
  <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%"
  >
    <el-table-column
      label="日期"
      width="180"
    >
      <template slot="header">
        <el-button
          size="mini"
        >button</el-button>
      </template>
      <template slot-scope="scope">
        <span style="margin-left: 10px;font-weight: 700">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位"
      width="120"
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
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        unit: '经济开发区',
        date: '2020-07-28',
        name: '江苏杰盛手套有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '溧水区',
        date: '2020-07-28',
        name: '溧水天山水泥有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '1',
        checkTimes: '2',
        penaltiesTimes: '-',
        penaltiesAmount: '22'
      }, {
        unit: '泗阳县',
        date: '2020-07-28',
        name: '南京岩真旺包装材料有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '开发区',
        date: '2020-07-28',
        name: '江苏昇茂木业有限公司',
        maintenance: '南京微藤智慧能源服务有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '2',
        penaltiesAmount: '22'
      }, {
        unit: '经济开发区',
        date: '2020-07-28',
        name: '江苏豪森药业集团有限公司',
        maintenance: '南京维智泰信息技术有限公司',
        industry: '橡塑',
        abnormalTimes: '-',
        checkTimes: '2',
        penaltiesTimes: '-',
        penaltiesAmount: '-'
      }, {
        unit: '经济开发区',
        date: '2020-07-28',
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
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
