import { defineStore } from 'pinia';

export const useClassStore = defineStore('classStore', {
  state: () => ({
    heroClass: "lg:pt-[5%] block w-full text-center text-white text-4xl md:text-5xl px-9 bg-black h-full flex items-center justify-center bg-cover bg-top lg:bg-center bg-fixed lg:bg-scroll"
  })
});
