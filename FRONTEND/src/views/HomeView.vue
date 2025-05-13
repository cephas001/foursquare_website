<template>
  <HeroSection
  >
    <template #text>
      <div :class="$classStore.heroClass" class="bg-[url('src/assets/images/Locator.jpg')]">
        <h1 class="font-extrabold tracking-wide absolute z-10 flex flex-col"><span class="font-winky font-light text-2xl tracking-widest">WELCOME</span>FOURSQUARE GOSPEL <br> CHURCH IKATE</h1>
      </div>
    </template>
  </HeroSection>

  <section
    class="p-10 flex flex-col lg:items-center md:items-center justify-center md:flex-row lg:flex-row"
  >
    <div class="text-4xl lg:text-6xl lg:mr-4 md:mr-3" v-bind="getAOSAttributes()">
      <h1 class="font-winky font-extrabold italic">
        join us for church <br />
        this Sunday!
      </h1>
    </div>

    <div class="text-xl mt-2 lg:text-3xl lg:ml-4 md:ml-3 md:mt-0" v-bind="getAOSAttributes({ delay: 300 })">
      <h1 class="mb-1">
        Service starts 7:30am <br />
        every Sunday
      </h1>
      <div class="flex flex-col md:flex-row gap-2 mt-4">
        <Button text="Plan your visit" link="/contact" classList="text-white" />
        <NonRouteButton text="Join Online" 
          classList="text-black border-2 border-black bg-white" 
          :iconClass="['fas', 'video']" 
          @click="redirectNewTab(youtubeURL)" 
        />        
      </div>
    </div>
  </section>

  <section
    class="bg-black text-white py-20 px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 text-md md:text-lg md:place-items-center md:gap-4"
  >
    <div v-bind="getAOSAttributes({ type: 'fade' })">
      <Media imageSrc="src/assets/images/DSC_0192.jpg" classList="rounded-md" />
    </div>
    <div class="mt-4" v-bind="getAOSAttributes({ delay: 300 })">
      <p class="text-gray-400">welcome</p>
      <h1 class="my-3 text-3xl font-bold">This is Citadel of Praise</h1>
      <p class="mb-2">
        At FGC Ikate we believe in Jesus as our Saviour, Healer, Baptizer with the Holy Ghost and our Soon Coming King. We want our church to be a place of discipleship, serve the local community and the world creating impact
        through the name of Jesus Christ.
      </p>
      <p class="mb-4">
        Located in Ikate, Lekki, Lagos, we are made up of a diverse group
        of individuals and families from all walks of life. Together, we make up
        a church family that longs to become more like Jesus.
      </p>
      <Button 
        text="About Us" 
        classList="text-black bg-white" 
        link="/about" 
        v-bind="getAOSAttributes({ type: 'fade-down', delay: 300 })" 
      />       
    </div>
  </section>

  <section class="text-black py-15 px-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-md md:text-lg place-items-center lg:px-20">
    <div>
      <div class="mb-2" v-bind="getAOSAttributes()">
        <p class="text-gray-500">Watch</p>
        <h1 class="my-3 text-4xl font-bold">
          now you can watch anytime, anywhere.
        </h1>
        <p class="text-lg">
          Relevant, engaging messages that will encourage you wherever you are.
          Catch up on our previous sermons, or watch us live online at 7:30am!
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-2" v-bind="getAOSAttributes({ delay: 300 })">
        <NonRouteButton text="Previous messages" classList="tracking-wider bg-black text-white" @click="redirectNewTab(youtubeURL)"/>
        <NonRouteButton text="Watch on-demand" classList="bg-white text-black font-semibold border-2 border-black" @click="redirectNewTab(youtubeURL)" />
      </div>
    </div>
    <div v-bind="getAOSAttributes({ type: 'fade' })" class="mt-4 md:mt-0">
      <Media videoSrc="src/assets/videos/2661_milkyway_coll_night_skies_time-lapse_SaintBarthelemy2720p5000br.mp4" classList="rounded-md" />
    </div>
  </section>

  <p class="px-10 pt-10 pb-5 mb-[-2px] bg-black text-gray-400 text-center">
    our activities
  </p>
  <Splide
    class="px-10 pb-10 bg-black flex justify-center lg:px-20"
    :options="{
      type: 'loop',
      perPage: 3,
      rewind: true,
      autoplay: false,
      gap: '.5rem',
      pauseOnHover: false,
      breakpoints: {
        1024: { perPage: 3 },
        768: { perPage: 2 },
        600: { perPage: 1 },
      },
    }"
    :tag="'section'"
    aria-label="My Favorite Images"
  >
    <SplideSlide v-for="(activity, index) in activities" :key="activity.id">
      <Card
        :Id="activity.id"
        :Day="activity.Day"
        :Activity="activity.Activity"
        :Time="activity.Time"
        :ImageURL="activity.Image"
        :LiveLink="`/meeting/${activity.id}`"
        :Description="activity.Description"
      />
    </SplideSlide>
  </Splide>

  <section
    class="text-black py-15 px-10 grid grid-cols-1 md:grid-cols-2 text-md md:text-lg md:place-items-center md:gap-4 lg:px-20"
  >
    <div v-bind="getAOSAttributes({ type: 'fade' })">
      <Media imageSrc="src/assets/images/DSC_0192.jpg" classList="rounded-md" />
    </div>
    <div class="mt-4" v-bind="getAOSAttributes({ delay: 300 })">
      <p class="text-gray-500">Events</p>
      <h1 class="mt-3 mb-5 text-3xl font-bold">
        here's what's happening next at <br> FGC Ikate
      </h1>
      <Button text="Upcoming Events" link="/" classList="text-white tracking-wider" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

import { getAOSAttributes } from "../utils/animation.js";
import { redirectNewTab } from "../utils/windows.js";

import { useActivityStore } from "../store/activityStore";
const activityStore = useActivityStore();

const activities = activityStore.activities;

const youtubeURL = import.meta.env.VITE_YOUTUBE_URL;
</script>
