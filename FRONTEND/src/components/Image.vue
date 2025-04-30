<template>
    <div class="relative w-full text-black">
        <!-- Actual Lazy-Loaded Image -->
        <img 
            :src="imageSrc" 
            loading="lazy"
            :class="[isLoaded ? 'opacity-100' : 'opacity-0', `${classList} transition-opacity duration-700 object-cover`]"
            @load="isLoaded = true"
            :alt   
        />
        <!-- Placeholder Overlay -->
        <div :class="[!isLoaded ? 'opacity-100' : 'opacity-0', 'absolute inset-0 w-full h-full object-cover bg-gradient-to-r from-purple-600 to-purple-300 flex items-center justify-center space-x-1']">
            <FontAwesomeIcon
                :icon="['fas', 'circle']"
                class="bounce-fast bounce-delay-1 text-xl"
            />
            <FontAwesomeIcon
                :icon="['fas', 'circle']"
                class="bounce-fast bounce-delay-2 text-xl"
            />
            <FontAwesomeIcon
                :icon="['fas', 'circle']"
                class="bounce-fast bounce-delay-3 text-xl"
            />
        </div>
    </div>
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
  