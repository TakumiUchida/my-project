import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBIJpWFat4-UP2RsIgNDSf6Z1ItmMLKVNw",
  authDomain: "vueproject4-5b8f6.firebaseapp.com",
  databaseURL: "https://vueproject4-5b8f6-default-rtdb.firebaseio.com",
  projectId: "vueproject4-5b8f6",
  storageBucket: "vueproject4-5b8f6.appspot.com",
  messagingSenderId: "408857811540",
  appId: "1:408857811540:web:b19a5af81ec1aa82c3ebc1",
  measurementId: "G-KFZ3VX59ZF"
};
  firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
