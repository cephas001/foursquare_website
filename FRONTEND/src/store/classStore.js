import { defineStore } from 'pinia';

export const useClassStore = defineStore('classStore', {
  state: () => ({
    class: "lg:pt-[10%] block w-full text-center text-white text-4xl md:text-5xl tracking-wide px-9 bg-black h-full flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 bg-cover bg-top lg:bg-center bg-fixed lg:bg-scroll"
  }),
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  //   decrement() {
  //     this.count--;
  //   }
  // }
});
