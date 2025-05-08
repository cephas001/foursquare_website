<template>
	<section class="text-center flex flex-col items-center justify-center h-[100vh] bg-purple-500 px-5">
		<h1 class="font-bold text-9xl">
			404
		</h1>
		<h1 class="text-xl lg:text-2xl">
			The page you are looking for does not exist. <br> Find your way back.
		</h1>
		<Button text="COME BACK HOME" classList="text-purple-100 mt-2 lg:text-xl" link="/" />
	</section> 
</template>

<script setup>
	import Button from "../components/Button.vue";
</script>