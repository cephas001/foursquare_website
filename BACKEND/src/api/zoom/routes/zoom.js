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
        }
    ]
}