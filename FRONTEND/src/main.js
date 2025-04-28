import { createApp } from "vue";
import { createPinia } from "pinia";

import { useClassStore } from "./store/classStore";

import "./style.css";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import HeroSection from "./components/HeroSection.vue";
import CustomButton from "./components/CustomButton.vue";
import VueSplide from '@splidejs/vue-splide';

const pinia = createPinia();
const app = createApp(App);

library.add(fas);
library.add(fab);

app.use(pinia);
app.use(router);
app.use(VueSplide);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("HeroSection", HeroSection);
app.component("CustomButton", CustomButton);
app.config.globalProperties.$classStore = useClassStore();
app.mount("#app");
