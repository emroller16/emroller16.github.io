<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>

import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import HomePage from './components/HomePage.vue';

Vue.use(VueMaterial);

// import Vue from 'vue';
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
// import 'vue-material/dist/vue-material.min.css';

// Vue.use(MdButton);
// Vue.use(MdContent);
// Vue.use(MdTabs);

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(lightblue, A200), // The primary color of your application
  accent: md-get-palette-color(orange, A200) // The accent or secondary color
));
$primary-color: lightblue;

@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  // background: #fafafa;
  font-size: 16px;
  line-height: 1.5;
}


#app {
  // font-family: 'Roboto', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

// main {
//   margin: 0 auto;
//   padding: 30px;
//   width: 1024px;
//   min-height: 300px;
// }
</style>
