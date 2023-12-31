import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-gradient-dark",
    isRTL: false,
    color: "success",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    isDarkMode: false,
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    tableRow: null,
  },
  mutations: {
    setTableRow(state, data) {
      state.tableRow = data
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      if (sidenav_show !== null) { // 요소가 존재하는지 확인
        if (sidenav_show.classList.contains("g-sidenav-pinned")) {
          sidenav_show.classList.remove("g-sidenav-pinned");
          state.isPinned = true;
        } else {
          sidenav_show.classList.add("g-sidenav-pinned");
          state.isPinned = false;
        }
      } else {
        // 선택한 요소가 존재하지 않는 경우에 대한 예외 처리
        // 예를 들어, 적절한 오류 처리 또는 기본 동작을 수행할 수 있습니다.
      }
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
    toggleHideConfig(state) {
      state.hideConfigButton = !state.hideConfigButton;
    },
    color(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    setColor({ commit }, payload) {
      commit("color", payload);
    },
    setTableRow({ commit }, data) {
      commit('setTableRow', data)
    },
  },
  plugins: [createPersistedState()],
  getters: {},
});