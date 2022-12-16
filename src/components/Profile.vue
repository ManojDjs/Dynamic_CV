<template>
    <div>
      <div
        class="
          grid grid-nogutter
          text-indigo-800
        "
      >
        <div
          class="
          col-12 md:col-6 lg:col-6
            p-6
            text-center
            md:justify-content-end
            justify-content-center
            md:text-right
            
            flex
            align-items-center
            fadeinleft
            animation-duration-1000
          "
        >
          <section>
            <span class="block text-5xl font-bold mb-1 text-indigo-800">{{
              main["Name"]
            }}</span>
            <div class="text-3xl text-yellow-400 font-bold mb-3">
              {{ main["Designation"] }}
            </div>
            <p class="mt-0 mb-2 text-bluegray-900 text-lg line-height-3">{{ main["Quote"] }}</p>
            <Divider> </Divider>
            <div class="template">
            <Button
              class="google p-0"
              aria-label="Google"
              @click="send_email()"
            >
              <i class="pi pi-download px-2"></i>
              <span class="px-3 text-xl">Download CV</span>
            </Button>
            </div>
          </section>
        </div>
        <div
          class="
          col-12 md:col-6 lg:col-6
          align-self-auto
           md:pl-0 md:py-8
           
           md:align-content-start
           md:justify-content-start align-self-center flex align-items-center justify-content-center
            fadeinleft
            animation-duration-1000"
        >
          <img
            :src="main.Source"
            alt="Image"
            class="border-circle shadow-6"
            
            style="width: 70%; height: 70%; display: block;"
          />
          <!-- class="md:m-auto md:max-w-screen border-circle" -->
        </div>
      </div>
    </div>
    
  </template>
    
    <script>
  // @ is an alias to /src
  import { mapState } from "vuex";
  export default {
    name: "HomeView",
    data() {
      return {
        whtsapp_url: "https://wa.me/",
        email_body: "",
        w: window.innerWidth,
      };
    },
  
    computed: {
      ...mapState(["main", "social"]),
    },
    methods: {
      send_whtsapp(number) {
        console.log(this.whtsapp_url);
        window.open(
          this.whtsapp_url + this.social.Whtsapp,
          "_blank",
          "noreferrer"
        );
      },
      send_email() {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            this.social.Email +
            "&su=" +
            this.social.Subject +
            "&body=" +
            this.social.Body
        );
      },
      open_linkedin() {
        window.open(this.social.Linkedin);
      },
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
      var(--indigo-600) 50%,
      var(--indigo-700) 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--indigo-700);
  }
  .template .p-button.google:hover {
    background-position: left bottom;
  }
  .template .p-button.google i {
    background-color: var(--indigo-700);
  }
  .template .p-button.google:focus {
    box-shadow: 0 0 0 1px var(--indigo-400);
  }
  
  
  @media screen and (max-width: 640px) {
    .p-button {
      margin-bottom: 0.5rem;
  
      &:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
      }
    }
  
    .p-buttonset {
      .p-button {
        margin-bottom: 0;
      }
    }
  }
  </style>
    