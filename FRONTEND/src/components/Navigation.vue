<template>
  <nav
    :class="[NavBarStore.fixNav ? '!py-3 lg:!py-10 fixed lg:absolute z-500 bg-black/50 lg:bg-transparent' : '']"
    class="bg-black lg:bg-transparent w-[100%] lg:absolute lg:z-500 top-0 right-0 left-0 flex justify-around px-8 py-7 lg:py-10 items-center"
  >
    <!-- Logo Container -->
    <RouterLink
      :to="'/'"
      class="flex items-center"
      :class="[NavBarStore.fixNav ? 'invisible lg:visible' : '']"
    >
      <img
        src="../assets/images/foursquare-logo.png"
        alt="FOURSQUARE LOGO"
        class="w-[170px]"
      />
      <img src="../assets/images/70b.png" alt="70 Years" class="w-[50px]" />
    </RouterLink>

    <!-- Open Menu Container -->
    <div class="flex items-center lg:hidden" ref="menuButtonRef">
      <FontAwesomeIcon
        :icon="['fas', 'bars']"
        class="text-2xl cursor-pointer text-white"
        @click="NavBarStore.openMenu = true"
      />
    </div>

    <!-- Navigation Links -->
    <ul
      class="flex flex-col fixed z-200 top-0 right-0 h-[100vh] bg-white text-black text-base lg:text-lg w-[290px] pt-20 overflow-y-hidden transition-all duration-500 ease-in-out transform md:flex-col lg:flex-row lg:translate-x-0 lg:h-fit lg:pt-0 lg:bg-transparent lg:w-fit lg:relative lg:justify-around lg:uppercase"
      :class="[NavBarStore.openMenu ? 'translate-x-0' : 'translate-x-[100%]']"
      @click.self="NavBarStore.openMenu = false"
      ref="menuRef"
    >
      <!-- CLOSE ICON -->
      <FontAwesomeIcon
        :icon="['fas', 'xmark']"
        @click="NavBarStore.openMenu = false"
        class="lg:invisible absolute top-7 right-7 text-2xl cursor-pointer"
      />
      <div class="mt-7 lg:hidden"></div>
      <!-- HOME LINK -->
      <NavLink :link="'/'" :linkText="'Home'" />

      <!-- ABOUT LINK -->
      <NavLink :link="'/about'" :linkText="'About'" />
      
      <!-- CONTACT LINK -->
      <NavLink :link="'/contact'" :linkText="'Contact'" />
      
      <!-- EVENTS LINK -->
      <NavLink :link="'/events'" :linkText="'Events'" />

      <!-- MEDIA LINK -->
      <NavLink :link="'/gallery'" :linkText="'Gallery'" />

      <!-- GIVE LINK -->
      <NavLink :link="'/give'" :linkText="'Give'" />

      <div class="lg:hidden flex absolute bottom-12 items-center justify-center text-4xl mb-4 w-full">
        <RouterLink to="/" @click="redirectNewTab(facebookURL)">
          <FontAwesomeIcon :icon="['fab', 'facebook']" class="mr-5 cursor-pointer text-fuchsia-950" />
        </RouterLink>
        <RouterLink to="/" @click="redirectNewTab(instagramURL)">
          <FontAwesomeIcon :icon="['fab', 'instagram']" class="mr-5 cursor-pointer text-fuchsia-950" />
        </RouterLink>
        <RouterLink to="/" @click="redirectNewTab(youtubeURL)">
          <FontAwesomeIcon :icon="['fab', 'youtube']" class="cursor-pointer text-fuchsia-950" />
        </RouterLink>
      </div>
    </ul>
  </nav>
</template>

<script setup>
const facebookURL = import.meta.env.VITE_FACEBOOK_URL;
const youtubeURL = import.meta.env.VITE_YOUTUBE_URL;
const instagramURL = import.meta.env.VITE_INSTAGRAM_URL;

import { useNavBarStore } from "../store/navBarStore";
import { redirectNewTab } from "../utils/windows.js";

const NavBarStore = useNavBarStore();

import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import NavLink from "./NavLink.vue";

const menuRef = ref(null);
const menuButtonRef = ref(null); 

const handleClickOutside = (event) => {
  if (menuRef.value && 
    menuButtonRef.value && !menuRef.value.contains(event.target) &&
    !menuButtonRef.value.contains(event.target)) {
   NavBarStore.openMenu = false; // Close the menu
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

window.addEventListener("scroll", (e) => {
  NavBarStore.openMenu = false;
  if (window.scrollY == 0) {
    NavBarStore.fixNav = false;
  } else {
    NavBarStore.fixNav = true;
  }
});
</script>
