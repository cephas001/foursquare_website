<template>
	<section class="pt-20 lg:pt-40 px-10 pb-20 md:pb-10 min-h-[1vh] text-center md:w-[70%] md:mx-auto">
		<h1 class="text-4xl tracking-wider leading-[1.5] lg:text-5xl mb-2 flex flex-col">
			<FontAwesomeIcon
				class="text-purple-700 text-5xl animate-bounce"
        		:icon="['fas', 'exclamation-triangle']"
      		/>
			Sorry, the page you are looking for does not exist.
		</h1>
		<SmallButton text="HOME" link="/" />
	</section>
</template>

<script setup>
	import SmallButton from "../components/SmallButton.vue";
</script>