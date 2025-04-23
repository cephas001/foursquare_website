<template>
  <HeroSection
    backgroundURL="src/assets/images/background.jpg"
  >
    <p :class="$classStore.class" class="font-bold">Faith. Grace. Community. <br> Welcome to FGC Ikate.</p>
  </HeroSection>
  <section class="flex justify-center">
    <Splide
        class="px-10 py-10 md:w-[80%] lg:w-[90%] md:m-auto"
        :options="{
        type: 'loop',
        perPage: 1,
        rewind: true,
        autoplay: true,
        gap: '1rem',
        interval: 3000,
        pauseOnHover: false,
      }"
        :tag="'section'"
        aria-label="My Favorite Images"
    >
      <SplideSlide v-for="(about, index) in aboutInformation" :key="about.id" >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
          <div>
            <img :src="about.imageURL" class="rounded-md" />
          </div>
          <div class="mt-5">
            <h1 class="font-bold text-xl mb-1 uppercase">
              {{ about.title }}
            </h1>
            <p class="mb-2 leading-relaxed">{{ about.body }}</p>
            <div>
              <a :href="about.externalLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                FGC in Nigeria
              </a>  
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup>
import { computed } from "vue";

const aboutInformation = [
  {
    id: 1,
    title: "Our History",
    body: "Foursquare Gospel Church Ikate is a vibrant community of faith rooted in the teachings of Jesus Christ and the principles of the International Church of the Foursquare Gospel. The church traces its origins to the global Foursquare movement, which began in 1923 under the visionary leadership of Aimee Semple McPherson. This movement reached Nigeria in 1955, thanks to the pioneering efforts of Rev. and Mrs. Harold Curtis, who established the foundation for Foursquare's growth across the nation. Located in Ikate, Lagos, our church is dedicated to spreading the message of hope, love, and salvation. Over the years, we have become a spiritual home for individuals and families seeking a deeper connection with God and a supportive community.",
    imageURL: "src/assets/images/DSC_0192.jpg",
    externalLink: "https://foursquare.org.ng/history"
  },
  {
    id: 2,
    title: "Our Doctrine",
    body: "The doctrine of Foursquare Gospel Church Ikate is deeply rooted in the teachings of the Bible and the foundational principles of the International Church of the Foursquare Gospel. The term 'Foursquare' symbolizes balance, stability, and completeness, reflecting the church's commitment to proclaiming Jesus Christ as the Savior, Baptizer with the Holy Spirit, Healer, and Soon-Coming King. These four roles form the cornerstone of the church's doctrine, emphasizing the transformative power of the Gospel in every aspect of life. Guided by Hebrews 13:8, 'Jesus Christ the same yesterday, and today, and forever,' the church remains steadfast in its mission to spread the unchanging truth of God's Word.",
    imageURL: "src/assets/images/DSC_0200.jpg",
    externalLink: "https://foursquare.org.ng/doctrine"
  },
  {
    id: 3,
    title: "Our Belief",
    body: "Foursquare Gospel Church Ikate believes in the unchanging ministry of Jesus Christ and the authority of the Bible as the inspired Word of God. The church upholds 22 tenets of faith, which include salvation through grace, the baptism of the Holy Spirit, divine healing, and the second coming of Christ. These beliefs are not just theological principles but a way of life, encouraging members to live in daily communion with God, serve others, and share the message of hope and redemption. The church's belief system fosters a sense of community, spiritual growth, and a commitment to fulfilling the Great Commission.",
    imageURL: "src/assets/images/Locator.jpg",
    externalLink: "https://foursquare.org.ng/belief"
  },
];
</script>
