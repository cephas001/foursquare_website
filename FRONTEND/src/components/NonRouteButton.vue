<template>
    <button
      :class="`px-4 py-3 rounded-md text-base cursor-pointer hover:text-purple-500 focus:text-purple-500 uppercase w-[fit-content] tracking-wide ${classList}`"
      rel="noopener noreferrer"
      :aria-label="`Navigate to ${text} Page`"
      role="link"
    >
      <FontAwesomeIcon :icon="iconClass" v-if="iconClass" />
      {{ text }}
    </button>
  </template>
  
<script setup>
// This should used for Links that have this particular style and do not go anywhere.
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
  