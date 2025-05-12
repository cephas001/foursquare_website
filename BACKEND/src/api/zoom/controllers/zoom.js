module.exports = {
    async getSignature(ctx) {
        try {
            const { meetingNumber, role } = ctx.request.body;
            
            // Call the service to generate the Zoom SDK signature
            const signature = await strapi.service('api::zoom.zoom').generateSignature(meetingNumber, role);

            // Respond to the client with the generated signature
            ctx.send({ signature })
        } catch(error) {
            ctx.throw(500, "Failed to generate Zoom SDK signature");
        }
    },
    async zoomWebhook(ctx) {
        try {
            const { event, payload } = ctx.request.body;
            const meetingId = payload.object.id;
            console.log(event, payload);

            if (event === "meeting.started") {
                await strapi.service('api::zoom.zoom').updateMeetingStatus(meetingId, true);
            } else if (event === "meeting.ended") {
                await strapi.service('api::zoom.zoom').updateMeetingStatus(meetingId, false);
            }
        
            ctx.send({ success: true, message: "Webhook processed successfully" });
        } catch (error) {
            ctx.send({ error: error.message });
        }
    },
    async getMeetingStatus(ctx) {
        try {
          const { meetingId } = ctx.params;
          const meetingStarted = await strapi.service('api::zoom.zoom').getMeetingStatus(meetingId);
    
          ctx.send({ meetingStarted });
        } catch (error) {
          ctx.send({ error: error.message });
        }
    }
    // async checkMeetingStatus(ctx) {
    //     try {
    //         const { meetingId } = ctx.params;

    //         const data = await strapi.service('api::zoom.zoom').fetchMeetingDetails(meetingId);
            
    //         ctx.send(data);
    //     } catch (error) {
    //         console.log("Zoom API Error", error);
    //         ctx.throw(500, "Failed to fetch meeting details");
    //     }
    // }
};