<template>
  <li
    class="pt-5 lg:pt-0 pb-2 lg:pb-0 pl-2 pr-2 lg:mr-2 flex flex-col items-center cursor-pointer lg:font-light"
  >
    <div class="flex justify-between items-center border-b border-b-gray-400 lg:border-0 w-full">
      <RouterLink :to="link" :class="[route.path == link ? 'text-purple-500' : '', 'pl-4 pb-1 lg:pl-0 lg:pb-0 transition-colors mr-1 hover:text-purple-500 focus:text-purple-500']">{{ linkText }}</RouterLink>
      <!-- SHOW PLUS ICON OR CARET ICON IF THERE IS A DROPDOWN -->
      <FontAwesomeIcon
        class="lg:!hidden mr-4 mb-1"
        v-if="showIcon"
        :icon="!media_clicked ? ['fas', 'plus'] : ['fas', 'minus']"
      />
    </div>

    <!-- DISPLAY DROPDOWN IF ANY -->
    <!-- <ol
      v-if="linkText == ''"
      class="bg-gray-100 lg:bg-white transition-all duration-500 ease-in-out lg:absolute left-0 right-0 top-7 w-full lg:w-fit lg:rounded-b-sm"
      :class="[media_clicked ? 'block' : 'hidden']"
    >
      <DropDownLink :link="'/gallery'" :linkText="'Gallery'" />
    </ol> -->
  </li>
</template>

<script setup>
// import DropDownLink from "./DropDownLink.vue";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
  showIcon: {
    type: Boolean,
  },
});

const checkAndUpdate = (text) => {
  // DISPLAY DROPDOWN BASED ON LINK CLICKED
  // USE: 
  //   @click="checkAndUpdate(linkText)"
  //   @mouseenter="checkAndUpdate(linkText)"
  //   @mouseleave="checkAndUpdate(linkText)"
};
</script>
