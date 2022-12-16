<template>
  <div class="Main sm:m-0 lg:ml-1 lg:mr-1">
    <div
      class="mt-6 max-w-screen flex align-items-center justify-content-center"
    >
      <Nav></Nav>
    </div>
    <div class="pb-2 sm:mt-6 lg:mt-7" id="landing">
      <Landing></Landing>
    </div>
    <div class="pb-2 border-round">
      <Leetcode></Leetcode>
    </div>
    <div class="pb-2 border-round">
      <Work></Work>
    </div>
    <div class="pb-2 border-round">
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
import Landing from "@/components/Landing.vue";
import Leetcode from "@/components/Leetcode.vue";
import Work from "@/components/work.vue";
import Aboutme from "@/components/Aboutme.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue";
import Footer from "@/components/Footer.vue";
import Button from "primevue/button";
import Services from "@/components/Services.vue";
import Resume from "@/components/Resume.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    Landing,
    Leetcode,
    Work,
    Aboutme,
    Projects,
    Skills,
    Experience,
    Footer,
    Button,
    Services,
    Resume,
    Nav,
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