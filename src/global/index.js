import Vue from 'vue'
const requireComponent = require.context('.', false, /[\w-]+\.vue$/)
// prettier-ignore
const global = {
  import() {
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}

export default global
