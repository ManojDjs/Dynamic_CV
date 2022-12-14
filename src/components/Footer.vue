<template>
  <div class="Footer">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 bg-teal-200">
      <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3">
          <i class="pi pi-github"></i>&nbsp;POWERED BY @ManojDjs
        </div>

        <div class="card">
          <div
            class="flex justify-content-center flex-wrap card-container mb-4"
          >
            <div
              class="
                flex
                align-items-center
                justify-content-center
                lg:text-3xl
                text-2xl text-indigo-200
                font-bold
                border-round
                m-4
              "
            >
              4 Years of Experience
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                lg:text-3xl
                text-2xl text-indigo-200
                font-bold
                border-round
                m-4
              "
            >
              {{ repo_c }} Projects
            </div>
            <div
              class="
                flex
                align-items-center
                justify-content-center
                lg:text-3xl
                text-2xl text-indigo-200
                font-bold
                border-round
                m-4
              "
            >
              92% Positive feed back
            </div>
          </div>
        </div>
        <div class="text-900 font-bold text-5xl mb-4">
          Join Me For Colloboration
        </div>

        <Button
          label="Join Now"
          icon="pi pi-megaphone"
          class="
            font-bold
            px-5
            py-3
            p-button-raised p-button-rounded
            white-space-nowrap
          "
          @click="scroll('landing')"
        ></Button>
      </div>
    </div>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
      <div class="text-500 mb-5">
        Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
      </div>
      <div class="grid grid-nogutter border-top-1 surface-border pt-2">
        <div class="col-12 md:col-6 p-3">
          <div class="text-500 font-medium mb-2">Name</div>
          <div class="text-900">Elliot Alderson</div>
        </div>
        <div class="col-12 md:col-6 p-3">
          <div class="text-500 font-medium mb-2">Email</div>
          <div class="text-900">elliot.alderson@email.com</div>
        </div>
        <div class="col-12 md:col-6 p-3">
          <div class="text-500 font-medium mb-2">Applied Position</div>
          <div class="text-900">Front-End Developer</div>
        </div>
        <div class="col-12 md:col-6 p-3">
          <div class="text-500 font-medium mb-2">Salary Expectation</div>
          <div class="text-900">$150,000</div>
        </div>
        <div class="col-12 p-3">
          <div class="text-500 font-medium mb-2">Bio</div>
          <div class="text-900 line-height-3">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae. Commodo odio aenean sed adipiscing diam donec adipiscing
            tristique. Eget felis eget nunc lobortis mattis aliquam faucibus
            purus in.
          </div>
        </div>
        <div class="col-12 p-3">
          <div class="text-500 font-medium mb-3">Files</div>
          <div
            class="
              flex
              md:align-items-center md:justify-content-between
              border-top-1
              surface-border
              p-3
              flex-column
              md:flex-row
            "
          >
            <div class="flex align-items-center">
              <span class="block pi pi-file mr-2"></span
              ><span class="text-900">resume_en.pdf</span>
            </div>
            <button
              class="p-button p-component p-button-outlined mt-2 md:mt-0"
              type="button"
              aria-label="Download"
            >
              <!----><span
                class="pi pi-download p-button-icon p-button-icon-left"
              ></span
              ><span class="p-button-label">Download</span
              ><!----><span class="p-ink" role="presentation"></span>
            </button>
          </div>
          <div
            class="
              flex
              md:align-items-center md:justify-content-between
              border-top-1 border-bottom-1
              surface-border
              p-3
              flex-column
              md:flex-row
            "
          >
            <div class="flex align-items-center">
              <span class="block pi pi-file mr-2"></span
              ><span class="text-900">cover_letter_en.pdf</span>
            </div>
            <button
              class="p-button p-component p-button-outlined mt-2 md:mt-0"
              type="button"
              aria-label="Download"
            >
              <!----><span
                class="pi pi-download p-button-icon p-button-icon-left"
              ></span
              ><span class="p-button-label">Download</span
              ><!----><span class="p-ink" role="presentation"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      username: "ManojDjs",
      status: "success",
      message: "retrieved",
      repo_c: 40,
    };
  },
  methods: {
    get_git() {
      this.username == "ManojDjs";
      console.log(this.username);
      axios.get(this.social.Git + this.social.Git_user).then((resp) => {
        console.log(resp.data);
        this.repo_c = resp.data["public_repos"];
      });
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    this.get_git();
  },
  computed: {
    ...mapState(["leetcode", "social"]),
  },
};
</script>