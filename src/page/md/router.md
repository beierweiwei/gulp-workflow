### vue-router 2.0 文档学习笔记

#### 基本使用
```javascript
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
// 
```

#### 动态路由匹配
```javascript
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

在模板中获取参数
```javascript
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

####响应路由参数的变化
例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用, 这也意味着组件的生命周期钩子不会再被调用。
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象。
```javascript
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // to,from分别代码当前和跳转之前的路由对象
    }
  }
}
```

#### 嵌套路由

#### 编程式导航

#### 命名路由

#### 命名视图

#### 重定向和别名

#### 参考：vue-router2官方文档
>![vue-router2官方文档](https://router.vuejs.org/zh-cn/)

 任务 | 进度
 ------|------
 测试1 | 69%
 测试2 | 58% 
