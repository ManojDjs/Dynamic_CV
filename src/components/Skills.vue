<template>
  <div class="card p-4 shadow-9 surface-0 border-round">
    <div
      class="text-5xl font-bold text-indigo-200 text-200 text-center mb-5 mt-3"
    >
      Languages,Frame Works and Tools, I Mostly Use
    </div>
    <div class="card">
    <div class="flex justify-content-center flex-wrap card-container" >
      <div
        class="flex align-items-center justify-content-center border-round m-2" v-bind:key='item' v-for="item in skills"
      >
        <Card
          style="width: 8rem; height: 10rem; background-color: #fdfefe"
          class="box shadow-5"
          
        >
          <template #title>
            <div class="text-indigo-900 text-lg">{{item.Name}}</div>
          </template>
          <template #content>
            <img :src="item.Source" style="height: 4rem;width: 4rem;" class="pb-1" />
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