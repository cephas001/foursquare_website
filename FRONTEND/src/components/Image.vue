<template>
    <div class="relative">
        <!-- Blurred Background Placeholder -->
        <div v-if="!isLoaded" class="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-300 flex space-x-1 items-center justify-center w-full text-black">
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
        <!-- Actual Lazy-Loaded Image -->
        <img 
          v-lazy="imageSrc" 
          :class="[ isLoaded ? 'opacity-100' : 'opacity-0', `${classList} transition-opacity duration-700 object-cover`]"
          @load="isLoaded = true"
          :alt   
        />
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
  