<template>
  <div class="bg-indigo-800 p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Want to Hire me?</div>
    <div class="text-500 mb-5">I am looking for new career</div>
    <div class="grid grid-nogutter border-top-1 surface-border pt-2">
      <div class="col-12 md:col-6 p-3">
        <div class="text-500 font-medium mb-2">Name</div>
        <div class="text-900">{{ main.Name }}</div>
      </div>
      <div class="col-12 md:col-6 p-3">
        <div class="text-500 font-medium mb-2">Email</div>
        <div class="text-900">{{ main.Email }}</div>
      </div>
      <div class="col-12 md:col-6 p-3">
        <div class="text-500 font-medium mb-2">Position's Intrested In</div>
        <div class="text-900">{{ main.Position }}</div>
      </div>
      <div class="col-12 md:col-6 p-3">
        <div class="text-500 font-medium mb-2">Salary Expectation</div>
        <div class="text-900">{{ main.Salary }}</div>
      </div>
      <div class="col-12 p-3">
        <div class="text-500 font-medium mb-2">Bio</div>
        <div class="text-900 line-height-3">
          {{ main.Introduction }}
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
          <div class="flex align-items-center text-900">
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
          <div class="flex align-items-center text-900">
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
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["main"]),
  },
};
</script>
