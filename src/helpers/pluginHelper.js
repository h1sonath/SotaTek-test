
export default {
  create(plugins) {
    return {
      install(Vue) {
        Object.entries(plugins)
          .forEach(([pluginName, plugin]) => {
            if (plugin.install && typeof plugin.install === 'function') {
              Vue.use(plugin, pluginName)
            } else {
              Vue.prototype[pluginName] = plugin
            }
          })
      }
    }
  }
}
