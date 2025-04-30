<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useNavBarStore } from "./store/navBarStore";
import AOS from 'aos';
import 'aos/dist/aos.css';

const route = useRoute();
const NavBarStore = useNavBarStore();

watch(route, () => {
  NavBarStore.openMenu = false;
});


onMounted(() => {
  AOS.init();
});
</script>
