<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Root Cellar Portland</span>
      </md-app-toolbar>

      <md-app-content>

      <h3 class="md-display-3">Cru at UConn</h3>
      <a href="http://www.therootcellarport.org/">Cru at UConn's website</a>
        <h3 class="md-display-1">A forgotten site</h3>

      <p class="main-content">
        The Root Cellar Portland had recently focused on a social media facelift. They wanted to feature a broad
        variety of programs as well as attract new volunteers and donors. The problem? Their website reflected none
        of it. The website screamed "dated template"! And seemed to be a mash of colors and layouts. In the midst of
        runnig essential programs, the site had fallen to the wayside.
      </p>

        <h3 class="md-display-1">Creating a new look</h3>

        <p class="main-content">
        I met with the director of the Root Cellar to discuss his priorities for the site. Through our conversation,
        it became clear to me that the Root Cellar had a story to tell - a story buried behiind six paragraphs of
        plain text, two levels of navigation deep. I want to elevate their founding story as well as feature current work.
        Together we laid out some goals for the project.
        <ul>
            <li>Clean look and feel</li>
            <li>A revamped "Our story" section</li>
            <li>Streamlined "volunteer" section that encourages new volunteers</li>
            <li>Reducing overall text on the site</li>
            <li>Better incorporation of branding and appropriate colors</li>
            <li>Prominent donation portal</li>
        </ul>
      </p>

        <h3 class="md-display-1">Telling the story</h3>

        <p class="main-content">
        As I started working on the site, the first thing I wanted to tackle was to incorporate more of the Root
        Cellar's brand, in tandem with efforts to create a social media brand. When I asked for a branding document,
        the director wasn't even sure he had one. Luckily, they did. I used the branding palette throughout the site
        to create a unified look and feel. <br>
        The original site had been very text heavy. I focused on color, quotes, and imagery to allow the site to breathe,
        and give it a more conversational feel. <br>
        Finally, I wanted to tell the Root Cellar's story. I elevated their story to be a top nav item and used a layout
        that features color and quotes to draw visitors into the nonprofit's humble roots (pun intended).

      </p>

        <h3 class="md-display-1">The result</h3>

    <p class="main-content">

      </p>


      <p>Pardon our appearance. This page is currently under construction</p>
      <md-button class="md-primary" button style="margin-top:50px"><router-link to="/">Back to main page</router-link></md-button>

    </md-app-content>
    </md-app>
  </div>

</template>

<script>
export default {
  name: 'RootCellarWork',
};

</script>

<style lang="scss" scoped>
.main-content {
  max-width: 60%;
}

</style>
