<template>
  <div class="card p-4 shadow-9 text-center md:text-left border-round">

    <div class="px-4 py-4 md:px-6 lg:px-8">
        <div class="font-bold text-5xl text-indigo-800 mb-3">Work</div>
        <div class="text-indigo-700 line-height-3 text-xl mb-6">
          I am working as a Data Engineer and Data Scientist with a passion to do data modelling. 
          Currently im working on Predivitve maintanance of Jet engines. As a Data Scientist i work with 
          different data models and maintain quality work for reliable predictions. I am a Lead Developer who invloves in development,
          Testing, Code maintanance and Deployments in each stage of SDLC.
        </div>
      </div>
    <div
      class=" px-4 py-4 md:px-6 lg:px-8 text-xl md:text-2xl font-bold text-indigo-800 text-200 text-center md:text-left mb-5 mt-3"
    >
      These are Languages,Frame Works and Tools.I mostly use in work.
    </div>
    <div class="card">
    <div class="flex justify-content-center flex-wrap card-container" >
      <div
        class="flex align-items-center justify-content-center border-round m-2" v-bind:key='item' v-for="item in skills"
      >
        <Card
          style="width: 6rem; height: 8rem; background-color: #fdfefe"
          class="box shadow-5 scalein animation-duration-1000"
          
        >
          <template #title>
            <div class="text-indigo-900 text-sm">{{item.Name}}</div>
          </template>
          <template #content>
            <img :src="item.Source" style="height: 3rem;width: 3rem;" class="pb-1" />
          </template>
        </Card>
      </div>
      
    </div>
    </div>
  </div>
</template>
    <script>
    import { mapState } from "vuex";
export default {
  data() {
    return {
      width: window.innerWidth,
    };
  },
  methods:{
    get_skills(){
      console.log(this.skills)

    }
  },
  computed: {
    ...mapState(["skills"]),
  },
  created(){
    this.get_skills
  }
};
</script>
    <style scoped>
</style>