<template>
  <div class="Face bg-blue-0 box border-round">
    <!-- <div class="text-5xl font-bold text-100 text-indigo-400  text-center m-5 pt-3 uppercase">About Me</div> -->
    <div class="grid my-1 mx-0 md:mx-1 md:my-0 max-h-auto md:p-4 border-round">
      <div class="col-12 md:col-6 lg:col-6 my-auto">
        <div class="text-700 text-center box border-round py-4
                px-4
                md:py-0
                md:px-0">
          <section>
            <div
              class="
                text-xl
                md:text-2xl
                 text-justify
                pb-2
                text-indigo-800
                font-bold
              "
            >
              Who am i?
            </div>
            <div class="text-sm md:text-lg text-justify text-indigo-900 font-bold line-height-3">
              {{ about["Introduction"] }}
            </div>
          </section>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-6 md:inline-flex max-h-auto">
        <div
          class="
            justify-content-evenly
            align-content-evenly
            w-auto
            h-auto
            py-0
            px-0
            md:px-6 md:py-0
          "
        >
          <img
            src="https://saritainfotech.com/wp-content/uploads/2020/10/document-mgt.gif"
            class="shadow-0"
            alt="profile"
            style="width: 100%; display: block; border-radius: 10%"
            id="image"
          />
        </div>
      </div>
    </div>
    <div class="grid my-1 mx-0 md:mx-1 md:my-0 max-h-auto p-4 border-round">
      <div class="col-12 md:col-6 lg:col-6 md:inline-flex max-h-auto">
        <div
          class="
            justify-content-evenly
            align-content-evenly
            w-auto
            h-auto
            py-0
            px-0
            md:px-2 md:py-0
          "
        >
          <img
            src="https://tagcoders.com/img/data-analysis.gif"
            class="shadow-0"
            alt="profile"
            style="width: 100%; display: block; border-radius: 10%;height:90%"
            id="image"
          />
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-6 my-auto">
        <div class="text-700 text-center box border-round">
          <section>
            <div
              class="
                text-xl
                md:text-2xl
                text-justify
                pb-2
                text-indigo-800
                font-bold
              "
            >
              What exactly i do?
            </div>

            <ul class="list-disc" v-bind:key="item" v-for="item in about.Roles">
              <li class="text-left text-sm md:text-lg text-indigo-900 font-bold">
                {{ item }}
              </li>
            </ul>
          </section>
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
    ...mapState(["about"]),
  },
};
</script>


<style>
</style>