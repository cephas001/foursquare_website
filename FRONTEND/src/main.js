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

import VueLazyload from "vue-lazyload";
import VueSplide from '@splidejs/vue-splide';

import HeroSection from "./components/HeroSection.vue";
import Button from "./components/Button.vue";
import NonRouteButton from "./components/NonRouteButton.vue";
import NonRouteSmallButton from "./components/NonRouteSmallButton.vue";
import SmallButton from "./components/SmallButton.vue";
import Media from "./components/Media.vue";


const pinia = createPinia();
const app = createApp(App);

library.add(fas);
library.add(fab);

app.use(pinia);
app.use(router);
app.use(VueSplide);
app.use(VueLazyload);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("HeroSection", HeroSection);
app.component("Button", Button);
app.component("SmallButton", SmallButton);
app.component("NonRouteButton", NonRouteButton);
app.component("NonRouteSmallButton", NonRouteSmallButton);
app.component("Media", Media);
app.config.globalProperties.$classStore = useClassStore();
app.mount("#app");
