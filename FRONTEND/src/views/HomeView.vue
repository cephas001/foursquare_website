<template>
  <HeroSection
    text="Foursquare Gospel Church Ikate"
    backgroundURL="src/assets/images/background.jpg"
  />

  <section
    class="p-10 flex flex-col lg:items-center md:items-center justify-center md:flex-row lg:flex-row"
  >
    <div class="text-4xl lg:text-6xl lg:mr-4 md:mr-3">
      <h1 class="font-winky font-extrabold italic">
        join us for church <br />
        this Sunday!
      </h1>
    </div>

    <div class="text-xl mt-2 lg:text-3xl lg:ml-4 md:ml-3 md:mt-0">
      <h1 class="mb-1">
        Service starts 7:30am <br />
        every Sunday
      </h1>
      <div class="flex flex-col md:flex-row mt-4">
        <CustomButton text="Plan your visit" link="/" />
        <CustomButton text="Join Online" color="black" background="white" :hasIcon="true" :iconClass="['fas', 'video']" link="/" />        
      </div>
    </div>
  </section>

  <section
    class="bg-black text-white pt-20 px-10 pb-10 grid grid-cols-1 md:grid-cols-2 text-md md:text-lg md:place-items-center md:gap-4"
  >
    <div>
      <img src="../assets/images/DSC_0192.jpg" class="rounded-md" />
    </div>
    <div class="mt-4">
      <p class="text-gray-400">welcome</p>
      <h1 class="my-3 text-3xl font-bold">this is Citadel of Praise</h1>
      <p class="mb-4">
        We live this out in our 4 key vision words, Encounter, Disciple, Serve,
        and Impact. We want our church to encounter the living God, be a place
        of discipleship, serve the local community and the world creating impact
        through the name of Jesus Christ.
      </p>
      <p class="mb-4">
        FGC Ikate, located in Ikate, Lekki, Lagos, is made up of a diverse group
        of individuals and families from all walks of life. Together, we make up
        a church family that longs to become more like Jesus. We walk through
        life together through Small Groups and large gatherings on Sundays and
        special events.
      </p>
      <CustomButton text="About Us" color="black" background="white" link="/about" />       
    </div>
  </section>

  <!-- <section class="p-10">
    <p class="text-black/80">resources</p>
    <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="(resource, index) in resources" :key="resource.id">
        <Resource
          :Id="resource.id"
          :ResourceTitle="resource.ResourceTitle"
          :AdditionalInfo="resource.AdditionalInfo"
          :ResourceLink="resource.ResourceLink"
        />
      </div>
    </div>
  </section> -->
  <section class="text-black py-15 px-10 grid grid-cols-1 text-md md:text-lg">
    <div class="mb-2 lg:w-1/2 lg:mx-auto">
      <p class="text-gray-500">Watch</p>
      <h1 class="my-3 text-4xl font-bold">
        now you can watch anytime, anywhere.
      </h1>
      <p class="text-lg">
        Relevant, engaging messages that will encourage you wherever you are.
        Catch up on our previous sermons, or watch us live online at 7:30am!
      </p>
    </div>
    <div class="flex flex-col md:flex-row lg:w-1/2 lg:mx-auto">
      <CustomButton text="Previous messages" letterSpacing="wider" link="/" />
      <CustomButton text="Watch on demand" background="white" color="black" bold="semibold" link="/" letterSpacing="wider" />
    </div>
  </section>

  <p class="px-10 pt-10 pb-5 mb-[-2px] bg-black text-gray-400 text-center">
    our activities
  </p>
  <Splide
    class="px-10 pb-10 bg-black flex justify-center"
    :options="{
      type: 'loop',
      perPage: 3,
      rewind: true,
      autoplay: true,
      gap: '1rem',
      interval: 3000,
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
        :Image="activity.Image"
        :LiveLink="activity.LiveLink"
      />
    </SplideSlide>
  </Splide>

  <section
    class="text-black pt-20 px-10 pb-10 grid grid-cols-1 md:grid-cols-2 text-md md:text-lg md:place-items-center md:gap-4"
  >
    <div>
      <img src="../assets/images/DSC_0192.jpg" class="rounded-md" />
    </div>
    <div class="mt-4">
      <p class="text-gray-500">Events</p>
      <h1 class="mt-3 mb-5 text-3xl font-bold">
        here's what's happening next at FGC Ikate
      </h1>
      <CustomButton text="Upcoming Events" link="/" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import HeroSection from "../components/HeroSection.vue";
import Card from "../components/Card.vue";
import Resource from "../components/Resource.vue";
import CustomButton from "../components/CustomButton.vue";

const pictures = [{ src: "src/assets/images/Locator.jpg", alt: "Image 1" }];

const activities = ref([
  {
    id: 1,
    Day: "Monday",
    Activity: "Prayer Meeting",
    Time: "8pm (WAT)",
    LiveLink: "#",
    Image: "src/assets/images/4C4EC43E-64A7-4FB8-8C2D-8C1BC2BE1A65-scaled.jpg",
  },
  {
    id: 2,
    Day: "Wednesday",
    Activity: "Bible Study",
    Time: "6pm (WAT)",
    LiveLink: "#",
    Image: "src/assets/images/DSC_0192.jpg",
  },
  {
    id: 3,
    Day: "Saturday",
    Activity: "Young Poeple Pray",
    Time: "6pm (WAT)",
    LiveLink: "#",
    Image: "src/assets/images/4C4EC43E-64A7-4FB8-8C2D-8C1BC2BE1A65-scaled.jpg",
  },
  {
    id: 4,
    Day: "Sunday",
    Activity: "Worship Service",
    Time: "8am (WAT)",
    LiveLink: "#",
    Image: "src/assets/images/DSC_0060.jpg",
  },
]);

const resources = ref([
  {
    id: 1,
    ResourceTitle: "Give Now",
    AdditionalInfo:
      "Support the missions and outreach of the church through your generous donations.",
    ResourceLink: "/",
    ImageLink: "src/assets/images/give-bird.svg",
  },
  {
    id: 2,
    ResourceTitle: "Contact Us",
    AdditionalInfo:
      "Reach out to us for any inquires, assistance, or more information.",
    ResourceLink: "/",
    ImageLink: "src/assets/images/call-icon.png",
  },
  {
    id: 3,
    ResourceTitle: "Need Prayer",
    AdditionalInfo:
      "Let us lift you up in prayer; share your prayer requests with us.",
    ResourceLink: "/",
    ImageLink: "src/assets/images/prayer-ribbon.svg",
  },
  {
    id: 4,
    ResourceTitle: "Share Testimony",
    AdditionalInfo:
      "Share your testimony and inspire others with your faith journey.",
    ResourceLink: "/",
    ImageLink: "src/assets/images/testimony-hands.svg",
  },
]);

var showDropDown = ref(false);
</script>
