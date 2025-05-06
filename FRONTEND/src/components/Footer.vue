<template>
    <footer class="bg-black text-white w-full pt-15 pb-5 px-10 font-mono">
      <div class="flex flex-col md:flex-row md:w-fit md:mx-auto md:justify-around lg:justify-evenly gap-4 md:gap-6 md:items-center">
        <div class="lg:mr-5">
          <img src="../assets/images/footer-logo.png" alt="FOOTER LOGO" class="w-[180px] mb-4" />
          <h1 class="mb-4">
            Foursquare Gospel Church Ikate <br />
            Citadel of Praise
          </h1>
          <a href="https://maps.app.goo.gl/VGbodYxJ3o6cYx387" class="cursor-pointer hover:text-purple-700">
            4 Kusenla Rd, Ikate Elegushi, <br /> Lekki 106104, Lagos
          </a>
          <h1 class="mt-4">
            <a href="tel:+2348112985079" class="hover:text-purple-700 focus:text-purple-700 cursor-pointer">Tel: +234 811 298 5079</a><br />
          </h1>
        </div>

        <div class="lg:ml-5">
          <div class="mt-4 flex flex-row gap-5 text-3xl">
            <FontAwesomeIcon :icon="['fab', 'facebook']" class="cursor-pointer hover:text-purple-900" @click="redirectNewTab(facebookURL)" />
            <FontAwesomeIcon :icon="['fab', 'instagram']" class="cursor-pointer hover:text-purple-900" @click="redirectNewTab(instagramURL)" />
            <FontAwesomeIcon :icon="['fab', 'youtube']" class="cursor-pointer hover:text-purple-900" @click="redirectNewTab(youtubeURL)" />
          </div>
          <div class="mt-4">
              <h2 class="mb-1 font-bold text-purple-900 uppercase">Quick Links</h2>
              <ul class="md:grid md:grid-cols-2">
                <li class="mb-1">
                  <RouterLink to="/" class="hover:text-purple-900">Home</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/contact" class="hover:text-purple-900">Contact Us</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/" class="hover:text-purple-900">Events</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/gallery" class="hover:text-purple-900">Gallery</RouterLink>
                </li>
                <li class="mb-1">
                  <RouterLink to="/give" class="hover:text-purple-900">Give</RouterLink>
                </li>
              </ul>
            </div>
        </div>
      </div>

      <p class="mt-9 text-center">
          &copy; All right reserved 2025 <br />
          <span class="text-purple-900"
            >Foursquare Gospel Church Ikate</span
          >
        </p>
    </footer>
</template>
  
<script setup>
  import { RouterLink } from "vue-router";
  import { redirectNewTab } from "../utils/windows.js";

  const facebookURL = import.meta.env.VITE_FACEBOOK_URL;
  const youtubeURL = import.meta.env.VITE_YOUTUBE_URL;
  const instagramURL = import.meta.env.VITE_INSTAGRAM_URL;

</script>
  