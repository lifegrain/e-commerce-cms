import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'https://e-commerce-cms-w7.herokuapp.com/',
    navbar: '',
    role: localStorage.role,
    addForm: false,
    list: [],
  },
  mutations: {
  },
  actions: {
    toast(state, { vm, message }) {
      vm.$bvToast.toast(message, {
        title: 'Error',
        toaster: 'b-toaster-bottom-right',
        solid: true,
        appendToast: true,
      });
    },
  },
  modules: {
  },
});
