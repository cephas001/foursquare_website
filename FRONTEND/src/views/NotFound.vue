<template>
	<section class="pt-20 lg:pt-40 px-10 pb-20 md:pb-10 min-h-[1vh] text-center md:w-[70%] md:mx-auto">
		<h1 class="text-4xl tracking-wider leading-[1.5] lg:text-5xl mb-2 flex flex-col">
			<FontAwesomeIcon
				class="text-purple-700 text-5xl animate-bounce"
        		:icon="['fas', 'exclamation-triangle']"

      		/>
			Sorry, the page you are looking for does not exist.
		</h1>
		<RouterLink to="/" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
	        HOME
	    </RouterLink>
	</section>
</template>

<script setup>
	import CustomButton from "../components/CustomButton.vue";
	import { RouterLink } from "vue-router";
</script>