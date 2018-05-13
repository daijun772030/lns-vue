
import 'cube-ui/lib/cube.min.css'
import Cube from 'cube-ui'
import VueLazyload from 'vue-lazyload'

const plugins = (Vue) => {
  Vue.use(Cube)
  Vue.use(VueLazyload, {
    loading: require('common/images/default.png')
  })
}

export default plugins