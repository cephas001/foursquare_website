<template>
    <div id="zoomMeeting"></div>
</template>

<script setup>
import { ZoomMtg } from "@zoom/meetingsdk";
import { onMounted, ref } from "vue";
import axios from "axios";

const meetingNumber = ref("8254066675");
const role = ref(0);
const userName = ref("Web Client");

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

const startMeeting = async () => {
   try {
        const signature = await fetchSignature();
        console.log(import.meta.env.VITE_MEETING_PASSWORD);
        
        ZoomMtg.init({
        leaveUrl: '/meeting_thanks',
        success: (success) => {
            ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber.value,
                userName: userName.value,
                sdkKey: import.meta.env.VITE_ZOOM_SDK_KEY,
                userEmail: "",
                passWord: import.meta.env.VITE_MEETING_PASSWORD,
                success: () => {
                    console.log("Zoom meeting joined successfully!");
                },
                error: (err) => {
                    console.error("Error initializing Zoom SDK:", err)
                },
            })
        }
    })
   } catch(error) {
        console.error("Failed to start the Zoom meeting:", error);
   }
}

onMounted(() => {
    startMeeting();
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
}); 
</script>