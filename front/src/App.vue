<template>
  <div class="app-container">
    <sidenav :custom_class="color" v-if="showSidenav" class="sidebar" />

    <div class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden">
      <navbar :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
        :color="isAbsolute ? 'text-white opacity-8' : ''" :minNav="navbarMinimize" v-if="showNavbar" />

      <router-view />

      <app-footer v-show="showFooter" style="float:bottom" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidenav from "@/layouts/Sidenav/index.vue";
import Navbar from "@/layouts/Navbars/Navbar.vue";
import AppFooter from "@/layouts/Footer.vue";
import { mapMutations, mapState, useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Sidenav,
    Navbar,
    AppFooter,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    ...mapState([
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton",
    ]),
  },
  beforeMount() {
    const store = useStore();

    store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

    if (window.innerWidth > 1200) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  },
});
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
}
</style>
