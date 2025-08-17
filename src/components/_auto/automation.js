/* mock自动化 */
export const tablePlugin = {

  install(app) {
    // 自动导入 lowCode 目录下的所有模块
    const table = import.meta.glob('./src/*.js')
    Object.entries(table).forEach(([filename, importFn]) => {
      importFn().then(mod => {
        const comp = mod.default || mod
        const compName = comp.name || filename.replace(/\.\/(.*)\.js$/g, '$1')
        app.component(compName, comp)
      })
    })
  }
}
