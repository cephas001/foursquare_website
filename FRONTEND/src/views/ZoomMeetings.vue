<template>
    <div id="zoomMeeting"></div>
</template>

<script setup>
import { ZoomMtg } from "@zoom/meetingsdk";
import { onMounted, ref } from "vue";
import axios from "axios";

const meetingNumber = ref("8254066675");
const role = ref(0);
const userName = ref("Web User" + Date.now().toString());

const fetchMeetingStatus = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/meeting-status/${meetingNumber.value}`);
        const data = await response.data;

        console.log(data);
    } catch(error) {
        console.error("Error getting details: ", error);
    }
}
const fetchSignature = async () => {
    try {   
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/generateSignature`, {
            meetingNumber: meetingNumber.value,
            role: role.value
        });
        return response.data.signature;
    } catch (error) {
        console.error("Error fetching signature: ", error);
        throw error;
    }
}

const joinMeeting = async () => {
   try {
        ZoomMtg.init({
        leaveUrl: '/meeting_thanks',
        isSupportAV: true,
        success: async (success) => {
            console.log("Zoom SDK Initialized!");
            console.log(success);
            ZoomMtg.join({
                signature: await fetchSignature(),
                meetingNumber: meetingNumber.value,
                userName: userName.value,
                sdkKey: import.meta.env.VITE_ZOOM_SDK_KEY,
                passWord: import.meta.env.VITE_MEETING_PASSWORD,
                success: (message) => {
                    console.log(message);
                    console.log("Zoom meeting joined successfully!");
                },
                error: (error) => {
                    if (error.message.includes("Meeting has not started")) {
                    console.log("The host hasn't started the meeting yet.");
                    } else if (error.message.includes("Meeting has ended")) {
                    console.log("The meeting has already ended.");
                    } else {
                    console.log("Unexpected error:", error.message);
                    }
                    console.error("Error initializing Zoom SDK:", error)
                },
            })
        }
    })
   } catch(error) {
        console.error("Failed to start the Zoom meeting:", error);
   }
}

onMounted(() => {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // joinMeeting();
    fetchMeetingStatus();
}); 
</script>