import {  createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ContactPage from "../views/ContactPage.vue";
import LeadershipPage from "../views/LeadershipPage.vue";
import ImageGallery from "../views/ImageGallery.vue";
import GivePage from "../views/GivePage.vue";
import NotFound from "../views/NotFound.vue"
import AboutPage from "../views/AboutPage.vue";
import ZoomMeetings from "../views/ZoomMeetings.vue";
import MeetingThanks from "../views/MeetingThanks.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contact", component: ContactPage },
  { path: "/leadership", component: LeadershipPage },
  { path: "/gallery", component: ImageGallery },
  { path: "/give", component: GivePage },
  { path: "/about", component: AboutPage },
  { path: "/meeting", component: ZoomMeetings },
  { path: "/meeting_thanks", component: MeetingThanks},
  { path: "/:pathMatch(.*)*", component: NotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
