import { CHANGE_MESSAGE, INCREMENT_COUNTER } from './mutation_types'

export default {
    changeMessage({ commit }, message) {
        commit(CHANGE_MESSAGE, message)
    },
    incrementCounter({ commit }) {
        commit(INCREMENT_COUNTER)
    },
    handleMessageInputChanges({ commit }, event) {
        commit(CHANGE_MESSAGE, event.target.value)
        commit(INCREMENT_COUNTER)
    }
}