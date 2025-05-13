<template>
  <HeroSection>
    <template #text>
      <div
        :class="$classStore.heroClass"
        class="bg-[url('src/assets/images/Locator.jpg')]"
      >
        <h1 class="font-extrabold tracking-wide absolute z-10 flex flex-col">
          <span class="font-winky font-light text-5xl tracking-widest"
            >MEETINGS</span
          >
        </h1>
      </div>
    </template>
  </HeroSection>

  <section
    class="p-10 flex flex-col justify-center md:w-[80%] md:mx-auto min-h-[100vh]"
  >
    <Media
      :imageSrc="activity.Image"
      classList="rounded-md mb-4"
      alt="Event Image"
    />
    <div class="text-lg p-1 font-montserrat">
      <h1 class="font-bold">MEETING HAS NOT STARTED</h1>
      <h1 class="mt-2">{{ activity.Activity }}</h1>
      <h1 class="font-semibold">Starts: {{ activity.Start_Time }}</h1>
      <h1 class="font-semibold">Ends: {{ activity.End_Time }}</h1>
      <h1>
        Every <span class="font-semibold">{{ activity.Day }}</span>
      </h1>
      <div>
        <h1
          :class="[
            moreOptions
              ? 'border-b-gray-400 border-b-1'
              : 'border-b-transparent transition-all ease-in-out',
            'my-5 flex items-center text-lg pb-2 tracking-widest uppercase cursor-pointer',
          ]"
          @click="moreOptions = !moreOptions"
        >
          <FontAwesomeIcon
            :icon="['fas', 'caret-right']"
            :class="[
              moreOptions ? 'rotate-90' : '',
              'cursor-pointer mr-2 text-xl',
            ]"
          />
          More Options
        </h1>
        <div v-if="moreOptions">
          <p class="mt-3 mb-2 text-lg">
            <FontAwesomeIcon :icon="['fas', 'calendar']" /> Add Zoom Meeting to
            calendar
          </p>
          <p class="mt-3 mb-2 text-lg">Join on Zoom</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useActivityStore } from "../store/activityStore";

const route = useRoute();

const activityStore = useActivityStore();
const activities = activityStore.activities;
const activity = ref(activities[route.params.id]);

const meetingNumber = ref("8254066675");
const role = ref(0);
const userName = ref("Web User" + Date.now().toString());
const meeting_started = ref(null);

const moreOptions = ref(false);

const API_KEY = "YOUR_API_KEY";
const PLAYLIST_ID = "YOUR_PLAYLIST_ID";

async function getLiveVideosFromPlaylist(playlistId) {
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`;
  const playlistResponse = await fetch(playlistUrl);
  const playlistData = await playlistResponse.json();

  const liveVideos = [];

  for (const item of playlistData.items) {
    const videoId = item.snippet.resourceId.videoId;
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoId}&key=${API_KEY}`;
    const videoResponse = await fetch(videoUrl);
    const videoData = await videoResponse.json();

    if (videoData.items && videoData.items.length > 0) {
      if (videoData.items[0].snippet.liveBroadcastContent === "live") {
        liveVideos.push(videoId);
      }
    }
  }

  return liveVideos;
}

// Example usage
// getLiveVideosFromPlaylist(PLAYLIST_ID).then(liveVideos => {
//     console.log("Live Broadcasts:", liveVideos);
// });
</script>
