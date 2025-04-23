# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

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