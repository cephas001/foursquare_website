<template>
    <div :class="[!isLoaded ? 'opacity-100' : 'opacity-0', `flex space-x-1 items-center justify-center object-cover text-black h-full w-full absolute inset-0 bg-gray-200 ${classList} pointer-events-none`]">
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
</template>

<script setup>

const props = defineProps({
    isLoaded: {
        type: Boolean, 
        default: false
    }, 
    gradient: {
        type: Boolean, 
    }, 
    classList: {
        type: String, 
        default: ""
    }
});
</script>
