import {  createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ContactPage from "../views/ContactPage.vue";
import BeliefPage from "../views/about/BeliefPage.vue";
import DoctrinePage from "../views/about/DoctrinePage.vue";
import HistoryPage from "../views/about/HistoryPage.vue";
import LeadershipPage from "../views/about/LeadershipPage.vue";
import ImageGallery from "../views/media/ImageGallery.vue";
import InstagramFeed from "../views/media/InstagramFeed.vue";
import GivePage from "../views/GivePage.vue";
import AboutPage from "../views/about/AboutPage.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contact", component: ContactPage },
  { path: "/leadership", component: LeadershipPage },
  { path: "/gallery", component: ImageGallery },
  { path: "/igfeed", component: InstagramFeed },
  { path: "/give", component: GivePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
