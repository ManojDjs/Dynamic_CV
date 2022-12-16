<template>
  <div>
    <div
      class="
        grid grid-nogutter
        surface-section
        text-indigo-800
        shadow-2
        border-round-xl
      "
    >
      <div
        class="
          col-12
          md:col-6
          p-6
          text-center
          md:text-left
          flex
          align-items-center
          fadeinleft
          animation-duration-1000
        "
      >
        <section>
          <span class="block text-5xl font-bold mb-1 text-orange-600">{{
            main["Name"]
          }}</span>
          <div class="text-6xl text-primary font-bold mb-3">
            {{ main["Designation"] }}
          </div>
          <p class="mt-0 mb-4 text-900 line-height-3">{{ main["Quote"] }}</p>
          <Divider> </Divider>

          <div class="template">
            <Button
              class="google p-0"
              aria-label="Google"
              @click="send_email()"
            >
              <i class="pi pi-google px-2"></i>
              <span class="px-3">Google</span>
            </Button>
            <Button
              class="facebook p-0"
              aria-label="Facebook"
              @click="send_whtsapp()"
            >
              <i class="pi pi-whatsapp px-2"></i>
              <span class="px-3">Whtsapp</span>
            </Button>
            <Button
              class="discord p-0"
              aria-label="Discord"
              @click="open_linkedin()"
            >
              <i class="pi pi-linkedin px-2"></i>
              <span class="px-3">Linkedin</span>
            </Button>
            <Divider></Divider>
            <div class="template">
              <label
                for="addess"
                class="block col text-53xl text-900 font-bold mr-2 p-0"
                ><i class="pi pi-map text-blue-500 text-xl"></i>
                {{ main["Address"] }}</label
              >
            </div>
            <Divider></Divider>
          </div>
        </section>
      </div>
      <div
        class="col-12 md:col-6 overflow-hidden opacity-100 border-round"
        v-show="w > 800"
      >
        <img
          src="@/assets/land.gif"
          alt="Image"
          class="md:ml-auto block md:h-auto"
          style="clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0 100%)"
        />
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
    var(--purple-600) 50%,
    var(--purple-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--purple-700);
}
.template .p-button.google:hover {
  background-position: left bottom;
}
.template .p-button.google i {
  background-color: var(--purple-700);
}
.template .p-button.google:focus {
  box-shadow: 0 0 0 1px var(--purple-400);
}
.template .p-button.youtube {
  background: linear-gradient(
    to left,
    var(--pink-600) 50%,
    var(--pink-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--pink-700);
}
.template .p-button.youtube:hover {
  background-position: left bottom;
}
.template .p-button.youtube i {
  background-color: var(--pink-700);
}
.template .p-button.youtube:focus {
  box-shadow: 0 0 0 1px var(--pink-400);
}
.template .p-button.vimeo {
  background: linear-gradient(
    to left,
    var(--green-200) 50%,
    var(--green-300) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #000;
  border-color: var(--green-300);
}
.template .p-button.vimeo:hover {
  background-position: left bottom;
}
.template .p-button.vimeo i {
  background-color: var(--green-300);
}
.template .p-button.vimeo:focus {
  box-shadow: 0 0 0 1px var(--green-400);
}
.template .p-button.facebook {
  background: linear-gradient(
    to left,
    var(--green-600) 50%,
    var(--green-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: rgb(255, 255, 255);
  border-color: var(--green-700);
}
.template .p-button.facebook:hover {
  background-position: left bottom;
}
.template .p-button.facebook i {
  background-color: var(--green-800);
}
.template .p-button.facebook:focus {
  box-shadow: 0 0 0 1px var(--green-800);
}
.template .p-button.twitter {
  background: linear-gradient(
    to left,
    var(--blue-400) 50%,
    var(--blue-500) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--blue-500);
}
.template .p-button.twitter:hover {
  background-position: left bottom;
}
.template .p-button.twitter i {
  background-color: var(--blue-500);
}
.template .p-button.twitter:focus {
  box-shadow: 0 0 0 1px var(--blue-200);
}
.template .p-button.slack {
  background: linear-gradient(
    to left,
    var(--orange-400) 50%,
    var(--orange-500) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--orange-500);
}
.template .p-button.slack:hover {
  background-position: left bottom;
}
.template .p-button.slack i {
  background-color: var(--orange-500);
}
.template .p-button.slack:focus {
  box-shadow: 0 0 0 1px var(--orange-200);
}
.template .p-button.amazon {
  background: linear-gradient(
    to left,
    var(--yellow-400) 50%,
    var(--yellow-500) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #000;
  border-color: var(--yellow-500);
}
.template .p-button.amazon:hover {
  background-position: left bottom;
}
.template .p-button.amazon i {
  background-color: var(--yellow-500);
}
.template .p-button.amazon:focus {
  box-shadow: 0 0 0 1px var(--yellow-200);
}
.template .p-button.discord {
  background: linear-gradient(
    to left,
    var(--blue-700) 50%,
    var(--blue-800) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--blue-800);
}
.template .p-button.discord:hover {
  background-position: left bottom;
}
.template .p-button.discord i {
  background-color: var(--blue-800);
}
.template .p-button.discord:focus {
  box-shadow: 0 0 0 1px var(--blue-500);
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
  