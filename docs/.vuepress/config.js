module.exports = {
  title: '阿娟蛋的个人博客',
  description: '阿娟蛋的个人博客',
  base: '/vuepress-blog/',
  themeConfig:{
    nav:[
      {
        text:'首页',link:'/'
      },
      {
        text:'阿娟蛋的JavaScript博客',
        items:[
          {text:'Github',link:'https://github.com/kankan-web'},
          {text:'掘金',link:'https://juejin.cn/user/273146020108104'}
        ]
      }
    ],
    sidebar:[
      {
        title:'欢迎学习',
        path:'/',
        collapsable:false,//不折叠
        children:[
          {title:'学前必读',path:'/'}
        ]
      },
      {
        title:'基础学习',
        path:'/dom/DOMBase',
        collapsable:false,
        children:[
          {title:'DOM初探',path:'/dom/DOMBase'},
          {title:'document对象操作',path:'/dom/documentObject'}
        ]
      }
    ],
    subSidebar: 'auto'
  },
  theme:'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
 
}