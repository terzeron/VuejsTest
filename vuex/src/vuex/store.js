import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import { CHANGE_MESSAGE, INCREMENT_COUNTER } from './mutation_types'

Vue.use(Vuex)

const state = {
    message: 'Hello Vue!',
    counter: 0
}

const mutations = {
    [CHANGE_MESSAGE](state, message) {
        state.message = message
    },
    [INCREMENT_COUNTER](state) {
        state.counter++
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})