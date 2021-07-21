<template>
  <el-table-pageable
    :data="tableData"
    :loading="loading"
    :pagination="pagination"
    style="width: 100%"
    @current-page-change="displayLoading"
    @size-change="displayLoading"
  >
    <el-table-column prop="company" label="企业" width="180" />
    <el-table-column prop="equipmentName" label="设备名称" width="180" />
    <el-table-column prop="currentState" label="当前状态" />
    <el-table-column prop="runTime" label="运行时长" />
    <el-table-column prop="stopTime" label="停运时间" />
    <div slot="page" class="diy-page">
      <span>显示第{{ (pagination.pageIndex - 1) * pagination.pageSize + 1 }}到第{{ pagination.pageIndex * pagination.pageSize }}条记录，总共{{ pagination.total }}条记录</span>
      <el-button type="primary">
        <el-icon type="md-download" />下载
      </el-button>
    </div>
  </el-table-pageable>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          company: '江苏春江润田农化有限公司',
          equipmentName: '42#车间427-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '无锡市光华包装专印厂',
          equipmentName: '43车间427-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '无锡市锡山东亚彩印厂',
          equipmentName: '42#车间427-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '江苏春江润田农化有限公司',
          equipmentName: '42#车间427-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '无锡市光华包装专印厂',
          equipmentName: '43车间427-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '无锡市锡山东亚彩印厂',
          equipmentName: '42#车间427-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        }
      ],
      pagination: {
        pageSize: 10,
        pageIndex: 1,
        totalNumber: 52
      },
      loading: false
    }
  },
  methods: {
    displayLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style>
.diy-page {
    display: inline;
}
.diy-page .el-button.el-button--primary {
    background: #409EFF;
    margin-left: 15px;
}
</style>
