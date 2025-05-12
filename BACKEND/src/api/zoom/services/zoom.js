const jwt = require('jsonwebtoken');

module.exports = {
    async generateSignature(meetingNumber, role) {
        const sdkKey = process.env.ZOOM_SDK_KEY;
        const sdkSecret = process.env.ZOOM_SDK_SECRET;

        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 90 * 60;

        const payload = {
            sdkKey, 
            mn: meetingNumber,
            role,
            iat,
            exp,
            tokenExp: exp
        }

        // Generate the JWT signature 
        const signature = jwt.sign(payload, sdkSecret, { algorithm: "HS256"});
        return signature;
    }, 
    async updateMeetingStatus(meetingId, status) {
        try {
          return await strapi.entityService.update("api::zoom.zoom", meetingId, {
            data: { meetingStarted: status }
          });
        } catch (error) {
          strapi.log.error("Failed to update meeting status:", error);
          throw error;
        }
    },
    async getMeetingStatus(meetingId) {
        try {
          const meeting = await strapi.entityService.findOne("api::zoom.zoom", meetingId);
          return meeting ? meeting.meetingStarted : false;
        } catch (error) {
          strapi.log.error("Failed to fetch meeting status:", error);
          throw error;
        }
    }
    // async fetchMeetingDetails(meetingId) {
    //     const firstResponse = await fetch("https://zoom.us/oauth/token", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             Authorization: "Basic " + btoa(`${process.env.ZOOM_CLIENT_OAUTH_ID}:${process.env.ZOOM_CLIENT_OAUTH_SECRET}`)
    //           },
    //         body: new URLSearchParams({ grant_type: "c;oemt_credentials" })
    //     });
    //     const firstData = await firstResponse.json();
    //     console.log(firstData);
    //     const token = firstData.access_token;
    //     console.log(token);
    //     if(token) {
    //         const response = await fetch(`https://api.zoom.us/v2/meetings/${meetingId}`, {
    //             method: "GET", 
    //             headers: {
    //                 Authorization: `Bearer ${token}`, 
    //                 "Content-Type": "application/json"
    //             }
    //         });
    
    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //     }
    // }
};