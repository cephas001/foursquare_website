<template>
  <component :is="layoutComponent" />
</template>

<script setup>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import BlankLayout from "./layouts/BlankLayout.vue";

import { watch, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNavBarStore } from "./store/navBarStore";

import AOS from "aos";
import "aos/dist/aos.css";

const router = useRouter();
const registeredRoutes = router.getRoutes().map((r) => r.path);
const route = useRoute();

const layoutComponent = computed(() => {
  // Checks if a route exists or not and returns BLANK LAYOUT
  if (!registeredRoutes.includes(route.path) && !route.params.id) {
    return BlankLayout;
  }

  // Checks what route a user is and returns BLANK LAYOUT or DEFAULT LAYOUT. (refer to router/index.js)
  return route.path.startsWith("/blank") ? BlankLayout : DefaultLayout;
});

// Closes the Navigation Menu when a user enters a new route
const NavBarStore = useNavBarStore();
watch(route, () => {
  NavBarStore.openMenu = false;
});

// Initializes AOS for animations
onMounted(() => {
  AOS.init();
});
</script>
