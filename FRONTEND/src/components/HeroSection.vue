<template>
  <section
    :class="`h-[70vh] lg:h-[60vh]  mt-[-2px] relative bg-[url('${backgroundURL}')] bg-cover bg-top lg:bg-center bg-fixed lg:bg-scroll`"
  >
    <div class="relative h-full overflow-hidden">
      <div class="absolute inset-0 -translate-y-0 z-50 md:w-[70%] md:mx-auto">
        <h1
          class="absolute lg:pt-[10%] left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-5xl uppercase font-extrabold tracking-wide font-winky px-5"
        >
          {{ text }}
        </h1>
      </div>
      <div
        class="absolute inset-0 -translate-y-0 z-5 bg-gradient-to-b from-black/50 to-black/30 h-full"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
const check = ""
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
