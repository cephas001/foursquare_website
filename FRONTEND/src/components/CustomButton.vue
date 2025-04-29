<template>
  <RouterLink
    :class="[color !== 'white' ? 'border-2 border-black rounded-md' : '', `px-4 py-3 bg-${background} text-${color} rounded-md text-base cursor-pointer tracking-${letterSpacing} hover:text-purple-500 focus:text-purple-500 uppercase w-[fit-content] font-${bold}`]"
    :to="link"
    @click="link == '#' && doNothing"
    rel="noopener noreferrer"
    :aria-label="`Navigate to ${text} Page`"
    role="link"
  >
    <FontAwesomeIcon :icon="iconClass" v-if="iconClass" />
    {{ text }}
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  link: {
    type: String
  },
  background: {
    type: String,
    default: "black",
  },
  color: {
    type: String,
    default: "white",
  },
  text: {
    type: String,
    required: true,
  },
  iconClass: {
    type: Array
  }, 
  letterSpacing: {
    type: String,
    default: "wide"
  },  
  bold: {
    type: String, 
    default: "normal"
  }
});

const doNothing = (e) => {
  e.preventDefault();
}
</script>
