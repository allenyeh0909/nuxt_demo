<template>
    <div class="container">
        <button @click="$router.back(-1)">返回</button>
        <h2>demo index</h2>
        <button @click="go1">query传参</button>
        <button @click="go2">params传参</button>
		<nuxt-link to="/demo/detail?sex=0">query传参</nuxt-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            go1() {
                this.$router.push({ path: 'demo/detail', query: { name: 'allen' } })
            },
            go2() {
                // 下面两种方法都可以
                this.$router.push({ path: 'demo/detail', params: { age: 18 } })
                // this.$router.push({ name: 'demo-detail', params: { age: 18 } })
            }
        },
    }
</script>
<style scoped>
    .container {
        height: auto;
    }
</style>
