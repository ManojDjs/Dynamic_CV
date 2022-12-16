<template>
  <div class="card">
    <div
      class="
        grid grid-nogutter
        flex-wrap
        p-2
        lg:p-4
        bg-indigo-50
        border-round
        mb-4
        text-center
        lg:text-left
      "
    >
      <div class="px-4 py-8 md:px-6 lg:px-8">
        <div class="font-bold text-5xl text-indigo-800 mb-3">
          Recent Projects
        </div>
        <div class="text-indigo-700 line-height-3 text-xl mb-6">
          I am working on this projects currently, feel free to coloborate. I am
          always open to learn new technologies.
        </div>

        <div
          class="
            flex flex-column
            align-items-center
            justify-content-center
            lg:flex-row
            gap-3
          "
        >
          <div v-bind:key="item" v-for="item in projects">
            <div
              class="shadow-2 border-round-xl hover:shadow-8"
              style="
                background: linear-gradient(
                  15deg,
                  rgb(249, 22, 22),
                  rgb(249, 115, 22)
                );
                border-left: 10px solid;
              "
            >
              <div class="p-4 border-round card h-max-5 h-min-5">
                <div class="flex mb-3">
                  <div
                    class="p-avatar p-component p-avatar-image p-avatar-circle border-primary-900 surface-overlay border-1"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/22208973?v=4"
                    />
                  </div>

                  <div class="ml-2">
                    <div class="font-bold text-indigo-900 mb-1">
                      Owner {{ item.owner.login }}
                    </div>
                    <div
                      class="text-sm flex align-items-center text-indigo-700"
                    >
                      <span> last updated at </span>
                      <div
                        class="border-circle surface-300 mx-2"
                        style="width: 0.25rem; height: 0.25rem"
                      ></div>
                      <span>{{ item.updated_at }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="text-xl p-3 mb-3 font-medium mb-3 line-height-3"
                  style="border-left: 8px solid"
                >
                  <span class="text-indigo-900">{{ item.name }}</span>
                </div>
                <div
                  class="
                    line-height-3
                    text-indigo-700
                    overflow-hidden
                    text-overflow-ellipsis
                  "
                >
                  Description: {{ item.description }}
                </div>
                <span class="text-indigo-900 font-bold p-component mr-2"
                  ><!----><span class="mr-2">
                    Written in: {{ item.language }}</span
                  ></span
                >
                <div class="template mt-2">
                  <Button
                    class="google p-0"
                    aria-label="Google"
                    @click="open_git(item.html_url)"
                  >
                    <i class="pi pi-github px-2"></i>
                    <span class="px-3">Github</span>
                  </Button>
                </div>
              </div>
            </div>
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
      username: "djsmanoj0000",
      projects: [],
    };
  },
  methods: {
    get_leet_info() {
      this.username == "djsmanoj0000";
      axios.get("https://api.github.com/users/ManojDjs/repos").then((resp) => {
        console.log(resp.data);
        this.projects = resp.data.sort(this.custom_sort).slice(-3).reverse();
        console.log(this.projects);
      });
    },
    custom_sort(a, b) {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    },
    open_git(url) {
      window.open(url);
    },
    get_random_color() {
      return { backgroundColor: "#00000" };
    },
  },
  created() {
    this.get_leet_info();
  },
  computed: {
    ...mapState(["leetcode"]),
  },
};
</script>
<style lang="scss" scoped>
.p-button {
  margin-right: 0.5rem;
}

.p-buttonset {
  .p-button {
    margin-right: 0;
  }
}

.sizes {
  .button {
    margin-bottom: 0.5rem;
    display: block;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.template .p-button i {
  line-height: 2.25rem;
}
.template .p-button.google {
  background: linear-gradient(
    to left,
    var(--bluegray-700) 50%,
    var(--bluegray-800) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--bluegray-900);
}
.template .p-button.google:hover {
  background-position: left bottom;
}
.template .p-button.google i {
  background-color: var(--bluegray-900);
}
.template .p-button.google:focus {
  box-shadow: 0 0 0 1px var(--bluegray-900);
}
</style>
