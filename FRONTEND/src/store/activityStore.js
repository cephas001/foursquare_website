import { defineStore } from 'pinia';

export const useActivityStore = defineStore('activityStore', {
  state: () => ({
    activities: [
        {
            id: 1,
            Activity: "Prayer Meeting",
            Image: "/src/assets/images/DSC_0192.jpg",
            Description: "Thursdays at 7 PM, experience the power of collective prayer. Bring your burdens, lift your voices, and stand together in faith as we seek God's presence. No prayer is too small or too big—let's come before the Lord and see Him move!", 
            Start_Time: "6:00pm", 
            End_Time: "9:00pm", 
            Day: "Thursday"
        },
        {
            id: 2,
            Activity: "Bible Study",
            Image: "/src/assets/images/DSC_0192.jpg",
            Description: "Wednesdays at 7 PM, dive deeper into God's Word at FGC Ikate! Engage in enriching discussions, discover fresh insights, and strengthen your faith in a welcoming atmosphere. Join us and let Scripture transform your life!",
            Start_Time: "7:00pm",
            End_Time: "12:00pm", 
            Day: "Wednesday"
        },
        {
            id: 3,
            Activity: "Young People Pray",
            Image: "/src/assets/images/DSC_0192.jpg",
            Description: "Fridays at 6 PM, a gathering where young hearts ignite in passionate prayer! Join us as we lift our voices in worship, seek God's guidance, and strengthen each other in faith. Come and be part of a movement of prayer, purpose, and power!",
            Start_Time: "8:00pm",
            End_Time: "10:00pm", 
            Day: "Friday"
        },
        {
            id: 4,
            Activity: "Worship Service",
            Image: "/src/assets/images/DSC_0192.jpg",
            Description: "Sundays at 10 AM, encounter God in a vibrant atmosphere of praise and worship. With uplifting music, inspiring messages, and a strong community, this is a time to refuel your spirit and celebrate His goodness! You are always welcome here!",
            Start_Time: "9:00pm", 
            End_Time: "11:00pm", 
            Day: "Sunday"
        },
    ]
  })
});
