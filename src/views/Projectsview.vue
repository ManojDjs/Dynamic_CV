<template>
    <div class="Main sm:m-0 lg:ml-1 lg:mr-1 ">
      <div
        class="mt-6 max-w-screen flex align-items-center justify-content-center"
      >
        <Nav></Nav>
      </div>
      <div class="pb-2 border-round">
      <Aboutme></Aboutme>
    </div>
      <div class="pb-2 border-round">
        <Projects></Projects>
      </div>
      
      <Footer></Footer>
    </div>
  </template>
  <script>
    import Nav from "@/components/Nav.vue";
    import Aboutme from "@/components/Aboutme.vue";
  import Projects from "@/components/Projects.vue";
 
  import Footer from "@/components/Footer.vue";
  


  export default {
    name: "HomeView",
    components: {
        Nav,
        Aboutme,
      Projects,
    
      Footer,
     
     
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