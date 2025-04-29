<template>
    <!-- Blurred Background Placeholder -->
    <div v-if="!isLoaded" class="bg-gradient-to-r from-purple-700 to-purple-300 blur-sm flex items-center justify-center">
        <FontAwesomeIcon
            :icon="['fas', 'circle']"
            class="absolute text-6xl md:text-8xl animate-pulse"
        />
    </div>

    <!-- Actual Lazy-Loaded Image -->
    <img 
      v-lazy="imageSrc" 
      :class="[ isLoaded ? 'opacity-100' : 'opacity-0', `${classList} transition-opacity duration-700 object-cover`]"
      @load="isLoaded = false"
      :alt   
    />
</template>

<script setup>
import { ref } from 'vue';

const isLoaded = ref(false);
const props = defineProps({
    imageSrc: {
        type: String, 
        required: true
    },
    classList: {
        type: String,
        default: ""
    },
    alt: {
        type: String
    }
});
</script>
  