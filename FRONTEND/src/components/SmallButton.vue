<template>
    <RouterLink :to="link" :class="`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-purple-600 hover:bg-purple-700 focus:ring-purple-800 ${classList}`">
      <FontAwesomeIcon :icon="iconClass" v-if="iconClass" />
	    {{ text }}
	</RouterLink>
</template>

<script setup>

import { RouterLink } from 'vue-router';

// This component is used for Links that have this particular style and do not go anywhere.
const props = defineProps({
  link: {
    type: String, 
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  classList: {
    type: String, 
    default: ""
  },
  iconClass: {
    type: Array
  },
});
</script>
