const fetch = require("node-fetch");

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
    async checkMeetingStatus(ctx) {
        try {
            const { meetingId } = ctx.params;

            const data = await strapi.service('api::zoom.zoom').fetchMeetingDetails(meetingId);
            
            ctx.send(data);
        } catch (error) {
            console.log("Zoom API Error", error);
            ctx.throw(500, "Failed to fetch meeting details");
        }
    }
};