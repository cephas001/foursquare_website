<template>
  <HeroSection>
    <template #text>
      <div :class="$classStore.heroClass" class="bg-[url('src/assets/images/Locator.jpg')]">
        <h1 class="font-bold absolute z-10">we can't wait to meet you!</h1>
      </div>
    </template>
  </HeroSection>

  <section class="px-10 pt-10 md:w-[80%] mx-auto">
    <div v-bind="getAOSAttributes()">
      <p class="text-gray-400" >welcome</p>
      <h1 class="text-3xl font-bold lg:text-4xl">we're glad you're here.</h1>
    </div>
    <div v-bind="getAOSAttributes({ delay: 300})">
      <p class="mt-2 lg:text-lg">At Foursquare Gospel Church Ikate, we desire to be a Jesus Church. We live this out in our 4 key vision words, Encounter, Disciple, Serve, and Impact. We would love to see you at one of our 4 identical worship services, Sundays at 8 am, 9:30 am, and 11 am.</p>
      <p class="mt-1 lg:text-lg">FGC Ikate is made up of a diverse group of individuals and families from all walks of life. Together, we make up a church family that longs to become more like Jesus. We walk through life together through small group gatherings we call Small Groups and large gatherings on Sundays and special events.</p>  
    </div>
  </section>

  <section class="px-10 pt-8 md:w-[80%] mx-auto flex flex-col">
    <div class="relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6736781807263!2d3.488098375074313!3d6.435942393555263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5a0c8b8ec71%3A0xe218c513106b3ddf!2sFoursquare%20Gospel%20Church%20Ikate!5e0!3m2!1sen!2sng!4v1745397563386!5m2!1sen!2sng" 
        height="450" 
        style="border:0;" 
        allowfullscreen="true" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" 
        :class="[iframeLoaded ? 'opacity-100' : 'opacity-0', 'w-full']"
        @load="iframeLoaded = true"
      ></iframe>
      <Loader :isLoaded="iframeLoaded" />
    </div>
    <div class="mt-4">
      <p class="text-lg font-bold italic">Our Address</p>
      <address class="text-purple-700 lg:text-lg"><a href="https://maps.app.goo.gl/VGbodYxJ3o6cYx387">4 Kusenla Rd, Ikate Elegushi, Lekki 106104, Lagos</a></address>
    </div>
    <div class="mt-2">
      <p class="text-lg font-bold italic">Call us at</p>
      <a href="tel:+2348112985079" class="text-purple-700 lg:text-lg">+234 811 298 5079</a>
    </div>
    <div class="mt-2">
      <p class="text-lg font-bold italic">Send us a mail</p>
      <a href="mailto:okodughapeter58@gmail.com" class="text-purple-700 lg:text-lg">fgcikate@gmail.com</a>
    </div>
  </section>
 
  <section class="p-10 md:w-[80%] m-auto">
    <p class="text-gray-400 text-center" v-bind="getAOSAttributes()">Let Us Know You're Coming</p>
    <h1 class="mt-1 mb-5 text-center text-3xl lg:text-4xl lg:mb-9 font-bold" v-bind="getAOSAttributes()">we can't wait to meet you! <br> let us know you're coming or reach out to us.</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:items-center">
      <div class="mb-4" v-bind="getAOSAttributes({ type: 'fade', delay: 300})">
        <Media imageSrc="src/assets/images/DSC_0192.jpg" classList="rounded-md" />
      </div>
      <form>
        <div>
          <label>Name</label>
          <div class="my-2">
            <input type="text" class="w-full border-gray-200 border-1 p-2">
            <p class="mt-1 text-sm text-black/70 tracking-wider">First</p>  
          </div>
          <div class="my-2">
            <input type="text" class="w-full border-gray-200 p-2 border-1">
            <p class="mt-1 text-sm text-black/70 tracking-wider">Last</p>  
          </div>
        </div>
        <div class="mt-4">
          <label>Email</label>
          <input type="text" class="mt-2 w-full border-gray-200 p-2 border-1">
        </div>
        <div class="mt-4 flex flex-col">
          <label>Are you visiting or just reaching out?</label>
          <select class="mt-2 border-gray-200 text-sm p-2 border-1" v-model="selected" @change="displayAccordingly">
            <option disabled selected>Select</option>
            <option>Visiting</option>
            <option>Reaching out</option>
          </select>
        </div>
        <div class="mt-4 flex flex-col" v-if="visiting">
          <label>When will you be visiting?</label>
          <input type="date" class="mt-2 text-sm w-fit border-gray-200 p-2 border-1">
        </div>
        <div class="mt-4 flex flex-col" v-if="visiting">
          <label>Will anybody be coming with you?</label>
          <input type="text" class="mt-2 w-full border-gray-200 p-2 border-1">
        </div>
        <div class="mt-4 flex flex-col" v-if="reachingOut">
          <label>Message</label>
          <textarea placeholder="please type your message here..." class="resize-none mt-2 w-full border-gray-200 p-2 border-1 h-[150px]" ></textarea>
        </div>
        <NonRouteSmallButton text="Submit" classList="mt-4" v-bind="getAOSAttributes({ type: 'fade' })" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getAOSAttributes } from "../utils/animation.js";

const iframeLoaded = ref(false);
const selected = ref("");
const visiting = ref(false);
const reachingOut = ref(false);

const displayAccordingly = () => {
  if(selected.value == "Visiting") {
    visiting.value = true;
    reachingOut.value = false;
  } else {
    visiting.value = false;
    reachingOut.value = true;
  }
}
</script>
