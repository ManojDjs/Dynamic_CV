<template>
  <div class="px-0 py-0 md:px-0 lg:px-0">
    <div
      class="
        grid
        p-2
        lg:p-2
        bg-indigo-50
        border-round
        mb-2
        text-center
        lg:text-left
      "
    >
      <div class="px-4 py-4 md:px-6 lg:px-8">
        <div class="font-bold text-5xl text-indigo-800 mb-3">Areas of Intrest</div>
        <div class="text-indigo-700 line-height-3 text-xl mb-6">
          As a Data Engineer and Data Scientist, I translate data into
          valuable and comprehensible insights. My goal is to improve results,
          make the right decisions and save costs. I am experienced in machine
          learning, supervised and unsupervised algorithms and use data
          visualization techniques to present the results. I use Python,Pyspark,Pandas, SQL,
          Plotly and Tableau for my Projects.
        </div>
      </div>
      <div
        class="col-12 md:col-6 lg:col-4 p-3"
        v-bind:key="item"
        v-for="item in service"
      >
        <div
          class="
            shadow-6
            border-round-3xl
            bg-indigo-800
            mb-3
            h-full
            flex-column
            justify-content-between
            flex
          "
        >
          <div class="p-4">
            <div class="flex align-items-center">
              <span
                class="
                  inline-flex
                  border-circle
                  align-items-center
                  justify-content-center
                  bg-yellow-100
                  mr-3
                "
                style="width: 48px; height: 48px"
                ><i :class="item.Icon"></i></span
              ><span class="text-900 font-bold text-2xl">{{ item.Name }}</span>
            </div>
            <p class="mt-3 mb-0 text-700 line-height-3">
              {{ item.Description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["service"]),
  },
};
</script>


<style>
</style>