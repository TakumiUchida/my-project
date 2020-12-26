import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: '',   
    seimeihoken: '',
    nyuuinn: '',
    nyuuinn2: '', 
    year: 2020,
    month: 1,
    day: 1,
    textarea: '',
    eras: []
  }
});