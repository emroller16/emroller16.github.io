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
          <!-- <p class="md-display-1 margin-top">What I do</p> -->

          <!-- <span class="md-display-3 title-text">Nice to meet you.</span> -->
          <div class="md-layout md-gutter main-content">
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">UI Designer</p>
              <p>I have a passion for design that's aesthetically pleasing as well as
                functional.
              </p>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">Psychology nerd</p>
              <p>I'm fascinated by the underpinnings of human behavior. A background in psychology
                fuels an obsessive need to understand what people actually do,
                not just what they say they'll do. </p>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <p class="md-display-1 title-text">Frontend dabbler</p>
              <p>Mobile first design. LESS and SCSS. Flexbox. I've worked in Bootstrap, AngularJS, Angular,
                and Vue.JS.
              </p>
            </div>
        </div>

        <md-divider></md-divider>


        <div class="md-layout margin-top">
          <p class="md-display-1 title-text" style="padding-left:65px">Work</p>
        </div>


        <div class="md-layout md-gutter portfolio-section">
            <!-- <div class="md-layout-item img-placeholder" v-for="(item, index) in items" :key="index"> -->
            <div class="md-layout-item portfolio-item md-size-33">
              <div class="portfolio-inner">
                <img src="../assets/amistad.png">
              </div>
                <div class="portfolio-text">
                  <p>Website Redesign</p>
                  <p>Amistad Peer Recovery </p>
              </div>
              <md-button class="md-primary" button><router-link to="/amistad">See more</router-link></md-button>
            </div>

            <div class="md-layout-item portfolio-item md-size-33">
              <div class="portfolio-inner">
                <img src="../assets/root-cellar.webp">
              </div>
                <div class="portfolio-text">
                  <p>Website Redesign</p>
                  <p>Root Cellar Portland</p>
              </div>
                <md-button class="md-primary" button><router-link to="/root-cellar">See more</router-link></md-button>
            </div>

            <div class="md-layout-item portfolio-item">
              <div class="portfolio-inner">
                <img src="../assets/cru.jpeg" class="cru-image">
              </div>
              <div class="portfolio-text">
                <p>Website Design</p>
                <p>Cru at UConn</p>
              </div>
                <md-button class="md-primary" button><router-link to="/cru-uconn">See more</router-link></md-button>
            </div>

            <!-- <div class="md-layout-itemportfolio-item md-medium-size-33 md-small-size-100 md-xsmall-size-100"> -->
              <!-- <img src="../assets/amistad.png"> -->
              <!-- <p>Website Redesign: Amistad Peer Recovery </p> -->
              <!-- <md-button class="md-primary" button><router-link to="/amistad">See more</router-link></md-button> -->
            <!-- </div> -->
        </div>

        <md-divider></md-divider>


        <!-- <div class="md-layout md-gutter">
            <div class="md-layout-item amistad-section">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
            <div class="md-layout-item img-placeholder">
            </div>
        </div> -->

        <div class="margin-top introduction-section">
          <p class="md-display-1 title-text">An introduction</p>
          <p class="md-display-1" style="font-weight:300; font-size:20px">Nice to meet you!</p><br>
          <p>I'm a UX designer, but outside of work, I love hiking. Some favorite spots: <span class="focus">Baxter State Park, Bryce National Park, and the White Mountains.</span>
          I'm a self proclaimed book nerd. I'm currently reading <span class="focus">Christian and Griffith's "Algorithmns to live by", Stephen King's Dark Tower series,
          and Adam Grant's "Originals".</span></p>
        </div>

      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #3fc4ff;

.md-app .md-content.md-theme-default {
  border:none!important;
}

.main-content {
  margin:70px 46px 80px 46px;
}

.md-app-content {
  max-height: 600px;
  // border: 1px solid white;
  max-width: 100%;
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
margin-top:70px;
}

  // Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-app.md-flexible .md-display-1, .md-display-2  {
  position: initial!important;
}

// .img-placeholder {
// background-color: #757575;
// height: 300px;
// margin: 24px;
// }
//   .amistad-section {
//   background: url("../assets/amistad.png") no-repeat center;
//   background-size: contain;
//   height: 300px;
//   margin: 24px;
// }

.portfolio-section {

  .portfolio-item {
    height: 300px;
    margin: 24px 16px;
    max-width: 33%;
    margin-bottom: 80px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    height: auto;
  }

  .cru-image {
    max-width: 150px!important;
  }

  .md-button {
  margin-left:28%;
  }

  .portfolio-inner {
    height:150px;
  }

  .portfolio-text {
    display: block;
    padding-left: 30%;
    margin-top:32px;

    p:first-child {
    font-weight: 500;
    color: rgba(0,0,0,0.54);
    padding-top: 16px;
    margin-bottom: 0px;
    }

    p:last-child {
    font-weight: 400;
    font-size:20px;
    color: rgb(0,0,0);
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    }
  }

}

.introduction-section {
  margin:70px 46px 80px 46px;
  line-height: 1.7;
  max-width: 60%;

}

.spacer {
  width:30px;
  display: inline-block;
}

</style>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
// import PortfolioComponent from './PortfolioComponent.vue';
// import items from '../data/portfolio';

Vue.use(VueMaterial);


export default {
  name: 'Flexible',
  // components: [PortfolioComponent],
  data: () => ({
    menuVisible: false,
    // items: ['Amistad', 'Root Cellar', 'Another'],
    // { name: 'Amistad' },
    // { name: 'Root Cellar' },
    // { name: 'Another' },
    // ],
  }),
  methods: {
    // changeColor() {
    // document.getElementById('test-block').style.backgroundColor = '#673AB7';
    // const colors = ['#FF9800', '#8BC34A', '#2196F3', '#673AB7'];
    // var selectedColorIndex = 0;
    // for (let i = 0; i < colors.length; i++) {
    //     this.selectedIndex += 1;      }
    // console.log(color);
    // let testBlock = document.getElementById('test-block');


    // function updateTestBlock(square, color) {
    //   testBlock.style.backgroundColor = color;
    // }
    // console.log(document.getElementById('test-block').style, 'changeColor called');
    // },
  },
};
</script>
