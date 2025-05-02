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
        <CustomButton text="Plan your visit" link="/contact" />
        <CustomButton text="Join Online" color="black" background="white" :hasIcon="true" :iconClass="['fas', 'video']" link="#" @click="redirectYoutube" />        
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
      <CustomButton text="About Us" color="black" background="white" link="/about" v-bind="getAOSAttributes({ type: 'fade-down', delay: 300 })"/>       
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
        <CustomButton text="Previous messages" letterSpacing="wider" link="#" @click="redirectYoutube"/>
        <CustomButton text="Watch on-demand" background="white" color="black" bold="semibold" link="#" letterSpacing="wider" @click="redirectYoutube" />
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
        :LiveLink="'/meeting'"
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
      <CustomButton text="Upcoming Events" link="/" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import CustomButton from "../components/CustomButton.vue";

import { getAOSAttributes } from "../utils/animation.js";

const redirectYoutube = () => {
  window.open("https://www.youtube.com/@fgcikate/videos", "_blank");
}

const activities = ref([
  {
    id: 1,
    Activity: "Prayer Meeting",
    Image: "src/assets/images/DSC_0192.jpg",
    Description: "Thursdays at 7 PM, experience the power of collective prayer. Bring your burdens, lift your voices, and stand together in faith as we seek God's presence. No prayer is too small or too big—let's come before the Lord and see Him move!"
  },
  {
    id: 2,
    Activity: "Bible Study",
    Image: "src/assets/images/DSC_0192.jpg",
    Description: "Wednesdays at 7 PM, dive deeper into God's Word at FGC Ikate! Engage in enriching discussions, discover fresh insights, and strengthen your faith in a welcoming atmosphere. Join us and let Scripture transform your life!"
  },
  {
    id: 3,
    Activity: "Young People Pray",
    Image: "src/assets/images/DSC_0192.jpg",
    Description: "Fridays at 6 PM, a gathering where young hearts ignite in passionate prayer! Join us as we lift our voices in worship, seek God's guidance, and strengthen each other in faith. Come and be part of a movement of prayer, purpose, and power!"
  },
  {
    id: 4,
    Activity: "Worship Service",
    Image: "src/assets/images/DSC_0192.jpg",
    Description: "Sundays at 10 AM, encounter God in a vibrant atmosphere of praise and worship. With uplifting music, inspiring messages, and a strong community, this is a time to refuel your spirit and celebrate His goodness! You are always welcome here!"
  },
]);
</script>
