<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1">Hello there!</span>
        </div>
      </md-app-toolbar>

      <md-app-content>
          <div class="md-layout md-gutter traits-row">
            <div class="md-layout-item">
              <p class="md-display-1">Designer</p>
              <p>Lorem ipsum dolor amet blue bottle wayfarers pitchfork,
                sartorial vegan deep v air plant. IPhone man bun pug street
                 art offal four loko,slow-carb hashtag cronut actually keytar
                 literally art party edison bulb ethical. Austin woke gochujang
                 portland, kale chips authentic pok
                pok tote bag paleo kickstarter church-key selvage enamel pin.
                Palo santo photo booth helvetica, tote bag truffaut wayfarers celiac.
                Pop-up
                post-ironic meh squid everyday carry pinterest hella. Chillwave
                tumeric tattooed gentrify.</p>
            </div>
            <div class="md-layout-item">
              <p class="md-display-1">Psychology nerd</p>
              <p>Lorem ipsum dolor amet blue bottle wayfarers pitchfork,
                sartorial vegan deep v air plant. IPhone man bun pug street
                 art offal four loko,slow-carb hashtag cronut actually keytar
                 literally art party edison bulb ethical. Austin woke gochujang
                 portland, kale chips authentic pok
                pok tote bag paleo kickstarter church-key selvage enamel pin.
                Palo santo photo booth helvetica, tote bag truffaut wayfarers celiac.
                Pop-up
                post-ironic meh squid everyday carry pinterest hella. Chillwave
                tumeric tattooed gentrify.</p>
            </div>
            <div class="md-layout-item">
              <p class="md-display-1">Frontend dabbler</p>
              <p>Lorem ipsum dolor amet blue bottle wayfarers pitchfork,
                sartorial vegan deep v air plant. IPhone man bun pug street
                 art offal four loko,slow-carb hashtag cronut actually keytar
                 literally art party edison bulb ethical. Austin woke gochujang
                 portland, kale chips authentic pok
                pok tote bag paleo kickstarter church-key selvage enamel pin.
                Palo santo photo booth helvetica, tote bag truffaut wayfarers celiac.
                Pop-up
                post-ironic meh squid everyday carry pinterest hella. Chillwave
                tumeric tattooed gentrify.</p>
            </div>
        </div>

        <div class="md-layout">
          <p class="md-display-2 work-text">Some of my work...</p>
        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item img-placeholder">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item img-placeholder">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
        </div>

        <div class="md-layout">
          <span class="md-display-2 work-text">Some of my favorite things</span>
          <p>Lorem ipsum dolor amet blue bottle wayfarers pitchfork,
            sartorial vegan deep v air plant. IPhone man bun pug street
              art offal four loko,slow-carb hashtag cronut actually keytar
              literally art party edison bulb ethical. Austin woke gochujang
              portland, kale chips authentic pok
            pok tote bag paleo kickstarter church-key selvage enamel pin.
            Palo santo photo booth helvetica, tote bag truffaut wayfarers celiac.
            Pop-up
            post-ironic meh squid everyday carry pinterest hella. Chillwave
            tumeric tattooed gentrify.</p>
        </div>


      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);


export default {
  name: 'HelloWorld',
  data: () => ({
    menuVisible: false,
  }),
};
</script>


<style scoped lang="scss">
  .md-app {
    max-height: 800px;
  }

.md-app.md-flexible .md-display-1  {
    position: initial!important;
  }

  .md-app-toolbar {
    height: 196px;
  }

  .traits-row {
    margin-top:32px;
    margin-bottom:50px;
  }

  .work-text {
    margin: 0 auto;
    text-align: center;
  }

  .title-text {
    color: white;
  }

  .img-placeholder {
    background-color: #757575;
    height: 100px;
    margin: 24px;
  }

  .md-app-content {
    margin-left:10%;
    margin-right:10%;
  }
</style>
