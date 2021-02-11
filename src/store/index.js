import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '',   
    insurance: '',
    hospitalization: '',
    hospitalization2: '', 
    year: 2020,
    month: 1,
    day: 1,
    textarea: ''
  },
  mutations: {
    mutateVal(state, payload) {
      state.gender = payload;
    },
    mutateInsurance(state, payload) {
      state.insurance = payload;
    },
    mutateHospitalization(state, payload) {
      state.hospitalization = payload;
    },
    mutateHospitalization2(state, payload) {
      state.hospitalization2 = payload;
    },
    mutateYear(state, payload) {
      state.year = payload;
    },
    mutateMonth(state, payload) {
      state.month = payload;
    },
    mutateDay(state, payload) {
      state.day = payload;
    },
    mutateTextarea(state, payload) {
      state.textarea = payload;
    }
  },
  getters: {
    getVal: (state) => state.gender,
    getInsurance: (state) => state.insurance,
    getHospitalization: (state) => state.hospitalization,
    getHospitalization2: (state) => state.hospitalization2,
    getYear: (state) => state.year,
    getMonth: (state) => state.month,
    getDay: (state) => state.day,
    getTextarea: (state) => state.textarea,
  }
});