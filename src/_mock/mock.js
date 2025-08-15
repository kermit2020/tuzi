
// 自动导入 lowCode 目录下的所有模块
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
export const lowCode = import.meta.glob('./lowCode/*.js')
// const lowCode = componentContext.keys().reduce((result, fileName) => {
//   const moduleName = fileName.replace(/\.\/(.*)\.js$/g, '$1')
//   result[moduleName] = componentContext(fileName).default
//   return result
// }, {})
export const rabbit = import.meta.glob('./rabbit/*.js')
// const rabbit = componentContext2.keys().reduce((result, fileName) => {
//   const moduleName = fileName.replace(/\.\/(.*)\.js$/g, '$1')
//   result[moduleName] = componentContext(fileName).default
//   return result
// }, {})
// console.log('lowCode', lowCode);
// console.log('rabbit', rabbit);


