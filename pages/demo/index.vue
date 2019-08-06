<template>
    <div>
        <p>demo index</p>
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
                // this.$router.push({ path: 'demo/detail', params: { age: 18 } })
                this.$router.push({ name: 'demo-detail', params: { age: 18 } })
            }
        },
    }
</script>

<style>
    /* @import '../../assets/css/reset'; */
</style>
