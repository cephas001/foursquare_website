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
import EventsPage from "../views/EventsPage.vue";

const routes = [
  {
    path: "/", 
    children: [
      { path: "", component: HomeView },
      { path: "contact", component: ContactPage },
      { path: "leadership", component: LeadershipPage },
      { path: "events", component: EventsPage },
      { path: "gallery", component: ImageGallery },
      { path: "give", component: GivePage },
      { path: "about", component: AboutPage },
      { path: "meeting/:id", component: ZoomMeetings },
    ]
  }, 
  {
    path: "/blank", 
    children: [
      { path: "meeting_thanks", component: MeetingThanks },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    children: [
      { path: "", component: NotFound } // Not Found page inside BlankLayout
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});
