<template>
	<div class="max-w-sm border rounded-lg bg-white text-black m-auto">
	    <a href="#">
	        <img class="rounded-t-lg" :src="Image" alt="Event Image" />
	    </a>
	    <div class="p-5">
	        <a href="#">
	            <h5 class="mb-2 text-2xl tracking-tight"><span class="font-winky font-bold text-3xl">Join Us</span> <br /> <span class="italic">for {{ Activity }}</span></h5>
	        </a>
	        <p class="mb-3 font-normal text-black-700">Join us every {{ Day }} at {{ Time }} for our {{ Activity}}. You could also connect virtually by clicking the link below.</p>
	        <a :href="LiveLink" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
	            Watch Live
	        </a>
	    </div>
	</div>
</template>

<script setup>
const props = defineProps({
  Id: {
    type: Number,
    required: true,
  },
  Image: {
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