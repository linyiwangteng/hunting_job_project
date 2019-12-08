module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? './': './',
    lintOnSave:false,
    devServer:{
        disableHostCheck: true,
        open:true,
    },
    pages: {
        home: {
            entry: 'src/views/home/main.js',
            template: 'public/index.html',
            filename: 'home.html',
            title:'首页'
        },
        center: {
            entry: 'src/views/center/main.js',
            template: 'public/index.html',
            filename: 'center.html',
            title: '个人中心'
        }
      }
}