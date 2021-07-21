module.exports = {
  title: 'weiteng-ui',
  port: 8085,
  description: '微藤前端UI库',
  head: [],
  // base: '/weitengui/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  devServer: {
    proxy: {
      '/upload': {
        target: 'http://0.0.0.0:3000',
        changeOrigin: true
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      'vuepress-plugin-right-anchor',
      {
        showLevel: 2,
        ignore: [
          '/',
          '/guide/',
          '/standard/',
          '/advanced/'
        ]
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '指南', link: '/guide/' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: '了解更多',
        items: [
          { text: '仓库地址', link: 'https://github.com/StevenLikeWatermelon/weiteng-ui-docs' }
        ]
      }
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['guide/', '介绍'],
          ['standard/', '规范'],
          ['advanced/', 'eslint']
          // ['updateLog/', '更新日志']
        ]
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [
          ['componentDocs/basic/grid/', '栅格布局'],
          ['componentDocs/basic/input/', 'input输入框'],
          ['componentDocs/basic/select/', 'select选择器'],
          ['componentDocs/basic/radio/', 'radio单选框'],
          ['componentDocs/basic/checkbox/', 'checkbox多选框'],
          ['componentDocs/basic/inputNumber/', 'inputNumber计数器'],
          ['componentDocs/basic/datePicker/', 'datePicker日期选择器'],
          ['componentDocs/basic/timePicker/', 'timePicker时间选择器'],
          ['componentDocs/basic/dateTimePicker/', 'dateTimePicker日期时间选择器'],
          ['componentDocs/basic/button/', 'button按钮'],
          ['componentDocs/basic/table/', 'table表格'],
          ['componentDocs/basic/cascader/', 'cascader级联选择器'],
          ['componentDocs/basic/switch/', 'switch开关'],
          ['componentDocs/basic/upload/', 'upload上传'],
          ['componentDocs/basic/form/', 'form表单'],
          ['componentDocs/basic/progress/', 'progress进度条'],
          ['componentDocs/basic/tree/', 'tree树形控件'],
          ['componentDocs/basic/pagination/', 'pagination分页'],
          ['componentDocs/basic/loading/', 'loading加载'],
          ['componentDocs/basic/message/', 'message消息提示'],
          ['componentDocs/basic/messageBox/', 'messageBox弹框'],
          ['componentDocs/basic/dialog/', 'dialog弹框'],
          ['componentDocs/basic/tabs/', 'tabs标签页'],
          ['componentDocs/basic/divider/', 'divider分割线'],
          ['componentDocs/basic/transfer/', 'transfer穿梭框'],
          ['componentDocs/basic/dropdown/', 'dropdown下拉菜单'],
          ['componentDocs/basic/steps/', 'steps步骤条'],
          ['componentDocs/basic/tooltip/', 'tooltip文字提示'],
          ['componentDocs/basic/popover/', 'popover弹出框'],
          ['componentDocs/basic/popconfirm/', 'popconfirm气泡确认框'],
          ['componentDocs/basic/calendar/', 'calendar日历'],
          ['componentDocs/basic/drawer/', 'drawer抽屉'],
          ['componentDocs/basic/carousel/', 'carousel轮播'],
          ['componentDocs/basic/menu/', 'menu菜单'],
          ['componentDocs/basic/breadcrumb/', 'breadcrumb面包屑']
        ]
      },
      {
        title: '业务组件',
        collapsable: false,
        children: [
          ['componentDocs/business/tablePageable/', '可分页表格'],
          ['componentDocs/business/treeSelct/', '树形下拉选择']
        ]
      }
    ]
  }
}
