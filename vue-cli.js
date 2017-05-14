//安装vue脚手架    npm install vue-cli -g

//接着  vue init webpack-simple     一路回车

//cd 进入你的项目  

//接着  npm install 下载依赖   记得使用npm

//安装 vue路由模块以及网络请求模块   cnpm install vue-router vue-resource --save

//启动项目  npm run dev  


//报错的话或者是 npm不是最新版   npm updata -g

//或者 vue-cli 不是最新版   npm updata vue-cli  查看vue-cli版本  npm view vue-cli

//安装一下这个依赖到工程开发环境
cnpm install opn --save-dev
cnpm install webpack-dev-middleware --save-dev
cnpm install express --save-dev
cnpm install compression --save-dev
cnpm install sockjs --save-dev
cnpm install spdy --save-dev
cnpm install http-proxy-middleware --save-dev
cnpm install serve-index --save-dev
cnpm install connect-history-api-fallback --save-dev




//    App.vue作为主组件是渲染到页面的通过main.sj里面的render模块

//    里面引入组件就是 import name from "模块路径"

//    导出组件就是  export default{}
    
//     main.js 是作为主程序的webpack打包组件入口文件
//     1.0  引入一个vue的包import Vue from 'vue'
//     1.1  引入.vue的组件  import name form "模块路径"
//     1.2  实例一个vue实例 
//     1.3   render,渲染App组件到页面
//     new Vue({
//       el:"#app",
//       render:c=>c(App),
//       router:实例router名
//       
//     })
//     
//     
//     vue 打包    vue  vue-loader vue-template-compiler
//      
//      cnpm i vue -S
//      cnpm i vue-loader -D
//      cnpm vue-template-compiler -D //vue模块编译器,render需要这个包
//      
//      在webpack.config.js中添加
//      {
//         test:/\.vue$/,
//         loader:"vue-loader"
//      }
//     
//     
//     
//      vue组件的编写  
//      
//         在src下面建立一个component文件夹里面用来放置vue组件
//         
//         然后在App.vue里面引入组件,import "自定义组件名" from "组件模块"
//         
//         接着在App.vue里面注册一下这个组件就ok了  components:{自定义的组件名}
//         
//         pros=[自定义属性]  用来传值  :自定义属性="值"  props=["message"]  <div>{{message}}</div>  <div message="hello world">
//     
//     
//     
//     vue 路由     路由匹配的组件也是必须在main.js里面引入  ,然后在new vue实例里面添加上去一个router:routers
//     
//      下载插件   cnpm install vue-router --save
//      
//      在项目的main.js里面去引入router 以及网络通信模块模块 
//      
//          import vueRouter form 'vue-router'
//          import VueResource  form 'vue-resource'
//          
//          引入了插件  接着让vue全局使用   Vue.use(VueRouter);Vue.use(VueResource);
//           
//           配置路由
//           
//              var routers=new vueRouter({
//                  routes:[
//                        {name:"路由的名称可以不写",
//                         path:"/news/:id",                记得哦  path里面还是可以去传参 
//                                                                  我们在这里  给设置参数为:id 当用户通过/news/123点击进入路由参数就是为 123   
//                                                                  我们获取参数就是到对应的组件中去用this.$route.params.id获取参数      
//                         compnent:"组件必须是我在main.js里面引入的组件" 
//                        },
//                  ]
//              })
//              
//             在APP.vue里面 
//             使用 <router-view></router-view>指定渲染的位置
//             使用 <router-link to="/new">新闻</rout-link>  来导航
//             
//             
//             
//             
//             路由嵌套   也就是直接在组件中添加上去一个 <router-view></router-view>  接着在main.js该组件的router{)配置添加上去一个
//                        child配置项 
                       /*
                       nst router = new VueRouter({
                              routes: [
                                { path: '/user/:id', component: User,
                                  children: [
                                    {
                                      // 当 /user/:id/profile 匹配成功，
                                      // UserProfile 会被渲染在 User 的 <router-view> 中
                                      path: 'profile',
                                      component: UserProfile,
                                      children:[]        //可以一直嵌套路由上去
                                    },
                                  ]
                                }
                              ]
                              })
                        */
//             
//             
//             
//             
//             
//             
//             
//             vue  里面的网络通信ajax模块   下载插件  cnpm install vue-resource -S
//          
//                接着在main.js里面引入并且注册 
//                 import VueResource from 'vue-resource'
//                 Vue.use(VueResource);
//                 
//                 然后在组件里面就是直接在 methods:{
//                      getData(){
//                          this.$http.get("url").then(function(res){},function(res){})
//                      } //实例已经创建完成之后被调用created:function(){} 记得create会自己调用函数
//                      created:function(){
//                        this.getDate()
//                      }
//                      
//                      vue-resource提供的简捷方法 get post jsonp(url,data,options)
//                      this.post(http:...,{count:10},{"headers":{
//                          "Content-Type:"x-www-form-urlencoded
//                      }}).then(function(){},function(){})
//                 }
//                 
//                 
//             
//              
//             
//             
