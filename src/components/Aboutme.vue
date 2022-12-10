<template>
  <div class="card">
    <div class="flex flex-wrap justify-content-center">
      <Card
        class="shadow-8 surface-0 justify-content-start"
        style="width: 38rem; height: 35rem; background-color: #fdfefe"
      >
        <template #header>
          <img
            alt="user header"
            src="https://cdn.dribbble.com/users/169251/screenshots/1904492/namecard_face05.gif"
            class="border-circle shadow-5 h-4 w-4"
          />
        </template>
        <template #title> Manoj DJS</template>
        <template #content>
          <div class="card">
            <h5>Vertical</h5>
            <div class="field">
              <label for="firstname1">Firstname</label>
              <input
                id="firstname1"
                type="text"
                class="
                  text-base text-color
                  surface-overlay
                  p-2
                  border-1 border-solid
                  surface-border
                  border-round
                  appearance-none
                  outline-none
                  focus:border-primary
                  w-full
                "
              />
            </div>
            <div class="field">
              <label for="lastname1">Lastname</label>
              <input
                id="lastname1"
                type="text"
                class="
                  text-base text-color
                  surface-overlay
                  p-2
                  border-1 border-solid
                  surface-border
                  border-round
                  appearance-none
                  outline-none
                  focus:border-primary
                  w-full
                "
              />
            </div>
          </div>
        </template>
        <template #footer>
          <div class="template">
            <Button class="google p-0" aria-label="Google">
              <i class="pi pi-phone px-2"></i>
              <span class="px-3">Contact Me</span>
            </Button>
            <Button class="youtube p-0" aria-label="Youtube">
              <i class="pi pi-print px-2"></i>
              <span class="px-3">Download CV</span>
            </Button>
            <!-- <Button class="vimeo p-0" aria-label="Vimeo">
              <i class="pi pi-vimeo px-2"></i>
              <span class="px-3">Vimeo</span>
            </Button> -->
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
    <script>
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
    var(--indigo-600) 50%,
    var(--indigo-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--indigo-700);
}
.template .p-button.facebook:hover {
  background-position: left bottom;
}
.template .p-button.facebook i {
  background-color: var(--indigo-700);
}
.template .p-button.facebook:focus {
  box-shadow: 0 0 0 1px var(--indigo-400);
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
    var(--bluegray-700) 50%,
    var(--bluegray-800) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--bluegray-800);
}
.template .p-button.discord:hover {
  background-position: left bottom;
}
.template .p-button.discord i {
  background-color: var(--bluegray-800);
}
.template .p-button.discord:focus {
  box-shadow: 0 0 0 1px var(--bluegray-500);
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