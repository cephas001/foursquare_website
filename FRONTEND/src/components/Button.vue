<template>
  <RouterLink
    :class="`bg-black px-4 py-3 rounded-md text-base cursor-pointer tracking-wide hover:text-purple-500 focus:text-purple-500 uppercase w-[fit-content] ${classList}`"
    :to="link"
    rel="noopener noreferrer"
    :aria-label="`Navigate to ${text} Page`"
    role="link"
  >
    <FontAwesomeIcon :icon="iconClass" v-if="iconClass" />
    {{ text }}
  </RouterLink>
</template>

<script setup>
// This should be used for Router Links that have this particular style.
import { RouterLink } from "vue-router";
const props = defineProps({
  link: {
    type: String
  },
  text: {
    type: String,
    required: true,
  },
  iconClass: {
    type: Array
  },
  classList: {
    type: String, 
    default: ""
  }
});
</script>
