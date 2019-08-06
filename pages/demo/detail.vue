<template>
    <div>
        <button @click="$router.back(-1)">返回</button>
        <h2>demo detail</h2>
    </div>
</template>

<script>
    export default {
        mounted () {
            console.log(this.$route.query, 'query')
            console.log(this.$route.params, 'params')
        },
        methods: {
        },
        layout(ctx) {
            return 'home'
        }
    }
</script>
