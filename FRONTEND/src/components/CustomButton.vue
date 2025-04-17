<template>
  <RouterLink
    :class="[color !== 'white' ? 'border-2 border-black rounded-md' : '', `px-4 py-3 bg-${background} text-${color} rounded-md text-base cursor-pointer tracking-${letterSpacing} hover:text-purple-500 uppercase mr-2 w-[fit-content] mb-2 md:mb-0 font-${bold}`]"
    :to="link"
    @click="link == '#' && doNothing"
  >
    <FontAwesomeIcon :icon="iconClass" v-if="hasIcon" />
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
  hasIcon: {    
    type: Boolean,
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
