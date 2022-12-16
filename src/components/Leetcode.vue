<template>
  <div class=" px-4 py-4 md:px-6 md:py-6 lg:px-8 border-round text-center
        lg:text-left">
    <div class="font-bold text-3xl  text-indigo-800 mb-3">
      What i do when i am free?
    </div>
    <div class="text-indigo-700 line-height-3 text-xl mb-6">
          As a Python developer i always love writing algorithms and problem solving. I participate in hackathons, 
          coding challenges. I have completed hacker rank complete profile. Recently i started taking coding challenges
          in Leet code.
        </div>
    <div class="font-large font-bold text-lg text-left uppercase mb-3 text-orange-500">
      {{ username }}
    </div>
    <!-- <div class="surface-ground px-4 py-5 md:px-6 lg:px-8"> -->
    <div class="grid  fadeinleft animation-duration-1000">
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3"
                >Questions Solved</span
              >
              <div class="text-900 font-medium text-xl">{{ totalSolved }}</div>
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                bg-blue-100
                border-round
              "
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-globe text-blue-500 text-xl"></i>
            </div>
          </div>
          <span class="text-green-500 font-medium">{{ totalQuestions }} </span>
          <span class="text-500"> Total Questions</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Ranking</span>
              <div class="text-900 font-medium text-xl">{{ ranking }}</div>
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                bg-orange-100
                border-round
              "
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-map-marker text-orange-500 text-xl"></i>
            </div>
          </div>
          <span class="text-green-500 font-medium">Max Rank </span>
          <span class="text-500">500,0000</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3"
                >Aceptance Rate</span
              >
              <div class="text-900 font-medium text-xl">
                {{ acceptanceRate }}
              </div>
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                bg-cyan-100
                border-round
              "
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-percentage text-cyan-500 text-xl"></i>
            </div>
          </div>
          <span class="text-green-500 font-medium">+ %0.5 </span>
          <span class="text-500">Last week</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Reputation</span>
              <div class="text-900 font-medium text-xl">{{ reputation }}</div>
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                bg-purple-100
                border-round
              "
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-comment text-purple-500 text-xl"></i>
            </div>
          </div>
          <span class="text-green-500 font-medium">3 </span>
          <span class="text-500">responded</span>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      username: "djsmanoj0000",
      status: "success",
      message: "retrieved",
      totalSolved: 360,
      totalQuestions: 1735,
      easySolved: 146,
      totalEasy: 458,
      mediumSolved: 196,
      totalMedium: 904,
      hardSolved: 21,
      totalHard: 368,
      acceptanceRate: 50.92,
      ranking: 47657,
      contributionPoints: 2534,
      reputation: 1,
      submissionCalendar: {},
    };
  },
  methods: {
    get_leet_info() {
      //   this.username == "djsmanoj0000";
      //   axios
      //     .get(this.leetcode["Api"] + this.leetcode["Username"])
      //     .then((resp) => {
      //       console.log(resp.data);
      //       this.totalQuestions = resp.data["totalQuestions"];
      //       this.totalSolved = resp.data["totalSolved"];
      //       this.ranking = resp.data["ranking"];
      //       this.acceptanceRate = resp.data["acceptanceRate"];
      //       this.reputation = resp.data["reputation"];
      //     });
    },
  },
  created() {
    // this.get_leet_info()
  },
  computed: {
    ...mapState(["leetcode"]),
  },
};
</script>
<style>
</style>