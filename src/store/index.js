import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        clientProfile: null,
        gallery: null
    },
    actions: {
        'LOAD_CLIENT_PROFILE': function ({ commit }, client) {
            firebase.database().ref('clients/' + client).once('value').then(function (snapshot) {
                const clientProfile = snapshot.val();
                commit('SET_CLIENT_PROFILE', { clientProfile });
            });
        },
        'LOAD_GALLERY': function ({ commit, state }, client) {
            if (!state.gallery) {
                firebase.database().ref('galleries/' + client).once('value').then(function (snapshot) {
                    const gallery = snapshot.val();
                    commit('SET_GALLERY', { gallery });
                });
            }
        }
    },
    mutations: {
        'SET_CLIENT_PROFILE': (state, { clientProfile }) => {
            state.clientProfile = clientProfile;
        },
        'SET_GALLERY': (state, { gallery }) => {
            state.gallery = gallery;
        }
    },
    getters: {}
})