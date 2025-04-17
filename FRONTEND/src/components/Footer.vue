<template>
    <footer class="bg-black border-t-4 border-t-white text-white w-full pt-20 px-10 pb-10 font-mono">
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-flow-dense">
        <img src="../assets/images/footer-logo.png" alt="FOOTER LOGO" class="w-[200px] mb-3" />
  
        <h1 class="text-md mb-4">
          Foursquare Gospel Church Ikate <br />
          Citadel of Praise
        </h1>
        <h1 class="text-md mb-4">
          4, Kusenla Road, <br />
          By Conoil Filling Station,<br />
          Ikate, Lekki, <br />
          Lagos State, Nigeria. <br />
          08112985079 <br />
          07042090002 (SMS & WhatsApp Only)
        </h1>
        <div class="flex items-center text-3xl mb-4">
          <FontAwesomeIcon :icon="['fab', 'facebook']" class="mr-4 cursor-pointer hover:text-purple-900" />
          <FontAwesomeIcon :icon="['fab', 'instagram']" class="mr-4 cursor-pointer hover:text-purple-900" />
          <FontAwesomeIcon :icon="['fab', 'square-x-twitter']" class="mr-4 cursor-pointer hover:text-purple-900" />
          <FontAwesomeIcon :icon="['fab', 'youtube']" class="cursor-pointer hover:text-purple-900" />
        </div>
  
        <div class="quick-links">
          <h2 class="mb-1 font-bold text-purple-900 uppercase">Quick Links</h2>
          <ul>
            <li class="mb-1">
              <RouterLink to="/" class="hover:text-purple-900">Home</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/" class="hover:text-purple-900">Contact Us</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/">Events</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/">Gallery</RouterLink>
            </li>
            <li class="mb-1">
              <RouterLink to="/">Give</RouterLink>
            </li>
          </ul>
        </div>
      </div>
       
      <p class="mt-2 text-center">
          &copy; All right reserved 2025 <br />
          <span class="text-purple-900"
            >Foursquare Gospel Church Ikate</span
          >
        </p>
    </footer>
</template>
  
<script setup>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { RouterLink } from "vue-router";
</script>
  