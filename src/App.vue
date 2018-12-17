<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>


export default {
  name: 'app',
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
  font-size: 16px;
  line-height: 1.5;
}

</style>
