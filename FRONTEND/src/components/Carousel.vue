<template>
    <div class="relative h-full overflow-hidden ">
      <!-- Item 1 -->
      <!-- duration-700 ease-in-out-->
      <div
        v-for="(picture, index) in pictures"
        :key="index"
        :class="index === currentPicture ? 'z-30' : 'z-0'"
        class="absolute inset-0 -translate-y-0"
      >
        <img
          :alt="picture.alt"
          :src="picture.src"
          class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 filter brightness-50 h-full lg:h-auto"
        />
        <h1 class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl lg:text-5xl uppercase font-extrabold tracking-wide font-winky" v-if="index == 0">Foursquare <br> Gospel Church Ikate</h1>
        <div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
          <h1 class="text-center text-white text-4xl lg:text-5xl tracking-wide font-extrabold" v-if="index == 1">This is the <br> Citadel of Praise
         </h1>
          <button class="text-base lg:text-lg px-4 py-2 mt-2 bg-black text-white rounded-md font-bold w-[fit-content] mx-auto cursor-pointer hover:text-purple-900 hover:bg-white" v-if="index == 1">
          About Us
        </button>
        </div>
      </div>
    </div

    <!-- Slider indicators -->
    <div
      v-if="!noIndicators"
      class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
    >
      <button
        v-for="(picture, index) in pictures"
        :key="index"
        :aria-label="'Slide ' + index"
        :class="index === currentPicture ? 'bg-white' : 'bg-white/50'"
        aria-current="false"
        class="size-3 rounded-full bg-white cursor-pointer"
        type="button"
        @click.prevent="slideTo(index)"
      />
    </div>
    <!-- Slider controls -->
    <template v-if="!noControls">
      <button
        class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none hidden lg:block"
        data-carousel-prev
        type="button"
        @click.prevent="previousPicture"
      >
        <span
          class="inline-flex size-8 items-center justify-center rounded-full sm:size-10"
        >
          <svg
            class="size-5 text-white sm:size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button
        class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none hidden lg:block"
        data-carousel-next
        type="button"
        @click.prevent="nextPicture"
      >
        <span
          class="inline-flex size-8 items-center justify-center rounded-full sm:size-10"
        >
          <svg
            class="size-5 text-white sm:size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </template>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  pictures: {
    type: Array,
    default() {
      return [];
    },
  },
  noIndicators: {
    type: Boolean,
    default: false,
  },
  noControls: {
    type: Boolean,
    default: false,
  },
  slide: {
    type: Boolean,
    default: false,
  },
  slideInterval: {
    type: Number,
    default: 3000,
  },
  animation: {
    type: Boolean,
    default: false,
  },
});

const currentPicture = ref(0);
const direction = ref("");
const interval = ref();

const automaticSlide = () => {
  interval.value = setInterval(function () {
    nextPicture();
  }, props.slideInterval);
};

const resetInterval = () => {
  clearInterval(interval.value);
  automaticSlide();
};

const slideTo = (index) => {
  currentPicture.value = index;
  resetInterval();
};

const nextPicture = () => {
  if (currentPicture.value !== props.pictures.length - 1) {
    currentPicture.value++;
  } else {
    currentPicture.value = 0;
  }
  direction.value = "right";
  resetInterval();
};

const previousPicture = () => {
  if (currentPicture.value !== 0) {
    currentPicture.value--;
  } else {
    currentPicture.value = props.pictures.length - 1;
  }
  direction.value = "left";
  resetInterval();
};

onMounted(() => {
  if (props.slide) {
    automaticSlide();
  }
});
</script>
