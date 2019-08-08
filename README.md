# nuxt_demo

> just nuxt demo

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

[官方demo](https://github.com/nuxt/nuxt.js/tree/dev/examples)


## 目录结构
```
.
├── api
├── README.md
├── assets
├── components
├── layouts
├── middleware
├── node_modules
├── nuxt.config.js
├── package.json
├── pages
├── plugins
├── static
├── store
└── yarn.lock
```

```
1.assets: 资源文件。放置需要经过 webpack 打包处理的资源文件，如 scss，图片，字体等。
2.components: 组件。这里存放在页面中，可以复用的组件。
3.layouts: 布局。页面都需要有一个布局，默认为 default。它规定了一个页面如何布局页面。所有页面都会加载在布局页面中的 <nuxt /> 标签中。如果需要在普通页4.面中使用下级路由，则需要在页面中添加 <nuxt-child />。该目录名为Nuxt.js保留的，不可更改。
5.middleware: 中间件。存放中间件。可以在页面中调用： middleware: 'middlewareName' 。
6.pages: 页面。一个 vue 文件即为一个页面。index.vue 为根页面。

7.若需要二级页面，则添加文件夹即可。
8.如果页面的名称类似于 _id.vue （以 _ 开头），则为动态路由页面，_ 后为匹配的变量（params）。
9.若变量是必须的，则在文件夹下建立空文件 index.vue。更多的配置请移步至 官网 。
10.plugin: 插件。用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。需要注意的是，在任何 Vue 组件的生命周期内， 只有 11.beforeCreate 和 created 这两个钩子方法会在 客户端和服务端均被调用。其他钩子方法仅在客户端被调用。
12.static: 静态文件。放置不需要经过 webpack 打包的静态资源。如一些 js, css 库。
13.store: 状态管理。具体使用请移步至 官网。
14.nuxt.config.js: nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。具体配置请移步至 官网。
15.api,简单封装的axios
```

