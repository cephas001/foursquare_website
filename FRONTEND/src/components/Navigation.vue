<template>
  <nav
    :class="[fixNav ? '!py-3 lg:!py-5 fixed z-500 bg-black/50 lg:bg-black' : '']"
    class="bg-black text-lg w-[100%] lg:fixed lg:z-500 text-white top-0 right-0 left-0 flex justify-around px-8 py-7 lg:py-5 items-center"
  >
    <!-- Logo Container -->
    <RouterLink
      :to="'/'"
      class="flex items-center"
      :class="[fixNav ? 'invisible lg:visible' : '']"
    >
      <img
        src="../assets/images/foursquare-logo.png"
        alt="FOURSQUARE LOGO"
        class="w-[170px]"
      />
      <img src="../assets/images/70b.png" alt="70 Years" class="w-[50px]" />
    </RouterLink>

    <!-- Open Menu Container -->
    <div class="flex items-center lg:hidden">
      <FontAwesomeIcon
        :icon="['fas', 'bars']"
        class="text-2xl cursor-pointer"
        @click="openMenu = true"
      />
    </div>

    <!-- Navigation Links -->
    <ul
      class="flex flex-col fixed z-200 top-0 right-0 h-[100vh] bg-white text-black text-base lg:text-lg w-[290px] pt-20 overflow-y-scroll lg:overflow-y-hidden transition-all duration-500 ease-in-out transform md:flex-col lg:flex-row lg:translate-x-0 lg:h-fit lg:pt-0 lg:bg-transparent lg:text-white lg:w-fit lg:relative lg:justify-around"
      :class="[openMenu ? 'translate-x-0' : 'translate-x-[100%]']"
    >
      <!-- CLOSE ICON -->
      <FontAwesomeIcon
        :icon="['fas', 'xmark']"
        @click="openMenu = false"
        class="lg:invisible absolute top-7 right-7 text-2xl cursor-pointer"
      />
      <div class="mt-7 lg:hidden"></div>
      <!-- HOME LINK -->
      <NavLink :link="'/'" :linkText="'Home'" />

      <!-- ABOUT LINK -->
      <NavLink :link="'/about'" :linkText="'About'" :showIcon="true" />

      <!-- MEDIA LINK -->
      <NavLink :link="'/'" :linkText="'Media'" :showIcon="true" />

      <!-- CONTACT LINK -->
      <NavLink :link="'/contact'" :linkText="'Contact'" />

      <!-- GIVE LINK -->
      <NavLink :link="'/give'" :linkText="'Give'" />
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import NavLink from "./NavLink.vue";
var openMenu = ref(false);
var fixNav = ref(false);

window.addEventListener("scroll", (e) => {
  openMenu.value = false;
  if (window.scrollY == 0) {
    fixNav.value = false;
  } else {
    fixNav.value = true;
  }
});
</script>
