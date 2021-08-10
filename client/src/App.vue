<template>
  <div id="app">
    <loading-screen/>
    <app-modal />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import LoadingScreen from "@/components/helpers/LoadingScreen.vue";
import AppModal from "@/components/helpers/AppModal.vue";
import NavBar from "@/components/sections/NavBar.vue";

export default {
	components: { NavBar, AppModal, LoadingScreen },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap");

body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}
</style>