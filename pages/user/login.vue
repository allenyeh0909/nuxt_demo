<template>
    <div class="loginContainer">
        <h3>登陆</h3>
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="账户">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
        </el-form>
        <div class="btn">
            <el-button type="small" @click="handelLogin">LOGIN</el-button>
        </div>
    </div>
</template>

<script>
    const Cookie = process.client ? require('js-cookie') : undefined
    export default {
        middleware: 'notAuthenticated',
        layout(ctx) {
            return 'login'
        },
        data() {
            return {
                formData: {}
            }
        },
        computed: {
        },
        methods: {
            handelLogin() {
                this.$message.success('登录成功!')
                setTimeout(() => {
                    const auth = {
                        accessToken: 'someStringGotFromApiServiceWithAjax'
                    }
                    this.$store.commit('SET_AUTH', auth)
                    Cookie.set('auth', auth, { expires: 1})
                    this.$router.push('/')
                }, 1000)
            },
        }
    }
</script>

<style scoped>
    .loginContainer {
        width: 500px;
        margin: auto;
        margin-top: 150px;
        padding: 60px;
        padding-bottom: 40px;
        border: 1px solid #eeeeee;
    }

    h3 {
        text-align: center;
        padding-bottom: 30px;
        color: #409EFF;
        font-size: 32px;
        letter-spacing: 8px;
    }
    .btn {
        width: 500px;
        text-align: center;
        display: inline-block;
        margin-top: 40px;
    }
</style>
