// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill'
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Plugin from './plugin'
import 'common/stylus/index.styl'

Plugin(Vue)

Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick.attach(document.body)
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
