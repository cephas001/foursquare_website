<template>
  <div
    class="mb-2 border-b-1 border-purple-500 text-black cursor-pointer w-full relative"
  >
    <div @click="show = !show">
      <h1 class="text-base">
        {{ ResourceTitle }}
        <FontAwesomeIcon class="ml-1" :icon="['fas', 'caret-down']" />
      </h1>
    </div>
  </div>
  <div class="p-3" :class="[show ? 'block' : 'hidden']">
    <p class="mb-1">
      {{ AdditionalInfo }}
    </p>
    <RouterLink :to="ResourceLink" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
	    {{ text(ResourceTitle) }}
	  </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";

var show = ref(false);

const props = defineProps({
  Id: {
    type: Number,
    required: true,
  },
  ResourceTitle: {
    type: String,
    required: true,
  },
  AdditionalInfo: {
    type: String,
    required: true,
  },
  ResourceLink: {
    type: String,
    required: true,
  },
});

const linkTitle = {
  "Give Now": "Give",
  "Contact Us": "Reach Out",
  "Need Prayer": "Pray With Us",
  "Share Testimony": "Testify",
};

const text = (resourceTitle) =>
  computed(() => {
    return linkTitle[resourceTitle];
  });
</script>
