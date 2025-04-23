<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNavBarStore } from "./store/navBarStore";

const route = useRoute();
const NavBarStore = useNavBarStore();

watch(route, () => {
  NavBarStore.openMenu = false;
});
</script>
