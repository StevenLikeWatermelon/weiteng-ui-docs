import weitengui from 'weiteng-ui'
import $ from 'jquery'
import 'weiteng-ui/lib/theme-chalk/index.css'

export default ({
  Vue
}) => {
  // 使用element-ui
  Vue.use(weitengui)
  // 全局钩子
  Vue.mixin({
    mounted() {
      // 代码收缩展开
      const parentDom = $(this.$el).parent().parent()
      const autoHidden = parentDom.hasClass('not-hidden')
      if (parentDom.hasClass('with-code')) {
        const nextLanguageDom = parentDom.next()
        if (nextLanguageDom.hasClass('language-vue')) {
          // 没包裹的包裹下
          if (!nextLanguageDom.parent().hasClass('wrapped-language')) {
            nextLanguageDom.wrap('<div class="wrapped-language"></div>')
          }
          const nextLanguageParentDom = nextLanguageDom.parent()
          // 已经有了就不插入收起展开

          const expendDom = nextLanguageParentDom.prev()

          if (expendDom.hasClass('toggle-code')) {
            console.log('has-toggle')
            return
          }
          const displayCode = '<p><i class="el-icon-caret-bottom"></i>显示代码</p>'
          const hideCode = '<p><i class="el-icon-caret-top"></i>隐藏代码</p>'
          nextLanguageParentDom.before(`<div class="toggle-code">${hideCode}</div>`)

          const toggleDom = nextLanguageParentDom.prev()
          toggleDom.on('click', function() {
            if (nextLanguageParentDom.hasClass('hidden')) {
              nextLanguageParentDom.removeClass('hidden')
              toggleDom.removeClass('hidden-bottom-border')
              toggleDom.html(hideCode)
              nextLanguageParentDom.slideDown()
            } else {
              nextLanguageParentDom.addClass('hidden')
              toggleDom.addClass('hidden-bottom-border')
              toggleDom.html(displayCode)
              nextLanguageParentDom.slideUp()
            }
          })

          // 统一塞到with-code里面去
          parentDom.append(toggleDom.detach())
          parentDom.append(nextLanguageParentDom.detach())

          // 模拟下关闭
          !autoHidden && toggleDom.click()
        }
      }

      // 自动动态content宽度 请确保只执行一次
      const hasAdded = $('.auto-width-content').length
      const rightHeight = $('.right-anchor').height()
      if (!hasAdded && rightHeight) {
        console.log('start add class')
        const leftWidth = $('.sidebar').width()
        const rightWidth = $('.right-anchor').width()
        const centerWidth = leftWidth + rightWidth + 50
        const bodyContent = $('.theme-default-content')
        bodyContent.css('max-width', `calc(100vw - ${centerWidth}px)`)
        bodyContent.addClass('auto-width-content')
      }
    },
    beforeMount() {
      // 进路由之前把class干掉 重新赋值
      $('.theme-default-content').removeClass('auto-width-content')
    }
  })
}
