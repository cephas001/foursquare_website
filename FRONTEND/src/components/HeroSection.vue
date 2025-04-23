<template>
  <section
    :class="`h-[70vh] lg:h-[60vh]  mt-[-2px] relative bg-[url('src/assets/images/Locator.jpg')] bg-cover bg-top lg:bg-center bg-fixed lg:bg-scroll`"
  >
    <div class="relative h-full overflow-hidden">
      <div class="absolute inset-0 -translate-y-0 z-50 md:w-[70%] md:mx-auto">
        <slot></slot>
      </div>
      <div
        class="absolute inset-0 -translate-y-0 z-5 bg-gradient-to-b from-black/50 to-black/30 h-full"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: true,
  },
  backgroundURL: {
    type: String,
  },
});
</script>
