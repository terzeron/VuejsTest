import axios from 'axios'

/*
  i18n
 */
export const state = {
  locales: ['en', 'fr'],
  locale: 'en',
  authUser: null
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

/*
 Auth
 */

export const actions = {
    // nuxtServerInit ({ commit }, { req }) {
    //     if (req.session && req.session.authUser) {
    //         commit('SET_USER', req.session.authUser)
    //     }
    // },
    login ({ commit }, { username, password }) {
        // return axios.post('/api/login', {
        //     username,
        //     password
        // })
        //     .then((res) => {
        //         commit('SET_USER', res.data)
        //     })
        //     .catch((error) => {
        //         if (error.response.status === 401) {
        //             throw new Error('Bad credentials')
        //         }
        //     })
        if (username === 'demo' && password === 'demo') {
            return commit('SET_USER', 'demo')
        }else{
            throw new Error('Bad credentials')
        }
    },

    logout ({ commit }) {
        // return axios.post('/api/logout')
        //     .then(() => {
        //         commit('SET_USER', null)
        //     })
        return commit('SET_USER', null)
    }

}