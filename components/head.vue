<template>
    <div class="headContainer clearfix">
        <span>头部组件</span>
        <div class="btn fr">
            <el-button size="small" @click="logout">退出登录</el-button>
        </div>
    </div>
</template>

<script>
    const Cookie = process.client ? require('js-cookie') : undefined
    export default {
        methods: {
            logout() {
                Cookie.remove('auth')
                this.$store.commit('SET_AUTH', null)
                this.$message.success('退出成功')
                setTimeout(() => {
                    this.$router.push('/user/login')
                }, 1000)
            }
        },
    }
</script>
