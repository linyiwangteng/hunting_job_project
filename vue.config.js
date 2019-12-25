module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? './': './',
    lintOnSave:false,
    devServer:{
        disableHostCheck: true,
        open:true,
        proxy: 'http://47.93.199.16:5220'
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
        },
        login: {
            entry: 'src/views/login/main.js',
            template: 'public/index.html',
            filename: 'login.html',
            title: '登录'
        },
        list: {
            entry: 'src/views/list/main.js',
            template: 'public/index.html',
            filename: 'list.html',
            title: '公司搜索'
        },
        companylist: {
            entry: 'src/views/companylist/main.js',
            template: 'public/index.html',
            filename: 'companylist.html',
            title: '公司列表'
        },
        school: {
            entry:'src/views/school/main.js',
            template:"public/index.html",
            filename:'school.html',
            title:'院校招生'
        },
        organization: {
            entry: 'src/views/organization/main.js',
            template:'public/index.html',
            filename:'organization.html',
            title:'机构培训'
        },
        consult: {
            entry: "src/views/consult/main.js",
            template: "public/inde.html",
            filename:'consult.html',
            title:'咨询中心'
        }
      }
}