<template>
    <div class="Main bg-bluegray-50">
        <div class="pb-2 border-round" id="landing">
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
        <div >
            <Skills></Skills>
        </div>
        
        <div class="pb-2 border-round">
            <Projects></Projects>
        </div>
        <!-- <div class="pb-2 border-round">
            <Aboutme></Aboutme>
        </div> -->
        <div class="pb-2 border-round">
            <Footer></Footer>
        </div>



    </div>
</template>
<script>
import Landing from '@/components/Landing.vue'
import Leetcode from '@/components/Leetcode.vue'
import Work from '@/components/work.vue'
import Aboutme from '@/components/Aboutme.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Footer from '@/components/Footer.vue'
import Button from 'primevue/button'
  export default {
    name: 'HomeView',
   components:{
    Landing,
    Leetcode,
    Work,
    Aboutme,
    Projects,
    Skills,
    Experience,
    Footer,
    Button
},
   methods:{
   scroll(id) {  
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      })
    }
    }
    
  }
</script>
<style>

</style>