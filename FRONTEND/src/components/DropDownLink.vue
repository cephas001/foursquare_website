<template>
  <li
    class="pt-5 lg:pt-2 pb-2 border-b border-b-gray-400 lg:border-b-black lg:last:border-0 flex justify-between items-center cursor-pointer"
  >
    <RouterLink :to="link" class="pl-4 lg:pl-2 lg:pr-2 lg:text-black lg:text-base hover:text-purple-900 transition-colors">{{ linkText }}</RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
});
</script>
