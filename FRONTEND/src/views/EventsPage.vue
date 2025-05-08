<template>
    <HeroSection
    >
        <template #text>
        <div :class="$classStore.heroClass" class="bg-[url('src/assets/images/Locator.jpg')]">
            <h1 class="font-extrabold tracking-wide absolute z-10 flex flex-col p-5"><span class="font-winky font-light text-xl tracking-widest">EVENTS</span>here's what's happening next at FGC Ikate</h1>
        </div>
        </template>
    </HeroSection>

    <section class="pb-15 px-2 md:px-10 lg:px-30 relative" v-if="event == null">
        <div :class="[fetchedEvents ? 'opacity-100 mt-15 lg:mt-20' : 'opacity-0 h-[100vh]']" class="lg:w-[90%] lg:mx-auto">
            <div class="grid grid-cols-[1fr_2fr] lg:grid-cols-[0.8fr_2fr] gap-5 md:gap-10 items-center p-3 md:p-5 lg:px-7 mb-2 font-montserrat cursor-pointer" v-for="singleEvent in events" :key="singleEvent.id" @click="openEvent(singleEvent.id)">
                <div class="relative">
                    <Media :imageSrc="url + singleEvent.Image.url" :alt="singleEvent.Title + 'Image'" classList="rounded-md" />
                    <span class="bg-black/70 absolute bottom-0 right-0 text-center text-white p-1 text-md md:text-lg uppercase leading-tight flex flex-col rounded-br-md" v-if="fetchedEvents">{{ date(singleEvent.Date, {month: true}) }}<span class="font-semibold">{{ date(singleEvent.Date, {day: true})}}</span></span>
                </div>
                <div>
                    <h1 class="font-semibold text-md md:text-xl md:tracking-wide">{{ singleEvent.Title }}</h1>
                    <h2 class="text-sm md:text-md md:tracking-wide text-gray-700">{{ date(singleEvent.Date) }} from 6:00 - 9:00pm WAT</h2>
                    <p class="hidden mt-2 text-gray-700 md:block">{{ shortenDescription(singleEvent.Description) }}</p>
                </div>
            </div>
        </div>

        <Loader :isLoaded="fetchedEvents" />
    </section>

    <section class="p-10 font-montserrat lg:w-[90%] lg:mx-auto" v-if="event !== null">
        <NonRouteButton text="Back to events" classList="text-black border-2 border-black bg-white mb-4" :iconClass="['fas', 'fa-arrow-left']" @click="closeEvent" />
        <div>
            <Media :imageSrc="url + event.Image.url" :alt="event.Title + 'Image'" classList="rounded-md" />
        </div>
        <div class="mt-4">
            <h1 class="font-semibold text-2xl tracking-wide mb-2">{{ event.Title }}</h1>
            <h2 class="md:tracking-wide flex flex-col text-lg"><span class="font-semibold">Date and Time: </span>{{ date(event.Date) }} from 6:00 - 9:00pm WAT</h2>
            <p class="mt-2 md:block text-xl">{{ event.Description }}</p>
        </div>
    </section>
</template>

<script setup>
import { getAOSAttributes } from '../utils/animation.js';
import { onMounted, ref, computed } from 'vue';
import axios from "axios";
import Loader from "../components/Loader.vue";

const url = import.meta.env.VITE_API_URL; 
const fetchedEvents = ref(false);

const months = [
  null, "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const events = ref([]);
const event = ref(null);

const fetchData = async () => {
    const response = await axios.get(`${url}/api/events?populate=*`);
    const data = await response.data;
    events.value = data.data;
    fetchedEvents.value = true;
}

const date = (unrefinedDate, obj) => {
    return computed(() => {
        const dateSplitted = unrefinedDate.split('-');
        
        if(obj?.month) {
            return months[parseInt(dateSplitted[1], 10)]
        } 

        if(obj?.day) {
            return dateSplitted[2]
        }

        return months[parseInt(dateSplitted[1], 10)] + ' ' + dateSplitted[2] + ', ' + dateSplitted[0];
    })
}
    
const shortenDescription = (unrefinedDescription) => {
    return computed(() => {
        return unrefinedDescription.split(".")[0] + "...";
    });
}

const openEvent = (id) => {
    event.value = events.value.filter((e) => {
        return e.id == id;
    })[0];
}

const closeEvent = () => {
    event.value = null;
}
onMounted(() => {
    fetchData();
})
</script>