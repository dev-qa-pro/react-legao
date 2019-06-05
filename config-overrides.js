 const {
     override,
     fixBabelImports,
     addLessLoader,
     addWebpackAlias,
     addDecoratorsLegacy
 } = require('customize-cra');
 const path = require('path')
 const resolve = dir => {
     console.log('dir :', dir, path.join(__dirname, dir));
     return path.join(__dirname, dir)
 };



 module.exports = override(
    addDecoratorsLegacy(),

     addWebpackAlias({
         ["@src"]: path.resolve(__dirname, "src"),
         ['@pages']: path.resolve(__dirname, "src/pages"),
         ['@components']: path.resolve(__dirname, "src/components"),
         ['@layouts']: path.resolve(__dirname, "src/layouts"),
     }),

      fixBabelImports('antd-mobile', {
          libraryName: 'antd-mobile',
          style: 'css',
      }),
     fixBabelImports('import', {
         libraryDirectory: 'es',
         libraryName: 'antd',
         style: 'css',
     }),
     //  addLessLoader({
     //     javascriptEnabled: true,
     //  }),



 )