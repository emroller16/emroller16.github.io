<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-content>

      <h3 class="md-display-3">Amistad Peer Support and Recovery</h3>
      <a href="https://amistadinc.com/">Amistad's website</a>
      <p class="main-content">
        Amistad needed a total refresh for their site.
        Constrained by a dated, nonresponsive site, their
        online presence suffered. The site failed to portray
        the breadth of Amistad's work and failed to attract
        volunteers, media, or donors.
      </p>
      <p>Pardon our appearance. This page is currently under construction</p>
      <md-button class="md-primary" button style="margin-top:50px"><router-link to="/">Back to main page</router-link></md-button>

    </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'AmistadWork',
};
</script>

<style lang="scss" scoped>
.main-content {
  max-width: 60%;
}
</style>
