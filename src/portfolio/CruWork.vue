<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Cru at UConn</span>
      </md-app-toolbar>

      <md-app-content>

      <h3 class="md-display-3">Cru at UConn</h3>
      <a href="https://www.cruatuconn.org/">Cru at UConn's website</a>
        <h3 class="md-display-1">Becoming relevant</h3>

      <p class="main-content">
        Cru at UConn needed a space to attract new students, communicate currents events,
        stay in touch with alumni, and encourage contact from interested students on campus.
        The organization had an outdate, cramped, hard-to-find site. Most students had never
        heard of it, and for good reason. Marketing to a college demographic with an outdated
        site was a disastrous strategy.
      </p>

        <h3 class="md-display-1">Setting expectations</h3>

        <p class="main-content">
        We created a set of goals for a new Cru site.
        <ul>
            <li>Clean look and feel. </li>
            <li>Responsive across devices, mobile through desktop.</li>
            <li>Easy future maintenance by a non-technical webmaster.</li>
            <li>Ability to feature upcoming events</li>
            <li>Prominent contact form that connected with a Cru specific email address.</li>
            <li>A running blog for meeting updates and student pieces.</li>
        </ul>
      </p>

        <h3 class="md-display-1">A solution that works</h3>

        <p class="main-content">
        Beyond what Cru had asked for, I wanted to make sure the new site would have a clean, modern
        look and feel on mobile especially. Since our target audience would likely be accessing the site
        from mobile devices almost exclusively, I designed the site to be mobile-first and scale gracefully
        to desktop. <br>
        To allow for featured upcoming events, I created a dynamic section right from the homepage where Cru
        could feature upcoming events as need. The photography used in the site features college studnents.
        As a brand, Cru seeks to be relevant to students and I wanted to maintain that through copy, photography,
        and responsiveness. M=<br>
        I chose Squarespace for its intuitive interface, beautiful templates, and hosting included. Cru manages one
        password for all things "website" and is able to easily add in events, manage submissions to their contact
        forms, and post photos of semester meetings.
      </p>

        <h3 class="md-display-1">The result</h3>

    <p class="main-content">
        The results? A beautiful site that Cru is proud to advertise to new students. A new venue for posting
        content and reaching students.
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
