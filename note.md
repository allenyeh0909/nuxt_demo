https://www.zybuluo.com/mdeditor
## 1.路由传参
```
1. 用query接收
    跳转：
        <nuxt-link to="/shop/detail?sex=0">query</nuxt-link>
        this.$router.push({ path: 'shop/detail', query: { name: 'allen' } })
    console.log(this.$route.query, 'query')
2. params接收
    跳转：
        this.$router.push({ path: 'shop/detail', params: { age: 18 } })
        this.$router.push({ name: 'shop-detail', params: { age: 18 } })
    console.log(this.$route.params, 'params')
    【name和path两种方法】
```

## 路由

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue

```
```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```
