<template>
  <HeroSection
    backgroundURL="src/assets/images/background.jpg"
  >
    <p :class="$classStore.class" class="">Faith. Grace. Community. <br> Welcome to FGC Ikate.</p>
  </HeroSection>
  
  <section class="p-10">
    <p class="text-gray-400 mb-1 md:text-center">Welcome to FGC Ikate</p>
    <iframe class="w-full md:w-[70%] md:mx-auto" height="315" src="https://www.youtube.com/embed/tSmxgEHAIZY?si=_Qgztf-UXHVXC5h1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>

  <section class="px-10 pb-10 md:w-[80%] md:mx-auto">
    <div class="text-center">
      <p class="text-gray-500">our beliefs</p>
      <h1 class="text-3xl font-bold lg:text-4xl">what we believe serves as the foundation of our faith.</h1>
    </div>
    <div class="mt-7 flex flex-col md:flex-row md:items-center gap-5">
      <div class="mb-5 md:w-[50%]">
        <div v-for="(aboutPart, index) in aboutInformation" :key="aboutPart.id" >
          <h1 :class="[aboutPart.show ? 'border-b-gray-400 border-b-1' : 'border-b-transparent transition-all ease-in-out', 'my-5 flex items-center text-lg pb-2 uppercase tracking-widest cursor-pointer']" @click="aboutPart.show = !aboutPart.show">
            <FontAwesomeIcon
              :icon="['fas', 'caret-right']"
              class="cursor-pointer mr-2 text-xl"
            />
            {{ aboutPart.title }}
          </h1>
          <p class="my-3 flex flex-col" v-if="aboutPart.show">
            {{ aboutPart.body }}
            <a :href="aboutPart.externalLink" target="_blank" rel="noopener noreferrer" class="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 mt-1">
                Learn More
              </a> 
          </p>
        </div>
      </div>
      <div class="md:w-[50%]"><img src="../assets/images/DSC_0192.jpg" class="rounded-md" /></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const aboutInformation = ref([
  {
    id: 1,
    title: "Our Tenets of Faith",
    body: "The 22 Tenets of Faith of The Foursquare Church outline core Christian beliefs, emphasizing the authority of the Bible, salvation through Jesus Christ, the power of the Holy Spirit, divine healing, and the promise of Christ’s return. These tenets serve as a foundation for faith, guiding believers in worship, service, and spiritual growth.",
    externalLink: "https://foursquare.org.ng/belief",
    show: false
  },
  {
    id: 2,
    title: "Our History",
    body: "Foursquare Gospel Church Ikate is a vibrant community of faith rooted in the teachings of Jesus Christ and the principles of the International Church of the Foursquare Gospel. The church traces its origins to the global Foursquare movement, which began in 1923 under the visionary leadership of Aimee Semple McPherson. This movement reached Nigeria in 1955, thanks to the pioneering efforts of Rev. and Mrs. Harold Curtis, who established the foundation for Foursquare's growth across the nation. Located in Ikate, Lagos, our church is dedicated to spreading the message of hope, love, and salvation. Over the years, we have become a spiritual home for individuals and families seeking a deeper connection with God and a supportive community.",
    externalLink: "https://foursquare.org.ng/history",
    show: false
  },
  {
    id: 3,
    title: "Our Doctrine",
    body: "The doctrine of Foursquare Gospel Church Ikate is deeply rooted in the teachings of the Bible and the foundational principles of the International Church of the Foursquare Gospel. The term 'Foursquare' symbolizes balance, stability, and completeness, reflecting the church's commitment to proclaiming Jesus Christ as the Savior, Baptizer with the Holy Spirit, Healer, and Soon-Coming King. These four roles form the cornerstone of the church's doctrine, emphasizing the transformative power of the Gospel in every aspect of life. Guided by Hebrews 13:8, 'Jesus Christ the same yesterday, and today, and forever,' the church remains steadfast in its mission to spread the unchanging truth of God's Word.",
    externalLink: "https://foursquare.org.ng/doctrine",
    show: false
  },
]);
</script>
