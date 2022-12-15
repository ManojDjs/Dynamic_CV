<template>
  <div class="Projects surface-0 border-round-xl mb-2">
    <!--  my-6 mx-2 md:mx-6 md:my-2 mb-3 border-round"> -->
    <div
      class="text-5xl font-bold text-100 text-indigo-200 text-center m-5 pt-3"
    >
      My Peronsonal Projects
    </div>
    <div class="grid pl-3 pr-3">
      <div
        class="
          col-12
          md:col-6
          lg:col-3
          box
          shadow-9
          p-1
          scalein
          animation-duration-500 animation-iteration-1
          border-round
        "
      >
        <Card style="height: 550px" class="bg-indigo-800">
          <template #header>
            <img
              alt="user header"
              src="@/assets/lettingavenue.jpg"
              style="height: 200px"
              class="p-3"
            />
          </template>
          <template #title>
            <div class="overflow-hidden" style="height: 100px">
              Letting avenue Property Lisiting Application
            </div>
          </template>
          <template #content>
            <div class="overflow-hidden" style="height: 100px">
              A Web Application Platform for lisitng rental houses on web. Built
              with Vuejs front end and Django Rest API Backend. Integrated with
              the Docker and uploaded on Github.
            </div>
          </template>
          <template #footer>
            <Button
              icon="pi pi-github"
              onclick="location.href='https://github.com/ManojDjs/Letting_avenue'"
              type="button"
              label="Github"
              badge="8"
            />
          </template>
        </Card>
      </div>
      <div
        class="
          col-12
          md:col-6
          lg:col-3
          box
          shadow-9
          p-1
          scalein
          animation-duration-500 animation-iteration-1
          border-round
        "
      >
        <Card style="height: 550px" class="bg-indigo-800">
          <template #header>
            <img
              alt="user header"
              src="@/assets/health.jpg"
              style="height: 200px"
              class="p-3"
            />
          </template>
          <template #title>
            <div class="overflow-hidden" style="height: 100px">
              Online Medcation webapplication built with Vuejs and Django DRF.
            </div>
          </template>
          <template #content>
            <div class="overflow-hidden" style="height: 100px">
              Qigong Practise Application build with Vuejs and Django DRF. This
              project is developed during my masters internship period. Well
              built with real time availablility.
            </div>
          </template>
          <template #footer>
            <Button
              icon="pi pi-github"
              onclick="location.href='https://github.com/ManojDjs/Docker-django-vue-boilerplate'"
              type="button"
              label="Github"
              badge="15"
            />
          </template>
        </Card>
      </div>
      <div
        class="
          col-12
          md:col-6
          lg:col-3
          box
          shadow-9
          p-1
          scalein
          animation-duration-500 animation-iteration-1
          border-round
        "
      >
        <Card style="height: 550px" class="bg-indigo-800">
          <template #header>
            <img
              alt="user header"
              src="@/assets/hrv.jpg"
              style="height: 200px"
              class="p-3"
            />
          </template>
          <template #title>
            <div class="overflow-hidden" style="height: 100px">
              Remote Heart rate using Web camera
            </div>
          </template>
          <template #content>
            <div class="overflow-hidden" style="height: 100px">
              Heart Rate measurement with non-contact process using the web
              camera RPPG method. This project uses Computer vision alogorithm.
              Built with Flask, Django and Vuejs.
            </div>
          </template>
          <template #footer>
            <Button
              icon="pi pi-github"
              type="button"
              onclick="location.href='https://github.com/ManojDjs/Backend_HRv'"
              label="Github"
              badge="10"
            />
          </template>
        </Card>
      </div>
      <div
        class="
          col-12
          md:col-6
          lg:col-3
          shadow-9
          p-1
          scalein
          animation-duration-500 animation-iteration-1
          border-round
        "
      >
        <Card style="height: 550px" class="bg-indigo-800">
          <template #header>
            <img
              alt="user header"
              src="@/assets/chat-app.jpg"
              style="height: 200px"
              class="p-3"
            />
          </template>
          <template #title>
            <div class="overflow-hidden" style="height: 100px">
              Chat App made with Django Channels(web scoket) and Vue js.
            </div>
          </template>
          <template #content>
            <div class="overflow-hidden" style="height: 100px">
              Chat Application built with Django inbuilt channeles( web dockets)
              and Vuejs. Group messaging and individual messaging features.
              built on personal intrest.
            </div>
          </template>
          <template #footer>
            <Button
              icon="pi pi-github"
              type="button"
              label="Github"
              badge="18"
              onclick="location.href='https://github.com/ManojDjs/django-rest-api-vue-chat-application'"
            ></Button>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTogthub(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style scoped>
</style>