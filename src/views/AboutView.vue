<template>
  <div class="Main sm:m-0 lg:ml-1 lg:mr-1 ">
    <div
      class="mt-6 max-w-screen flex align-items-center justify-content-center"
    >
      <Nav></Nav>
    </div>
    <div class="pb-2 mt-7 lg:mt-7 border-round">
      <Experience></Experience>
    </div>
    <div class="pb-2 border-round">
      <Skills></Skills>
    </div>

    <div class="pb-2 border-round">
      <Projects></Projects>
    </div>
    <div class="pb-2 border-round">
      <Aboutme></Aboutme>
    </div>
    <div class="pb-2 border-round">
      <Resume></Resume>
    </div>

    <div class="pb-2 border-round">
      <Services></Services>
    </div>
    <!-- <div class="pb-2 border-round"> -->
    <Footer></Footer>
    <!-- </div> -->
  </div>
</template>
<script>
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue";
import Footer from "@/components/Footer.vue";
import Services from "@/components/Services.vue";
import Resume from "@/components/Resume.vue";
import Nav from "@/components/Nav.vue";
import Profile from "@/components/Profile.vue";
export default {
  name: "HomeView",
  components: {
    Projects,
    Skills,
    Experience,
    Footer,
    Services,
    Resume,
    Nav,
    Profile
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
<style>
</style>