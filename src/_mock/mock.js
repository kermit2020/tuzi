/* mock自动化 */
export const mockPlugin = {
  install(app) {
    // 自动导入 lowCode 目录下的所有模块
    const lowCode = import.meta.glob('./lowCode/*.js')
    Object.entries(lowCode).forEach(([filename, importFn]) => {
      importFn().then(mod => {
        const comp = mod.default || mod
        const compName = comp.name || filename.replace(/\.\/(.*)\.js$/g, '$1')
        app.component(compName, comp)
      })
    })
    // Object.values(lowCode).forEach(importFn => {
    //   importFn() // 这样会执行 table.js 里的 Mock.mock
    // })
    const rabbit = import.meta.glob('./rabbit/*.js')
    // 批量注册 rabbit 目录下的 js
    Object.entries(rabbit).forEach(([filename, importFn]) => {
      importFn().then(mod => {
        const comp = mod.default || mod
        const compName = comp.name || filename.replace(/\.\/(.*)\.js$/g, '$1')
        app.component(compName, comp)
      })
    })
  }
}
