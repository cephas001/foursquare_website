<template>
	<div class="max-w-sm border rounded-lg bg-white text-black m-auto h-full">
    <Image :imageSrc="ImageURL" classList="rounded-t-lg" alt="Event Image" />
	  <div class="p-5">
	    <h5 class="mb-2 text-2xl tracking-tight"><span class="font-winky font-bold text-3xl">Join Us</span> <br /><i>for {{ Activity }}</i></h5>
	    <p class="mb-3">Join us {{ Day }}s at {{ Time }} for <i>{{ Activity}}</i>. You could also connect virtually by clicking the link below.</p>
      <div class="flex gap-1">
        <SmallCustomButton link="/meeting" text="Join Live" />
        <SmallCustomButton link="/" text="Learn More" />
      </div>
	  </div>
	</div>
</template>

<script setup>
import SmallCustomButton from "./SmallCustomButton.vue";
import Image from "./Image.vue";

const props = defineProps({
  Id: {
    type: Number,
    required: true,
  },
  ImageURL: {
    type: String,
    required: true,
  },
  Activity: {
    type: String,
    required: true,
  },
  Day: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  LiveLink: {
    type: String,
    required: true,
  },
});
</script>