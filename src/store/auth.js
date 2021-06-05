import Vue from "vue";
import Vuex from "vuex";
import router from '../route';
import firebase from '../firebaseConfig';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    password: '',
  },
  mutations: {
    setUserName(state, username) {
        state.username = username;
    },
    setEmail(state, email) {
        state.email = email;
    },
    setPassword(state, password) {
        state.password = password;
    }
  },
  actions: {
    registerUser({ commit }, userInfo) {
      firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(() => {
        commit('setUserName', userInfo.username);
        commit('setEmail', userInfo.email);
        commit('setPassword', userInfo.password);
        router.push('/dashboard')
      }) 
      .catch((error) => {
        alert(error.message)
      });
    }
  },
  getters: {
    username: (state) => {return state.username},
    email: (state) => {return state.email},
    password: (state) => {return state.password},
  }
});