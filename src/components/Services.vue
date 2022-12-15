<template>
  <div class="px-2 py-4 md:px-2 lg:px-2">
    <div
      class="
        grid
        p-2
        lg:p-2
        bg-orange-50
        border-round
        mb-2
        text-center
        lg:text-left
      "
    >
      <div class="px-4 py-4 md:px-6 lg:px-8">
        <div class="font-bold text-5xl text-indigo-900 mb-3">SERVICES</div>
        <div class="text-indigo-700 line-height-3 text-xl mb-6">
          As a freelance Data Engineer and Data Scientist, I translate data into
          valuable and comprehensible insights. My goal is to improve results,
          make the right decisions and save costs. I am experienced in machine
          learning, supervised and unsupervised algorithms and use data
          visualization techniques to present the results. I use SQL, R, Python,
          QlikView and Tableau for my data projects.
        </div>
      </div>
      <div
        class="col-12 md:col-6 lg:col-4 p-3"
        v-bind:key="item"
        v-for="item in service"
      >
        <div
          class="
            shadow-4
            border-round-3xl
            surface-card
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
          <!-- <div class="px-4 py-3 surface-100 text-right">
            <button
              class="p-button p-component p-button-rounded p-button-warning"
              type="button"
              aria-label="Load"
            >
              <span
                class="pi pi-download p-button-icon p-button-icon-right"
              ></span
              ><span class="p-button-label">Load</span
              ><span class="p-ink" role="presentation"></span>
            </button>
          </div> -->
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