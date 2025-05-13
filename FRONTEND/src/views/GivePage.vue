<template>
  <HeroSection>
    <template #text>
      <div
        :class="$classStore.heroClass"
        class="bg-[url('src/assets/images/Locator.jpg')]"
      >
        <h1 class="font-extrabold tracking-wide absolute z-10 flex flex-col">
          Support Our Ministry
        </h1>
      </div>
    </template>
  </HeroSection>

  <section class="px-10 pt-10 lg:pt-30 md:w-[80%] md:mx-auto">
    <div v-bind="getAOSAttributes({ type: 'fade' })">
      <Media
        imageSrc="src/assets/images/DSC_0192.jpg"
        classList="rounded-md"
        alt="GIVE IMAGE"
      />
    </div>
  </section>

  <section
    class="pt-5 px-10 pb-5 md:w-[80%] md:mx-auto place-items-center gap-5"
  >
    <div v-bind="getAOSAttributes()" class="w-full">
      <h1
        :class="[
          show_text
            ? 'border-b-gray-400 border-b-1'
            : 'border-b-transparent transition-all ease-in-out',
          'my-5 flex items-center text-lg pb-2 uppercase tracking-widest cursor-pointer',
        ]"
        @click="show_text = !show_text"
      >
        <FontAwesomeIcon
          :icon="['fas', 'caret-right']"
          :class="[show_text ? 'rotate-90' : '', 'cursor-pointer mr-2 text-xl']"
        />
        God's Word
      </h1>
      <p class="my-3 flex flex-col font-monteserrat text-lg" v-if="show_text">
        <span class="font-bold tracking-wide uppercase">Luke 6:38 - </span>
        “Give, and it shall be given unto you; good measure, pressed down, and
        shaken together, and running over, shall men give into your bosom. For
        with the same measure that ye mete withal it shall be measured to you
        again.”
      </p>
    </div>
  </section>

  <section class="px-10 pb-10 md:w-[80%] md:mx-auto">
    <p class="text-gray-600">ongoing projects</p>
    <div class="grid grid-cols-1">
      <div
        v-bind="getAOSAttributes()"
        class="w-full"
        v-for="project in projects"
        :key="project.id"
      >
        <h1
          :class="[
            project.show
              ? 'border-b-gray-400 border-b-1'
              : 'border-b-transparent transition-all ease-in-out',
            'my-5 flex items-center text-lg pb-2 uppercase tracking-widest cursor-pointer',
          ]"
          @click="project.show = !project.show"
        >
          <FontAwesomeIcon
            :icon="['fas', 'caret-right']"
            :class="[
              project.show ? 'rotate-90' : '',
              'cursor-pointer mr-2 text-xl',
            ]"
          />
          {{ project.title }}
        </h1>
        <div v-if="project.show">
          <Media
            :imageSrc="project.image"
            classList="rounded-md mt-2"
            alt="PROJECT IMAGE"
          />
          <p class="mt-3 mb-2 flex flex-col font-montesserat text-lg">
            {{ project.description }}
          </p>
          <NonRouteSmallButton text="Give Now" @click="scrollToSection" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="px-10 pb-10 md:w-[80%] md:mx-auto grid grid-cols-1"
    ref="targetSection"
  >
    <!-- PAYMENT OPTIONS -->
    <p class="text-gray-600">channels to give</p>
    <!-- More options would require more columns   -->
    <div v-bind="getAOSAttributes({ delay: 300 })">
      <div
        class="border-1 border-gray-400 relative p-4 mt-3 grid grid-cols-1 gap-5"
      >
        <div class="absolute right-[-25px] top-[-22px]">
          <FontAwesomeIcon
            :icon="['fas', 'credit-card']"
            class="text-5xl text-purple-950"
          />
        </div>
        <h1 class="uppercase font-semibold">Direct Bank Transfer</h1>
        <div>
          <h1 class="text-gray-700 font-semibold">Bank Name:</h1>
          <h2 class="text-gray-700 uppercase">First Bank Of Nigeria</h2>
        </div>
        <div>
          <h1 class="text-gray-700 font-semibold">Account Number:</h1>
          <h2 class="text-gray-700 tracking-wider" ref="accountNumberRef">
            2021432882
            <FontAwesomeIcon
              :class="[copied ? 'text-purple-900' : '']"
              class="ml-1 cursor-pointer"
              :icon="copied ? ['fas', 'check-circle'] : ['fas', 'copy']"
              @click="copyToClipboard"
            />
            <span
              class="text-purple-900 ml-1 font-semibold italic"
              v-if="copied"
              >copied</span
            >
          </h2>
        </div>
        <div>
          <h1 class="text-gray-700 font-semibold">Account Name:</h1>
          <h2 class="uppercase text-gray-700">
            Foursquare Gospel Church Ikate
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { getAOSAttributes } from "../utils/animation.js";

const accountNumberRef = ref(null);
const copied = ref(false);
const show_text = ref(true);
const targetSection = ref(null);

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(accountNumberRef.value.innerText)
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 5000);
    })
    .catch((err) => {
      console.error("Failed to copy text", err);
      copied.value = false;
    });
};

const projects = ref([
  {
    id: 1,
    title: "Church Bus",
    description:
      "Providing safe and reliable transportation for members, especially elderly and youth, ensuring everyone can attend services, events, and outreach programs without difficulty.",
    image: "src/assets/images/DSC_0192.jpg",
    show: false,
  },
  {
    id: 2,
    title: "Community Food Drive",
    description:
      "Helping families in need by supplying groceries and meals. Every donation supports the goal of reducing hunger and showing the love of Christ through tangible care.",
    image: "src/assets/images/DSC_0192.jpg",
    show: false,
  },
  {
    id: 3,
    title: "Church Renovation & Expansion",
    description:
      "Enhancing the worship space with better seating, improved sound systems, and additional rooms for Bible study, youth gatherings, and prayer meetings.",
    image: "src/assets/images/DSC_0192.jpg",
    show: false,
  },
  {
    id: 4,
    title: "Mission Outreach Initiative",
    description:
      "Raising funds to support local and international missions, assisting underprivileged communities, spreading the gospel, and providing essential supplies to those in need.",
    image: "src/assets/images/DSC_0192.jpg",
    show: false,
  },
]);

const scrollToSection = () => {
  targetSection.value?.scrollIntoView({ behavior: "smooth" });
};
</script>
