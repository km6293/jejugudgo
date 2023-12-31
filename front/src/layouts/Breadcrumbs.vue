<template>
  <nav aria-label="breadcrumb">
    <ol class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb me-sm-6">
      <li class="text-sm breadcrumb-item" :class="color">
        <a :class="color" class="opacity-8" href="#">Home</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="color"
        aria-current="page"
      >
        {{ currentPage }}
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "breadcrumbs",
  props: {
    currentPage: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "text-dark",
    },
  },
});
</script>
