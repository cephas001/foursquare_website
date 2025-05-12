module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/generateSignature',
            handler: 'zoom.getSignature',
            config: {
                policies: [],
                auth: false
            }
        }, 
        {
            method: "GET",
            path: "/meeting-status/:meetingId",
            handler: "zoom.getMeetingStatus",
            config: {
              auth: false,
            },
        },
        {
            method: "POST",
            path: "/zoom-webhook",
            handler: "zoom.zoomWebhook",
            config: {
              auth: false,
            },
          },
    ]
}