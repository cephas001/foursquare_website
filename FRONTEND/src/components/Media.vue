<template>
    <div class="relative w-full text-black">
        <!-- Actual Lazy-Loaded Image -->
        <img 
            :src="imageSrc" 
            loading="lazy"
            :class="finalClassList"
            @load="isLoaded = true"
            v-if="videoSrc == ''"
            :alt   
        />
        <!-- Lazy-Loaded Video -->
        <video 
            no-controls 
            autoplay
            muted
            loop
            loading="lazy" 
            :class="finalClassList" 
            @canplay="isLoaded = true" 
            v-if="videoSrc !== ''"
        >
            <source :src="videoSrc" type="video/mp4">
        </video>

        <!-- Placeholder Overlay -->
        <Loader :gradient="true" :isLoaded />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Loader from "./Loader.vue";

const isLoaded = ref(false);

const props = defineProps({
    imageSrc: {
        type: String
    },
    classList: {
        type: String,
        default: ""
    },
    alt: {
        type: String
    }, 
    videoSrc: {
        type: String,
        default: ""
    }
});

const finalClassList = () => {
    return `${isLoaded ? 'opacity-100' : 'opacity-0'} ${props.classList} transition-opacity duration-700 object-cover`
} 
</script>
  