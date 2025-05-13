<template>
	<section class="p-10 flex flex-col justify-center min-h-[100vh] bg-fuchsia-100" >
        <Media :imageSrc="activity.Image" classList="rounded-md mb-4" alt="Event Image" />
        <div class="text-lg p-1 font-montserrat">
            <h1 class="font-bold">MEETING HAS NOT STARTED</h1>
            <h1 class="mt-2">{{ activity.Activity }}</h1>
            <h1 class="font-semibold">Starts: {{ activity.Start_Time }}</h1>
            <h1 class="font-semibold">Ends: {{ activity.End_Time }}</h1>
            <h1>Every <span class="font-semibold">{{ activity.Day }}</span></h1>
            <div class="flex mt-3 items-center gap-2">
                <FontAwesomeIcon
                    :icon="['fas', 'calendar']"
                />
                Mark your calendar
            </div>
            <div>
                <h1 :class="[moreOptions ? 'border-b-gray-400 border-b-1' : 'border-b-transparent transition-all ease-in-out', 'my-5 flex items-center text-lg pb-2 tracking-widest uppercase cursor-pointer']" @click="moreOptions = !moreOptions">
                <FontAwesomeIcon
                    :icon="['fas', 'caret-right']"
                    :class="[moreOptions ? 'rotate-90' : '', 'cursor-pointer mr-2 text-xl']"
                />
                    More Options 
                </h1>
                <div v-if="moreOptions">
                    <p class="mt-3 mb-2 text-lg">
                        Add Zoom Meeting to calendar
                    </p>
                    <p class="mt-3 mb-2 text-lg">
                        Join on Zoom
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useActivityStore } from "../store/activityStore";
import Navigation from "../components/Navigation.vue";

const route = useRoute();

const activityStore = useActivityStore();
const activities = activityStore.activities;
const activity = ref(activities[route.params.id])

const meetingNumber = ref("8254066675");
const role = ref(0);
const userName = ref("Web User" + Date.now().toString());
const meeting_started = ref(null);

const moreOptions = ref(false);
</script>