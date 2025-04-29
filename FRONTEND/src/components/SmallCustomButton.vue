<template>
    <RouterLink :to="link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">
	    {{ text }}
	</RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  link: {
    type: String
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
