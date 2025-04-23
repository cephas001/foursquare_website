import { defineStore } from 'pinia';

export const useClassStore = defineStore('classStore', {
  state: () => ({
    class: "absolute lg:pt-[10%] left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-5xl tracking-wide font-winky px-5"
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
