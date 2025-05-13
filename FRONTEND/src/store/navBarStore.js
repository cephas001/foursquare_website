import { defineStore } from 'pinia';

export const useNavBarStore = defineStore('NavBarStore', {
  state: () => ({
    openMenu: false,
    fixNav: false
  }),
});
