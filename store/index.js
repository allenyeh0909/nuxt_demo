import Vue from 'vue'
import Vuex from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined

import { HANDEL_ADD, SET_TITLE, SET_CONTENT, SET_TOKEN, SET_AUTH } from './mutation-types'

Vue.use(Vuex)

/**
 * 可以拆开写入到对应的文件中
 */

// state就是Vuex中的公共的状态, 我是将state看作是所有组件的data, 用于保存所有组件的公共数据.
const state = {
    token: '',
    title: 'aaaaa',
    count: 0,
    content: {},
    auth: null
}

// 将mutaions理解为store中的methods, mutations对象中保存着更改数据的回调函数,该函数名官方规定叫type, 第一个参数是state, 第二参数是payload, 也就是自定义的参数.
const mutations = {

    [SET_TITLE](state, opt) {
        state.title = opt.title
    },

    [HANDEL_ADD](state, opt) {
        state.count = opt.count
    },

    [SET_CONTENT](state, content) {
        state.content = content
    },

    [SET_TOKEN](state, token) {
        state.token = token
    },

    [SET_AUTH] (state, auth) {
        state.auth = auth
    }
}

// 将getters属性理解为所有组件的computed属性, 也就是计算属性. vuex的官方文档也是说到可以将getter理解为store的计算属性,
const getters = {

}


// actions提交的是mutations而不是直接变更状态   参数是一个对象{commit, 其他}
const actions = {
    handelAdd({commit, state}, count) {
        let query = {
            count: count
        }
        setTimeout(() => {
            // 调用 mutations【HANDEL_ADD】 这个方法
            // query 是 mutations【HANDEL_ADD】 第二个参数
            commit(HANDEL_ADD, query)
        }, 3000)
    },
    getInfo({commit}, content) {
        setTimeout(() => {
            commit(SET_CONTENT, content)
        }, 1000)
    },
    nuxtServerInit ({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth)
          } catch (err) {
            // No valid cookie found
          }
        }
        commit(SET_AUTH, auth)
    }
}

/**
 * nuxt和其他不同，接收一个函数
 */
function store() {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters
    })
}

export default store
