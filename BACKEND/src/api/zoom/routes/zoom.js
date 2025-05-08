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
            method: 'GET',
            path: '/getMeetingDetails/:id',
            handler: 'zoom.checkMeetingStatus',
            config: {
                policies: [],
                auth: false
            }
        }, 
    ]
}