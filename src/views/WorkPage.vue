<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <AppNav></AppNav>
      </md-app-toolbar>
      <md-app-content>
        <section class="title">
          <div class="md-layout md-alignment-top-center">
            <div class="work-title">
              <h1 class="md-display-1">Work</h1>
            </div>
          </div>
        </section>

        <section class="social">
          <div class="md-layout md-alignment-top-center">
            <div class="social-text">
              <h3 class="md-display-1">
                Check out what I'm currently up to on
                <a
                  href="https://codepen.io/emilyroller16"
                  target="blank"
                >Codepen</a>,
                <a href="https://github.com/emroller16" target="blank">Github</a>,
                <a href="https://codesandbox.io/u/emroller16" target="blank">Codesandbox</a>, and
                <a href="https://stackblitz.com/@emroller16" target="blank">Stackblitz</a>.
              </h3>
            </div>
          </div>
        </section>

        <section class="tabs">
          <div class="md-layout md-gutter md-alignment-top-center">
            <md-chip
              class="md-accent"
              md-clickable
              v-bind:class="{ active: currentFilter === 'all' }"
              v-on:click="setFilter('all')"
            >All</md-chip>
            <md-chip
              class="md-accent"
              md-clickable
              v-bind:class="{ active: currentFilter === 'design' }"
              v-on:click="setFilter('design')"
            >Design</md-chip>
            <md-chip
              class="md-accent"
              md-clickable
              v-bind:class="{ active: currentFilter === 'development' }"
              v-on:click="setFilter('development')"
            >Development</md-chip>
            <md-chip
              class="md-accent"
              md-clickable
              v-bind:class="{ active: currentFilter === 'funStuff' }"
              v-on:click="setFilter('funStuff')"
            >Research</md-chip>
            <md-chip
              class="md-accent"
              md-clickable
              v-bind:class="{ active: currentFilter === 'funStuff' }"
              v-on:click="setFilter('funStuff')"
            >Fun stuff</md-chip>
          </div>
        </section>

        <section class="portfolio">
          <transition-group name="transition" tag="div" class="md-layout" mode="in-out">
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100 md-layout portfolio-item md-alignment-center-center"
              v-for="item in items"
              :key="item.name"
              v-if="currentFilter === item.filterType || currentFilter === 'all'"
              transition="expand"
            >
              <div style="width:200px">
                <p class="md-subtitle">{{item.type}}</p>
                <p class="md-headline">{{item.name}}</p>
                <md-button class="md-raised portfolio-button">
                  <router-link :to="item.link">Read more</router-link>
                </md-button>
              </div>
            </div>
          </transition-group>
        </section>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
//Global styles
$primary-charcoal: #36384c;
$primary-fresh: #849974;
$primary-burgundy: #613a43;
$accent-petal: #e3bab3;
$accent-cream: #e9dccd;
.md-app .md-content.md-theme-default {
  border: none !important;
  height: 100vh;
}

.md-toolbar.md-theme-default .md-title,
.md-toolbar.md-theme-default .md-display-1,
.md-toolbar.md-theme-default .md-display-2 {
  color: $primary-burgundy !important;
}

button.md-button .md-theme-default .md-active {
  text-transform: initial !important;
}

.main-content {
  margin: 70px 46px 80px 46px;
}

.md-app-content {
  padding: 0 !important;
}

.work-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  .md-display-1 {
    color: $primary-burgundy !important;
    border-bottom: 2px solid $primary-burgundy;
    text-align: center;
  }
}

.md-chip.md-theme-default.md-accent.md-clickable > .md-ripple {
  font-size: 16px !important;
  &:active {
    background-color: $primary-burgundy;
  }
}

.tabs {
  margin-bottom: 3rem;
}

.social-text {
  max-width: 600px;
}

// Portfolio section styles
.portfolio {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.portfolio-item {
  min-height: 400px;
  .portfolio-button {
    @media screen and (min-width: 960px) {
      visibility: hidden;
      transition-timing-function: ease-in;
      margin-left: 0 !important;
      a {
        text-decoration: none !important;
      }
    }
  }
  &:hover .portfolio-button {
    visibility: visible;
  }
  &:nth-child(4n-7) {
    background-color: $accent-cream;
    &:hover {
      background-color: darken($accent-cream, 10%);
    }
  }
  &:nth-child(4n-6) {
    background-color: $primary-charcoal;
    color: white;
    &:hover {
      background-color: lighten($primary-charcoal, 10%);
    }
  }
  &:nth-child(4n-5) {
    background-color: $primary-fresh;
    color: white;
    &:hover {
      background-color: darken($primary-fresh, 10%);
    }
  }
  &:nth-child(4n) {
    background-color: $accent-petal;
    &:hover {
      background-color: darken($accent-petal, 10%);
    }
  }
}

.md-app.md-flexible .md-display-1,
.md-display-2 {
  position: initial !important;
}

.transition-enter-active {
  transition: all 0.2s ease;
}
.transition-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.transition-enter, .transition-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

// .transition-enter-active, .transition-leave-active {
//   transition: opacity .5s;
// }
// .transition-enter, .transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

// .portfolio-transition {
//   transform: scale(0.5) translatey(-80px);
//   opacity: 0;
// }

// .portfolio-transition-leave-to {
//   transform: translatey(30px);
//   opacity: 0;
// }

// .portfolio-transition-leave-active {
//   position: absolute;
//   z-index: -1;
// }

// .portfolio {
//   transition: all 0.35s ease-in-out;
// }
</style>

<script>
import AppNav from '../shared/appNav.vue';

export default {
  name: 'WorkPage',
  data: () => ({
    items: [
      {
        name: 'Katie Arnold Photography',
        type: 'Web Design',
        link: '/katie-arnold',
        filterType: 'design',
      },
      {
        name: 'Cru at UConn',
        type: 'Web Design',
        link: '/cru-uconn',
        filterType: 'design',
      },
      {
        name: 'Amistad',
        type: 'Web Design',
        link: '/amistad',
        filterType: 'design',
      },
      {
        name: 'A case in meta: Portfolio',
        type: 'Web development',
        link: '/portoflio',
        filterType: 'development',
      },
      {
        name: 'The Root Cellar',
        type: 'Web design',
        link: '/root-cellar',
        filterType: 'design',
      },
      {
        name: 'Hold That Thought: The UX of Editing',
        type: 'Research',
        link: '/save-research',
        filterType: 'research',
      },
      {
        name: 'Human Machine Collaboration',
        type: 'Research',
        link: '/hmc',
        filterType: 'research',
      },
      {
        name: 'UX Research for Building Better Products',
        type: 'Research',
        link: '/uxr',
        filterType: 'research',
      },
      {
        name: 'Tyler Utility Billing Portal',
        type: 'Design',
        link: '/ubp',
        filterType: 'design',
      },
    ],

    currentFilter: 'all',
  }),
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
};
</script>
