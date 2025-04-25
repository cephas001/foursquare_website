<template>
	<section class="p-10 lg:pt-30 lg:w-[60%] md:mx-auto">
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		  <div class="grid gap-4">
		    <div v-for="(src, index) in images" :key="index">
		      <img
		        class="h-auto max-w-full rounded-lg object-cover object-center"
		        :src="src"
		        alt="gallery-photo"
		      />
		    </div>
		  </div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const images = ref([]); // Reactive array to store images

onMounted(async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=UixfauiMKmsLvE0go19DLWlVQmYkHmBpnvZLC9fFg4k');
    images.value = response.data.map((image) => {
    	return image.urls.raw
    })
    console.log(images.value)
  } catch (error) {
    console.error("Error fetching images:", error);
  }
});
</script>