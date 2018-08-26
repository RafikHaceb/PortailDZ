import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        clientProfile: null
    },
    actions: {
        'LOAD_CLIENT_PROFILE': function ({ commit }) {
            firebase.database().ref('clients/labo-test1').once('value').then(function (snapshot) {
                const clientProfile = snapshot.val();
                commit('SET_CLIENT_PROFILE', { clientProfile });
            });
        }
    },
    mutations: {
        'SET_CLIENT_PROFILE': (state, { clientProfile }) => {
            state.clientProfile = clientProfile;
        }
    },
    getters: {}
})