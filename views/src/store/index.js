import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAccessToken: null,
    google: null,
    gmap: null,
    heatmap: null,
    test: null,
    counties: null
  },
  mutations: {
    setAccess(state, payload) {
      state.userAccessToken = payload;
    },
    setGoogle(state, payload) {
      state.google = payload;
    },
    setMap(state, payload) {
      state.gmap = payload;
    },
    setHeatmap(state, payload) {
      state.heatmap = payload;
    },
    setTest(state, payload) {
      state.test = payload;
    },
    setCounties(state, payload) {
      state.counties = payload;
    }
  },
  actions: {},
  modules: {}
});
