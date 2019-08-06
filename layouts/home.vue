<template>
    <div>
        <el-container>
            <el-header>
                <header-nav></header-nav>
            </el-header>
            <el-main>
                <nuxt />
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import header from '@/components/head'
    export default {
        components: {
            headerNav:header
        }
    }
</script>

<style scoped>
    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    body>.el-container {
        margin-bottom: 40px;
    }
</style>
