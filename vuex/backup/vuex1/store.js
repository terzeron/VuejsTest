import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    message: 'Hello Vue!',
    counter: 0
}

const mutations = {
    changeMessage(state, message) {
        state.message = message
    },
    incrementCounter(state) {
        state.counter++
    }
}

export default new Vuex.Store({
    state,
    mutations
})
