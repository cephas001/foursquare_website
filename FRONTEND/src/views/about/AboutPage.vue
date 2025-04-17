<template>
  <HeroSection
    text="ABOUT US"
    backgroundURL="src/assets/images/background.jpg"
  />
  <!-- Buttons for remaining links -->
  <section
    class="min-h-[50vh] flex justify-center flex-col"
    id="buttons_section"
  >
    <div class="grid grid-col-1 py-4 gap-2 place-items-center">
      <CustomButton text="Our History" link="#" @click="scrollToSection(0)" />
      <CustomButton
        text="Our Doctrine"
        color="black"
        background="white"
        link="#"
        @click="scrollToSection(1)"
      />
      <CustomButton text="Our Belief" link="#" @click="scrollToSection(2)" />
      <CustomButton
        text="Our Leadership"
        color="black"
        background="white"
        link="#"
      />
    </div>
  </section>
  <section
    class="bg-black text-white relative px-10 pt-10 pb-10 min-h-screen grid grid-cols-1 md:grid-cols-2 md:place-items-center md:gap-4"
    id="targetSection"
  >
    <!-- GO BACK UP -->
    <div class="fixed bottom-10 right-4 bg-purple-600 rounded-xl p-2" @click="scrollToButtonSection">
      <FontAwesomeIcon
        :icon="['fas', 'arrow-up']"
        class="text-black text-2xl"
      />
    </div>
    <!-- TEXT AND IMAGE -->
    <div>
      <img :src="displayedInformation.imageURL" class="rounded-md" />
    </div>
    <div class="mt-5">
      <h1 class="font-bold text-xl mb-1 uppercase">
        {{ displayedInformation.title }}
      </h1>
      <p class="mb-2 leading-relaxed">{{ displayedInformation.body }}</p>
    </div>
  </section>
</template>

<script setup>
import HeroSection from "../../components/HeroSection.vue";
import CustomButton from "../../components/CustomButton.vue";
import { ref, computed } from "vue";

var currentIndex = ref(0);

const aboutInformation = [
  {
    id: 1,
    title: "History",
    body: "Foursquare Gospel Church Ikate is a vibrant community of faith rooted in the teachings of Jesus Christ and the principles of the International Church of the Foursquare Gospel. The church traces its origins to the global Foursquare movement, which began in 1923 under the visionary leadership of Aimee Semple McPherson. This movement reached Nigeria in 1955, thanks to the pioneering efforts of Rev. and Mrs. Harold Curtis, who established the foundation for Foursquare's growth across the nation. Located in Ikate, Lagos, our church is dedicated to spreading the message of hope, love, and salvation. Over the years, we have become a spiritual home for individuals and families seeking a deeper connection with God and a supportive community. Through worship, outreach, and discipleship, Foursquare Gospel Church Ikate continues to impact lives and foster growth in faith.",
    imageURL: "src/assets/images/DSC_0192.jpg",
  },
  {
    id: 2,
    title: "Doctrine",
    body: "The doctrine of Foursquare Gospel Church Ikate is deeply rooted in the teachings of the Bible and the foundational principles of the International Church of the Foursquare Gospel. The term 'Foursquare' symbolizes balance, stability, and completeness, reflecting the church's commitment to proclaiming Jesus Christ as the Savior, Baptizer with the Holy Spirit, Healer, and Soon-Coming King. These four roles form the cornerstone of the church's doctrine, emphasizing the transformative power of the Gospel in every aspect of life. Guided by Hebrews 13:8, 'Jesus Christ the same yesterday, and today, and forever,' the church remains steadfast in its mission to spread the unchanging truth of God's Word.",
    imageURL: "src/assets/images/DSC_0200.jpg",
  },
  {
    id: 3,
    title: "Belief",
    body: "Foursquare Gospel Church Ikate believes in the unchanging ministry of Jesus Christ and the authority of the Bible as the inspired Word of God. The church upholds 22 tenets of faith, which include salvation through grace, the baptism of the Holy Spirit, divine healing, and the second coming of Christ. These beliefs are not just theological principles but a way of life, encouraging members to live in daily communion with God, serve others, and share the message of hope and redemption. The church's belief system fosters a sense of community, spiritual growth, and a commitment to fulfilling the Great Commission.",
    imageURL: "src/assets/images/Locator.jpg",
  },
];
var displayedInformation = ref(aboutInformation[0]);

const scrollToSection = (index) => {
  displayedInformation.value = aboutInformation[index];
  const element = document.getElementById("targetSection");
  element.scrollIntoView({ behavior: "smooth" });
};

const scrollToButtonSection = () => {
  const element = document.getElementById("buttons_section");
  element.scrollIntoView({ behavior: "smooth" });
};
</script>
