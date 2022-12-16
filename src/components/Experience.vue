<template>
  <div class="Education surface-0 p-3 border-round">
    <div class="card">
      <h1 class="text-center md:text-left md:text-5xl text-xl font-bold text-900 font-bold px-4  md:px-6 lg:px-8">
        My Professional Life
      </h1>
      <li v-bind:key="item" v-for="item in experience">
        <Fieldset
          :legend="item['Years']"
          :toggleable="item.toggable"
          :collapsed="item.collapsed"
        >
          <Card style="background-color: #fdfefe">
            <template #title>
              <span
                class="
                  block
                  text-5xl
                  uppercase
                  text-left
                  font-bold
                  mb-1
                  text-indigo-700
                "
              >
                {{ item.Title }}</span
              >
            </template>
            <template #subtitle>
              <span
                class="
                  block
                  text-3xl
                  uppercase
                  text-left
                  font-bold
                  mb-1
                  text-indigo-700
                "
              >
                {{ item.Company }}</span
              >

              <span class="block text-left font-bold mb-1 text-teal-800">
                {{ item.Years }}</span
              >
            </template>
            <template #content>
              <span
                class="
                  block
                  text-xl text-left
                  font-bold
                  mb-2
                  mp-2
                  text-bluegray-900
                "
                >Skills:</span
              >
              <div class="card">
                <div
                  class="
                    flex flex-row flex-wrap
                    card-container
                    column-gap-2
                    row-gap-2
                  "
                >
                  <div
                    class="
                      flex
                      align-items-center
                      justify-content-center
                      font-bold
                      text-white
                    "
                    v-bind:key="skill"
                    v-for="skill in item.Skills"
                  >
                    <Tag
                      class="column-gap-1"
                      :severity="get_random_color()"
                      :value="skill"
                      rounded
                      >{{ skill }}</Tag
                    >
                  </div>
                </div>
              </div>
              <br />

              <span
                class="block text-xl text-left font-bold mb-1 text-bluegray-800"
                >Roles and Responsibilities:</span
              >

              <ul
                class="list-disc text-left"
                v-bind:key="exp"
                v-for="exp in item.Roles"
              >
                <li class="text-left font-bold text-teal-800">
                  {{ exp }}
                </li>
              </ul>
            </template>
          </Card>
        </Fieldset>
      </li>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tag from "primevue/tag";
export default {
  data() {
    return {
      events1: [
        {
          status: "Master's in Advanced Computer Science",
          uni: "Northumbria Univeristy, NewCastle Upon Tyne",
          date: "01/10/2019-14/09/2021",
          icon: "pi pi-check",
          color: "#9C27B0",
          image:
            "https://northumbria-cdn.azureedge.net/-/media/corporate-website/new-sitecore-gallery/postgraduate/in-page-images/bl/half-width---cce.gif?modified=20201119194257",
        },
        {
          status: "Bachelor's in Computer Science",
          uni: "Gayatri Vidya Parishad School of engineering, India",
          date: "06/06/2014-03/02/2018",
          icon: "pi pi-check",
          color: "#607D8B",
          image:
            "https://pbs.twimg.com/profile_images/1096439797554401280/ZBHjCt-__400x400.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState(["experience"]),
  },
  components: {
    Tag,
  },
  methods: {
    get_random_color() {
      const items = [
        "success",
        "info",
        "warning",
        "danger",
        "help",
        "primary",
        "secondary",
      ];
      // console.log(items[Math.floor(Math.random()*items.length)])
      console.log(this.experience[0]["collapsed"]);
      return items[Math.floor(Math.random() * items.length)];
    },
  },
};
</script>
<style  lang='scss' scoped>
.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  z-index: 1;
}
::v-deep(.p-timeline-event-content) ::v-deep(.p-timeline-event-opposite) {
  line-height: 1;
}
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }
    .p-timeline-event-opposite {
      flex: 0;
    }
    .p-card {
      margin-top: 1rem;
    }
  }
}
</style>
<!-- <Timeline :value="experience" align="alternate" class="customized-timeline ">
               <template #marker="slotProps">
                  <span class="custom-marker p-shadow-2" :style="{backgroundColor: slotProps.item.color}">
                      <i :class="slotProps.item.icon" style="font-size: 2rem"></i>
                  </span>
              </template>
              <template #content="slotProps">
                  <Card style="background-color:#FDFEFE">
                      <template #title>
                        <span class="block text-3xl font-bold mb-1 text-orange-600">  {{slotProps.item.Title}}</span>
                      </template>
                      <template #subtitle>
                        <span class="block text-xl font-bold mb-1 text-indigo-800">  {{slotProps.item.Company}}</span>
                       
                        <span class="block text-xl font-bold mb-1 text-indigo-800"> {{slotProps.item.Years}}</span>
                      </template>
                      <template #content>
                        <span class="block text-xl font-bold mb-1 text-indigo-600">Skills:</span>
                        <Tag class="mr-2 pr-1" :severity="get_random_color()" :value="item" rounded v-for="item in slotProps.item.Skills">{{item}}</Tag>
                        

                        <span class="block text-xl font-bold mb-1 text-indigo-600">Roles and Responsibilities:</span>
                       
                            <ul class="list-disc text-left"  v-for="item in slotProps.item.Roles">
                                <li class="text-left text-orange-600">
                                   {{item}}
                                </li>
                            </ul>
                      </template>
                  </Card>
              </template>
          </Timeline> -->
