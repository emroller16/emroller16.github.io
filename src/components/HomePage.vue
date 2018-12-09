<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1 hello-text">Hey there! I'm Emily.</span>
        </div>
      </md-app-toolbar>

      <!-- <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer> -->

      <md-app-content>
          <!-- <span class="md-display-3 title-text">Nice to meet you.</span> -->
          <div class="md-layout md-gutter margin-top margin-bottom">
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">UI Designer</p>
              <p>I have a passion for design that's aesthetically pleasing as well as
                functional.
              </p>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">Psychology nerd</p>
              <p>I'm fascinated by the underpinnings of human behavior. Exposure to concepts such as
                social networks analysis, satisficing, decision-making heuristics and psychological
                distanceAs a research assistant in the Judgment and Decision-making Lab at the University
                of Connected was just the beginnings of an obsession. From "Thinking Fast and Slow" and
                "Nudge" to "Algorithms to Live By" and "Habits" I get a kick out of thinking about thinking.
                A background in psychology fuels an obsessive need to understand what people actually do,
                not just what they say they'll do. </p>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">Frontend dabbler</p>
              <p>I like CSS. I can't call myself a full stack developer but I can run an npm install and
                I can pronbably beat you in FLexbox Froggy. I've worked in Bootstrap, AngularJS, Angular,
                and Vue.JS. I'm comfortable with SCSS and LESS know enough Javascript to get by. Whether it's
                a quick one page site or functional prototype, I'm comfortable in the front end dev world. Lorem
                ipsum of choice is Hipster Ipsum.
              </p>
            </div>
        </div>

        <div class="md-layout margin-top">
          <p class="md-display-1">Some of my work...</p>
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

        <div class="margin-top">
          <p class="md-display-1">Some of my favorite things</p>
          <p style="display: inline-block; line-height:2">Some random things in no real order.<br>
          <span class="focus">Bryce Canyon</span> Can anyone say "Hoodoos?"<br>
          I have a strange addiction to peanut butter but I just discovered <span class="focus">Trader Joes almond butter</span><br>
          I'm not a huge TV person but I'm obsessed with <span class="focus">Christopher Nolan movies</span><br>
          I'm currently obsessed with the book <span class="focus"> "Algorithms to Live By"</span><br>
          I just discovered how to make <span class="focus">homemade bread</span> and I don't think life will ever be the same.</p>
        </div>

      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #3fc4ff;

  .md-app-content {
    max-height: 600px;
    border: 1px solid white;
    margin-left:10%;
    margin-right:10%;
    // padding-top:40px;
  }

  .hello-text {
    color:white!important;
  }

  .md-app-toolbar {
    height: 196px;
  }

  .title-text {
    color: $primary-color!important;
  }

  .focus {
    color: $primary-color!important;
    font-weight: 500;
    font-size: 20px;
  }

  .margin-top {
  margin-top:50px;
  }

  .margin-bottom {
    margin-bottom:50px;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app.md-flexible .md-display-1, .md-display-2  {
    position: initial!important;
  }

  .img-placeholder {
  background-color: #757575;
  height: 100px;
  margin: 24px;
}

</style>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);


export default {
  name: 'Flexible',
  data: () => ({
    menuVisible: false,
  }),
};
</script>
