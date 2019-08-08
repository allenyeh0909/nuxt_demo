<template>
    <div>
        <button @click="$router.back(-1)">返回</button>
        <h2>demo detail</h2>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <div>
            <span v-for="(item, index) in list">{{item.title || item.cate}}</span>
            <p v-for="(item, i) in cateList">{{item.title || item.cate}}</p>
        </div>
    </div>
</template>

<script>
    import { detail, cate } from '@/api/api'
    export default {
        middleware: 'authenticated',
        data() {
            return {
                age: 123
            }
        },
        mounted() {
            console.log(this.$route.query, 'query')
            console.log(this.$route.params, 'params')
        },
        methods: {
            async getDetail() {
                return 'token<><><><><><><><><><'
            }
        },
        async asyncData() {
            try {
                const list = await detail()
                const cateList = await cate()

                const res = {
                    name: 'allen',
                    list: list.data,
                    cateList: cateList.data,
                }
                console.log('<<<<<<<<<<<<<<<<<<<<<')
                return res
            } catch (e) {
                console.log(e)
                console.log('>>>>>>>>>>>>>>>>>>>>>')
            }
        },
        layout(ctx) {
            return 'home'
        },
        // head(ctx) {
        //     title: 'demo detail'
        // }
    }
</script>
