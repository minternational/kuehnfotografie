<template>
  <div id="nav">
    <Header />
    <Navigation :nav-items="routeItems" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import Home from "@/views/Home.vue";
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer,
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => console.log(data.navigation));
  },
};
</script>

<style>
#app {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  /*Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1080px;
  margin: auto;
}
</style>
